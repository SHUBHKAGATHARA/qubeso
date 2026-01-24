import React, { useState, useRef, forwardRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utilities ---

/**
 * Combines multiple class names and merges Tailwind classes correctly.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Interfaces & Constants ---

export interface Project {
  id: string;
  image: string;
  title: string;
  link?: string;
}

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200";

// --- Internal Components ---

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;

    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute w-20 h-28 cursor-pointer group/card",
          isSelected && "opacity-0",
        )}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div className={cn(
          "w-full h-full rounded-lg overflow-hidden shadow-xl bg-card border border-white/5 relative",
          "transition-all duration-500",
          "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl group-hover/card:shadow-accent/40 group-hover/card:ring-2 group-hover/card:ring-accent group-hover/card:scale-125"
        )}>
          <img
            src={image || PLACEHOLDER_IMAGE}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// Project Modal Component
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleViewProject = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={project.image || PLACEHOLDER_IMAGE}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          {/* Project Info */}
          <div className="p-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {project.title}
            </h3>

            {/* View Project Button */}
            <button
              onClick={handleViewProject}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-brand-primary hover:bg-brand-hover text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Project</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface AnimatedFolderProps {
  title: string;
  projects: Project[];
  className?: string;
  gradient?: string;
}

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({ title, projects, className, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const previewProjects = projects.slice(0, 5);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const backBg = gradient || "linear-gradient(135deg, var(--folder-back) 0%, var(--folder-tab) 100%)";
  const tabBg = gradient || "var(--folder-tab)";
  const frontBg = gradient || "linear-gradient(135deg, var(--folder-front) 0%, var(--folder-back) 100%)";

  return (
    <>
      <div
        className={cn("relative flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer bg-card border border-border transition-all duration-700 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/40 group", className)}
        style={{ minWidth: "280px", minHeight: "320px", perspective: "1200px", transform: isHovered ? "scale(1.04) rotate(-1.5deg)" : "scale(1) rotate(0deg)", transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-700"
          style={{ background: gradient ? `radial-gradient(circle at 50% 70%, ${gradient.match(/#[a-fA-F0-9]{3,6}/)?.[0] || 'var(--accent)'} 0%, transparent 70%)` : "radial-gradient(circle at 50% 70%, var(--accent) 0%, transparent 70%)", opacity: isHovered ? 0.12 : 0 }}
        />
        <div className="relative flex items-center justify-center mb-4" style={{ height: "160px", width: "200px" }}>
          <div className="absolute w-32 h-24 rounded-lg shadow-md border border-white/10" style={{ background: backBg, filter: gradient ? "brightness(0.9)" : "none", transformOrigin: "bottom center", transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)", transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)", zIndex: 10 }} />
          <div className="absolute w-12 h-4 rounded-t-md border-t border-x border-white/10" style={{ background: tabBg, filter: gradient ? "brightness(0.85)" : "none", top: "calc(50% - 48px - 12px)", left: "calc(50% - 64px + 16px)", transformOrigin: "bottom center", transform: isHovered ? "rotateX(-30deg) translateY(-3px)" : "rotateX(0deg) translateY(0)", transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)", zIndex: 10 }} />
          <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                image={project.image}
                title={project.title}
                delay={index * 50}
                isVisible={isHovered}
                index={index}
                totalCount={previewProjects.length}
                onClick={() => handleProjectClick(project)}
                isSelected={false}
              />
            ))}
          </div>
          <div className="absolute w-32 h-24 rounded-lg shadow-lg border border-white/20" style={{ background: frontBg, top: "calc(50% - 48px + 4px)", transformOrigin: "bottom center", transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)", transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)", zIndex: 30 }} />
          <div className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none" style={{ top: "calc(50% - 48px + 4px)", background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)", transformOrigin: "bottom center", transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)", transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)", zIndex: 31 }} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground mt-4 transition-all duration-500" style={{ transform: isHovered ? "translateY(2px)" : "translateY(0)", letterSpacing: isHovered ? "-0.01em" : "0", transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)" }}>{title}</h3>
          <p className="text-sm font-medium text-muted-foreground transition-all duration-500" style={{ opacity: isHovered ? 0.8 : 1 }}>{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 transition-all duration-500" style={{ opacity: isHovered ? 0 : 1, transform: isHovered ? "translateY(10px)" : "translateY(0)", transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span>Hover</span>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
      />
    </>
  );
};
