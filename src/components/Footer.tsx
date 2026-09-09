import React from 'react';
import { ArrowUp, Box, Sparkles, Building2, Trees, Layers, Compass, Cuboid } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020b10] border-t border-teal-500/20 text-slate-400 py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-teal-500/15">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#07222c] border border-teal-500/40 flex items-center justify-center text-teal-300">
                <Cuboid className="w-4 h-4 text-teal-300" />
              </div>
              <div>
                <div className="font-serif tracking-wide text-base font-bold text-white">
                  VINCENT JIMENEZ
                </div>
                <p className="text-[9px] text-teal-400 font-mono tracking-widest uppercase -mt-0.5">
                  ARCHITECTURAL & SKETCHUP DESIGN
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-light">
              Specialized in custom modern residential architecture, high-precision Trimble SketchUp 3D modeling, LayOut 2D construction drawings, and photorealistic V-Ray architectural visualizations.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-teal-300/90 pt-1">
              <span className="flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-amber-400" />
                <span>SketchUp Pro 2025</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>V-Ray & Enscape Renders</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-300" />
                <span>LayOut 2D Permitting</span>
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <div className="text-xs uppercase text-teal-300 font-semibold tracking-wider mb-3">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#concepts" className="hover:text-teal-300 transition-colors">
                  5 Architectural Concepts
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-300 transition-colors">
                  Selected Works Gallery
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-teal-300 transition-colors">
                  3D Studio Simulator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Process & Services
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-teal-300 transition-colors">
                  Cost Estimator
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About Vincent Jimenez
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Disciplines */}
          <div>
            <div className="text-xs uppercase text-teal-300 font-semibold tracking-wider mb-3">
              Design Capabilities
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Custom Residential Design</li>
              <li>SketchUp 3D Massing & Modeling</li>
              <li>LayOut 2D Permitting Drawings</li>
              <li>Photorealistic 8K Visualizations</li>
              <li>Sun Azimuth & Shadow Studies</li>
              <li>Landscape Ecology & Topography</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Vincent Jimenez. All rights reserved. Crafted with precision in SketchUp Pro.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-teal-400">Dark Blue-Green Atelier Edition</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
