import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Sparkles, Compass } from 'lucide-react';
import { DoubleBezelCard } from '../common/DoubleBezelCard';
import { LiveDhakaClock } from './LiveDhakaClock';

export const BentoAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Core Capabilities &amp; Mindset</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-typography-primary">
          Engineering Philosophy
        </h2>
        <p className="text-typography-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          Bridging high-scale relational backend systems with tactile, 60fps interactive frontends.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Core Focus (Col 8) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                    <Layers className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    Primary Domain
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">01 // ARCHITECTURE</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-typography-primary tracking-tight">
                  Full-Stack Platforms &amp; Modular CMS Architectures
                </h3>
                <p className="text-typography-secondary leading-relaxed text-sm md:text-base">
                  Specialized in architecting custom web systems that balance deep backend robustness with responsive, fluid frontends. From normalized relational databases and bespoke media libraries to dynamic page widget engines, every layer is engineered for long-term scalability and zero operational drag.
                </p>
              </div>

              {/* Technical Highlights Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {['Custom CMS Engines', 'Relational Schemas', 'Reactive SPA Hydration', 'RESTful Systems'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 font-mono text-xs text-typography-secondary"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* Card 2: Live Location & Time (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                  Local Coordinates
                </span>
                <span className="font-mono text-xs text-typography-muted">02 // BASE</span>
              </div>

              <div className="my-auto py-2">
                <LiveDhakaClock />
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-typography-secondary leading-relaxed">
                  Available for global remote contracts, asynchronous team execution, and technical consulting.
                </p>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* Card 3: Edward Teller Quote (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                  Guiding Principle
                </span>
                <span className="font-mono text-xs text-typography-muted">03 // VISION</span>
              </div>

              <div className="my-auto space-y-4">
                <blockquote className="font-display font-medium text-lg md:text-xl text-typography-primary leading-snug tracking-tight">
                  &ldquo;The science of today is the technology of tomorrow.&rdquo;
                </blockquote>
                <p className="font-mono text-xs text-accent-cyan tracking-wider uppercase">
                  — Edward Teller
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-typography-muted font-mono leading-relaxed">
                  GROUNDED IN FIRST PRINCIPLES &amp; RIGOROUS ENGINEERING
                </p>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* Card 4: AI & Systems Synthesis (Col 8) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-8"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo">
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-typography-secondary">
                    Engineering Paradigm
                  </span>
                </div>
                <span className="font-mono text-xs text-typography-muted">04 // ADVANCEMENT</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-typography-primary tracking-tight">
                  Intelligent &amp; AI-Augmented Systems Development
                </h3>
                <p className="text-typography-secondary leading-relaxed text-sm md:text-base">
                  From developing bilingual conversational robotics (CANDI) and image classification systems at SK IT Centre, to leveraging agentic workflows and automated visual testing, I build systems that harness emerging AI capabilities to accelerate execution without sacrificing architectural precision.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-white/5 font-mono text-xs text-typography-muted">
                <span className="flex items-center gap-1.5 text-accent-cyan">
                  <Terminal className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Sub-second Latency</span>
                </span>
                <span>·</span>
                <span>Type-Safe Pipeline</span>
                <span>·</span>
                <span className="hidden sm:inline">Modular Micro-components</span>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>
      </div>
    </section>
  );
};
