import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Terminal, CheckCircle2 } from 'lucide-react';
import { DoubleBezelCard } from '../common/DoubleBezelCard';

const STACK_ROW_1 = [
  'React 19',
  'TypeScript',
  'Laravel',
  'Inertia.js',
  'PHP 8.4',
  'Tailwind CSS',
  'GSAP ScrollTrigger',
  'Framer Motion',
  'MySQL / MariaDB',
  'Vue.js 3',
];

const STACK_ROW_2 = [
  'RESTful Architecture',
  'Custom CMS Builders',
  'Vite',
  'Git & GitHub',
  'Linux Administration',
  'AI-Assisted Workflows',
  'Playwright E2E',
  'Filament Admin',
  'Edge Robotics & CV',
  'Docker',
];

export const TechArsenal: React.FC = () => {
  return (
    <section id="stack" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Section Header with Monospace Index Tag */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>02 // ARSENAL &amp; PRODUCTION STACK</span>
        </div>
        <h2 className="font-display font-bold text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.05] tracking-tight text-typography-primary">
          Technical Arsenal
        </h2>
        <p className="text-typography-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          A battle-tested spectrum of languages, systems, and engineering frameworks leveraged across high-scale enterprise and client platforms.
        </p>
      </div>

      {/* 3 Spacious Category Cards (No cramped progress bars!) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* Category 1: Frontend Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shadow-glow-cyan/20">
                      <Code2 className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-typography-primary">
                        Frontend Engineering
                      </h3>
                      <p className="font-mono text-xs text-typography-muted">
                        Kinetic UI &amp; Component Systems
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-typography-muted">02.1</span>
                </div>

                <p className="text-sm text-typography-secondary mb-6 leading-relaxed">
                  Crafting accessible, reactive client architectures with sub-frame response times, zero layout shifts, and cinematic 60fps motion choreography.
                </p>

                {/* Tech Pills */}
                <div className="space-y-2.5">
                  {[
                    { name: 'React & TypeScript', detail: 'Strict contracts, hooks, and clean components' },
                    { name: 'Inertia.js & Vue.js', detail: 'Monolithic SPA flow with seamless routing' },
                    { name: 'Tailwind CSS', detail: 'Fluid design systems, tokens, and dark aesthetics' },
                    { name: 'GSAP & Framer Motion', detail: 'ScrollTrigger timelines and physics hover' },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs text-typography-primary font-semibold">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                          {tech.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan/60" strokeWidth={1.5} />
                      </div>
                      <p className="text-[11px] text-typography-muted mt-1 font-mono">
                        {tech.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted flex items-center justify-between">
                <span>DOM EXPERTISE</span>
                <span className="text-accent-cyan">60 FPS CHOREOGRAPHY</span>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* Category 2: Backend & Modular CMS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo shadow-glow-indigo/20">
                      <Server className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-typography-primary">
                        Backend &amp; Modular CMS
                      </h3>
                      <p className="font-mono text-xs text-typography-muted">
                        Service Layers &amp; Relational Data
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-typography-muted">02.2</span>
                </div>

                <p className="text-sm text-typography-secondary mb-6 leading-relaxed">
                  Engineering robust server architectures, normalized relational schemas, and bespoke media library managers engineered for high concurrency.
                </p>

                {/* Tech Pills */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Laravel & Modern PHP', detail: 'Eloquent pipelines, service providers, queues' },
                    { name: 'MySQL & MariaDB', detail: 'Normalized relational schemas and query index optimization' },
                    { name: 'Custom Media & CMS Engines', detail: 'Chunked uploads, dynamic block widget composition' },
                    { name: 'RESTful API Engineering', detail: 'Resource serialization, Sanctum auth, rate limiting' },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs text-typography-primary font-semibold">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                          {tech.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-indigo/60" strokeWidth={1.5} />
                      </div>
                      <p className="text-[11px] text-typography-muted mt-1 font-mono">
                        {tech.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted flex items-center justify-between">
                <span>SCALABLE DATA</span>
                <span className="text-accent-indigo">ZERO-LEAK SYSTEMS</span>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>

        {/* Category 3: Systems & Tooling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Wrench className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-typography-primary">
                        Systems &amp; Tooling
                      </h3>
                      <p className="font-mono text-xs text-typography-muted">
                        Automation &amp; Machine Intelligence
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-typography-muted">02.3</span>
                </div>

                <p className="text-sm text-typography-secondary mb-6 leading-relaxed">
                  Streamlined DevOps and developer environments incorporating agentic AI orchestration, browser verification, and reliable Linux systems.
                </p>

                {/* Tech Pills */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Git & Version Workflows', detail: 'Branching discipline, CI/CD actions, review rigour' },
                    { name: 'Linux Systems & Shell', detail: 'Daemon orchestration, server tuning, and deployment' },
                    { name: 'AI & Agentic Development', detail: 'Autonomous agents, workflow scripts, rapid prototyping' },
                    { name: 'Vite & Playwright', detail: 'Sub-second HMR, bundling, automated browser verification' },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs text-typography-primary font-semibold">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {tech.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/60" strokeWidth={1.5} />
                      </div>
                      <p className="text-[11px] text-typography-muted mt-1 font-mono">
                        {tech.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 font-mono text-xs text-typography-muted flex items-center justify-between">
                <span>REPRODUCIBLE</span>
                <span className="text-emerald-400">AUTOMATED AUDITS</span>
              </div>
            </div>
          </DoubleBezelCard>
        </motion.div>
      </div>

      {/* Futuristic Dual-Row Velocity Marquee (Opposite Directions) */}
      <div className="relative overflow-hidden py-8 border-y border-white/5 bg-obsidian-surface/30 rounded-3xl">
        {/* Soft edge masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4">
          {/* Row 1: Leftward Marquee */}
          <div className="flex gap-4 w-max animate-marquee">
            {[...STACK_ROW_1, ...STACK_ROW_1, ...STACK_ROW_1].map((tech, i) => (
              <div
                key={`row1-${tech}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-obsidian-card border border-white/10 text-xs font-mono text-typography-secondary whitespace-nowrap hover:border-accent-cyan/50 hover:text-typography-primary transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-glow-cyan" />
                <span className="font-semibold text-typography-primary">{tech}</span>
              </div>
            ))}
          </div>

          {/* Row 2: Rightward Reverse Marquee */}
          <div className="flex gap-4 w-max animate-marquee-reverse">
            {[...STACK_ROW_2, ...STACK_ROW_2, ...STACK_ROW_2].map((tech, i) => (
              <div
                key={`row2-${tech}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-obsidian-card border border-white/10 text-xs font-mono text-typography-secondary whitespace-nowrap hover:border-accent-indigo/50 hover:text-typography-primary transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo shadow-glow-indigo" />
                <span className="font-semibold text-typography-primary">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
