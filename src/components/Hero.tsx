import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Box, 
  Sparkles, 
  Layers, 
  Sliders, 
  ArrowUpRight, 
  CheckCircle2, 
  Compass,
  FileCode,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  Eye,
  Check
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenConcepts: () => void;
  onOpenContact: (stylePreset?: string) => void;
  onOpenStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenConcepts,
  onOpenContact,
  onOpenStudio
}) => {
  const [viewMode, setViewMode] = useState<'render' | 'clay'>('render');

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#031118]">
      {/* Dynamic atmospheric radiance & background layers */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-teal-500/12 rounded-full blur-[150px] pointer-events-none animate-float-aura" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-architect-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Title & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Live Availability Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072530] border border-teal-400/40 text-teal-200 text-xs font-mono mb-6 shadow-md backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
              <span className="font-semibold text-emerald-300">AVAILABLE FOR COMMISSIONS</span>
              <span className="text-teal-400/50">•</span>
              <span className="text-slate-300">Q4 2026 / 2027</span>
            </motion.div>

            {/* Main Luxury Architectural Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.12] mb-6 tracking-tight">
              Transforming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 font-semibold drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                SketchUp
              </span>{' '}
              Models into Spatial Realities.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
              Specializing in custom residential house design, high-resolution 3D architectural renderings, and permitting-ready SketchUp LayOut construction sets for homeowners, developers, and architects.
            </p>

            {/* 3 Core Skill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#07242f] border border-teal-500/30 text-teal-200 text-xs font-mono shadow-sm hover:border-teal-400 transition-colors">
                <Box className="w-4 h-4 text-amber-400" />
                <span>SketchUp Pro 2025</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#07242f] border border-teal-500/30 text-teal-200 text-xs font-mono shadow-sm hover:border-teal-400 transition-colors">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>V-Ray &amp; Photoshop Renders</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#07242f] border border-teal-500/30 text-teal-200 text-xs font-mono shadow-sm hover:border-teal-400 transition-colors">
                <Layers className="w-4 h-4 text-cyan-300" />
                <span>LayOut 2D Drafting</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenConcepts}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-teal-950/80 cursor-pointer btn-shine-sweep"
              >
                <span>View 5 Concepts</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-teal-500/40 hover:border-teal-400 bg-[#07222c] hover:bg-[#0b2f3c] text-slate-200 font-mono text-xs transition-all cursor-pointer shadow-sm"
              >
                <span>Selected Works</span>
              </button>

              <button
                onClick={() => onOpenContact('Priority 3D Massing Review')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-teal-500/10 border border-transparent hover:border-teal-500/30 text-teal-300 font-mono text-xs transition-all cursor-pointer"
              >
                <span>Get Instant Quote</span>
              </button>
            </div>

            {/* Trust & Guarantee Metrics Strip */}
            <div className="w-full pt-6 border-t border-teal-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>5-Day</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5">Rapid 3D Turnaround</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>100%</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5">Permitting Ready</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-1">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>120+</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5">Projects Modeled</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>4K UHD</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5">Photo-Real Stills</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: The Interactive Model-to-Render Comparison Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-[#061e27] border border-teal-500/35 shadow-2xl shadow-[#020b10]/90 p-3 sm:p-4 relative corner-crosshair">
              
              {/* Top Mode Toggles */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <div className="inline-flex rounded-xl bg-[#04151c] p-1 border border-teal-500/30">
                  <button
                    onClick={() => setViewMode('render')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      viewMode === 'render'
                        ? 'bg-teal-400 text-[#031118] font-bold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Full ArchViz Render</span>
                  </button>

                  <button
                    onClick={() => setViewMode('clay')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      viewMode === 'clay'
                        ? 'bg-amber-400 text-[#031118] font-bold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>SketchUp Clay Model</span>
                  </button>
                </div>

                {/* File Badge */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#04151c] border border-teal-500/20 text-[11px] font-mono text-teal-300">
                  <FileCode className="w-3 h-3 text-teal-400" />
                  <span>{viewMode === 'render' ? 'Dusk_Render_8K.png' : 'RawSKP_v2.skp'}</span>
                </div>
              </div>

              {/* Visual Display Screen */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#030e13] border border-teal-500/20 group">
                <img
                  src={
                    viewMode === 'render'
                      ? '/images/exterior/pacific-heights-front-highres.jpg'
                      : '/images/exterior/pacific-heights-front-clay.jpg'
                  }
                  alt="Pacific Heights Residence"
                  className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-103 ${
                    viewMode === 'clay' ? 'contrast-115 brightness-95' : 'brightness-105'
                  }`}
                />

                {/* Overlay blueprint grid on Clay mode */}
                {viewMode === 'clay' && (
                  <div className="absolute inset-0 bg-architect-grid opacity-40 pointer-events-none" />
                )}

                {/* Top-Left Mode Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-md bg-[#031219]/90 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono">
                  {viewMode === 'render' ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      <span className="text-teal-200 font-medium">V-RAY 6 &amp; PHOTOSHOP POST-PRODUCTION</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-amber-200 font-medium">SKETCHUP PRO 3D GEOMETRY</span>
                    </>
                  )}
                </div>

                {/* Top-Right Technical Coordinates Tag */}
                <div className="absolute top-3 right-3 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#031219]/80 backdrop-blur-md border border-teal-500/20 text-[10px] font-mono text-slate-300">
                  <span>SCALE 1:50</span>
                  <span className="text-teal-400">•</span>
                  <span>4,800 SQ FT</span>
                </div>

                {/* Bottom Overlay Info Title */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#020b10] via-[#020b10]/85 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                        Pacific Heights Residence
                      </h3>
                      <p className="text-xs font-mono text-teal-300/90 mt-0.5">
                        Pacific Heights • Contemporary Residential Architecture
                      </p>
                    </div>

                    <button
                      onClick={onOpenStudio}
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-200 text-xs font-mono transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore 3D Angles</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="mt-3.5 pt-3 border-t border-teal-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Sliders className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Model-to-Render Comparison</span>
                    <p className="text-[11px] text-slate-400">Click the toggle to inspect raw SketchUp massing vs calibrated photorealistic render.</p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('Pacific Heights Residence (Contemporary Style)')}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-teal-500/25 hover:bg-teal-500/35 border border-teal-400/50 text-teal-200 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <span>Quote This Style</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
