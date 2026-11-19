import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  showArrow?: boolean;
  arrowClassName?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = true,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  ...props
}) => {
  const magneticRef = useMagnetic<HTMLDivElement>({ strength: 0.25 });

  const baseStyles =
    'group relative inline-flex items-center gap-3 rounded-full font-medium transition-all duration-300 text-sm tracking-tight active:scale-[0.98] select-none';

  const variantStyles = {
    primary:
      'bg-typography-primary text-obsidian px-5 py-2.5 hover:bg-white shadow-glow-cyan/20 border border-transparent',
    secondary:
      'bg-obsidian-surface text-typography-primary px-5 py-2.5 border border-white/10 hover:border-white/25 hover:bg-obsidian-card',
    ghost:
      'text-typography-secondary hover:text-typography-primary px-4 py-2 hover:bg-white/5',
  };

  const content = (
    <div
      ref={magneticRef}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            variant === 'primary' ? 'bg-obsidian/10 text-obsidian' : 'bg-white/10 text-typography-primary'
          }`}
        >
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </span>
      )}
    </div>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button {...props} className="inline-block bg-transparent p-0 border-0">
      {content}
    </button>
  );
};
