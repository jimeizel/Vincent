import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: (servicePreset?: string) => void;
  onOpenStudio?: () => void;
  onScrollTo: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenContact, 
  onOpenStudio,
  onScrollTo,
  activeSection = 'concepts'
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      id: 'concepts', 
      label: '5 Architectural Concepts', 
      badge: 'SKP 3D', 
      isSpecial: true 
    },
    { id: 'projects', label: 'Projects' },
    { id: 'studio', label: '3D Studio' },
    { id: 'services', label: 'Process & Services' },
    { id: 'estimator', label: 'Cost Estimator' },
    { id: 'about', label: 'About Vincent' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#031118]/95 backdrop-blur-md border-b border-teal-500/20 shadow-xl shadow-[#020b10]/60 py-3'
          : 'bg-[#031118]/80 backdrop-blur-sm border-b border-teal-500/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity matching reference: Box Icon + VINCENT JIMENEZ + ARCHITECTURAL & SKETCHUP DESIGN */}
        <button
          onClick={() => onScrollTo('hero')}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="bg-white/95 rounded-md px-2 py-1 group-hover:bg-white transition-colors shadow-sm">
            <img
              src="/images/logo.png"
              alt="VJD Architectural & 3D Render"
              className="h-9 w-auto object-contain"
            />
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#061c24]/90 border border-teal-500/25 rounded-full px-3 py-1.5 shadow-inner shadow-black/40">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className={`relative text-xs font-mono px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === link.id
                  ? 'bg-teal-950/80 text-teal-300 border border-teal-500/40 font-medium shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#0b2b37]/60'
              }`}
            >
              {link.badge && (
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold tracking-wider">
                  {link.badge}
                </span>
              )}
              <span>{link.label}</span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => onScrollTo('studio')}
            className="flex items-center gap-1.5 text-xs font-mono text-teal-300 hover:text-white px-3.5 py-2 rounded-lg border border-teal-500/30 bg-[#07242f]/80 hover:bg-[#0b3342] transition-all cursor-pointer shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>3D Viewer Studio</span>
          </button>

          <button
            onClick={() => onOpenContact()}
            className="group flex items-center gap-1.5 text-xs font-mono font-medium text-[#03131a] bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300 hover:from-teal-200 hover:to-emerald-200 px-4 py-2 rounded-lg transition-all shadow-md shadow-teal-950/60 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#03131a] group-hover:rotate-12 transition-transform" />
            <span>Request Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-[#07222c] border border-teal-500/30"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#03131a]/98 border-b border-teal-500/30 px-5 pt-3 pb-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollTo(link.id);
                  }}
                  className="text-left text-sm font-mono text-slate-200 hover:text-teal-300 py-2 px-3 rounded-lg hover:bg-[#07242f] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                        {link.badge}
                      </span>
                    )}
                    <span>{link.label}</span>
                  </div>
                </button>
              ))}

              <div className="pt-3 border-t border-teal-500/30 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollTo('studio');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-teal-300 rounded-lg border border-teal-500/40 bg-[#07242f]"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>3D Viewer Studio</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-[#03131a] bg-teal-300 hover:bg-teal-200 rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
