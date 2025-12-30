"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltDegree?: number;
    glare?: boolean;
}

export default function TiltCard({
    children,
    className = "",
    tiltDegree = 10,
    glare = true
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calculate cursor position relative to card center (0,0 = center)
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        // Calculate rotation angles
        const rotateX = -y * tiltDegree;
        const rotateY = x * tiltDegree;

        // Apply transform
        card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

        // Update glare position if enabled
        if (glare) {
            const glareElement = card.querySelector('.tilt-glare') as HTMLElement;
            if (glareElement) {
                const glareX = (x + 1) * 50; // Convert to percentage
                const glareY = (y + 1) * 50;
                glareElement.style.background = `
          radial-gradient(
            circle at ${glareX}% ${glareY}%,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 50%
          )
        `;
            }
        }
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        const card = cardRef.current;

        // Return to neutral position
        card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;

        // Reset glare
        if (glare) {
            const glareElement = card.querySelector('.tilt-glare') as HTMLElement;
            if (glareElement) {
                glareElement.style.background = 'transparent';
            }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            className={`tilt-card relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
                willChange: "transform"
            }}
        >
            {children}

            {glare && (
                <div
                    className="tilt-glare absolute inset-0 pointer-events-none rounded-inherit"
                    style={{
                        transition: 'background 0.2s ease-out',
                        mixBlendMode: 'overlay',
                    }}
                />
            )}
        </motion.div>
    );
}
