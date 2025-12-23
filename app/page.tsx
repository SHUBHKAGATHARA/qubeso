"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import PremiumCard from "@/components/PremiumCard";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for seamless user experience with cutting-edge optimization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols for your complete peace of mind"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Built to grow seamlessly with your evolving business needs"
    },
    {
      icon: Sparkles,
      title: "Modern Tech Stack",
      description: "Latest technology and industry best practices for excellence"
    }
  ];

  return (
    <div className="relative bg-background-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-accent-primary/30 text-accent-primary text-sm font-medium shadow-soft">
                <Sparkles className="w-4 h-4" />
                Welcome to the Future of Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-text-heading"
            >
              QUBESO TECH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-text-muted font-light"
            >
              Transforming Ideas into Premium Digital Experiences
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl mb-12 text-text-muted max-w-3xl mx-auto"
            >
              We craft enterprise-ready solutions with cutting-edge technology,
              delivering excellence in every pixel and line of code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-accent-primary text-black rounded-lg font-semibold text-lg shadow-neon hover:shadow-glow transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent text-accent-primary rounded-lg font-semibold text-lg border-2 border-accent-primary hover:bg-accent-primary hover:text-black transition-all duration-300 hover:shadow-glow"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Choose Us
            </h2>
            <p className="section-subtitle">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <PremiumCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background-primary">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-heading">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-text-muted">
              Let's transform your vision into reality with our premium development services
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-accent-primary text-black rounded-lg font-semibold text-lg shadow-neon hover:shadow-glow transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
