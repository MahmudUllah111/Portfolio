import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, MessageSquare } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useToast } from '../common/Toast';

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = 'mahmudullah111@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    showToast('Email Copied', 'mahmudullah111@gmail.com copied to your clipboard', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 md:px-8 max-w-[1380px] w-[92%] mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-12">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-typography-muted font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>05 // INITIATE TRANSMISSION &amp; CONTACT</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,5rem)] leading-[0.94] tracking-tight text-typography-primary uppercase">
            Let&apos;s build something <br />
            <span className="text-typography-primary">extraordinary.</span>
          </h2>
        </div>
        <p className="text-typography-secondary text-base md:text-lg max-w-md leading-relaxed font-normal">
          Whether you need a high-scale full-stack web platform, custom modular CMS architecture, or high-performance frontend engineering, let&apos;s discuss your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Quick Copy Email Card */}
          <div className="p-8 rounded-2xl bg-obsidian-surface border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-typography-muted">
              <span className="uppercase tracking-wider text-typography-secondary">
                DIRECT CHANNEL
              </span>
              <span className="flex items-center gap-1.5 text-typography-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            <div>
              <p className="text-xs font-mono text-typography-muted mb-1">Electronic Mail</p>
              <p className="font-mono text-lg sm:text-xl font-bold text-typography-primary break-all">
                {email}
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-typography-primary hover:bg-white/10 hover:border-white/25 transition-all font-mono text-xs active:scale-98 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
                  <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-typography-muted" strokeWidth={1.5} />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Connected Profiles List */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-typography-muted block mb-2">
              PROFILES &amp; REPOSITORIES
            </span>

            <a
              href="https://github.com/MahmudUllah111?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-obsidian-surface border border-white/10 hover:border-white/25 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-typography-primary group-hover:text-white transition-colors">
                    GitHub Profile
                  </p>
                  <p className="text-[11px] font-mono text-typography-muted">
                    @MahmudUllah111 · Code Repositories
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-typography-muted group-hover:text-typography-primary group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-obsidian-surface border border-white/10 hover:border-white/25 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-typography-primary group-hover:text-white transition-colors">
                    LinkedIn Network
                  </p>
                  <p className="text-[11px] font-mono text-typography-muted">
                    Professional Background &amp; Network
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-typography-muted group-hover:text-typography-primary group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between p-4 rounded-xl bg-obsidian-surface border border-white/10 hover:border-white/25 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-typography-primary group-hover:text-white transition-colors">
                    Direct Mail Client
                  </p>
                  <p className="text-[11px] font-mono text-typography-muted">
                    Open desktop email app
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-typography-muted group-hover:text-typography-primary group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form (Col 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 rounded-2xl bg-obsidian-surface border border-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
            <MessageSquare className="w-4 h-4 text-typography-primary" strokeWidth={1.5} />
            <h3 className="font-display font-semibold text-lg text-typography-primary">
              Transmit a Message
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
