import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type CursorMode = 'default' | 'interactive' | 'explore';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSetDot = gsap.quickSetter(dot, 'x', 'px');
    const ySetDot = gsap.quickSetter(dot, 'y', 'px');

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
      const dt = 1.0 - Math.pow(1.0 - 0.22, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSetRing(pos.x);
      ySetRing(pos.y);
    };

    gsap.ticker.add(tickerFunc);
    window.addEventListener('mousemove', onMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const exploreTarget = target.closest('[data-cursor="explore"], .cursor-explore');
      if (exploreTarget) {
        setCursorMode('explore');
        return;
      }

      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-hover');
      if (interactive) {
        setCursorMode('interactive');
        return;
      }

      setCursorMode('default');
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

  const isExplore = cursorMode === 'explore';
  const isInteractive = cursorMode === 'interactive';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Central Target Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white transition-transform duration-200 ${
          isExplore || isInteractive ? 'scale-0' : 'scale-100'
        }`}
      />

      {/* Kinetic Morphing Ring / Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 transition-all duration-300 ease-out flex items-center justify-center font-mono select-none ${
          isExplore
            ? '-ml-14 -mt-5 w-28 h-10 rounded-full bg-white text-obsidian font-bold text-[11px] tracking-wider uppercase shadow-2xl scale-100 border border-white'
            : isInteractive
            ? '-ml-5 -mt-5 w-10 h-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-[2px] scale-125'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-white/20 bg-white/[0.02] scale-100'
        }`}
      >
        {isExplore && (
          <span className="flex items-center gap-1 leading-none">
            <span>EXPLORE</span>
            <span className="text-[12px] font-sans">↗</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
