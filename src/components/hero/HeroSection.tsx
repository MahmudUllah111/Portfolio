import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { MagneticButton } from '../common/MagneticButton';
import { useLenis } from '../../hooks/useLenis';

export const HeroSection: React.FC = () => {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full select-none"
    >
      {/* Subtle Ambient Radial Glow Behind Hero */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[450px] bg-gradient-to-tr from-accent-cyan/10 via-accent-indigo/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"
      />

      {/* Main Content Area */}
      <div className="flex flex-col items-start gap-6 max-w-4xl my-auto">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <StatusIndicator />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-typography-primary">
            A.F.M Mahmud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-typography-primary via-white to-accent-cyan">
              Ullah
            </span>
          </h1>
          <p className="font-mono text-sm sm:text-base md:text-lg text-accent-cyan tracking-tight font-medium mt-2">
            Full-Stack Web Developer &amp; Systems Architect
          </p>
        </motion.div>

        {/* Tagline (Under 20 words as required by design guidelines) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-typography-secondary leading-relaxed max-w-[55ch]"
        >
          Crafting scalable solutions, pushing technical boundaries, and redefining digital possibilities.
        </motion.p>

        {/* Dual Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollTo('#work', { offset: -30 })}
            className="px-6 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Explore Work
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            as="a"
            href="https://github.com/MahmudUllah111?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            showArrow={true}
            className="px-6 py-3 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4 text-typography-primary" strokeWidth={1.5} />
              GitHub
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Hero Footer Meta & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center justify-between pt-8 border-t border-white/5 font-mono text-[11px] text-typography-muted"
      >
        <div className="flex items-center gap-6">
          <span>LAT 23.8103° N</span>
          <span className="hidden sm:inline">LON 90.4125° E</span>
          <span className="text-accent-cyan font-medium">DHAKA, BANGLADESH</span>
        </div>

        <button
          onClick={() => scrollTo('#about', { offset: -30 })}
          className="flex items-center gap-2 text-typography-secondary hover:text-accent-cyan transition-colors group cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="uppercase tracking-widest text-[10px]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
        </button>
      </motion.div>
    </section>
  );
};
