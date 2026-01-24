"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore - Character3D exists but TS has caching issues
import { Character3D } from "./Character3D";
import { Service } from "./types3D";

interface Services3DExperienceProps {
  services: Service[];
  autoRotateInterval?: number;
}

function Services3DExperienceCore({ 
  services, 
  autoRotateInterval = 5000 
}: Services3DExperienceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate through services
  useEffect(() => {
    if (isPaused || isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 1000); // Animation duration
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [services.length, autoRotateInterval, isPaused, isAnimating]);

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-gradient-to-b from-background-secondary to-white overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
            <spotLight position={[-5, 5, 2]} intensity={0.5} />
            
            {/* 3D Character with Poster */}
            <Character3D 
              service={currentService} 
              isAnimating={isAnimating}
              currentIndex={currentIndex}
            />
            
            {/* Subtle environment lighting */}
            <Environment preset="studio" />
            
            {/* Allow gentle rotation on desktop */}
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              autoRotate={false}
              enableDamping
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Premium UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto px-4 h-full flex flex-col justify-between py-12">
          {/* Top Section - Title */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4">
              Our <span className="text-brand-primary">Premium Services</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Interactive 3D experience showcasing our enterprise-grade solutions
            </p>
          </motion.div>

          {/* Bottom Section - Service Details Card */}
          <div className="flex justify-center items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-premium border border-gray-200/60 p-6 md:p-8 max-w-2xl w-full"
              >
                <div 
                  className={`inline-block px-4 py-2 rounded-full text-white font-semibold text-sm mb-4`}
                  style={{ 
                    background: currentService.gradient 
                  }}
                >
                  Service {currentIndex + 1} of {services.length}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4">
                  {currentService.title}
                </h3>
                
                <ul className="space-y-3">
                  {currentService.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                      <span className="text-text-muted text-base md:text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-auto">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), autoRotateInterval);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-12 bg-brand-primary' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Fallback Notice */}
      <div className="md:hidden absolute top-4 right-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-brand-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-brand-primary font-medium"
        >
          Tap to interact
        </motion.div>
      </div>
    </div>
  );
}

// Default export for dynamic import compatibility
export default Services3DExperienceCore;
