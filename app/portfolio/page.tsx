"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedFolder, Project } from "@/components/ui/3d-folder";

const projects = [
  {
    id: "1",
    title: "Rameshwara Agro Dhrol",
    category: "Business",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    link: "https://rameshwaragrodhrol.vercel.app/",
  },
  {
    id: "2",
    title: "KB Kagathara Advocate",
    category: "Business",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    link: "https://kbkagathara-advocate.vercel.app/",
  },
  {
    id: "3",
    title: "Hustle for Muscle",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    link: "https://hustle-for-muscle-by-shubham-kagathara.vercel.app/",
  },
  {
    id: "4",
    title: "Premium Salon Website",
    category: "Business",
    image: "https://images.unsplash.com/photo-1560869713-80f8ec68a12b?auto=format&fit=crop&q=80&w=800",
    link: "https://salon-site-by-shubham-kagathara.vercel.app/",
  },
  {
    id: "5",
    title: "Shubham Kagathara Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    link: "https://shubhamkagathara-portfolio.vercel.app/",
  },
  {
    id: "6",
    title: "Silvara Elite",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    link: "https://silvaraelite.vercel.app/",
  }
];

//  Portfolio data organized by category for 3D folders
const portfolioCategories = [
  {
    title: "Business",
    gradient: "linear-gradient(135deg, #2563eb, #1e40af)",
    projects: projects
      .filter(p => p.category === "Business")
      .map(p => ({
        id: p.id,
        title: p.title,
        image: p.image,
        link: p.link
      })) as Project[]
  },
  {
    title: "E-Commerce",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    projects: projects
      .filter(p => p.category === "E-Commerce")
      .map(p => ({
        id: p.id,
        title: p.title,
        image: p.image,
        link: p.link
      })) as Project[]
  },
  {
    title: "Portfolio",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    projects: projects
      .filter(p => p.category === "Portfolio")
      .map(p => ({
        id: p.id,
        title: p.title,
        image: p.image,
        link: p.link
      })) as Project[]
  },
  {
    title: "Fitness",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    projects: projects
      .filter(p => p.category === "Fitness")
      .map(p => ({
        id: p.id,
        title: p.title,
        image: p.image,
        link: p.link
      })) as Project[]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-background-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
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
              Our Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary"
            >
              Our Latest{" "}
              <span className="text-brand-primary">
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-text-muted leading-relaxed mb-8"
            >
              Explore our portfolio of successful projects delivered to clients across various industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3D Folders Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-heading">
              Explore by Category
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Hover over each folder to preview our projects. Click on a project card to view the live demo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {portfolioCategories.map((folder, index) => (
              <motion.div
                key={folder.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full"
              >
                <AnimatedFolder
                  title={folder.title}
                  projects={folder.projects}
                  gradient={folder.gradient}
                  className="w-full"
                />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's bring your vision to life with our expert team
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
