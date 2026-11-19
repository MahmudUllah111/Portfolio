import React from 'react';

export const StatusIndicator: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-surface border border-white/10 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-typography-secondary font-medium">
        Available for Select Projects &amp; Systems Consulting
      </span>
    </div>
  );
};
