import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Box, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Maximize2,
  Compass,
  FileCode,
  DollarSign,
  Maximize,
  Home,
  Sun
} from 'lucide-react';
import { ARCHITECTURAL_CONCEPTS } from '../data/portfolioData';
import { ArchitecturalConcept } from '../types';

interface ArchitecturalConceptsProps {
  onQuoteConcept: (conceptTitle: string) => void;
}

export const ArchitecturalConcepts: React.FC<ArchitecturalConceptsProps> = ({ onQuoteConcept }) => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>(ARCHITECTURAL_CONCEPTS[0].id);
  const [renderMode, setRenderMode] = useState<'render' | 'clay'>('render');

  const currentConcept = ARCHITECTURAL_CONCEPTS.find(c => c.id === selectedConceptId) || ARCHITECTURAL_CONCEPTS[0];

  return (
    <section id="concepts" className="py-20 lg:py-28 bg-[#031118] relative overflow-hidden border-t border-teal-500/20">
      {/* Background radial ambiance */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-teal-500/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-700/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Image 3 & 4 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>5 ARCHITECTURAL DESIGN OPTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Choose From 5 Distinct Architectural Concepts
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Vincent Jimenez has authored 5 signature architectural design styles modeled in SketchUp Pro. Review materials, floor area, climate suitability, and cost estimates to choose the ideal blueprint for your vision.
          </p>
        </div>

        {/* 5 Concept Tabs Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {ARCHITECTURAL_CONCEPTS.map((concept) => {
            const isActive = concept.id === selectedConceptId;
            return (
              <button
                key={concept.id}
                onClick={() => {
                  setSelectedConceptId(concept.id);
                  setRenderMode('render');
                }}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#092b37] border-teal-400/80 shadow-lg shadow-black/60'
                    : 'bg-[#061e27]/80 hover:bg-[#082631] border-teal-500/20 text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400" />
                )}
                <div className={`text-[11px] font-mono mb-1 ${isActive ? 'text-teal-300 font-semibold' : 'text-slate-400'}`}>
                  {concept.optionNumber}
                </div>
                <div className={`font-serif text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {concept.title}
                </div>
                <div className="text-[10px] font-mono text-teal-400/90 truncate mt-1">
                  {concept.styleTag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Concept Presentation Card */}
        <div className="rounded-2xl bg-[#061e27] border border-teal-500/30 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-[#020b10]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Render vs Clay Viewport */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Mode switch */}
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-[#04151c] p-1 border border-teal-500/30">
                  <button
                    onClick={() => setRenderMode('render')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      renderMode === 'render'
                        ? 'bg-teal-500 text-[#031118] font-semibold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Photorealistic Render</span>
                  </button>

                  <button
                    onClick={() => setRenderMode('clay')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      renderMode === 'clay'
                        ? 'bg-amber-400 text-[#031118] font-semibold shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>SketchUp Clay Model</span>
                  </button>
                </div>

                <span className="text-[11px] font-mono text-teal-300/80">
                  {renderMode === 'render' ? 'V-Ray 6 8K' : 'SketchUp Pro .skp'}
                </span>
              </div>

              {/* Image Viewport */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#030e13] border border-teal-500/20 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${currentConcept.id}-${renderMode}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={renderMode === 'render' ? currentConcept.renderImage : currentConcept.clayImage}
                    alt={currentConcept.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      renderMode === 'clay' ? 'contrast-120 grayscale brightness-95' : 'brightness-105'
                    }`}
                  />
                </AnimatePresence>

                {renderMode === 'clay' && (
                  <div className="absolute inset-0 bg-architect-grid opacity-35 pointer-events-none" />
                )}

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#031219]/90 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-teal-200 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${renderMode === 'render' ? 'bg-teal-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{renderMode === 'render' ? 'V-Ray 6 Photorealistic ArchViz' : 'SketchUp 3D Clay Wireframe'}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="text-xs font-mono text-slate-300 flex items-center justify-between px-1">
                <span>{currentConcept.optionNumber}: {currentConcept.title}</span>
                <span className="text-teal-400 font-semibold">{currentConcept.specs.totalArea}</span>
              </div>
            </div>

            {/* Right Column: Architectural Specifications & Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Concept Header */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    {currentConcept.optionNumber}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-teal-300 uppercase tracking-wider">
                    {currentConcept.styleTag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-2">
                  {currentConcept.title}
                </h3>

                <p className="text-xs sm:text-sm text-teal-200/90 font-mono mb-6">
                  {currentConcept.tagline}
                </p>

                {/* 4 Spec Boxes (2x2 grid matching reference screenshots 3 & 4) */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#041720] border border-teal-500/25">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      TOTAL LIVING AREA
                    </div>
                    <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                      {currentConcept.specs.totalArea}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#041720] border border-teal-500/25">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      LAYOUT
                    </div>
                    <div className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                      {currentConcept.specs.layout}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#041720] border border-teal-500/25">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      EST. CONSTRUCTION COST
                    </div>
                    <div className="text-base sm:text-lg font-serif font-bold text-teal-300 mt-0.5">
                      {currentConcept.specs.estCostPerSqFt}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#041720] border border-teal-500/25">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      IDEAL ENVIRONMENT
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-slate-200 mt-1 truncate" title={currentConcept.specs.idealEnvironment}>
                      {currentConcept.specs.idealEnvironment}
                    </div>
                  </div>
                </div>

                {/* Architectural Highlights */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-2.5 font-semibold">
                    ARCHITECTURAL HIGHLIGHTS
                  </div>
                  <div className="space-y-2">
                    {currentConcept.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <ChevronRight className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Material Palette */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-2.5 font-semibold">
                    KEY MATERIAL PALETTE
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentConcept.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#072532] border border-teal-500/30 text-teal-200 text-xs font-mono"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Narrative Text */}
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 pt-4 border-t border-teal-500/20">
                  {currentConcept.narrative}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onQuoteConcept(`${currentConcept.optionNumber}: ${currentConcept.title}`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-950/60 cursor-pointer"
                >
                  <span>Quote This Concept</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
