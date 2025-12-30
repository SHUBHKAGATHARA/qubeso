"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    children: string;
    delay?: number;
    className?: string;
    staggerDelay?: number;
    animationType?: "fade-up" | "slide-in" | "scale";
}

export default function TextReveal({
    children,
    delay = 0,
    className = "",
    staggerDelay = 0.03,
    animationType = "fade-up"
}: TextRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const words = children.split(" ");

    const getAnimation = (index: number) => {
        const baseDelay = delay + index * staggerDelay;

        switch (animationType) {
            case "slide-in":
                return {
                    initial: { opacity: 0, x: -20 },
                    animate: isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                    transition: { duration: 0.5, delay: baseDelay, ease: [0.22, 1, 0.36, 1] }
                };
            case "scale":
                return {
                    initial: { opacity: 0, scale: 0.5 },
                    animate: isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
                    transition: { duration: 0.4, delay: baseDelay, ease: "backOut" }
                };
            default: // fade-up
                return {
                    initial: { opacity: 0, y: 20 },
                    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    transition: { duration: 0.6, delay: baseDelay, ease: [0.22, 1, 0.36, 1] }
                };
        }
    };

    return (
        <div ref={ref} className={`text-reveal ${className}`}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    {...getAnimation(index)}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
}
