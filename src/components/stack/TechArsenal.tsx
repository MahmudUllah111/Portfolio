import React, { useState, useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PerspectiveHeading } from '../common/PerspectiveHeading';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TechItem {
  name: string;
  detail: string;
  badge?: string;
}

interface TechCategory {
  index: string;
  title: string;
  role: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    index: '01',
    title: 'Frontend Engineering',
    role: 'Kinetic UI, Component Architecture & 60fps Choreography',
    items: [
      { name: 'React 19', detail: 'Modern hooks, component trees, state machines', badge: 'Core' },
      { name: 'TypeScript', detail: 'Strict contracts, generic types, compile-time safety', badge: 'Core' },
      { name: 'Inertia.js', detail: 'Monolithic SPA flow without client-side API drag', badge: 'Primary' },
      { name: 'Vue.js 3', detail: 'Composition API, reactive stores, components' },
      { name: 'Tailwind CSS', detail: 'Design tokens, dark themes, responsive layouts', badge: 'Core' },
      { name: 'GSAP ScrollTrigger', detail: 'Scroll-linked timelines, scrubbed progress', badge: 'Motion' },
      { name: 'Framer Motion', detail: 'Spring physics, gestures, layout transitions', badge: 'Motion' },
    ],
  },
  {
    index: '02',
    title: 'Backend & Modular CMS',
    role: 'Service Layers, Relational Schemas & Custom CMS Platforms',
    items: [
      { name: 'Laravel (PHP 8.4)', detail: 'Eloquent pipelines, service providers, queues', badge: 'Core' },
      { name: 'MySQL & MariaDB', detail: 'Normalized relational schemas and query index tuning', badge: 'Core' },
      { name: 'Custom Media & CMS', detail: 'Media managers, drag-and-drop block layout engines', badge: 'Custom' },
      { name: 'RESTful API Engineering', detail: 'Resource serialization, Sanctum auth, rate limiting' },
      { name: 'Filament Admin', detail: 'Rapid administrative portals and data table builders' },
    ],
  },
  {
    index: '03',
    title: 'Systems & Tooling',
    role: 'Developer Workflows, Machine Intelligence & Testing',
    items: [
      { name: 'Git & GitHub', detail: 'Branching discipline, CI/CD actions, review rigour', badge: 'Core' },
      { name: 'Linux Administration', detail: 'Daemon orchestration, server tuning, deployment' },
      { name: 'AI & Agentic Workflows', detail: 'Autonomous agents, workflow scripts, rapid prototyping', badge: 'Augmented' },
      { name: 'Vite', detail: 'Sub-second HMR, rollup configuration, asset pipelines' },
      { name: 'Playwright E2E', detail: 'Automated end-to-end browser regression testing' },
    ],
  },
];

const MARQUEE_ROW_1 = [
  'React 19', 'TypeScript', 'Laravel 11', 'Inertia.js', 'PHP 8.4',
  'Tailwind CSS', 'GSAP ScrollTrigger', 'Framer Motion', 'MySQL / MariaDB', 'Vue.js 3'
];

const MARQUEE_ROW_2 = [
  'RESTful Architecture', 'Modular CMS Engines', 'Vite', 'Git & GitHub',
  'Linux Administration', 'AI-Augmented Workflows', 'Playwright', 'Filament', 'Mechatronics'
];

// Interactive Metallic Sheen Card
const SheenCard: React.FC<{ item: TechItem }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-5 rounded-xl border border-white/5 bg-white/[0.02] transition-colors duration-300 cursor-default flex flex-col justify-between gap-3 overflow-hidden select-none"
    >
      {/* Dynamic Specular Metallic Sheen Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="font-display font-semibold text-base text-typography-primary">
          {item.name}
        </span>
        {item.badge && (
          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 text-typography-muted border border-white/10">
            {item.badge}
          </span>
        )}
      </div>
      <p className="relative z-10 text-xs text-typography-muted font-mono leading-relaxed">
        {item.detail}
      </p>
    </div>
  );
};

export const TechArsenal: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    // Velocity-reactive acceleration on the marquee
    const trigger = ScrollTrigger.create({
      trigger: '#stack',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const speedMultiplier = 1 + Math.min(3, velocity / 600);

        if (row1Ref.current) {
          row1Ref.current.style.animationDuration = `${30 / speedMultiplier}s`;
        }
        if (row2Ref.current) {
          row2Ref.current.style.animationDuration = `${35 / speedMultiplier}s`;
        }
      },
    });

    return () => trigger.kill();
  }, [prefersReduced]);

  return (
    <section id="stack" className="py-28 md:py-36 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>02 // ARSENAL &amp; PRODUCTION STACK</span>
          </div>
          <PerspectiveHeading
            text="Technical Arsenal"
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight text-typography-primary uppercase"
          />
        </div>
        <p className="text-typography-secondary text-base md:text-lg max-w-md leading-relaxed font-normal">
          A battle-tested spectrum of languages, frameworks, and engineering tools leveraged across client &amp; enterprise production.
        </p>
      </div>

      {/* Sleek Horizontal Typographic Index (Open Editorial Rows) */}
      <div className="divide-y divide-white/10 border-b border-white/10">
        {CATEGORIES.map((category) => (
          <div
            key={category.index}
            className="grid grid-cols-1 lg:grid-cols-12 py-10 md:py-14 gap-8 items-start group hover:bg-white/[0.015] transition-colors"
          >
            {/* Category Label (Col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="font-mono text-xs text-typography-muted">
                {category.index} //
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-typography-primary">
                {category.title}
              </h3>
              <p className="text-xs font-mono text-typography-muted mt-1 leading-relaxed">
                {category.role}
              </p>
            </div>

            {/* Tech Stack Items (Col 8) with Interactive Metallic Sheen */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {category.items.map((item) => (
                <SheenCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Velocity-Reactive Dual-Row Kinetic Marquee */}
      <div className="relative overflow-hidden pt-12 select-none">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-3">
          {/* Row 1 */}
          <div ref={row1Ref} className="flex gap-3 w-max animate-marquee will-change-transform">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((tech, i) => (
              <div
                key={`m1-${tech}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-typography-secondary whitespace-nowrap hover:border-white/25 hover:text-typography-primary transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div ref={row2Ref} className="flex gap-3 w-max animate-marquee-reverse will-change-transform">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((tech, i) => (
              <div
                key={`m2-${tech}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-typography-secondary whitespace-nowrap hover:border-white/25 hover:text-typography-primary transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
