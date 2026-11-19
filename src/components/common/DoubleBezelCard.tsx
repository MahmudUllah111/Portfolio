import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  enableTilt?: boolean;
  enableSpotlight?: boolean;
  showCrosshairs?: boolean;
}

export const DoubleBezelCard: React.FC<DoubleBezelCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  enableTilt = true,
  enableSpotlight = true,
  showCrosshairs = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    setMousePos({ x: clientX, y: clientY });

    if (enableTilt && !window.matchMedia('(pointer: coarse)').matches) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = clientX / width - 0.5;
      const mouseY = clientY / height - 0.5;
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt && isHovered
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      className={`group relative rounded-[2rem] p-1.5 md:p-2 bg-white/[0.03] border border-white/10 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.05] ${className}`}
      {...(props as any)}
    >
      {/* Dynamic Cursor Spotlight on Outer Border */}
      {enableSpotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.22), transparent 45%)`,
          }}
        />
      )}

      {/* Cybernetic Registration Crosshairs */}
      {showCrosshairs && (
        <>
          <span className="absolute top-2 left-2 text-[10px] font-mono text-white/20 select-none pointer-events-none group-hover:text-accent-cyan/60 transition-colors">
            +
          </span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none pointer-events-none group-hover:text-accent-cyan/60 transition-colors">
            +
          </span>
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/20 select-none pointer-events-none group-hover:text-accent-cyan/60 transition-colors">
            +
          </span>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-white/20 select-none pointer-events-none group-hover:text-accent-cyan/60 transition-colors">
            +
          </span>
        </>
      )}

      {/* Inner Core Container */}
      <div
        className={`relative h-full w-full rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] bg-obsidian-surface p-8 md:p-10 border border-white/5 shadow-inner-bezel overflow-hidden transition-colors duration-500 ${innerClassName}`}
      >
        {/* Dynamic Inner Surface Glow */}
        {enableSpotlight && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.06), transparent 50%)`,
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>
  );
};
