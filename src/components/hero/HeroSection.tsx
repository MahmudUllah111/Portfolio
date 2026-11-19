import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { MagneticButton } from '../common/MagneticButton';
import { useLenis } from '../../hooks/useLenis';
import { HeroScene3D } from '../canvas/HeroScene3D';
import { PerspectiveHeading } from '../common/PerspectiveHeading';

export const HeroSection: React.FC = () => {
  const { scrollTo } = useLenis();
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLiveTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none overflow-hidden"
    >
      {/* Real Interactive 3D WebGL Sculpture Layer (MotionSite / GSAP Vault grade) */}
      <HeroScene3D />

      {/* Top Editorial Telemetry Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 font-mono text-xs text-typography-muted"
      >
        <div className="flex items-center gap-2 text-typography-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">
            FULL-STACK ENGINEER &amp; SYSTEMS ARCHITECT
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="text-typography-secondary font-medium">
              DHAKA, BD — {liveTime || '12:00:00 PM'} (UTC+6)
            </span>
          </div>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline uppercase text-typography-muted tracking-wider">
            FIRST-PRINCIPLES CRAFT
          </span>
        </div>
      </motion.div>

      {/* Main Full-Width Editorial Typography Moment with 3D Perspective */}
      <div className="relative z-10 my-auto py-12 md:py-20 flex flex-col items-start gap-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StatusIndicator />
        </motion.div>

        {/* 3D Perspective Split-Text Animated Headline (Zero AI Gradient Text) */}
        <div className="space-y-1">
          <PerspectiveHeading
            as="h1"
            text="A.F.M Mahmud Ullah"
            triggerOnScroll={false}
            delay={0.15}
            className="font-display font-extrabold text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.04em] text-typography-primary uppercase"
          />
        </div>

        {/* Crisp Editorial Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-typography-secondary leading-relaxed max-w-[62ch] font-normal"
        >
          Specialized in high-scale relational web architectures, custom modular CMS engines, and 60fps editorial interfaces built with production rigor.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollTo('#work', { offset: -30 })}
            className="px-8 py-4 text-xs uppercase tracking-widest font-bold"
          >
            Explore Selected Work
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            as="a"
            href="https://github.com/MahmudUllah111?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            showArrow={true}
            className="px-7 py-4 text-xs uppercase tracking-widest font-semibold"
          >
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4 text-typography-primary" strokeWidth={1.5} />
              GitHub Repositories
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom Architectural Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-typography-muted"
      >
        <div className="flex flex-col gap-1">
          <span className="uppercase text-typography-secondary font-medium tracking-wider">
            01 // ARCHITECTURE
          </span>
          <span className="text-typography-muted">
            Relational DBs, Custom CMS &amp; REST APIs
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="uppercase text-typography-secondary font-medium tracking-wider">
            02 // RELATIONAL SCALE
          </span>
          <span className="text-typography-muted">
            Enterprise Platforms &amp; Cultural Archives
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:items-end justify-between">
          <button
            onClick={() => scrollTo('#about', { offset: -30 })}
            className="flex items-center gap-2 text-typography-primary hover:text-white transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-wider font-semibold">DISCOVER SYSTEMS PHILOSOPHY</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
