"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
    isLoading: boolean;
    onComplete: () => void;
}

export default function SplashScreen({ isLoading, onComplete }: SplashScreenProps) {
    return (
        <AnimatePresence mode="wait" onExitComplete={onComplete}>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
                >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Logo Container */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Logo with Scale Animation */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1
                            }}
                            className="flex items-center justify-center"
                        >
                            {/* Qubeso Logo */}
                            <motion.div
                                initial={{ rotate: -5 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="p-6"
                            >
                                <Image
                                    src="/qubeso-logo-transparent.png"
                                    alt="Qubeso Tech Logo"
                                    width={400}
                                    height={133}
                                    className="w-auto h-56"
                                    priority
                                    style={{ mixBlendMode: 'normal' }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Loading Indicator - Modern Spinner */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="relative w-12 h-12"
                        >
                            {/* Outer spinning circle */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-gray-200"
                                style={{ borderTopColor: '#FF6B35' }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            {/* Inner pulsing circle */}
                            <motion.div
                                className="absolute inset-2 rounded-full bg-brand-primary/20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
