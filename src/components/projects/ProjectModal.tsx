import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Lock, CheckCircle, ShieldCheck } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { MagneticButton } from '../common/MagneticButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-void/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl h-full bg-obsidian-surface border-l border-white/10 p-6 md:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Header / Dismiss */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] uppercase tracking-wider text-typography-secondary">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-typography-muted">
                    {project.year}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-typography-secondary hover:text-typography-primary hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-8 mb-4 space-y-1">
                <h3
                  id="modal-project-title"
                  className="font-display font-bold text-3xl md:text-4xl text-typography-primary tracking-tight"
                >
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-typography-muted">
                  {project.subtitle}
                </p>
              </div>

              {/* High-Resolution Project Photography */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden my-6 border border-white/10 bg-obsidian-void">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Pill */}
              <div className="mb-8">
                {project.isPrivate ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-typography-secondary font-mono text-xs">
                    <Lock className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.5} />
                    <span>Private Client / Enterprise Repository (Protected Under NDA)</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                    <span>Public / Open-Source Repository Available</span>
                  </div>
                )}
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-typography-muted mb-3">
                  Applied Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-obsidian-card border border-white/10 font-mono text-xs text-typography-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-8 space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-typography-muted">
                  System Overview
                </h4>
                <p className="text-typography-secondary leading-relaxed text-sm md:text-base font-normal">
                  {project.overview}
                </p>
              </div>

              {/* Architecture Details */}
              <div className="mb-8 space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-typography-muted">
                  Architectural Pillars
                </h4>
                <div className="space-y-2.5">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-typography-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8 space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-typography-muted">
                  Key Technical Features
                </h4>
                <div className="space-y-2.5">
                  {project.keyFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-typography-secondary">
                      <CheckCircle className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 mt-8">
              {project.githubUrl ? (
                <MagneticButton
                  variant="primary"
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" strokeWidth={1.5} />
                    View Repository
                  </span>
                </MagneticButton>
              ) : (
                <div className="font-mono text-xs text-typography-muted flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-typography-muted" strokeWidth={1.5} />
                  <span>Code demonstrated confidentially on request</span>
                </div>
              )}

              {project.liveUrl && (
                <MagneticButton
                  variant="secondary"
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                    Live Deploy
                  </span>
                </MagneticButton>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
