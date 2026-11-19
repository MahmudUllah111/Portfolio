import React from 'react';
import { EXPERIENCES } from '../../data/experience';
import { PerspectiveHeading } from '../common/PerspectiveHeading';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-36 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-6">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>04 // TIMELINE &amp; CAREER RECORD</span>
          </div>
          <PerspectiveHeading
            text="Experience &amp; Education"
            className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight text-typography-primary uppercase"
          />
        </div>
        <p className="text-typography-secondary text-base md:text-lg max-w-md leading-relaxed font-normal">
          Engineering track record in enterprise systems, dynamic client platforms, and computer science research.
        </p>
      </div>

      {/* Full-Width Interactive Editorial List (dennissnellenberg / rauno inspired) */}
      <div className="divide-y divide-white/10 border-b border-white/10">
        {EXPERIENCES.map((item, index) => (
            <div
              key={item.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 py-10 md:py-14 gap-8 items-start hover:bg-white/[0.015] px-4 -mx-4 rounded-xl transition-all duration-300"
            >
              {/* Left Column: Role & Company (Col 4) */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <span className="font-mono text-xs text-typography-muted">
                  0{index + 1} //
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-typography-primary tracking-tight group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <p className="font-mono text-sm text-typography-secondary font-medium">
                  {item.company}
                </p>
              </div>

              {/* Center Column: Impact Description & Highlights (Col 5) */}
              <div className="lg:col-span-5 space-y-4">
                <p className="text-base text-typography-secondary leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-typography-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0 mt-2" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[11px] text-typography-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Period & Location (Col 3) */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 font-mono text-xs text-typography-muted">
                <span className="text-typography-primary font-medium">{item.period}</span>
                <span className="text-typography-muted">{item.location}</span>
                <span className="mt-4 hidden lg:inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-typography-secondary">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
