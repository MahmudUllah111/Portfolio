import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: { label: string; href: string }[];
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  navItems,
  onNavigate,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 md:hidden bg-obsidian-void/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-20"
        >
          {/* Close button header */}
          <div className="absolute top-6 right-6">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-typography-primary active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 my-auto">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => onNavigate(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  className="flex items-center justify-between py-2 border-b border-white/5 group text-2xl font-display font-semibold tracking-tight"
                >
                  <span
                    className={
                      isActive
                        ? 'text-accent-cyan'
                        : 'text-typography-primary group-hover:text-accent-cyan transition-colors'
                    }
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      isActive ? 'text-accent-cyan' : 'text-typography-muted'
                    }`}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Footer & Quick Coordinates */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-xs text-typography-muted">
            <div className="flex justify-between items-center">
              <span>LOCATION: DHAKA, BD</span>
              <span className="text-accent-cyan">UTC+6 BST</span>
            </div>
            <p className="text-[11px] text-typography-secondary">
              Available for high-impact full-stack and systems engineering.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
