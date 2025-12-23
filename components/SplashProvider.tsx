"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show splash for 1500ms (1.5 seconds) for optimal UX
        // Configurable: Change this value to adjust splash duration
        const SPLASH_DURATION = 1500;

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, SPLASH_DURATION);

        return () => clearTimeout(timer);
    }, []);

    const handleSplashComplete = () => {
        // Small delay to ensure smooth transition
        setTimeout(() => {
            setShowContent(true);
        }, 100);
    };

    return (
        <>
            <SplashScreen isLoading={isLoading} onComplete={handleSplashComplete} />
            {(showContent || !isLoading) && children}
        </>
    );
}
