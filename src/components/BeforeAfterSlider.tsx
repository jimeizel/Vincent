import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { 
  SlidersHorizontal, 
  Box, 
  Palette, 
  MoveHorizontal, 
  Layers, 
  MapPin, 
  Sparkles,
  CheckCircle,
  Columns2,
  SplitSquareVertical,
  Maximize2
} from 'lucide-react';
import { COMPARISON_SCENES } from '../data/portfolioData';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [displayMode, setDisplayMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = COMPARISON_SCENES[selectedSceneIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="workflow" className="py-28 bg-[#030b0f] relative overflow-hidden border-t border-b border-teal-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-600/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-600/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06151e] border border-teal-800/40 mb-3 text-xs font-mono text-teal-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-teal-400" />
              <span>Comparative 3D Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight">
              From Mathematical Geometry to Luminous Space
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Inspect how volumetric masses and sandbox contours modeled in <strong className="text-teal-300 font-normal">Trimble SketchUp</strong> are rendered into photorealistic, emotionally resonant architecture in <strong className="text-teal-300 font-normal">Adobe Photoshop</strong>.
            </p>
          </div>

          {/* Quick preset positions & mode toggle */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 bg-[#06141c] p-1.5 rounded-xl border border-teal-900/40 self-start md:self-auto">
            <button
              onClick={() => setDisplayMode('slider')}
              className={`p-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                displayMode === 'slider'
                  ? 'bg-teal-500/20 text-teal-200 border border-teal-500/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Interactive Slider Mode"
            >
              <SplitSquareVertical className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDisplayMode('sideBySide')}
              className={`p-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                displayMode === 'sideBySide'
                  ? 'bg-teal-500/20 text-teal-200 border border-teal-500/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Side-by-Side Dual View"
            >
              <Columns2 className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono text-slate-500 px-1">|</span>

            {[
              { label: 'PS Final', val: 0 },
              { label: '50/50 Split', val: 50 },
              { label: 'SU Geometry', val: 100 },
            ].map((p) => (
              <button
                key={p.val}
                onClick={() => {
                  setDisplayMode('slider');
                  setSliderPosition(p.val);
                }}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  displayMode === 'slider' && Math.abs(sliderPosition - p.val) < 5
                    ? 'bg-teal-500/30 text-teal-200 border border-teal-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scene Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {COMPARISON_SCENES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSelectedSceneIndex(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedSceneIndex === idx
                  ? 'bg-teal-950/80 text-teal-200 border border-teal-500/60 shadow-lg shadow-teal-950/50 font-medium'
                  : 'bg-[#06151e]/60 text-slate-400 border border-teal-900/30 hover:border-teal-700/50 hover:text-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${selectedSceneIndex === idx ? 'bg-teal-400' : 'bg-slate-600'}`} />
              <span className="font-display font-medium text-white">{s.title}</span>
              <span className="text-[10px] text-teal-400/70 px-1.5 py-0.5 rounded bg-[#030b0e]">
                {s.discipline.split('&')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* The Interactive Comparison Stage */}
        <div className="rounded-2xl border border-teal-800/40 bg-[#05131a] p-3 sm:p-4 shadow-2xl shadow-black/80 corner-crosshair">
          
          {/* Top Bar with Scene Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-3 mb-2 border-b border-teal-900/35 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-teal-300 font-medium">{scene.title}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-teal-400" />
                {scene.location}
              </span>
            </div>
            <div className="text-slate-400">
              Discipline: <span className="text-teal-300">{scene.discipline}</span>
            </div>
          </div>

          {displayMode === 'slider' ? (
            /* Interactive Canvas Container */
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden cursor-ew-resize select-none bg-[#020709]"
            >
              {/* Background Layer: Adobe Photoshop Atmospheric Render */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={scene.photoshopImage}
                  alt={`${scene.title} - Photoshop Final Render`}
                  className="w-full h-full object-cover pointer-events-none"
                />
                {/* Right Tag */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#040e13]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-teal-700/50 shadow-lg text-xs font-mono">
                  <Palette className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-teal-200 font-medium">{scene.photoshopLabel}</span>
                </div>
              </div>

              {/* Foreground Layer: Trimble SketchUp Clay & Geometry */}
              <div
                className="absolute inset-0 h-full overflow-hidden transition-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                  <img
                    src={scene.sketchupImage}
                    alt={`${scene.title} - SketchUp Geometry`}
                    className="w-full h-full object-cover pointer-events-none filter contrast-105"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                      maxWidth: 'none',
                      height: '100%'
                    }}
                  />
                  {/* Blueprint grid effect on SketchUp side */}
                  <div className="absolute inset-0 bg-architect-grid pointer-events-none opacity-30" />

                  {/* Left Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#040e13]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-600/40 shadow-lg text-xs font-mono">
                    <Box className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-200 font-medium">{scene.sketchupLabel}</span>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Hairline Glowing Line */}
                <div className="w-0.5 h-full bg-gradient-to-b from-teal-400 via-teal-100 to-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />

                {/* Center Handle Knob */}
                <div className="absolute w-9 h-9 rounded-full bg-[#05131a] border border-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.5)] flex items-center justify-center text-teal-300">
                  <MoveHorizontal className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Instruction tooltip in center bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-[#040e13]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-teal-900/50 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                <MoveHorizontal className="w-3 h-3 text-teal-400" />
                <span>Drag divider horizontally across viewport</span>
              </div>
            </div>
          ) : (
            /* Side-by-Side Dual View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#020709] border border-amber-500/30">
                <img
                  src={scene.sketchupImage}
                  alt={scene.sketchupLabel}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-architect-grid opacity-30 pointer-events-none" />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#040e13]/90 backdrop-blur-md px-3 py-1 rounded-md border border-amber-600/40 text-xs font-mono text-amber-200">
                  <Box className="w-3.5 h-3.5 text-amber-400" />
                  <span>Trimble SketchUp (3D Geometry & Topo)</span>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#020709] border border-teal-500/30">
                <img
                  src={scene.photoshopImage}
                  alt={scene.photoshopLabel}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#040e13]/90 backdrop-blur-md px-3 py-1 rounded-md border border-teal-700/50 text-xs font-mono text-teal-200">
                  <Palette className="w-3.5 h-3.5 text-teal-400" />
                  <span>Adobe Photoshop (Final Atmospheric Composite)</span>
                </div>
              </div>
            </div>
          )}

          {/* Technical Workflow Breakdown Below Stage */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            
            {/* SketchUp Details */}
            <div className="bg-[#07161e]/80 rounded-xl p-5 border border-teal-900/35">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-semibold mb-2">
                <Box className="w-4 h-4 text-amber-400" />
                <span>PHASE 1: TRIMBLE SKETCHUP SPATIAL SOLVING</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-3 font-light">
                {scene.sketchupDescription}
              </p>
              <div className="space-y-1.5 border-t border-teal-900/35 pt-2.5">
                <div className="text-[10px] font-mono uppercase text-slate-400">Technical Highlights:</div>
                <div className="text-xs text-teal-200/90 font-mono flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{scene.techNotes[0]}</span>
                </div>
                <div className="text-xs text-teal-200/90 font-mono flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{scene.techNotes[1]}</span>
                </div>
              </div>
            </div>

            {/* Photoshop Details */}
            <div className="bg-[#07161e]/80 rounded-xl p-5 border border-teal-900/35">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-mono font-semibold mb-2">
                <Palette className="w-4 h-4 text-teal-400" />
                <span>PHASE 2: ADOBE PHOTOSHOP ATMOSPHERIC COMPOSITING</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-3 font-light">
                {scene.photoshopDescription}
              </p>
              <div className="space-y-1.5 border-t border-teal-900/35 pt-2.5">
                <div className="text-[10px] font-mono uppercase text-slate-400">Atmospheric Detailing:</div>
                <div className="text-xs text-teal-200/90 font-mono flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{scene.techNotes[2]}</span>
                </div>
                <div className="text-xs text-teal-200/90 font-mono flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{scene.techNotes[3]}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
