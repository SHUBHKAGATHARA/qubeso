"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web Apps", "Mobile Apps", "E-Commerce", "SaaS"];

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Apps",
    description: "Comprehensive financial analytics platform with real-time data visualization and reporting.",
    image: "/placeholder-1.jpg",
    tags: ["Next.js", "TypeScript", "Chart.js"],
    color: "from-blue-500 to-cyan-500",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "E-Learning Platform",
    category: "SaaS",
    description: "Interactive online learning system with course management and video streaming.",
    image: "/placeholder-2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-purple-500 to-pink-500",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Fashion Marketplace",
    category: "E-Commerce",
    description: "Modern e-commerce platform with seamless checkout and inventory management.",
    image: "/placeholder-3.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-pink-500 to-rose-500",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    description: "Cross-platform mobile app for workout tracking and health monitoring.",
    image: "/placeholder-4.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    color: "from-orange-500 to-amber-500",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Project Management Tool",
    category: "SaaS",
    description: "Collaborative workspace for teams with task management and time tracking.",
    image: "/placeholder-5.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"],
    color: "from-green-500 to-emerald-500",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    category: "Mobile Apps",
    description: "Mobile ordering and delivery platform with real-time order tracking.",
    image: "/placeholder-6.jpg",
    tags: ["Flutter", "Node.js", "Socket.io"],
    color: "from-indigo-500 to-purple-500",
    link: "#",
    github: "#"
  },
  {
    id: 7,
    title: "Real Estate Portal",
    category: "Web Apps",
    description: "Property listing platform with advanced search and virtual tours.",
    image: "/placeholder-7.jpg",
    tags: ["Next.js", "Three.js", "Prisma"],
    color: "from-teal-500 to-cyan-500",
    link: "#",
    github: "#"
  },
  {
    id: 8,
    title: "Luxury Jewelry Store",
    category: "E-Commerce",
    description: "Premium e-commerce experience with 3D product visualization.",
    image: "/placeholder-8.jpg",
    tags: ["Next.js", "Three.js", "Shopify"],
    color: "from-amber-500 to-yellow-500",
    link: "#",
    github: "#"
  },
  {
    id: 9,
    title: "Healthcare Management",
    category: "SaaS",
    description: "Patient management system with appointment scheduling and telemedicine.",
    image: "/placeholder-9.jpg",
    tags: ["React", "Django", "PostgreSQL"],
    color: "from-rose-500 to-pink-500",
    link: "#",
    github: "#"
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background-primary overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
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
              Our Portfolio
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary">
              Our Latest{" "}
              <span className="text-brand-primary">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Explore our portfolio of successful projects across various industries,
              showcasing innovation, design excellence, and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-brand-secondary/95 border-b border-border sticky top-[72px] z-40 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background-primary">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-background-secondary to-background-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create something amazing together. Get in touch to discuss your next project.
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
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-primary-bg to-primary-muted/20 overflow-hidden">
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5" />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-accent-primary/95 backdrop-blur-sm flex items-center justify-center gap-4 z-10"
        >
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-accent-primary text-white text-sm font-semibold shadow-soft">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="px-3 py-1 bg-background-primary text-text-primary rounded-full text-sm font-medium"
            >
              {tag}
            </motion.span>
          ))}
        </div>
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
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-primary/20 rounded-full blur-2xl"
      />
    </motion.div>
  );
}

