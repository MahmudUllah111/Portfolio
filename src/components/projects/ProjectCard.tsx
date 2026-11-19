import React from 'react';
import { Lock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group flex flex-col justify-between h-full rounded-2xl bg-obsidian-surface border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer shadow-subtle-elevation"
    >
      <div>
        {/* Full-Bleed High-Resolution Curated Photography (aspect 16/10) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-void">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Vignette & Badges */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-obsidian-surface via-obsidian-surface/20 to-transparent opacity-80"
          />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-typography-secondary font-medium tracking-wider">
              {project.category}
            </span>

            {project.isPrivate ? (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300/90">
                <Lock className="w-2.5 h-2.5 text-amber-400" strokeWidth={1.5} />
                <span>NDA Protected</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" strokeWidth={1.5} />
                <span>Public Source</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-4 font-mono text-xs text-white/70">
            {project.year}
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-2xl text-typography-primary tracking-tight group-hover:text-white transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-typography-muted group-hover:text-typography-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
            </h3>
            <p className="text-xs font-mono text-typography-muted">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-typography-secondary leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Tech Stack Badges */}
      <div className="px-6 md:px-8 pb-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[11px] text-typography-muted group-hover:text-typography-secondary transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
