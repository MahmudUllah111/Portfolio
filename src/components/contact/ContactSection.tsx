import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import { DoubleBezelCard } from '../common/DoubleBezelCard';
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
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Initiate Collaboration</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-typography-primary leading-tight">
          Let&apos;s build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-indigo">
            extraordinary.
          </span>
        </h2>
        <p className="text-typography-secondary text-base md:text-lg max-w-xl leading-relaxed">
          Whether you need a full-stack platform, a bespoke CMS architecture, or high-performance frontend engineering, let&apos;s discuss your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Direct Channels (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Copy Email Card */}
          <DoubleBezelCard>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-typography-muted">
                  Direct Inquiries
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent-cyan">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div>
                <p className="text-xs text-typography-secondary mb-1">Email Address</p>
                <p className="font-mono text-sm md:text-base font-semibold text-typography-primary break-all">
                  {email}
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-typography-primary hover:bg-white/10 hover:border-accent-cyan/30 transition-all font-mono text-xs active:scale-98 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={2} />
                    <span className="text-accent-cyan">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-typography-secondary" strokeWidth={1.5} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </DoubleBezelCard>

          {/* Connected Profiles Card */}
          <DoubleBezelCard>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-typography-muted">
                Profiles &amp; Repositories
              </span>

              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/MahmudUllah111?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-typography-primary group-hover:text-accent-cyan transition-colors">
                        GitHub Profile
                      </p>
                      <p className="text-[11px] font-mono text-typography-muted">
                        @MahmudUllah111 · Repositories &amp; Source
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-cyan group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-typography-primary group-hover:text-accent-cyan transition-colors">
                        LinkedIn Network
                      </p>
                      <p className="text-[11px] font-mono text-typography-muted">
                        Professional Background &amp; Endorsements
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-cyan group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-typography-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-typography-primary group-hover:text-accent-cyan transition-colors">
                        Direct Mail Client
                      </p>
                      <p className="text-[11px] font-mono text-typography-muted">
                        Launch default mail client
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-cyan group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </DoubleBezelCard>
        </div>

        {/* Right Col: Interactive Contact Form (Col 7) */}
        <div className="lg:col-span-7">
          <DoubleBezelCard>
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <MessageSquare className="w-4 h-4 text-accent-cyan" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg text-typography-primary">
                  Transmit a Message
                </h3>
              </div>
              <ContactForm />
            </div>
          </DoubleBezelCard>
        </div>
      </div>
    </section>
  );
};
