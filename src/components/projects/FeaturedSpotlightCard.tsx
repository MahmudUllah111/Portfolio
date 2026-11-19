import React from 'react';
import { Lock, Database } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { DoubleBezelCard } from '../common/DoubleBezelCard';
import { BorderBeam } from '../common/BorderBeam';
import { MagneticButton } from '../common/MagneticButton';

interface FeaturedSpotlightCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const FeaturedSpotlightCard: React.FC<FeaturedSpotlightCardProps> = ({ project, onSelect }) => {
  return (
    <div className="relative group col-span-12 mb-8">
      {/* Traveling Border Beam on the Featured Spotlight Card */}
      <BorderBeam size={350} duration={12} borderWidth={2} colorFrom="#00F0FF" colorTo="#6366F1" />

      <DoubleBezelCard
        onClick={() => onSelect(project)}
        className="cursor-pointer"
        innerClassName="p-6 sm:p-8 md:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Mockup / Cyber Blueprint Viewport (Col 6) */}
          <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[380px] rounded-2xl bg-obsidian-void border border-white/10 overflow-hidden flex flex-col justify-between p-4 sm:p-6 shadow-2xl group/preview">
            {/* Visual Header / Browser Chrome */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] text-typography-muted">
                  ARCHIVE_SYS_V2.4 // LIBERATION_WAR_MUSEUM
                </span>
              </div>
              <span className="font-mono text-[10px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                LIVE PRODUCTION
              </span>
            </div>

            {/* Futuristic Blueprint Cyber Grid Background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none group-hover/preview:scale-105 transition-transform duration-700"
            />

            {/* Center Graphic: Digital Museum Artifact Architecture Graphic */}
            <div className="relative my-auto flex flex-col items-center justify-center gap-3 z-10 text-center py-6">
              <div className="w-16 h-16 rounded-3xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shadow-glow-cyan/30 group-hover/preview:scale-110 transition-transform duration-500">
                <Database className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display font-bold text-lg md:text-xl text-typography-primary tracking-tight">
                  High-Scale Historical Archive &amp; CMS
                </p>
                <p className="font-mono text-xs text-accent-cyan mt-1">
                  10,000+ Records · Sub-Second Search · Modular Exhibitions
                </p>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] text-typography-muted">
              <span>SECURITY: RBAC AUTH</span>
              <span className="text-emerald-400">LATENCY: &lt; 45ms</span>
              <span>STACK: LARAVEL + REACT</span>
            </div>
          </div>

          {/* Right Column: Case Study Details (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              {/* Category, Year, Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan font-semibold tracking-wider">
                  FEATURED SPOTLIGHT // 01
                </span>
                <span className="text-typography-muted text-xs font-mono">
                  {project.category} · {project.year}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-typography-secondary">
                  <Lock className="w-3 h-3 text-amber-400" strokeWidth={1.5} />
                  <span>Enterprise / Protected Client</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-4">
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-typography-primary tracking-tight group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-accent-cyan">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-typography-secondary leading-relaxed text-base mb-6">
                {project.overview}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-2.5 mb-6">
                {project.architecture.slice(0, 3).map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-typography-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0 mt-2" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Tech Stack & CTA */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-typography-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <MagneticButton
                variant="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(project);
                }}
                className="px-6 py-2.5 text-xs uppercase font-bold tracking-wider self-start sm:self-auto"
              >
                Inspect Architecture
              </MagneticButton>
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </div>
  );
};
