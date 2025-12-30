"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Carousel3DCard from "./Carousel3DCard";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    icon: any;
    tags: string[];
    color: string;
    link: string;
    github: string;
}

interface Carousel3DProps {
    projects: Project[];
}

export default function Carousel3D({ projects }: Carousel3DProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
    const [rotation, setRotation] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const animationFrameRef = useRef<number>();
    const lastTimeRef = useRef<number>(Date.now());

    // Configuration
    const RADIUS = 800; // Carousel radius
    const CARD_WIDTH = 400;
    const CARD_HEIGHT = 550;
    const VISIBLE_CARDS = Math.min(5, projects.length); // Show max 5 cards at once
    const ANGLE_PER_ITEM = 360 / projects.length;

    // Initialize GSAP animations
    useEffect(() => {
        gsap.set(carouselRef.current, {
            transformStyle: "preserve-3d",
        });
    }, []);

    // Handle momentum/inertia after drag
    useEffect(() => {
        if (!isDragging && Math.abs(velocity) > 0.1) {
            const animate = () => {
                setRotation((prev) => prev + velocity);
                setVelocity((prev) => prev * 0.95); // Friction

                if (Math.abs(velocity) > 0.1) {
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            };
            animationFrameRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }
    }, [isDragging, velocity]);

    // Calculate current index based on rotation
    useEffect(() => {
        const normalizedRotation = ((rotation % 360) + 360) % 360;
        const index = Math.round(normalizedRotation / ANGLE_PER_ITEM) % projects.length;
        setCurrentIndex(index);
    }, [rotation, projects.length, ANGLE_PER_ITEM]);

    // Mouse/Touch drag handlers
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setDragStart({ x: clientX, rotation });
        setVelocity(0);
        lastTimeRef.current = Date.now();
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;

        const deltaX = clientX - dragStart.x;
        const deltaRotation = (deltaX / window.innerWidth) * 180; // Sensitivity
        const newRotation = dragStart.rotation + deltaRotation;

        // Calculate velocity
        const now = Date.now();
        const deltaTime = now - lastTimeRef.current;
        if (deltaTime > 0) {
            setVelocity((newRotation - rotation) / deltaTime * 16); // Normalize to ~60fps
        }
        lastTimeRef.current = now;

        setRotation(newRotation);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleDragEnd();
        }
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    // Scroll wheel support
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY * 0.1;
        setRotation((prev) => prev + delta);
    };

    // Navigation buttons
    const rotateToNext = () => {
        gsap.to({ value: rotation }, {
            value: rotation + ANGLE_PER_ITEM,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: function () {
                setRotation(this.targets()[0].value);
            }
        });
    };

    const rotateToPrev = () => {
        gsap.to({ value: rotation }, {
            value: rotation - ANGLE_PER_ITEM,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: function () {
                setRotation(this.targets()[0].value);
            }
        });
    };

    // Calculate card positions
    const getCardTransform = (index: number) => {
        const angle = (index * ANGLE_PER_ITEM - rotation) * (Math.PI / 180);
        const x = Math.sin(angle) * RADIUS;
        const z = Math.cos(angle) * RADIUS - RADIUS;
        const rotateY = index * ANGLE_PER_ITEM - rotation;

        return {
            transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
            zIndex: Math.round(1000 + z),
        };
    };

    // Calculate position relative to center for depth effects
    const getRelativePosition = (index: number) => {
        const normalizedRotation = ((rotation % 360) + 360) % 360;
        const targetAngle = index * ANGLE_PER_ITEM;
        let diff = targetAngle - normalizedRotation;

        // Normalize to -180 to 180
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        return diff / ANGLE_PER_ITEM;
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[700px] overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"
            style={{ perspective: "2000px" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
        >
            {/* Background Animated Gradient */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-hover/20 rounded-full blur-3xl animate-float-delayed" />
            </div>

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    transformStyle: "preserve-3d",
                }}
            >
                {projects.map((project, index) => {
                    const cardTransform = getCardTransform(index);
                    const relativePosition = getRelativePosition(index);
                    const isCenter = Math.abs(relativePosition) < 0.3;

                    return (
                        <div
                            key={project.id}
                            className="absolute"
                            style={{
                                width: `${CARD_WIDTH}px`,
                                height: `${CARD_HEIGHT}px`,
                                ...cardTransform,
                                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                            }}
                        >
                            <Carousel3DCard
                                project={project}
                                index={index}
                                isCenter={isCenter}
                                position={relativePosition}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
                <button
                    onClick={rotateToPrev}
                    className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl 
                   hover:bg-brand-primary hover:text-white transition-all duration-300
                   border-2 border-border hover:border-brand-primary"
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Current Index Indicator */}
                <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg 
                      border-2 border-border">
                    <span className="font-bold text-brand-primary">
                        {currentIndex + 1}
                    </span>
                    <span className="text-text-muted mx-1">/</span>
                    <span className="text-text-muted">
                        {projects.length}
                    </span>
                </div>

                <button
                    onClick={rotateToNext}
                    className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl 
                   hover:bg-brand-primary hover:text-white transition-all duration-300
                   border-2 border-border hover:border-brand-primary"
                    aria-label="Next project"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Drag Hint */}
            {!isDragging && currentIndex === 0 && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50">
                    <div className="px-6 py-3 bg-brand-primary/10 backdrop-blur-md rounded-full 
                        border border-brand-primary/30 flex items-center gap-2 animate-bounce">
                        <Maximize2 className="w-4 h-4 text-brand-primary" />
                        <span className="text-sm font-medium text-brand-primary">
                            Drag or scroll to explore
                        </span>
                    </div>
                </div>
            )}

            {/* Cursor style */}
            <style jsx>{`
        .cursor-grabbing {
          cursor: grabbing !important;
        }
        .cursor-grab {
          cursor: grab !important;
        }
      `}</style>
        </div>
    );
}
