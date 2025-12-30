"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleEffectProps {
    color?: string;
    duration?: number;
}

interface Ripple {
    x: number;
    y: number;
    id: number;
}

export function useRipple(color = "rgba(43, 69, 147, 0.3)", duration = 600) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const createRipple = (event: React.MouseEvent<HTMLElement>) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const id = Date.now();

        setRipples(prev => [...prev, { x, y, id }]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== id));
        }, duration);
    };

    const RippleContainer = () => (
        <span className="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none">
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.span
                        key={ripple.id}
                        className="absolute rounded-full"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            backgroundColor: color,
                        }}
                        initial={{ width: 0, height: 0, opacity: 1 }}
                        animate={{
                            width: 300,
                            height: 300,
                            opacity: 0,
                            x: -150,
                            y: -150,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: duration / 1000, ease: "easeOut" }}
                    />
                ))}
            </AnimatePresence>
        </span>
    );

    return { createRipple, RippleContainer };
}

// Standalone component version
export default function RippleEffect({ color, duration }: RippleEffectProps) {
    const { createRipple, RippleContainer } = useRipple(color, duration);

    return {
        createRipple,
        RippleContainer
    };
}
