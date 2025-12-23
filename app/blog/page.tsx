"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Sparkles, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI integration to advanced web frameworks.",
    author: "John Smith",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    image: "/blog-1.jpg",
    tags: ["Next.js", "AI", "WebAssembly"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Building Scalable SaaS Applications: Best Practices",
    excerpt: "Learn the essential architectural patterns and strategies for building robust, scalable SaaS applications that can grow with your business.",
    author: "Sarah Johnson",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    category: "Architecture",
    image: "/blog-2.jpg",
    tags: ["SaaS", "Cloud", "Microservices"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Mastering Responsive Design: A Complete Guide",
    excerpt: "Deep dive into modern responsive design techniques, from mobile-first approaches to advanced CSS Grid and Flexbox layouts.",
    author: "Mike Chen",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    category: "Design",
    image: "/blog-3.jpg",
    tags: ["CSS", "Responsive", "UI/UX"],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large-Scale Projects",
    excerpt: "Discover advanced TypeScript patterns and practices that help maintain code quality and developer productivity in enterprise applications.",
    author: "Emily Davis",
    date: "Dec 8, 2025",
    readTime: "15 min read",
    category: "Programming",
    image: "/blog-4.jpg",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 5,
    title: "API Design Principles: Creating Developer-Friendly APIs",
    excerpt: "Learn how to design intuitive, well-documented APIs that developers love to use, following RESTful principles and modern standards.",
    author: "David Wilson",
    date: "Dec 5, 2025",
    readTime: "9 min read",
    category: "Backend",
    image: "/blog-5.jpg",
    tags: ["API", "REST", "GraphQL"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for React Applications",
    excerpt: "Practical strategies to improve your React app's performance, from code splitting to memoization and lazy loading.",
    author: "Lisa Anderson",
    date: "Dec 3, 2025",
    readTime: "11 min read",
    category: "Performance",
    image: "/blog-6.jpg",
    tags: ["React", "Performance", "Optimization"],
    color: "from-indigo-500 to-purple-500"
  }
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

export default function BlogPage() {
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
              Our Blog
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary">
              Insights &{" "}
              <span className="text-accent-primary">
                Resources
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of technology and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-2">Featured Article</h2>
            <div className="w-24 h-1 bg-accent-primary rounded-full" />
          </motion.div>

          <FeaturedBlogCard post={featuredPost} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-background-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-2">Recent Articles</h2>
            <div className="w-24 h-1 bg-accent-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles and insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-accent-primary rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeaturedBlogCard({ post }: { post: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative premium-card overflow-hidden border-2 border-border hover:border-accent-primary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative h-80 lg:h-auto bg-gradient-to-br from-primary-bg to-primary-muted/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-2 rounded-full bg-accent-primary text-white font-semibold shadow-soft">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-background-primary text-text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-full font-semibold shadow-medium hover:shadow-glow transition-all duration-300 w-fit"
          >
            Read More
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative premium-card overflow-hidden border-2 border-border hover:border-accent-primary/20"
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary-bg to-primary-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-primary/5" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-accent-primary text-white text-sm font-semibold shadow-soft">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-text-muted mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <User className="w-4 h-4" />
            {post.author}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-accent-primary hover:text-accent-primary/80"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
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
        className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${post.color} rounded-full blur-2xl`}
      />
    </motion.div>
  );
}

