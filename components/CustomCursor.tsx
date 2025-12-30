"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile - don't show custom cursor on mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Check if hovering over interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isInteractive);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isMobile]);

    // Smooth cursor following with lerp (linear interpolation)
    useEffect(() => {
        if (isMobile) return;

        let animationFrameId: number;

        const updateCursorPosition = () => {
            setCursorPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.15, // Smooth lerp
                y: prev.y + (mousePosition.y - prev.y) * 0.15,
            }));

            animationFrameId = requestAnimationFrame(updateCursorPosition);
        };

        animationFrameId = requestAnimationFrame(updateCursorPosition);

        return () => cancelAnimationFrame(animationFrameId);
    }, [mousePosition, isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="custom-cursor-dot"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isPointer ? '12px' : '8px',
                    height: isPointer ? '12px' : '8px',
                    borderRadius: '50%',
                    backgroundColor: isPointer ? '#2B4593' : '#6172f3',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    transform: `translate(${mousePosition.x - (isPointer ? 6 : 4)}px, ${mousePosition.y - (isPointer ? 6 : 4)}px)`,
                    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Cursor ring - follows with delay */}
            <motion.div
                className="custom-cursor-ring"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isPointer ? '40px' : '32px',
                    height: isPointer ? '40px' : '32px',
                    borderRadius: '50%',
                    border: '2px solid #2B4593',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    opacity: isVisible ? 0.3 : 0,
                    transform: `translate(${cursorPosition.x - (isPointer ? 20 : 16)}px, ${cursorPosition.y - (isPointer ? 20 : 16)}px)`,
                    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.2s ease',
                }}
            />

            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
}
