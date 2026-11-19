import React from 'react';

interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export const DoubleBezelCard: React.FC<DoubleBezelCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  ...props
}) => {
  return (
    <div
      className={`group relative rounded-[2rem] p-1.5 md:p-2 bg-white/[0.03] border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ${className}`}
      {...props}
    >
      <div
        className={`relative h-full w-full rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] bg-obsidian-surface p-6 md:p-8 border border-white/5 shadow-inner-bezel overflow-hidden transition-colors duration-500 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
