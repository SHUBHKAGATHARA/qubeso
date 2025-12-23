"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  variant?: "filled" | "outline";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function PremiumButton({ 
  children, 
  variant = "filled", 
  onClick, 
  className = "",
  href 
}: PremiumButtonProps) {
  const baseClasses = "premium-button inline-flex items-center justify-center gap-2";
  const variantClasses = variant === "filled" 
    ? "premium-button-filled" 
    : "premium-button-outline";

  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href}>
        {button}
      </a>
    );
  }

  return button;
}
