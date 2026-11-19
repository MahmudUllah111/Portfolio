import React, { useState, useEffect } from 'react';
import { ArrowUp, Copy, Check, Github, Linkedin } from 'lucide-react';
import { useLenis } from '../../hooks/useLenis';
import { MagneticButton } from '../common/MagneticButton';
import { useToast } from '../common/Toast';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();
  const { showToast } = useToast();
  const [liveTime, setLiveTime] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const email = 'mahmudullah111@gmail.com';

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    showToast('Email Copied', 'mahmudullah111@gmail.com copied to clipboard', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative border-t border-white/10 bg-obsidian-void pt-20 pb-12 px-4 sm:px-6 md:px-8 select-none overflow-hidden">
      <div className="max-w-[1380px] w-[92%] mx-auto">
        {/* Top Architectural Row: 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Bio & Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-typography-primary">
                MAHMUD.
              </span>
            </div>
            <p className="text-xs text-typography-secondary leading-relaxed font-normal">
              Full-Stack Web Developer &amp; Systems Architect specializing in high-scale relational platforms, custom modular CMS engines, and 60fps editorial interfaces.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-typography-muted uppercase tracking-wider">
                Available for Select Work
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-typography-muted block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              {[
                { label: 'About // Philosophy', href: '#about' },
                { label: 'Work // Selected Projects', href: '#work' },
                { label: 'Stack // Arsenal', href: '#stack' },
                { label: 'Experience // Milestones', href: '#experience' },
                { label: 'Contact // Transmission', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href, { offset: -30 });
                    }}
                    className="text-typography-secondary hover:text-typography-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect Links */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-typography-muted block">
              CONNECT
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a
                  href="https://github.com/MahmudUllah111?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-typography-secondary hover:text-typography-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-typography-secondary hover:text-typography-primary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
              <li>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-typography-secondary hover:text-typography-primary transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Direct Email</span>
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dhaka BST Time & Back to Top */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-typography-muted block">
                LOCAL TELEMETRY
              </span>
              <p className="font-mono text-sm text-typography-primary font-semibold">
                DHAKA, BANGLADESH
              </p>
              <p className="font-mono text-xs text-typography-secondary">
                {liveTime || '12:00:00 PM'} (UTC+6 BST)
              </p>
            </div>

            <MagneticButton
              variant="secondary"
              onClick={() => scrollTo('#hero', { duration: 1.5 })}
              showArrow={false}
              className="px-5 py-2.5 font-mono text-xs uppercase tracking-wider self-start"
            >
              <span className="flex items-center gap-2">
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-typography-primary" strokeWidth={2} />
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Architectural Vector Wordmark (Scales 100% width, NEVER clips) */}
        <div className="w-full py-8 sm:py-12 flex justify-center items-center overflow-hidden">
          <svg
            viewBox="0 0 2000 160"
            className="w-full h-auto text-white/[0.06] hover:text-white/[0.1] transition-colors duration-700 pointer-events-none select-none"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="125"
              textAnchor="middle"
              textLength="1800"
              lengthAdjust="spacingAndGlyphs"
              fontFamily="Syne, Space Grotesk, sans-serif"
              fontWeight="900"
              fontSize="125"
              letterSpacing="-1"
              fill="currentColor"
            >
              MAHMUD ULLAH
            </text>
          </svg>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-typography-muted">
          <div>
            &copy; {new Date().getFullYear()} A.F.M Mahmud Ullah. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>ENGINEERED WITH REACT 19 &amp; TYPESCRIPT</span>
            <span>·</span>
            <span className="text-typography-secondary">60FPS EDITORIAL MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
