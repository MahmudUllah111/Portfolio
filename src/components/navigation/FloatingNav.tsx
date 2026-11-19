import React, { useState, useEffect } from 'react';
import { useLenis } from '../../hooks/useLenis';
import { MagneticButton } from '../common/MagneticButton';
import { MobileMenu } from './MobileMenu';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const FloatingNav: React.FC = () => {
  const { scrollTo } = useLenis();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'work', 'stack', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href, { offset: -30 });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-0 right-0 z-40 px-4 md:px-0 flex justify-center transition-all duration-500 ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between w-full max-w-4xl px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-obsidian-surface/80 border border-white/10 backdrop-blur-xl shadow-subtle-elevation transition-all duration-300"
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-1 group font-display font-bold text-lg md:text-xl tracking-tighter text-typography-primary"
          >
            <span>MAHMUD</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-glow-cyan animate-pulse" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-obsidian/40 border border-white/5 rounded-full px-2 py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-accent-cyan font-semibold'
                      : 'text-typography-secondary hover:text-typography-primary'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/5 border border-white/10 -z-10" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <MagneticButton
              variant="primary"
              onClick={() => scrollTo('#contact', { offset: -30 })}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold"
            >
              Let's Talk
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-typography-primary"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-4 h-[1.5px] bg-typography-primary transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-typography-primary transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[1.5px]' : 'translate-y-1'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        navItems={NAV_ITEMS}
        onNavigate={handleNavClick}
      />
    </>
  );
};
