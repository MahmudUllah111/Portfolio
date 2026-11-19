import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { MagneticButton } from '../common/MagneticButton';
import { useLenis } from '../../hooks/useLenis';

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
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none"
    >
      {/* Top Editorial Telemetry Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 font-mono text-xs text-typography-muted"
      >
        <div className="flex items-center gap-2 text-typography-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="uppercase tracking-widest font-semibold">FULL-STACK ENGINEER &amp; SYSTEMS ARCHITECT</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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

      {/* Main Full-Width Editorial Typography Moment */}
      <div className="my-auto py-12 md:py-20 flex flex-col items-start gap-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StatusIndicator />
        </motion.div>

        {/* Massive, Razor-Sharp Off-White Headline (Zero AI Gradient Text) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1"
        >
          <h1 className="font-display font-extrabold text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.04em] text-typography-primary uppercase">
            A.F.M Mahmud <br />
            <span className="text-typography-primary">Ullah</span>
          </h1>
        </motion.div>

        {/* Crisp Editorial Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-typography-secondary leading-relaxed max-w-[62ch] font-normal"
        >
          Specialized in high-scale relational web architectures, custom modular CMS engines, and 60fps editorial interfaces built with production rigor.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Bottom Editorial Meta Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center justify-between pt-8 border-t border-white/10 font-mono text-xs text-typography-muted"
      >
        <div className="flex items-center gap-6">
          <span>LAT 23.8103° N // LON 90.4125° E</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-typography-secondary">
            LARAVEL / REACT / TYPESCRIPT / INERTIA
          </span>
        </div>

        <button
          onClick={() => scrollTo('#about', { offset: -30 })}
          className="flex items-center gap-2 text-typography-secondary hover:text-typography-primary transition-colors group cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="uppercase tracking-widest text-[11px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
        </button>
      </motion.div>
    </section>
  );
};
