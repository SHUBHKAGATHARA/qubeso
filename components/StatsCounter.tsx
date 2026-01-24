"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
    { icon: Briefcase, label: "Projects Completed", value: 6, suffix: "" },
    { icon: Users, label: "Happy Clients", value: 3, suffix: "" },
    { icon: Award, label: "Awards Won", value: 1, suffix: "" },
    { icon: TrendingUp, label: "Years Experience", value: 1, suffix: "" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100
    });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
}

export default function StatsCounter() {
    return (
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-hover relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Track Record
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="relative group"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Number */}
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <p className="text-white/90 font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
