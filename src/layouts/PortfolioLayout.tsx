import React, { useEffect, useState } from 'react';
import { useLenis } from '../hooks/useLenis';
import { AmbientGridCanvas } from '../components/canvas/AmbientGridCanvas';
import { NoiseOverlay } from '../components/common/NoiseOverlay';
import { CustomCursor } from '../components/common/CustomCursor';
import { ToastProvider } from '../components/common/Toast';

export const PortfolioLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLenis();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.round((window.scrollY / totalScroll) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedPercent = scrollProgress.toString().padStart(3, '0');

  return (
    <ToastProvider>
      <div className="relative min-h-[100dvh] bg-obsidian text-typography-primary selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden">
        {/* Scroll Progress Bar at very top */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-cyan z-[9995] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Live Scroll Telemetry HUD Widget (Fixed in desktop corner) */}
        <div
          aria-hidden="true"
          className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-surface/80 border border-white/10 backdrop-blur-md shadow-inner-bezel font-mono text-[10px] text-typography-secondary pointer-events-none select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>SCROLL // {formattedPercent}%</span>
        </div>

        {/* Ambient background canvas */}
        <AmbientGridCanvas />

        {/* Noise overlay for tactile film depth */}
        <NoiseOverlay />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Main Content Viewport */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </div>
    </ToastProvider>
  );
};
