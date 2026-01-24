"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text, Html } from "@react-three/drei";
import * as THREE from "three";
import { Service } from "./types3D";

interface Character3DProps {
  service: Service;
  isAnimating: boolean;
  currentIndex: number;
}

export function Character3D({ service, isAnimating, currentIndex }: Character3DProps) {
  const characterGroup = useRef<THREE.Group>(null);
  const posterRef = useRef<THREE.Group>(null);
  const armLeftRef = useRef<THREE.Group>(null);
  const armRightRef = useRef<THREE.Group>(null);

  // Character colors - professional and calm
  const characterColor = "#2B4593"; // Brand primary
  const skinColor = "#FFD4A3";
  const posterColor = "#FFFFFF";

  // Smooth idle animation
  useFrame(({ clock }) => {
    if (!characterGroup.current) return;
    
    const t = clock.getElapsedTime();
    
    // Gentle breathing/idle motion
    characterGroup.current.position.y = Math.sin(t * 0.8) * 0.05;
    
    // Arm movement during poster drop animation
    if (posterRef.current && armLeftRef.current && armRightRef.current) {
      if (isAnimating) {
        // Lower arms and let poster drop
        const progress = Math.min((t % 1) * 2, 1);
        armLeftRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.5, progress);
        armRightRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.5, progress);
        posterRef.current.position.y = THREE.MathUtils.lerp(0.5, -0.3, progress);
        posterRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.2, progress);
      } else {
        // Return to holding position
        armLeftRef.current.rotation.x = THREE.MathUtils.lerp(armLeftRef.current.rotation.x, 0, 0.1);
        armRightRef.current.rotation.x = THREE.MathUtils.lerp(armRightRef.current.rotation.x, 0, 0.1);
        posterRef.current.position.y = THREE.MathUtils.lerp(posterRef.current.position.y, 0.5, 0.1);
        posterRef.current.rotation.x = THREE.MathUtils.lerp(posterRef.current.rotation.x, 0, 0.1);
      }
    }
  });

  // Poster gradient material
  const posterMaterial = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      
      // Parse gradient from service
      const colors = service.gradient.match(/(from|to)-(\w+)-(\d+)/g);
      if (colors && colors.length >= 2) {
        gradient.addColorStop(0, getColorFromTailwind(colors[0]));
        gradient.addColorStop(1, getColorFromTailwind(colors[1]));
      } else {
        gradient.addColorStop(0, '#2B4593');
        gradient.addColorStop(1, '#1E3270');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({ 
      map: texture,
      metalness: 0.2,
      roughness: 0.8
    });
  }, [service.gradient]);

  return (
    <group ref={characterGroup} position={[0, -0.5, 0]}>
      {/* Character Body */}
      <RoundedBox
        args={[0.6, 0.9, 0.3]}
        radius={0.1}
        position={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={characterColor} />
      </RoundedBox>

      {/* Character Head */}
      <group position={[0, 0.7, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
        
        {/* Simple eyes */}
        <mesh position={[-0.08, 0.05, 0.22]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.08, 0.05, 0.22]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Simple smile */}
        <mesh position={[0, -0.05, 0.22]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.08, 0.01, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={armLeftRef} position={[-0.35, 0.2, 0]}>
        <RoundedBox
          args={[0.15, 0.6, 0.15]}
          radius={0.05}
          rotation={[0, 0, 0.2]}
          castShadow
        >
          <meshStandardMaterial color={characterColor} />
        </RoundedBox>
        
        {/* Hand */}
        <mesh position={[-0.1, -0.4, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={armRightRef} position={[0.35, 0.2, 0]}>
        <RoundedBox
          args={[0.15, 0.6, 0.15]}
          radius={0.05}
          rotation={[0, 0, -0.2]}
          castShadow
        >
          <meshStandardMaterial color={characterColor} />
        </RoundedBox>
        
        {/* Hand */}
        <mesh position={[0.1, -0.4, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
      </group>

      {/* Legs */}
      <group position={[0, -0.7, 0]}>
        {/* Left Leg */}
        <RoundedBox
          args={[0.18, 0.5, 0.18]}
          radius={0.05}
          position={[-0.15, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color={characterColor} />
        </RoundedBox>
        
        {/* Right Leg */}
        <RoundedBox
          args={[0.18, 0.5, 0.18]}
          radius={0.05}
          position={[0.15, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color={characterColor} />
        </RoundedBox>
      </group>

      {/* Poster held by character */}
      <group ref={posterRef} position={[0, 0.5, 0.4]}>
        {/* Poster background with gradient */}
        <RoundedBox
          args={[1.2, 1.5, 0.05]}
          radius={0.05}
          castShadow
          receiveShadow
        >
          <primitive object={posterMaterial} attach="material" />
        </RoundedBox>

        {/* Poster content overlay */}
        <Html
          transform
          distanceFactor={1.5}
          position={[0, 0, 0.03]}
          style={{
            width: '400px',
            pointerEvents: 'none',
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20">
            <h3 className="text-white text-2xl font-bold mb-4 text-center drop-shadow-lg">
              {service.title}
            </h3>
            <ul className="space-y-2 text-white/90 text-sm">
              {service.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="drop-shadow">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Html>
      </group>

      {/* Shadow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.1} />
      </mesh>
    </group>
  );
}

// Helper function to convert Tailwind color classes to hex
function getColorFromTailwind(colorClass: string): string {
  const colorMap: Record<string, string> = {
    'from-blue-500': '#3B82F6',
    'to-cyan-500': '#06B6D4',
    'from-purple-500': '#A855F7',
    'to-pink-500': '#EC4899',
    'from-pink-500': '#EC4899',
    'to-rose-500': '#F43F5E',
    'from-green-500': '#22C55E',
    'to-emerald-500': '#10B981',
    'from-orange-500': '#F97316',
    'to-amber-500': '#F59E0B',
  };
  
  return colorMap[colorClass] || '#2B4593';
}
