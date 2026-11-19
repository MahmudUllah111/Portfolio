import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PhilosophyScrubRevealProps {
  statement?: string;
  className?: string;
}

const DEFAULT_MANIFESTO =
  "Good software engineering is invisible. Great engineering is unforgettable. We architect high-scale, resilient platforms with deep relational precision, modular publishing autonomy, and 60fps kinetic craft.";

export const PhilosophyScrubReveal: React.FC<PhilosophyScrubRevealProps> = ({
  statement = DEFAULT_MANIFESTO,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.scrub-word');
    if (!words.length) return;

    // Set initial dimmed state
    gsap.set(words, { opacity: 0.18, color: '#a1a1aa' });

    const tl = gsap.to(words, {
      opacity: 1,
      color: '#ffffff',
      stagger: {
        each: 0.05,
      },
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: 0.8,
      },
    });

    return () => {
      tl.kill();
    };
  }, [prefersReduced]);

  const words = statement.split(' ');

  return (
    <div
      ref={containerRef}
      className={`py-12 md:py-16 border-b border-white/10 ${className}`}
    >
      <div className="flex items-center gap-2 mb-6 text-typography-muted font-mono text-xs uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>MANIFESTO // SYSTEMS RIGOR &amp; EDITORIAL FLOW</span>
      </div>

      <p className="font-display font-medium text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.2] tracking-tight max-w-5xl select-none">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="scrub-word inline-block mr-[0.25em] transition-colors will-change-[opacity,color]"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default PhilosophyScrubReveal;
