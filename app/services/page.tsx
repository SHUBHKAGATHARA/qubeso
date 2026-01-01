"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Server,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Target
} from "lucide-react";

// ============================================
// Premium Animation Variants - Production Ready
// Implements Linear/Notion-quality staggered reveals
// ============================================
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 150ms delay between children  
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40 // Starts 40px below final position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Smooth 600ms animation
      ease: [0.22, 1, 0.36, 1] // Premium cubic-bezier easing (no bounce)
    }
  }
};


const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build powerful, scalable web applications with modern frameworks and cutting-edge technologies.",
    deliverables: [
      "Responsive web applications",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Custom CMS solutions"
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    deliverables: [
      "iOS & Android apps",
      "React Native solutions",
      "Flutter applications",
      "App Store deployment"
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for intuitive interfaces.",
    deliverables: [
      "User research & testing",
      "Wireframes & prototypes",
      "Design systems",
      "Brand identity"
    ],
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "End-to-end SaaS product development from concept to launch with scalable architecture.",
    deliverables: [
      "Multi-tenant architecture",
      "Subscription management",
      "API development",
      "Cloud infrastructure"
    ],
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Server,
    title: "Cloud & API Services",
    description: "Robust backend systems, APIs, and cloud infrastructure for enterprise-grade applications.",
    deliverables: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Cloud deployment",
      "DevOps automation"
    ],
    gradient: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50"
  }
];

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  design: ["Figma", "Adobe XD", "Framer", "Sketch"]
};

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned developers, designers, and project managers with 10+ years of experience"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ successful projects delivered across 15+ industries worldwide"
  },
  {
    icon: TrendingUp,
    title: "Agile Methodology",
    description: "Fast iterations, continuous delivery, and transparent communication throughout"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-28 pb-20 bg-gradient-to-b from-background-secondary to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-6 shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              Enterprise-Grade Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-heading"
            >
              Transform Your Vision Into{" "}
              <span className="text-brand-primary">Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12"
            >
              From concept to deployment, we deliver premium digital solutions that drive business growth and user engagement.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span className="text-text-muted font-medium">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span className="text-text-muted font-medium">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span className="text-text-muted font-medium">99% Satisfaction Rate</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-brand-primary text-white rounded-xl font-semibold text-lg shadow-premium hover:shadow-premium-hover hover:bg-brand-hover transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-brand-primary rounded-xl font-semibold text-lg border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our Core <span className="text-brand-primary">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-text-heading group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Technologies We <span className="text-brand-primary">Master</span>
            </h2>
            <p className="section-subtitle">
              Cutting-edge tools and frameworks for modern development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(techStack).map(([category, technologies], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: catIndex * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-border"
              >
                <h3 className="text-lg font-bold mb-4 text-text-heading capitalize">
                  {category}
                </h3>
                <div className="space-y-2">
                  {technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <span className="text-sm text-text-muted">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Choose <span className="text-brand-primary">QUBESO</span>
            </h2>
            <p className="section-subtitle">
              Partner with a team that's committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
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
                className="group text-center premium-card p-8 border-2 border-border hover:border-brand-primary hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-heading group-hover:text-brand-primary transition-colors">
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
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-hover relative overflow-hidden">
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
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and project estimate from our expert team
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
