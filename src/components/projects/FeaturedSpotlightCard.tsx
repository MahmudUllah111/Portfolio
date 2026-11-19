import React from 'react';
import { Lock, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface FeaturedSpotlightCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const FeaturedSpotlightCard: React.FC<FeaturedSpotlightCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      data-cursor="explore"
      className="group col-span-12 mb-10 border border-white/10 rounded-2xl md:rounded-3xl bg-obsidian-surface overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer shadow-subtle-elevation"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Full-Bleed High-Resolution Curated Photography (Col 7) */}
        <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] overflow-hidden bg-obsidian-void">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Editorial dark gradient vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-obsidian-surface via-obsidian-surface/30 to-transparent opacity-80"
          />

          {/* Top Overlaid Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-typography-primary font-medium tracking-wider">
              FEATURED SPOTLIGHT // 01
            </span>
          </div>

          {/* Bottom Overlaid Metadata */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Case Study Editorial Details (Col 5) */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-typography-secondary">
                <Lock className="w-3 h-3 text-amber-400" strokeWidth={1.5} />
                <span>Enterprise / Confidential Build</span>
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2 mb-4">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-typography-primary tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-typography-muted">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-typography-secondary leading-relaxed text-sm md:text-base mb-6 font-normal">
              {project.overview}
            </p>

            {/* Architectural Pillars */}
            <div className="space-y-2 mb-6">
              {project.architecture.slice(0, 3).map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-typography-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0 mt-2" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Tech Stack & CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[11px] text-typography-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-typography-primary font-semibold group-hover:translate-x-1 transition-transform">
              <span>Inspect Architecture</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
