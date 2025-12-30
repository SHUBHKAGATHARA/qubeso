"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
    const [clicks, setClicks] = useState(0);
    const [gameActive, setGameActive] = useState(false);

    // Easter egg: Click the 404 number 5 times to activate mini game
    useEffect(() => {
        if (clicks >= 5 && !gameActive) {
            setGameActive(true);
        }
    }, [clicks]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-primary via-background-secondary to-background-primary relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-hover rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* 404 Number with Click Easter Egg */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        onClick={() => setClicks(prev => prev + 1)}
                        className="cursor-pointer select-none"
                    >
                        <h1 className="text-[180px] md:text-[250px] font-bold text-brand-primary leading-none mb-4 hover:scale-105 transition-transform">
                            404
                        </h1>
                    </motion.div>

                    {gameActive && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            <p className="text-sm text-brand-primary font-semibold flex items-center justify-center gap-2">
                                <Sparkles className="w-4 h-4 animate-spin" />
                                Secret Easter Egg Unlocked! You found the game!
                            </p>
                        </motion.div>
                    )}

                    {/* Main Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-xl text-text-muted mb-8 max-w-xl mx-auto">
                            Looks like you've ventured into uncharted territory. Don't worry, even the best explorers get lost sometimes!
                        </p>
                    </motion.div>

                    {/* Animated Character/Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <div className="text-8xl mb-4">🧭</div>
                        {!gameActive && (
                            <p className="text-sm text-text-muted italic">
                                *Psst... try clicking the 404 number above* 😉
                            </p>
                        )}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <MagneticButton strength={0.25}>
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-brand-hover"
                            >
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Link>
                        </MagneticButton>

                        <MagneticButton strength={0.25}>
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-brand-primary text-brand-primary rounded-xl font-semibold text-lg hover:bg-brand-primary hover:text-white transition-all shadow-md"
                            >
                                <Search className="w-5 h-5" />
                                View Portfolio
                            </Link>
                        </MagneticButton>
                    </motion.div>

                    {/* Popular Pages */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-border"
                    >
                        <p className="text-sm text-text-muted mb-4">Or explore these pages:</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {[
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Services" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-brand-primary hover:underline hover:text-brand-hover transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mini Game when Easter Egg is Active */}
            {gameActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl border-2 border-brand-primary max-w-xs z-50"
                >
                    <div className="text-center">
                        <p className="font-bold text-brand-primary mb-2">🎮 You found the secret!</p>
                        <p className="text-sm text-text-muted mb-4">
                            Thanks for being curious! Here's a fun fact: This 404 page has personality because great design is about the details.
                        </p>
                        <button
                            onClick={() => setGameActive(false)}
                            className="text-xs text-text-muted hover:text-brand-primary transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
