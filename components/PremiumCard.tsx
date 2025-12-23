"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface PremiumCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export default function PremiumCard({
  icon: Icon,
  title,
  description,
  children,
  className = "",
  delay = 0
}: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -8 }}
      className={`premium-card p-8 group cursor-pointer ${className}`}
    >
      {Icon && (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300"
        >
          <Icon className="w-7 h-7 text-accent-primary" />
        </motion.div>
      )}

      <h3 className="text-2xl font-bold text-text-heading mb-3 group-hover:text-accent-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-text-muted leading-relaxed mb-4">
        {description}
      </p>

      {children}
    </motion.div>
  );
}
