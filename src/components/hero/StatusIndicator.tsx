import React from 'react';

export const StatusIndicator: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-surface/90 border border-white/10 shadow-inner-bezel select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan shadow-glow-cyan" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-typography-secondary">
        Available for Select Projects & Collaborations
      </span>
    </div>
  );
};
