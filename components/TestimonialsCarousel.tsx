"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Patel",
        role: "CEO, TechVentures",
        company: "TechVentures",
        image: "/testimonial-1.jpg",
        rating: 5,
        text: "QUBESO transformed our digital presence completely. Their team's expertise and dedication to quality is unmatched. The website they built exceeded all our expectations."
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Founder, EcoLiving",
        company: "EcoLiving",
        image: "/testimonial-2.jpg",
        rating: 5,
        text: "Working with QUBESO was a game-changer for our business. They delivered a beautiful, functional e-commerce platform that our customers love. Highly recommended!"
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "Director, FitPro",
        company: "FitPro",
        image: "/testimonial-3.jpg",
        rating: 5,
        text: "Professional, responsive, and incredibly talented. QUBESO built our fitness app from scratch and it's been a massive success. Their ongoing support is exceptional."
    }
];

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        What Our <span className="text-brand-primary">Clients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Trusted by businesses across industries
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="bg-white rounded-3xl p-12 shadow-premium border border-border"
                        >
                            {/* Quote Icon */}
                            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Quote className="w-8 h-8 text-brand-primary" />
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-xl text-text-primary leading-relaxed text-center mb-8 italic">
                                "{testimonials[current].text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-hover rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">
                                        {testimonials[current].name.charAt(0)}
                                    </span>
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-text-heading">{testimonials[current].name}</p>
                                    <p className="text-text-muted text-sm">{testimonials[current].role}</p>
                                    <p className="text-brand-primary text-sm font-medium">{testimonials[current].company}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 bg-white rounded-full shadow-premium hover:shadow-premium-hover hover:bg-brand-primary hover:text-white transition-all"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 bg-white rounded-full shadow-premium hover:shadow-premium-hover hover:bg-brand-primary hover:text-white transition-all"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > current ? 1 : -1);
                                    setCurrent(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-brand-primary" : "w-2 bg-border"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
