import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';
import { MagneticButton } from '../common/MagneticButton';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();

  return (
    <footer className="relative border-t border-white/10 bg-obsidian-void pt-20 pb-12 px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16">
        {/* Top Row: Brand Monogram & Magnetic Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter text-typography-primary">
              MAHMUD
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
            <span className="font-mono text-xs text-typography-muted ml-3">
              Full-Stack Developer &amp; Systems Architect
            </span>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo('#hero', { duration: 1.5 })}
            showArrow={false}
            className="px-5 py-2.5 font-mono text-xs uppercase tracking-wider self-start sm:self-auto"
          >
            <span className="flex items-center gap-2">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={2} />
            </span>
          </MagneticButton>
        </div>

        {/* Giant Kinetic Display Wordmark */}
        <div className="w-full overflow-hidden py-4 border-y border-white/5">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] tracking-tighter text-white/[0.04] uppercase leading-none whitespace-nowrap hover:text-white/[0.08] transition-colors duration-700">
            A.F.M MAHMUD ULLAH
          </h2>
        </div>

        {/* Bottom Row: Metadata & Colophon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-typography-muted">
          <div>
            &copy; {new Date().getFullYear()} A.F.M Mahmud Ullah. Built with React 19, TypeScript, Lenis &amp; GSAP.
          </div>

          <div className="flex items-center gap-6">
            <span>Dhaka, BD (UTC+6)</span>
            <span>·</span>
            <span className="text-typography-secondary">Crafted for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
