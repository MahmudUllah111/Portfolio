import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';
import { MagneticButton } from '../common/MagneticButton';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();

  return (
    <footer className="relative border-t border-white/10 bg-obsidian-void pt-20 pb-12 px-4 sm:px-6 md:px-8 overflow-hidden select-none">
      <div className="max-w-[1380px] w-[92%] mx-auto flex flex-col justify-between gap-16">
        {/* Top Row: Brand Monogram & Magnetic Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-extrabold text-2xl tracking-tighter text-typography-primary">
              MAHMUD
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
            <span className="font-mono text-xs text-typography-muted ml-2">
              Full-Stack Web Developer &amp; Systems Architect
            </span>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo('#hero', { duration: 1.5 })}
            showArrow={false}
            className="px-6 py-2.5 font-mono text-xs uppercase tracking-wider self-start sm:self-auto"
          >
            <span className="flex items-center gap-2">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={2} />
            </span>
          </MagneticButton>
        </div>

        {/* Clean Scaling Footer Wordmark (Zero Overflow / Clipping) */}
        <div className="w-full overflow-hidden py-6 border-y border-white/5 flex justify-center items-center">
          <h2 className="font-display font-black text-[clamp(2.5rem,9.5vw,10rem)] whitespace-nowrap w-full text-center leading-none text-white/[0.05] uppercase tracking-tight hover:text-white/[0.1] transition-colors duration-700 pointer-events-none select-none">
            A.F.M MAHMUD
          </h2>
        </div>

        {/* Bottom Row: Metadata & Colophon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-typography-muted">
          <div>
            &copy; {new Date().getFullYear()} A.F.M Mahmud Ullah. Engineered with React 19, TypeScript, Lenis &amp; GSAP.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-accent-cyan">DHAKA // UTC+6</span>
            <span>·</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
