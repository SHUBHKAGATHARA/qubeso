"use client";

import { useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
    children: ReactNode;
    strength?: number; // How strong the magnetic effect is (0-1)
    className?: string;
}

export default function MagneticButton({
    children,
    strength = 0.3,
    className = ""
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate center of button
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from cursor to center
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Calculate distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(rect.width, rect.height);

        // Only apply effect within certain radius
        if (distance < maxDistance * 1.5) {
            // Apply magnetic pull
            const pullX = deltaX * strength;
            const pullY = deltaY * strength;

            gsap.to(button, {
                x: pullX,
                y: pullY,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;

        setIsHovered(false);

        // Return to original position
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)" // Bouncy return
        });
    };

    return (
        <div
            ref={buttonRef}
            className={`magnetic-button inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
}
