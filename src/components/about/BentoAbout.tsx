import React from 'react';
import { LiveDhakaClock } from './LiveDhakaClock';

export const BentoAbout: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>01 // PHILOSOPHY &amp; SYSTEMS CRAFT</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-tight text-typography-primary uppercase">
            Engineering Philosophy
          </h2>
        </div>
        <p className="text-typography-secondary text-base md:text-lg max-w-md leading-relaxed font-normal">
          Bridging high-scale relational backend systems with tactile, 60fps interactive frontends.
        </p>
      </div>

      {/* Open Architectural Grid (Hairline Dividers, No Dark Box Clutter) */}
      <div className="border-x border-b border-white/10">
        {/* ROW 1: 7-Col / 5-Col Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
          {/* Col 7: Primary Architecture Discipline */}
          <div className="lg:col-span-7 p-8 md:p-14 lg:border-r border-white/10 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
                <span className="uppercase tracking-widest text-typography-secondary">
                  CORE SYSTEMS DISCIPLINE
                </span>
                <span>01.1</span>
              </div>
              <h3 className="font-display font-semibold text-2xl md:text-4xl text-typography-primary tracking-tight">
                High-Scale Relational Platforms &amp; Modular Systems
              </h3>
              <p className="text-typography-secondary leading-relaxed text-base md:text-lg pt-2">
                Specialized in architecting web systems that balance deep backend robustness with responsive, fluid frontends. From normalized relational databases and bespoke media libraries to dynamic page widget engines, every layer is engineered for long-term scalability and zero operational drag.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/10 font-mono text-xs text-typography-muted">
              {['Relational Schemas', 'Modular CMS Engines', 'Inertia / SPA Hydration', 'REST Service Layers'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-typography-secondary"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Col 5: Operational Base & Live Dhaka Time */}
          <div className="lg:col-span-5 p-8 md:p-14 flex flex-col justify-between gap-8 bg-obsidian-surface/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
                <span className="uppercase tracking-widest text-typography-secondary">
                  OPERATIONAL BASE
                </span>
                <span>01.2</span>
              </div>
              <LiveDhakaClock />
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-typography-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN FOR SELECT GLOBAL CONTRACTS</span>
              </div>
              <p className="text-xs text-typography-secondary leading-relaxed font-mono">
                Remote collaborations, asynchronous workflows, and full-stack technical leadership.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: Balanced 3-Column Split (4 + 4 + 4 = 12) */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Col 1: Modular CMS */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.02] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
                <span className="uppercase tracking-widest text-typography-secondary">
                  MODULAR CMS
                </span>
                <span>01.3</span>
              </div>
              <h4 className="font-display font-semibold text-xl text-typography-primary">
                Dynamic CMS Architecture
              </h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                Building custom media libraries with folder hierarchy, asset transforms, and drag-and-drop block layout engines giving non-technical teams effortless publishing autonomy.
              </p>
            </div>

            <span className="font-mono text-[11px] text-typography-muted uppercase tracking-wider">
              PROVEN IN RRM STEEL &amp; MUSEUM
            </span>
          </div>

          {/* Col 2: Machine Intelligence & Robotics */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.02] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
                <span className="uppercase tracking-widest text-typography-secondary">
                  AI &amp; MECHATRONICS
                </span>
                <span>01.4</span>
              </div>
              <h4 className="font-display font-semibold text-xl text-typography-primary">
                Embedded AI &amp; Robotics
              </h4>
              <p className="text-sm text-typography-secondary leading-relaxed">
                From developing CANDI (bilingual educational robot with NLP and hardware kinematics) to edge computer vision at SK IT Centre, applying machine intelligence to real-world software.
              </p>
            </div>

            <span className="font-mono text-[11px] text-typography-muted uppercase tracking-wider">
              CAPSTONE THESIS &amp; CV PIPELINES
            </span>
          </div>

          {/* Col 3: Edward Teller Quote */}
          <div className="p-8 md:p-12 flex flex-col justify-between gap-6 bg-obsidian-surface/20 hover:bg-white/[0.02] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
                <span className="uppercase tracking-widest text-typography-secondary">
                  GUIDING PRINCIPLE
                </span>
                <span>01.5</span>
              </div>
              <blockquote className="font-display font-medium text-lg md:text-xl text-typography-primary leading-snug">
                &ldquo;The science of today is the technology of tomorrow.&rdquo;
              </blockquote>
              <p className="font-mono text-xs text-typography-muted uppercase tracking-wider">
                — Edward Teller
              </p>
            </div>

            <span className="font-mono text-[11px] text-typography-muted uppercase tracking-wider">
              FIRST-PRINCIPLES MINDSET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
