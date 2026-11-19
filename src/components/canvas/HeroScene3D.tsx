import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// 3D Sculpture Component
const LiquidSculpture: React.FC<{ scrollProgressRef: React.MutableRefObject<number> }> = ({
  scrollProgressRef,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const scroll = scrollProgressRef.current;

    if (groupRef.current) {
      // Smooth lerp towards cursor coordinates with scroll-driven progression
      const targetX = state.pointer.x * 0.45;
      const targetY = state.pointer.y * 0.35 - scroll * 1.2;
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.5, delta);

      // Deep perspective scale on scroll down
      const targetScale = Math.max(0.65, 1 - scroll * 0.4);
      groupRef.current.scale.setScalar(THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3, delta));
    }

    if (meshRef.current) {
      // Constant organic rotation + scroll kinetic spin
      meshRef.current.rotation.x += delta * 0.25 + scroll * 0.02;
      meshRef.current.rotation.y += delta * 0.35 + scroll * 0.03;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.2;
      wireframeRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0, 0]}>
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Core Liquid-Obsidian Distorted Mesh */}
        <mesh ref={meshRef} castShadow receiveShadow>
          <torusKnotGeometry args={[1.05, 0.32, 128, 32]} />
          <MeshDistortMaterial
            color="#0f1016"
            roughness={0.18}
            metalness={0.92}
            clearcoat={1.0}
            clearcoatRoughness={0.12}
            distort={0.32}
            speed={1.8}
          />
        </mesh>

        {/* Concentric Geometric Wireframe Halo */}
        <mesh ref={wireframeRef} scale={1.14}>
          <torusKnotGeometry args={[1.05, 0.32, 48, 16]} />
          <meshBasicMaterial
            wireframe
            color="#ffffff"
            transparent
            opacity={0.07}
            wireframeLinewidth={1}
          />
        </mesh>

        {/* Ambient Orbiting Micro-Sparkles */}
        <Sparkles
          count={40}
          scale={5.5}
          size={2.2}
          speed={0.4}
          opacity={0.5}
          color="#e0e7ff"
        />
      </Float>
    </group>
  );
};

export const HeroScene3D: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    if (prefersReduced) return;

    // Register GSAP ScrollTrigger to scrub the 3D scene smoothly across Hero scroll
    const trigger = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none -z-0 overflow-hidden select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          powerPreference: 'high-performance',
          antialias: true,
          alpha: true,
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.45} />
        {/* Cool silver primary key light */}
        <directionalLight position={[6, 10, 6]} intensity={2.8} color="#f8fafc" />
        {/* Electric cyan rim reflection */}
        <pointLight position={[-8, -4, -4]} intensity={3.5} color="#38bdf8" />
        {/* Subtle violet edge reflection */}
        <pointLight position={[6, -6, 5]} intensity={2.4} color="#a855f7" />
        {/* Top-down specular light */}
        <pointLight position={[0, 8, 2]} intensity={1.8} color="#ffffff" />

        <Suspense fallback={null}>
          <LiquidSculpture scrollProgressRef={scrollProgressRef} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
