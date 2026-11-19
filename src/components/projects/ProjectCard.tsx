import React from 'react';
import { Lock, ArrowUpRight, Cpu, Layers, Layout, Globe, Bot, ShieldCheck } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { DoubleBezelCard } from '../common/DoubleBezelCard';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Category-specific visual icon & accent color
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Enterprise Platform':
        return {
          icon: <Layers className="w-6 h-6 text-accent-indigo" strokeWidth={1.5} />,
          badgeColor: 'text-accent-indigo',
          gradient: 'from-accent-indigo/20 via-obsidian-surface to-transparent',
        };
      case 'Client Platform':
        return {
          icon: <Layout className="w-6 h-6 text-accent-cyan" strokeWidth={1.5} />,
          badgeColor: 'text-accent-cyan',
          gradient: 'from-accent-cyan/20 via-obsidian-surface to-transparent',
        };
      case 'Brand Experience':
        return {
          icon: <Globe className="w-6 h-6 text-purple-400" strokeWidth={1.5} />,
          badgeColor: 'text-purple-400',
          gradient: 'from-purple-500/20 via-obsidian-surface to-transparent',
        };
      case 'Thesis & Robotics':
        return {
          icon: <Bot className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />,
          badgeColor: 'text-emerald-400',
          gradient: 'from-emerald-500/20 via-obsidian-surface to-transparent',
        };
      default:
        return {
          icon: <Cpu className="w-6 h-6 text-accent-cyan" strokeWidth={1.5} />,
          badgeColor: 'text-accent-cyan',
          gradient: 'from-accent-cyan/20 via-obsidian-surface to-transparent',
        };
    }
  };

  const theme = getCategoryTheme(project.category);

  return (
    <DoubleBezelCard
      onClick={() => onSelect(project)}
      className="cursor-pointer group flex flex-col justify-between h-full"
      innerClassName="p-6 md:p-8 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-6">
        {/* Futuristic Visual Mockup Header / Blueprint Frame */}
        <div className="relative aspect-[16/9] w-full rounded-2xl bg-obsidian-void border border-white/10 overflow-hidden flex flex-col justify-between p-4 shadow-inner group/header">
          {/* Subtle Cyber Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none group-hover/header:scale-105 transition-transform duration-500"
          />

          {/* Ambient Corner Mesh Glow */}
          <div
            aria-hidden="true"
            className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${theme.gradient} blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Browser / Terminal Chrome Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="ml-2 font-mono text-[10px] text-typography-muted truncate max-w-[140px]">
                {project.slug}.sys
              </span>
            </div>

            {project.isPrivate ? (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-typography-muted">
                <Lock className="w-2.5 h-2.5 text-amber-400" strokeWidth={1.5} />
                <span>NDA Protected</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-400">
                <ShieldCheck className="w-2.5 h-2.5" strokeWidth={1.5} />
                <span>Public Repo</span>
              </span>
            )}
          </div>

          {/* Center Graphic & Hover "Inspect Architecture" Pill */}
          <div className="relative my-auto flex flex-col items-center justify-center gap-2 z-10 text-center py-2">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              {theme.icon}
            </div>

            {/* Hover Floating Magnetic Badge */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-obsidian text-xs font-mono font-bold shadow-glow-cyan">
              <span>Inspect Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
          </div>

          {/* Bottom Telemetry Mini-Bar */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9px] text-typography-muted">
            <span className="uppercase">{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Text Details Area */}
        <div>
          <div className="space-y-1.5 mb-3">
            <h3 className="font-display font-bold text-2xl text-typography-primary tracking-tight group-hover:text-accent-cyan transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-typography-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
            </h3>
            <p className="text-xs font-mono text-accent-cyan">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-typography-secondary leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Tech Stack Badges */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap gap-1.5 mt-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 font-mono text-[11px] text-typography-secondary group-hover:border-white/15 group-hover:text-typography-primary transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </DoubleBezelCard>
  );
};
