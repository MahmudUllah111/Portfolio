import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, ALL_SKILLS_LIST } from '../../data/skills';
import { DoubleBezelCard } from '../common/DoubleBezelCard';

export const TechArsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4 text-accent-cyan" strokeWidth={1.5} />,
    backend: <Server className="w-4 h-4 text-accent-indigo" strokeWidth={1.5} />,
    tools: <Wrench className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />,
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="stack" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col items-start gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            Technical Stack
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-typography-primary">
            Technical Arsenal
          </h2>
          <p className="text-typography-secondary text-base md:text-lg max-w-xl">
            A battle-tested spectrum of languages, frameworks, and engineering tools leveraged in client &amp; enterprise production.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-obsidian-surface border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'tools', label: 'Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-typography-primary text-obsidian font-semibold shadow-inner'
                  : 'text-typography-secondary hover:text-typography-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <DoubleBezelCard className="h-full">
                <div className="flex flex-col justify-between h-full gap-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        {categoryIcons[category.id]}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-typography-primary">
                          {category.title}
                        </h3>
                        <p className="text-xs text-typography-muted font-mono">
                          {category.skills.length} core technologies
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-typography-secondary mb-6 leading-relaxed">
                      {category.subtitle}
                    </p>

                    {/* Skill List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/item flex flex-col gap-0.5 p-2 rounded-xl hover:bg-white/[0.03] transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm font-medium text-typography-primary flex items-center gap-2">
                              {skill.primary && (
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                              )}
                              {skill.name}
                            </span>
                            {skill.primary && (
                              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                                Primary
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-typography-muted leading-relaxed">
                            {skill.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[11px] text-typography-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={1.5} />
                    <span>Production verified</span>
                  </div>
                </div>
              </DoubleBezelCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Kinetic Infinite Dual-Direction Marquee Strip */}
      <div className="relative overflow-hidden py-6 border-y border-white/5 bg-obsidian-surface/40 select-none">
        {/* Soft edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        {/* Track 1: Leftward Marquee */}
        <div className="flex gap-4 w-max animate-marquee">
          {[...ALL_SKILLS_LIST, ...ALL_SKILLS_LIST].map((skill, index) => (
            <div
              key={`track1-${skill}-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-card border border-white/10 text-xs font-mono text-typography-secondary whitespace-nowrap hover:border-accent-cyan/40 hover:text-typography-primary transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
