"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                router.push("/dashboard");
            }, 1000);
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background-secondary relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-5/12"
                    >
                        <div className="glass-card p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
                            {/* Decorative Border Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary opacity-50" />

                            <div className="mb-8 text-center sm:text-left">
                                <Link href="/" className="inline-block mb-8">
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-light">
                                        QUBESO
                                    </span>
                                </Link>
                                <h1 className="text-3xl font-bold text-text-heading mb-3">Welcome Back</h1>
                                <p className="text-text-muted">Enter your credentials to access the dashboard.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-heading ml-1">Email Address</label>
                                    <div className={`relative transition-all duration-300 ${focused === 'email' ? 'scale-[1.02]' : ''}`}>
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@company.com"
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-border-default rounded-xl focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all duration-300 font-medium placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between ml-1">
                                        <label className="text-sm font-medium text-text-heading">Password</label>
                                        <a href="#" className="text-sm text-brand-primary hover:text-brand-hover font-medium transition-colors">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className={`relative transition-all duration-300 ${focused === 'password' ? 'scale-[1.02]' : ''}`}>
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                            <Lock className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            onFocus={() => setFocused('password')}
                                            onBlur={() => setFocused(null)}
                                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-border-default rounded-xl focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all duration-300 font-medium placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={loading || success}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${success
                                            ? "bg-green-500 text-white"
                                            : "bg-brand-primary text-white hover:bg-brand-hover hover:shadow-xl"
                                        }`}
                                >
                                    {loading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : success ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Success!</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Sign In</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-text-muted">
                                    Don't have an account?{" "}
                                    <Link href="/contact" className="text-brand-primary font-semibold hover:underline">
                                        Contact Us
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Visuals (Hidden on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block w-7/12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent rounded-[3rem] blur-3xl transform rotate-6" />
                            <div className="relative glass-card p-2 rounded-[2rem] shadow-2xl overflow-hidden card-hover">
                                <Image
                                    src="/hero_dashboard_mockup_1766497527242.png"
                                    alt="Dashboard Preview"
                                    width={1200}
                                    height={800}
                                    className="rounded-[1.5rem] w-full h-auto object-cover"
                                    priority
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-8 left-8 p-4 glass rounded-2xl shadow-xl flex items-center gap-4 bg-white/90"
                                >
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted font-medium">System Status</p>
                                        <p className="font-bold text-text-heading">All Systems Operational</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
