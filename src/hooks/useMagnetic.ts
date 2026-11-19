import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from './useReducedMotion';

interface MagneticOptions {
  strength?: number;
  ease?: string;
  duration?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(options: MagneticOptions = {}) {
  const ref = useRef<T | null>(null);
  const prefersReduced = useReducedMotion();
  const { strength = 0.35, ease = 'power3.out', duration = 0.5 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;

    // Check for touch device — disable magnetic effect on touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration,
        ease,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [prefersReduced, strength, ease, duration]);

  return ref;
}
