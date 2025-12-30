"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Briefcase, Scale, Dumbbell, Scissors, User, ShoppingBag, Sparkles, Grid3x3, Box } from "lucide-react";
import Carousel3D from "@/components/Carousel3D";

const categories = ["All", "Business", "E-Commerce", "Portfolio", "Fitness"];

const projects = [
  {
    id: 1,
    title: "Rameshwara Agro Dhrol",
    category: "Business",
    description: "Professional agriculture business website showcasing products, services, and company information with modern design.",
    icon: Briefcase,
    tags: ["Next.js", "React", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500",
    link: "https://rameshwaragrodhrol.vercel.app/",
    github: "#"
  },
  {
    id: 2,
    title: "KB Kagathara Advocate",
    category: "Business",
    description: "Professional law firm website with service listings, attorney information, and client contact system.",
    icon: Scale,
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
    link: "https://kbkagathara-advocate.vercel.app/",
    github: "#"
  },
  {
    id: 3,
    title: "Hustle for Muscle",
    category: "Fitness",
    description: "Modern fitness center website featuring workout programs, trainer profiles, and membership information.",
    icon: Dumbbell,
    tags: ["React", "Next.js", "CSS3"],
    color: "from-orange-500 to-red-500",
    link: "https://hustle-for-muscle-by-shubham-kagathara.vercel.app/",
    github: "#"
  },
  {
    id: 4,
    title: "Premium Salon Website",
    category: "Business",
    description: "Elegant salon website with service showcase, booking system preview, and gallery of work.",
    icon: Scissors,
    tags: ["Next.js", "React", "Tailwind CSS"],
    color: "from-pink-500 to-rose-500",
    link: "https://salon-site-by-shubham-kagathara.vercel.app/",
    github: "#"
  },
  {
    id: 5,
    title: "Shubham Kagathara Portfolio",
    category: "Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern animations.",
    icon: User,
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    color: "from-purple-500 to-indigo-500",
    link: "https://shubhamkagathara-portfolio.vercel.app/",
    github: "#"
  },
  {
    id: 6,
    title: "Silvara Elite",
    category: "E-Commerce",
    description: "Premium e-commerce platform with product catalog, shopping cart, and elegant user interface.",
    icon: ShoppingBag,
    tags: ["Next.js", "React", "Commerce"],
    color: "from-amber-500 to-yellow-500",
    link: "https://silvaraelite.vercel.app/",
    github: "#"
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [showCarousel, setShowCarousel] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Handle view mode change with splash effect
  const handleViewToggle = (mode: "grid" | "carousel") => {
    if (mode === "carousel" && !showCarousel) {
      setShowCarousel(true);
      setTimeout(() => setViewMode(mode), 150);
    } else {
      setViewMode(mode);
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background-primary overflow-hidden">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary"
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
              className="text-xl md:text-2xl text-text-muted leading-relaxed mb-8"
            >
              Explore our portfolio of successful projects delivered to clients across various industries.
            </motion.p>

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-3"
            >
              <button
                onClick={() => handleViewToggle("grid")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${viewMode === "grid"
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-white border-2 border-border text-text-muted hover:border-brand-primary hover:text-brand-primary"
                  }`}
              >
                <Grid3x3 className="w-5 h-5" />
                Grid View
              </button>

              <button
                onClick={() => handleViewToggle("carousel")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${viewMode === "carousel"
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-white border-2 border-border text-text-muted hover:border-brand-primary hover:text-brand-primary"
                  }`}
              >
                <Box className="w-5 h-5" />
                3D Carousel
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Categories - Only show in grid view */}
      {viewMode === "grid" && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="py-12 bg-background-primary border-b border-border"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                      ? "bg-brand-primary text-white shadow-medium"
                      : "bg-background-primary text-text-primary hover:bg-brand-primary/10 hover:text-brand-primary"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Projects - Grid or Carousel View */}
      <section className="py-24 bg-background-primary">
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-2xl text-text-muted">No projects found in this category.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="carousel-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Carousel3D projects={projects} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-hover relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
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

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.45,
        delay: (index % 9) * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative premium-card overflow-hidden border-2 border-border hover:border-brand-primary hover:shadow-premium-hover transition-shadow duration-300"
    >
      {/* Icon Header with Gradient Background */}
      <div className="relative h-64 overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />

        {/* Decorative Blur Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        </div>

        {/* Large Centered Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <project.icon className="w-24 h-24 text-white drop-shadow-2xl" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Hover Overlay with Action Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-lg transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm font-semibold text-brand-primary">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-text-heading group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-text-muted mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
