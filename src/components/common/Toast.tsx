import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastItem {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  showToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (title: string, message?: string, type: 'success' | 'error' | 'info' = 'success') => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, message, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-[9990] flex flex-col gap-2 pointer-events-none max-w-sm w-full"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto p-4 rounded-2xl bg-obsidian-surface/90 border border-white/10 backdrop-blur-xl shadow-subtle-elevation flex items-start gap-3 text-typography-primary"
            >
              {toast.type === 'success' && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold tracking-tight">{toast.title}</p>
                {toast.message && (
                  <p className="text-xs text-typography-secondary mt-0.5 leading-relaxed font-mono">
                    {toast.message}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-typography-muted hover:text-typography-primary p-1 rounded-lg transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
