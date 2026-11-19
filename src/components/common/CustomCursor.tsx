import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    // Disable completely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    // Direct translation for snappy inner dot
    const xSetDot = gsap.quickSetter(dot, 'x', 'px');
    const ySetDot = gsap.quickSetter(dot, 'y', 'px');

    // Smooth physics ticker for trailing ring
    const xSetRing = gsap.quickSetter(ring, 'x', 'px');
    const ySetRing = gsap.quickSetter(ring, 'y', 'px');

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      xSetDot(mouse.x);
      ySetDot(mouse.y);
    };

    const tickerFunc = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSetRing(pos.x);
      ySetRing(pos.y);
    };

    gsap.ticker.add(tickerFunc);
    window.addEventListener('mousemove', onMouseMove);

    // Track interactive element hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gsap.ticker.remove(tickerFunc);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReduced, isVisible]);

  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan transition-transform duration-150 ${
          isHovered ? 'scale-0' : 'scale-100'
        }`}
      />
      {/* Kinetic smooth trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-accent-cyan/40 bg-accent-cyan/[0.03] transition-[width,height,transform,background-color,border-color] duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'scale-150 border-accent-cyan/80 bg-accent-cyan/10 backdrop-blur-[1px]'
            : 'scale-100'
        }`}
      />
    </div>
  );
};
