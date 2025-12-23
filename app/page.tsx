"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with cutting-edge technology ensuring seamless user experiences"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protecting your data and user information"
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise scale"
    },
    {
      icon: Sparkles,
      title: "Modern Design System  ",
      description: "Beautiful, consistent interfaces following latest design principles"
    }
  ];

  return (
    <div className="relative bg-white">
      {/* Hero Section - Left Content + Right Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-white to-brand-primary/5 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary text-sm font-medium shadow-soft"
              >
                <Sparkles className="w-4 h-4" />
                Welcome to the Future of Technology
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-heading"
              >
                We Build{" "}
                <span className="text-brand-primary">Scalable</span>
                <br />
                <span className="text-brand-primary">Digital Products</span>
                <br />
                for the Future
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl"
              >
                Enterprise-ready solutions combining cutting-edge technology with exceptional design, delivering measurable business value.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-brand-primary text-white rounded-xl font-semibold text-lg shadow-premium hover:shadow-premium-hover hover:bg-brand-hover transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent text-brand-primary rounded-xl font-semibold text-lg border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm text-text-muted">No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm text-text-muted">24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/20">
                  <Image
                    src="/hero_dashboard_mockup_1766497527242.png"
                    alt="Modern SaaS Dashboard"
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-secondary/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Choose{" "}
              <span className="text-brand-primary">QUBESO</span>
            </h2>
            <p className="section-subtitle">
              We deliver enterprise-grade solutions with unmatched quality and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-brand-primary shadow-soft hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:shadow-premium transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-text-heading group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-hover">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Transform your vision into reality with our premium development services
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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
