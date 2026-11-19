import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Lock, ShieldCheck, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { PerspectiveHeading } from '../common/PerspectiveHeading';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const track = trackRef.current;
    const pin = pinRef.current;
    const progressBar = progressBarRef.current;
    if (!track || !pin) return;

    // Use GSAP matchMedia to only enable pinning on desktop viewports (>= 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return trackWidth - window.innerWidth + 140;
      };

      const scrollAmount = getScrollAmount();

      const horizontalTween = gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update current active card index (1 to 7)
            const idx = Math.min(
              PROJECTS.length,
              Math.max(1, Math.round(self.progress * (PROJECTS.length - 1)) + 1)
            );
            setCurrentIndex(idx);

            // Update progress scrubber bar
            if (progressBar) {
              progressBar.style.width = `${Math.round(self.progress * 100)}%`;
            }

            // Velocity-based dynamic 3D skew
            const velocity = self.getVelocity();
            const skew = gsap.utils.clamp(-4.5, 4.5, velocity / 320);
            gsap.to(track, {
              skewX: skew,
              duration: 0.25,
              ease: 'power2.out',
              overwrite: 'auto',
            });

            // Parallax shift on all card image layers
            const cardImages = track.querySelectorAll<HTMLImageElement>('.parallax-img');
            cardImages.forEach((img) => {
              const rect = img.getBoundingClientRect();
              const offset = (rect.left / window.innerWidth - 0.5) * 40;
              img.style.transform = `scale(1.1) translateX(${offset * 0.4}px)`;
            });
          },
        },
      });

      return () => {
        horizontalTween.kill();
        gsap.set(track, { clearProps: 'all' });
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReduced]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative select-none bg-obsidian-void border-t border-white/10"
    >
      {/* Pinned Desktop Viewport Container */}
      <div
        ref={pinRef}
        className="w-full lg:h-screen lg:overflow-hidden flex flex-col justify-between py-16 md:py-20 lg:py-12"
      >
        {/* Top Header & Telemetry Bar */}
        <div className="max-w-[1380px] w-[92%] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>03 // SELECTED WORK &amp; CASE STUDIES</span>
            </div>
            <PerspectiveHeading
              text="Featured Projects"
              className="font-display font-bold text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[0.98] tracking-tight text-typography-primary uppercase"
            />
          </div>

          {/* Desktop Live Progress Scrubber HUD */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end gap-1.5 font-mono text-xs text-typography-muted">
              <div className="flex items-center gap-2">
                <span className="text-typography-primary font-bold">
                  PROJECT 0{currentIndex}
                </span>
                <span className="text-white/20">/</span>
                <span>0{PROJECTS.length}</span>
              </div>
              <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white transition-all duration-100 ease-out"
                  style={{ width: `${(currentIndex / PROJECTS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-typography-muted font-mono text-xs">
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                <span>SCROLL HORIZONTALLY</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Track (Glides smoothly on desktop; wraps vertically on mobile) */}
        <div className="w-full overflow-hidden my-auto py-8">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-8 md:gap-10 w-full lg:w-max px-4 sm:px-6 md:px-8 lg:px-16 items-stretch will-change-transform"
          >
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="explore"
                className="group w-full lg:w-[620px] xl:w-[680px] flex-shrink-0 flex flex-col justify-between rounded-2xl md:rounded-3xl bg-obsidian-surface border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500 cursor-pointer shadow-subtle-elevation"
              >
                {/* Visual Image Header with Parallax */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-void">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="parallax-img w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />

                  {/* Dark Vignette Overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-obsidian-surface via-obsidian-surface/20 to-transparent opacity-85"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-typography-primary font-medium tracking-wider">
                      {project.category}
                    </span>

                    {project.isPrivate ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-amber-300">
                        <Lock className="w-3 h-3 text-amber-400" strokeWidth={1.5} />
                        <span>NDA Protected</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" strokeWidth={1.5} />
                        <span>Public Source</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Counter & Year */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/70">
                    <span>CASE STUDY 0{idx + 1}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-typography-primary tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all">
                        <ArrowUpRight className="w-4 h-4 text-typography-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                    <p className="font-mono text-xs text-typography-muted">
                      {project.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-typography-secondary leading-relaxed pt-2 line-clamp-3 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[11px] text-typography-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Bottom Helper Cue */}
        <div className="max-w-[1380px] w-[92%] mx-auto pt-4 flex items-center justify-between font-mono text-xs text-typography-muted border-t border-white/10">
          <span>{PROJECTS.length} PRODUCTION CASE STUDIES</span>
          <span className="hidden sm:inline">CLICK ANY CARD TO INSPECT ARCHITECTURE DEEP DIVE</span>
        </div>
      </div>

      {/* Case Study Deep-Dive Slide-Over Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsShowcase;
