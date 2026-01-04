"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-background-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border text-accent-primary text-sm font-medium mb-6 shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              About Us
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-heading">
              Innovating the{" "}
              <span className="text-brand-primary">
                Digital Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-muted leading-relaxed">
              We're a team of passionate technologists, designers, and strategists
              dedicated to transforming businesses through innovative digital solutions.
            </p>

            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent z-10" />
                <Image
                  src="/about-team.png"
                  alt="QUBESO TECH team collaboration"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={Briefcase}
              endValue={150}
              suffix="+"
              label="Projects Completed"
              color="from-blue-500 to-cyan-500"
            />
            <StatCard
              icon={Users}
              endValue={50}
              suffix="+"
              label="Happy Clients"
              color="from-purple-500 to-pink-500"
            />
            <StatCard
              icon={TrendingUp}
              endValue={5}
              suffix="+"
              label="Years Experience"
              color="from-orange-500 to-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-background-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="premium-card p-10 border-2 border-border hover:border-accent-primary/20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-medium"
                >
                  <Target className="w-10 h-10 text-accent-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                  Our Mission
                </h2>
                <p className="text-text-muted leading-relaxed text-lg mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth,
                  enhance efficiency, and create lasting value. We're committed to delivering
                  excellence in every project we undertake.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver innovative solutions",
                    "Exceed client expectations",
                    "Foster long-term partnerships",
                    "Drive digital transformation"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-text-primary"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="premium-card p-10 border-2 border-border hover:border-accent-primary/20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-medium"
                >
                  <Eye className="w-10 h-10 text-accent-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                  Our Vision
                </h2>
                <p className="text-text-muted leading-relaxed text-lg mb-6">
                  To be the leading technology partner for businesses worldwide, recognized for
                  our innovation, quality, and commitment to creating digital experiences that
                  make a difference.
                </p>
                <ul className="space-y-3">
                  {[
                    "Lead industry innovation",
                    "Expand global presence",
                    "Set quality standards",
                    "Inspire technological advancement"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-text-primary"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Choose{" "}
              <span className="text-brand-primary">
                QUBESO TECH
              </span>
            </h2>
            <p className="section-subtitle">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "We never compromise on quality. Every project is crafted with precision and attention to detail.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our team consists of seasoned professionals with years of experience in cutting-edge technologies.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful projects and satisfied clients across various industries.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: CheckCircle2,
                title: "Agile Approach",
                description: "Flexible methodology that adapts to your needs and ensures timely delivery.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Target,
                title: "Client-Focused",
                description: "Your success is our priority. We work closely with you at every step of the journey.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Sparkles,
                title: "Innovation First",
                description: "We stay ahead of the curve, implementing the latest technologies and best practices.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
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
                className="group premium-card p-8 border-2 border-border hover:border-brand-primary hover:shadow-premium-hover transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-medium"
                >
                  <item.icon className="w-8 h-8 text-accent-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-brand-primary to-brand-hover relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the growing list of businesses that trust QUBESO TECH for their digital needs
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Animated Counter Component
function StatCard({
  icon: Icon,
  endValue,
  suffix = "",
  label,
  color
}: {
  icon: any;
  endValue: number;
  suffix?: string;
  label: string;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setDisplayValue(endValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative premium-card p-8 border-2 border-border hover:border-brand-primary hover:shadow-premium-hover overflow-hidden transition-all duration-300"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-medium transition-shadow"
        >
          <Icon className="w-8 h-8 text-accent-primary" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-2 text-text-primary"
        >
          {displayValue}{suffix}
        </motion.div>

        <p className="text-text-muted font-medium text-lg">
          {label}
        </p>
      </div>

      {/* Decorative Element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} rounded-full blur-2xl`}
      />
    </motion.div>
  );
}

