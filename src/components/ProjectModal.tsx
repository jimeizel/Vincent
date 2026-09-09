import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Ruler, 
  Compass, 
  Check, 
  Box, 
  Palette, 
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewType, setViewType] = useState<'final' | 'sketchup'>('final');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020b10]/95 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#061e27] border border-teal-500/30 rounded-2xl shadow-2xl shadow-[#020b10]/90 overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-teal-500/20 bg-[#04161e]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#07242f] border border-teal-500/40 text-teal-300 font-semibold">
                {project.projectCode}
              </span>
              <span className="text-xs font-mono text-slate-300">
                {project.categoryLabel} • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#07242f] border border-teal-500/30 hover:border-teal-400 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Visual Viewport & Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#030d12] border border-teal-500/20 group">
                <img
                  src={
                    viewType === 'final'
                      ? project.galleryImages[activeImageIndex] || project.coverImage
                      : project.sketchupImage
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Grid overlay when in SketchUp mode */}
                {viewType === 'sketchup' && (
                  <div className="absolute inset-0 bg-architect-grid pointer-events-none opacity-40" />
                )}

                {/* View Switcher Controls on Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#031118]/90 backdrop-blur-md p-1 rounded-xl border border-teal-500/30 text-xs font-mono">
                  <button
                    onClick={() => setViewType('final')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      viewType === 'final'
                        ? 'bg-teal-400 text-[#031118] font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ArchViz Render</span>
                  </button>
                  <button
                    onClick={() => setViewType('sketchup')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      viewType === 'sketchup'
                        ? 'bg-amber-400 text-[#031118] font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>SketchUp Clay</span>
                  </button>
                </div>

                {/* Coordinates & Location Badge on bottom left */}
                <div className="absolute bottom-4 left-4 bg-[#031118]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 flex items-center gap-2 border border-teal-500/30">
                  <Compass className="w-3.5 h-3.5 text-teal-400" />
                  <span>{project.coordinates || project.location}</span>
                  {project.orientation && (
                    <>
                      <span>•</span>
                      <span className="text-teal-300 font-semibold">{project.orientation}</span>
                    </>
                  )}
                </div>

                {/* Gallery Next / Prev buttons */}
                {viewType === 'final' && project.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? project.galleryImages.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#031118]/80 text-white hover:bg-teal-400 hover:text-[#031118] transition-all cursor-pointer border border-teal-500/30"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === project.galleryImages.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#031118]/80 text-white hover:bg-teal-400 hover:text-[#031118] transition-all cursor-pointer border border-teal-500/30"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails row */}
              {viewType === 'final' && project.galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-teal-400 ring-2 ring-teal-400/30'
                          : 'border-teal-500/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Editorial Title & Overview */}
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-1">
                {project.clientType}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-base font-serif italic text-teal-200/90 mt-1">
                "{project.subtitle}"
              </p>
            </div>

            {/* Architectural Intent Quote Box */}
            <div className="bg-[#04161e] border-l-4 border-teal-400 rounded-r-xl p-5 shadow-inner">
              <div className="text-[10px] font-mono uppercase text-teal-400 tracking-wider mb-1 font-semibold">
                Architectural Intent & Philosophy
              </div>
              <p className="text-slate-300 text-sm italic font-serif leading-relaxed">
                "{project.architecturalIntent}"
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#04161e] border border-teal-500/25 text-xs font-mono">
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Location</div>
                <div className="text-white font-medium mt-0.5">{project.location}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Enclosed Area</div>
                <div className="text-teal-300 font-medium mt-0.5">{project.specs.area}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Scale / Metric</div>
                <div className="text-white font-medium mt-0.5">{project.specs.scaleRatio || '1:100 Ratio'}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Design Timeline</div>
                <div className="text-white font-medium mt-0.5">{project.specs.timeline}</div>
              </div>
            </div>

            {/* Tactile Materiality & Texture Swatches */}
            {project.materialSwatches && project.materialSwatches.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase tracking-wider font-semibold">
                  <Layers className="w-3.5 h-3.5 text-teal-400" />
                  <span>Curated Materiality & Tactile Palette</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {project.materialSwatches.map((swatch, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#04161e] border border-teal-500/25 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="w-5 h-5 rounded-full border border-white/20 shrink-0 shadow-xs"
                          style={{ backgroundColor: swatch.colorHex }}
                        />
                        <div>
                          <div className="text-xs font-medium text-white">{swatch.name}</div>
                          <div className="text-[10px] font-mono text-teal-400/80">{swatch.category}</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-300 font-light leading-snug">
                        {swatch.tactileNote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow & SketchUp / V-Ray Pipeline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase tracking-wider font-semibold">
                <FileCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>SketchUp Modeling & Rendering Pipeline Highlights</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.workflowHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#04161e] border border-teal-500/25 flex items-start gap-2 text-xs text-slate-300"
                  >
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="font-light leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Bar */}
            <div className="pt-6 border-t border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                Interested in a custom project in this architectural style?
              </div>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-medium text-xs tracking-wider uppercase transition-all shadow-lg shadow-teal-950/60 cursor-pointer"
              >
                <span>Quote Project Similar To This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
