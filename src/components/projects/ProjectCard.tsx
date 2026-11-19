import React from 'react';
import { Lock, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { DoubleBezelCard } from '../common/DoubleBezelCard';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <DoubleBezelCard
      onClick={() => onSelect(project)}
      className="cursor-pointer group flex flex-col justify-between"
    >
      <div className="flex flex-col h-full justify-between gap-6">
        {/* Card Header: Category & Year & Badge */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-accent-cyan tracking-wider">
                {project.category}
              </span>
              <span className="text-typography-muted text-xs font-mono">· {project.year}</span>
            </div>

            {project.isPrivate ? (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-typography-secondary">
                <Lock className="w-2.5 h-2.5 text-amber-400" strokeWidth={1.5} />
                <span>Enterprise</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <span>Open Source</span>
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5 mb-4">
            <h3 className="font-display font-bold text-2xl text-typography-primary tracking-tight group-hover:text-accent-cyan transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-typography-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
            </h3>
            <p className="text-xs font-mono text-typography-muted">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-typography-secondary line-clamp-3 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Tech Stack Badges */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 font-mono text-[11px] text-typography-secondary"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-white/[0.04] font-mono text-[11px] text-typography-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </DoubleBezelCard>
  );
};
