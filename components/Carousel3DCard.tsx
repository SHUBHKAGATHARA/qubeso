"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Carousel3DCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        description: string;
        icon: LucideIcon;
        tags: string[];
        color: string;
        link: string;
        github: string;
    };
    index: number;
    isCenter: boolean;
    position: number;
}

export default function Carousel3DCard({
    project,
    index,
    isCenter,
    position
}: Carousel3DCardProps) {
    // Calculate opacity and scale based on position
    const getDepthStyles = () => {
        const distanceFromCenter = Math.abs(position);
        const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.3);
        const scale = Math.max(0.7, 1 - distanceFromCenter * 0.15);
        const blur = distanceFromCenter > 1 ? 2 : 0;

        return { opacity, scale, blur };
    };

    const { opacity, scale, blur } = getDepthStyles();

    return (
        <motion.div
            className="carousel-card absolute w-full h-full"
            style={{
                opacity,
                filter: `blur(${blur}px)`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale, opacity }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative h-full w-full group">
                {/* Main Card Container */}
                <div
                    className={`
            relative h-full w-full rounded-3xl overflow-hidden
            border-2 transition-all duration-500
            ${isCenter
                            ? 'border-brand-primary shadow-carousel-glow'
                            : 'border-border/50 shadow-xl'
                        }
          `}
                    style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Animated Gradient Header */}
                    <div className="relative h-56 overflow-hidden">
                        {/* Base Gradient Background */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.color} animate-gradient-shift`}
                        />

                        {/* Gradient Overlay Animation */}
                        <div className="absolute inset-0 opacity-40">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-delayed" />
                        </div>

                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <project.icon
                                    className="w-20 h-20 text-white drop-shadow-2xl"
                                    strokeWidth={1.5}
                                />
                            </motion.div>
                        </div>

                        {/* Hover Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         flex items-end justify-center pb-6 gap-3"
                        >
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-white rounded-xl hover:bg-brand-primary hover:text-white 
                         transition-all shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                            {project.github !== "#" && (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-white rounded-xl hover:bg-brand-primary hover:text-white 
                           transition-all shadow-lg"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>
                            )}
                        </div>

                        {/* Glow Effect for Center Card */}
                        {isCenter && (
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-hover/20 
                            blur-xl opacity-75 animate-pulse-slow"
                            />
                        )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                        {/* Category Badge */}
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 text-xs font-bold bg-brand-primary/10 
                             text-brand-primary rounded-full">
                                {project.category}
                            </span>
                            {isCenter && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-2 h-2 rounded-full bg-brand-primary animate-ping"
                                />
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-text-heading group-hover:text-brand-primary 
                         transition-colors line-clamp-2">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-muted leading-relaxed line-clamp-3 text-sm">
                            {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2.5 py-1 text-xs font-medium bg-background-secondary 
                           text-text-muted rounded-lg border border-border
                           group-hover:border-brand-primary/30 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* View Project Button - Shows on hover or when centered */}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: isCenter ? 1 : 0,
                                y: isCenter ? 0 : 10
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                w-full py-3 rounded-xl font-semibold text-sm
                transition-all duration-300
                ${isCenter
                                    ? 'bg-brand-primary text-white shadow-lg'
                                    : 'bg-background-secondary text-text-muted'
                                }
              `}
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            {isCenter ? 'View Project' : 'Scroll to View'}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
