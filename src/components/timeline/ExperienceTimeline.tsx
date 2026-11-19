import React, { useRef, useEffect, useState } from 'react';
import { History } from 'lucide-react';
import { EXPERIENCES } from '../../data/experience';
import { TimelineItem } from './TimelineItem';

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the container has been scrolled through
      const start = rect.top - windowHeight * 0.75;
      const total = rect.height;

      if (start < 0) {
        const progress = Math.min(1, Math.max(0, -start / total));
        setLineHeight(progress * 100);
      } else {
        setLineHeight(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
          <History className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Track Record &amp; Foundation</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-typography-primary">
          Experience &amp; Education
        </h2>
        <p className="text-typography-secondary text-base md:text-lg max-w-xl">
          Professional development milestones in enterprise CRM, client platforms, and computer science research.
        </p>
      </div>

      {/* Timeline Spine and Items */}
      <div ref={containerRef} className="relative">
        {/* Background inactive vertical track */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-3 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"
        />

        {/* Dynamic Glowing Active Progress Line */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-indigo to-accent-cyan -translate-x-1/2 shadow-glow-cyan transition-all duration-150"
          style={{ height: `${lineHeight}%` }}
        />

        {/* Timeline Items */}
        <div className="flex flex-col">
          {EXPERIENCES.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
