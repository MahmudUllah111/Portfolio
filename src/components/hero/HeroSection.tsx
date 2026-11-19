import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Terminal, Sparkles } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { HeroCenterpiece } from './HeroCenterpiece';
import { MagneticButton } from '../common/MagneticButton';
import { BorderBeam } from '../common/BorderBeam';
import { useLenis } from '../../hooks/useLenis';

export const HeroSection: React.FC = () => {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[500px] bg-gradient-to-tr from-accent-cyan/15 via-accent-indigo/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* 2-Column Asymmetrical Grid Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto w-full">
        {/* Left Column: 60% (Col 7) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 md:gap-7">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <StatusIndicator />
          </motion.div>

          {/* Mask-Reveal Kinetic Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[clamp(3.25rem,6.5vw,6.25rem)] leading-[0.95] tracking-[-0.04em] text-typography-primary"
            >
              A.F.M Mahmud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-typography-primary via-white to-accent-cyan">
                Ullah
              </span>
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-accent-cyan font-mono text-sm sm:text-base md:text-lg font-medium tracking-tight"
          >
            <Terminal className="w-4 h-4 text-accent-cyan" strokeWidth={1.5} />
            <span>Full-Stack Web Developer &amp; Systems Architect</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-typography-secondary leading-relaxed max-w-[55ch]"
          >
            Crafting high-scale relational web systems, modular CMS architectures, and razor-sharp 60fps digital experiences.
          </motion.p>

          {/* Dual Magnetic Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary CTA with animated Traveling Border Beam */}
            <div className="relative group overflow-hidden rounded-full p-[1px]">
              <BorderBeam size={160} duration={6} borderWidth={1.5} colorFrom="#00F0FF" colorTo="#6366F1" />
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo('#work', { offset: -30 })}
                className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
              >
                Explore Work
              </MagneticButton>
            </div>

            {/* Secondary CTA: GitHub */}
            <MagneticButton
              variant="secondary"
              as="a"
              href="https://github.com/MahmudUllah111?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              showArrow={true}
              className="px-6 py-3.5 text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-typography-primary" strokeWidth={1.5} />
                GitHub
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 40% (Col 5) - Interactive 3D Geodesic Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <HeroCenterpiece />
        </motion.div>
      </div>

      {/* Hero Footer Meta & Scroll Telemetry */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center justify-between pt-8 border-t border-white/5 font-mono text-xs text-typography-muted"
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-typography-secondary">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={1.5} />
            <span>DHAKA, BANGLADESH</span>
          </span>
          <span className="hidden sm:inline">LAT 23.8103° N</span>
          <span className="hidden sm:inline">LON 90.4125° E</span>
        </div>

        <button
          onClick={() => scrollTo('#about', { offset: -30 })}
          className="flex items-center gap-2 text-typography-secondary hover:text-accent-cyan transition-colors group cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="uppercase tracking-widest text-[11px]">SCROLL // 01</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
        </button>
      </motion.div>
    </section>
  );
};
