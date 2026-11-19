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
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      <div className="relative min-h-[100dvh] bg-obsidian text-typography-primary selection:bg-accent-cyan/20 selection:text-accent-cyan">
        {/* Scroll Progress Bar */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-cyan z-[9995] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

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
