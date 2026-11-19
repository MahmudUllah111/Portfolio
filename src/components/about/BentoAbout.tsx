import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, Cpu, Database, Quote } from 'lucide-react';
import { DoubleBezelCard } from '../common/DoubleBezelCard';
import { LiveDhakaClock } from './LiveDhakaClock';

export const BentoAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto">
      {/* Section Header with Monospace Index Tag */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>01 // PHILOSOPHY &amp; CORE ARCHITECTURE</span>
        </div>
        <h2 className="font-display font-bold text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.05] tracking-tight text-typography-primary">
          Engineering Philosophy
        </h2>
        <p className="text-typography-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          Unifying robust relational backend architectures with tactile, 60fps interactive frontends.
        </p>
      </div>

      {/* Balanced 12-Column Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ROW 1 — Col 7: Core Architecture & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                    <Layers className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    Primary Specialization
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">01.1 // FOUNDATION</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-typography-primary tracking-tight">
                  High-Scale Web Platforms &amp; Systems Architecture
                </h3>
                <p className="text-typography-secondary leading-relaxed text-base md:text-lg">
                  Specialized in architecting custom web systems that eliminate technical debt through first-principles engineering. From normalized relational schemas and high-throughput REST APIs to zero-latency reactive client hydration, every system is crafted for long-term scalability and operational resilience.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {[
                  'Enterprise Architectures',
                  'Relational Schema Design',
                  'Inertia / SPA Hydration',
                  'REST & Service Layers',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/5 font-mono text-xs text-typography-secondary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* ROW 1 — Col 5: Live Dhaka Base & Operational Telemetry */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                  Telemetry &amp; Availability
                </span>
                <span className="font-mono text-xs text-typography-muted">01.2 // BASE</span>
              </div>

              <div className="my-auto py-2">
                <LiveDhakaClock />
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span>OPEN FOR SELECT GLOBAL CONTRACTS</span>
                </div>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  Asynchronous workflows, remote collaboration, and high-impact full-stack development.
                </p>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* ROW 2 — Col 4: Custom CMS & Modular Engines */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-accent-cyan" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    Modular CMS
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">01.3</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-typography-primary tracking-tight">
                  Dynamic CMS Engines
                </h3>
                <p className="text-typography-secondary leading-relaxed text-sm md:text-base">
                  Architecting custom media asset libraries, drag-and-drop page block composers, and role-based curation tools giving non-technical teams effortless publishing control.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted">
                PROVEN IN RRM STEEL &amp; MUSEUM
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* ROW 2 — Col 4: AI & Edge Robotics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent-indigo" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    AI &amp; Robotics
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">01.4</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-typography-primary tracking-tight">
                  Embedded AI &amp; Vision
                </h3>
                <p className="text-typography-secondary leading-relaxed text-sm md:text-base">
                  From developing CANDI (bilingual educational robot) to edge image detection systems at SK IT Centre, bridging machine intelligence with tangible software workflows.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted">
                CAPSTONE THESIS &amp; CV PIPELINES
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* ROW 2 — Col 4: Edward Teller Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-4 h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Quote className="w-4 h-4 text-typography-muted" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    Guiding Ethos
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">01.5</span>
              </div>

              <div className="space-y-4 my-auto">
                <blockquote className="font-display font-medium text-lg md:text-xl text-typography-primary leading-snug tracking-tight">
                  &ldquo;The science of today is the technology of tomorrow.&rdquo;
                </blockquote>
                <p className="font-mono text-xs text-accent-cyan tracking-wider uppercase">
                  — Edward Teller
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted">
                RIGOROUS FIRST-PRINCIPLES MINDSET
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>
      </div>
    </section>
  );
};
