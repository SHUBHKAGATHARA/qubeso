"use client";

import { motion, AnimatePresence } from "framer-motion";

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
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-hover overflow-hidden"
                >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                            className="flex items-center gap-4"
                        >
                            {/* Logo Icon */}
                            <motion.div
                                initial={{ rotate: -10 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl"
                            >
                                <span className="text-brand-primary font-bold text-4xl">Q</span>
                            </motion.div>

                            {/* Company Name */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3
                                }}
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    QUBESO TECH
                                </h1>
                            </motion.div>
                        </motion.div>

                        {/* Loading Indicator - Dots Pulse */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="flex items-center gap-2"
                        >
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="w-2.5 h-2.5 bg-white rounded-full"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: index * 0.15,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
