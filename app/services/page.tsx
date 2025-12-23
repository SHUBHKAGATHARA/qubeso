"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LucideIcon
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Search,
    title: "Requirement Analysis",
    description: "Deep dive into your business needs, understanding goals, challenges, and target audience to craft the perfect solution strategy.",
    features: ["Business Analysis", "Market Research", "Stakeholder Interviews", "Goal Definition"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Research & Planning",
    description: "Strategic planning and roadmap creation with competitive analysis, technology selection, and comprehensive project timeline.",
    features: ["Technology Stack", "Architecture Design", "Timeline Planning", "Resource Allocation"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating stunning, user-centered designs with intuitive interfaces that deliver exceptional user experiences and brand consistency.",
    features: ["Wireframing", "Prototyping", "User Testing", "Brand Integration"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Code,
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies, clean code practices, and agile methodologies.",
    features: ["Frontend Development", "Backend Systems", "API Integration", "Quality Assurance"],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Seamless launch with continuous monitoring, optimization, and ongoing support to ensure peak performance and reliability.",
    features: ["Cloud Deployment", "Performance Optimization", "Security Hardening", "Continuous Support"],
    color: "from-green-500 to-emerald-500"
  }
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Hero animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 1, y: 0 });
        return;
      }

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-background-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border text-accent-primary text-sm font-medium mb-6 shadow-soft">
              <Sparkles className="w-4 h-4" />
              Our Services
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary">
              How We Deliver{" "}
              <span className="text-accent-primary">
                Excellence
              </span>
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-text-muted leading-relaxed">
              A proven process that transforms your vision into reality through strategic planning,
              expert execution, and continuous innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Service Cards Section with GSAP Scroll Animation */}
      <ServiceCardsSection services={services} />

      {/* Timeline Section */}
      <TimelineSection services={services} />

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help bring your vision to life
            </p>
            <button className="group px-8 py-4 bg-white text-brand-primary rounded-full font-semibold text-lg shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105">
              Schedule a Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Premium Service Cards Component with GSAP Scroll Animation
function ServiceCardsSection({ services }: { services: Service[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(cardsRef.current, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      // Set initial state
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.96
      });

      // Create scroll-triggered animation
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our Comprehensive Services
          </h2>
          <p className="section-subtitle">
            End-to-end solutions tailored to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group premium-card p-8 border-2 border-border hover:border-accent-primary/20 hover:scale-[1.03] cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-medium transition-shadow duration-300">
                <service.icon className="w-8 h-8 text-accent-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Timeline Section Component with Sticky Stacking Animation
function TimelineSection({ services }: { services: Service[] }) {
  const timelineRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        cards.forEach(card => {
          gsap.set(card, { opacity: 1, y: 0, scale: 1 });
        });
        return;
      }

      // Animate each card with stagger
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={timelineRef} className="relative py-24 bg-background-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Our Development Process
          </h2>
          <p className="section-subtitle">
            A systematic approach to deliver exceptional results
          </p>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="relative max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToCardsRefs}
              className="sticky mb-8 transition-all duration-500"
              style={{
                top: `${80 + index * 60}px`,
                zIndex: services.length - index,
              }}
            >
              <div className="premium-card p-8 md:p-10 border-2 border-border hover:border-brand-primary/30 transition-all duration-500 group will-change-transform">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">0{index + 1}</span>
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:shadow-medium transition-shadow duration-300">
                      <service.icon className="w-10 h-10 text-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-background-primary rounded-full text-sm text-text-primary"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative line connecting cards */}
                {index < services.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-brand-primary/50 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Spacer to allow last card to stick properly */}
        <div className="h-96" />
      </div>
    </section>
  );
}

