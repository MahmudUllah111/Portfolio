import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Node3D {
  x: number;
  y: number;
  z: number;
}

export const HeroCenterpiece: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Generate 3D geodesic sphere points
    const points: Node3D[] = [];
    const count = 42;
    const radius = 125;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;
    let targetAngleX = 0.003;
    let targetAngleY = 0.005;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleX = y * 0.035;
      targetAngleY = x * 0.035;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Smooth dampening towards target rotation
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate all points
      for (const p of points) {
        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;
      }

      const centerX = size / 2;
      const centerY = size / 2;
      const fov = 350;

      // Project points to 2D
      const projected = points.map((p) => {
        const scale = fov / (fov + p.z);
        return {
          x: centerX + p.x * scale,
          y: centerY + p.y * scale,
          z: p.z,
          scale,
        };
      });

      // Draw connecting lines between nearby points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const alpha = (1 - dist / 65) * 0.35 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw projected nodes
      for (const p of projected) {
        const alpha = Math.max(0.15, (p.z + radius) / (2 * radius));
        ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbital radar ring in center
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.9, 0, Math.PI * 2);
      ctx.stroke();

      if (!prefersReduced) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[420px] aspect-square rounded-[2.5rem] p-4 bg-white/[0.02] border border-white/10 shadow-subtle-elevation backdrop-blur-xl group select-none"
    >
      {/* Outer ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/15 via-accent-indigo/10 to-transparent rounded-[2.5rem] blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* Cybernetic Registration Crosshairs */}
      <span className="absolute top-3 left-3 text-[10px] font-mono text-accent-cyan/40">+</span>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-accent-cyan/40">+</span>
      <span className="absolute bottom-3 left-3 text-[10px] font-mono text-accent-cyan/40">+</span>
      <span className="absolute bottom-3 right-3 text-[10px] font-mono text-accent-cyan/40">+</span>

      {/* 3D Wireframe Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: '380px', height: '380px' }}
        className="cursor-grab active:cursor-grabbing gpu-accelerated"
      />

      {/* Floating HUD Telemetry Badge 1: Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-4 left-6 right-6 flex items-center justify-between px-3 py-1.5 rounded-full bg-obsidian-void/85 border border-white/10 backdrop-blur-md shadow-inner-bezel font-mono text-[10px] text-typography-secondary"
      >
        <div className="flex items-center gap-1.5 text-accent-cyan">
          <Activity className="w-3 h-3 animate-pulse" strokeWidth={2} />
          <span className="font-semibold">SYS.ONLINE</span>
        </div>
        <div className="flex items-center gap-2 text-typography-muted">
          <span>60_FPS</span>
          <span>·</span>
          <span className="text-emerald-400">BST_UTC+6</span>
        </div>
      </motion.div>

      {/* Floating HUD Telemetry Badge 2: Bottom Center */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 left-6 right-6 flex items-center justify-between px-3 py-2 rounded-xl bg-obsidian-surface/90 border border-white/10 backdrop-blur-md font-mono text-[11px]"
      >
        <div className="flex items-center gap-2 text-typography-primary">
          <Cpu className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={1.5} />
          <span className="tracking-tight">FULL-STACK &amp; ARCHITECTURE</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
          PROD READY
        </span>
      </motion.div>

      {/* Circular Rotating Radar Reticle in Background */}
      <div
        aria-hidden="true"
        className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-white/10 pointer-events-none animate-spin-slow"
      />
    </div>
  );
};
