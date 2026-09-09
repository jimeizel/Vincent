import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Sun, 
  Moon, 
  Sunset, 
  Box, 
  Layers, 
  Sparkles, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Sliders, 
  ArrowUpRight,
  Maximize2,
  Minimize2,
  CheckCircle2
} from 'lucide-react';

interface StudioSimulatorProps {
  onBookSession: () => void;
}

export const StudioSimulator: React.FC<StudioSimulatorProps> = ({ onBookSession }) => {
  const [sunAngle, setSunAngle] = useState<'morning' | 'midday' | 'sunset' | 'twilight'>('sunset');
  const [material, setMaterial] = useState<'cedar' | 'stucco' | 'shou-sugi-ban' | 'concrete'>('cedar');
  const [displayMode, setDisplayMode] = useState<'render' | 'clay' | 'wireframe' | 'shadows'>('render');
  const [cameraAngle, setCameraAngle] = useState<'perspective' | 'front' | 'isometric' | 'top'>('perspective');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Material configurations
  const materials = [
    { id: 'cedar', name: 'Natural Cedar Siding', hex: '#A2673B', note: 'Warm horizontal grain siding' },
    { id: 'stucco', name: 'Smooth White Stucco', hex: '#E5E7EB', note: 'Hand-troweled clean lime finish' },
    { id: 'shou-sugi-ban', name: 'Charred Shou Sugi Ban', hex: '#1E2229', note: 'Japanese flame-charred cypress' },
    { id: 'concrete', name: 'Board-Formed Concrete', hex: '#6B7280', note: 'Douglas fir timber knot imprint' },
  ];

  // Sun studies
  const sunStudies = [
    { id: 'morning', label: 'Morning Sun', time: '08:00 AM', desc: 'Soft dawn low-angle rays with long east shadows', icon: Sun },
    { id: 'midday', label: 'Midday High', time: '12:30 PM', desc: 'Crisp vertical sun testing roof overhang shade', icon: Sun },
    { id: 'sunset', label: 'Golden Sunset', time: '06:45 PM', desc: 'Warm 2700K golden hour illumination and reflection', icon: Sunset },
    { id: 'twilight', label: 'Twilight Night', time: '08:45 PM', desc: 'Deep blue-hour ambient tone with glowing interior lights', icon: Moon },
  ];

  // Display modes
  const displayModes = [
    { id: 'render', label: 'Full Render', desc: 'V-Ray photorealistic lighting and atmospheric composite' },
    { id: 'clay', label: 'SketchUp Clay', desc: 'Monochrome volumetric massing without textures' },
    { id: 'wireframe', label: 'Wireframe X-Ray', desc: 'Architectural structural edge lines and internal geometry' },
    { id: 'shadows', label: 'Shadow Vectors', desc: 'High-contrast solar shadow study vectors' },
  ];

  // Images representing the state combinations
  const getSceneImage = () => {
    if (displayMode === 'clay') {
      return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';
    }
    if (displayMode === 'wireframe') {
      return 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80';
    }
    if (sunAngle === 'twilight') {
      return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80';
    }
    if (sunAngle === 'sunset') {
      return 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80';
    }
    if (sunAngle === 'morning') {
      return 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80';
    }
    return 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80';
  };

  return (
    <section id="studio" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Background atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Image 7 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>INTERACTIVE SKETCHUP STUDIO SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Experience 3D Space, Sun Angles & Materials
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Simulate how Vincent Jimenez configures SketchUp models with custom sunlight vectors, material swatches, and structural layer explosions.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Control 1: Sun Angle & Time Study */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>SUN ANGLE & TIME STUDY</span>
                </div>
                <span className="text-[10px] font-mono text-teal-400">
                  {sunStudies.find(s => s.id === sunAngle)?.time}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {sunStudies.map((study) => {
                  const Icon = study.icon;
                  const isActive = sunAngle === study.id;
                  return (
                    <button
                      key={study.id}
                      onClick={() => setSunAngle(study.id as any)}
                      className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-medium">
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                        <span>{study.label}</span>
                      </div>
                      <div className="text-[10px] text-teal-300/80 font-mono mt-0.5">{study.time}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 2: Exterior Material Texture */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60">
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3 font-semibold flex items-center gap-2">
                <Box className="w-4 h-4 text-teal-400" />
                <span>EXTERIOR MATERIAL TEXTURE</span>
              </div>

              <div className="space-y-2">
                {materials.map((mat) => {
                  const isActive = material === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setMaterial(mat.id as any)}
                      className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                          style={{ backgroundColor: mat.hex }}
                        />
                        <div>
                          <div className="text-xs font-mono font-medium text-white">{mat.name}</div>
                          <div className="text-[10px] text-slate-400">{mat.note}</div>
                        </div>
                      </div>
                      {isActive && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Display / Layer Mode */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60">
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>DISPLAY / LAYER MODE</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {displayModes.map((mode) => {
                  const isActive = displayMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setDisplayMode(mode.id as any)}
                      className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-mono font-medium">{mode.label}</div>
                      <div className="text-[9px] text-slate-400 line-clamp-1 mt-0.5">{mode.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Viewport */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="rounded-2xl bg-[#061e27] border border-teal-500/30 p-3 sm:p-4 shadow-2xl shadow-[#020b10]/90 relative">
              
              {/* Viewport Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-teal-500/20 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-200 font-semibold tracking-wider">
                    SKETCHUP PRO 2025 • INTERACTIVE VIEWPORT
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                  <span>AZIMUTH: 35°</span>
                  <span>•</span>
                  <span className="text-amber-400 uppercase">
                    {sunAngle.toUpperCase()} LIGHTING
                  </span>
                </div>
              </div>

              {/* Viewport Canvas Screen */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#030d12] border border-teal-500/30 group">
                <img
                  src={getSceneImage()}
                  alt="Interactive architectural scene"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    displayMode === 'clay' ? 'contrast-120 grayscale brightness-95' :
                    displayMode === 'wireframe' ? 'contrast-130 invert hue-rotate-180 brightness-90' :
                    sunAngle === 'sunset' ? 'sepia-25 brightness-105' :
                    sunAngle === 'twilight' ? 'hue-rotate-15 contrast-110' : ''
                  }`}
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                />

                {/* Blueprint grid on clay/wireframe */}
                {(displayMode === 'clay' || displayMode === 'wireframe') && (
                  <div className="absolute inset-0 bg-architect-grid opacity-40 pointer-events-none" />
                )}

                {/* Shadow vector overlay simulation */}
                {displayMode === 'shadows' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-amber-500/20 pointer-events-none mix-blend-multiply" />
                )}

                {/* Simulated Floating Tool HUD */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/90 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-teal-300 shadow-lg">
                    Material: <span className="text-white font-semibold">{materials.find(m => m.id === material)?.name}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/90 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-amber-300 shadow-lg">
                    Mode: <span className="text-white font-semibold">{displayModes.find(m => m.id === displayMode)?.label}</span>
                  </div>
                </div>

                {/* Camera Control Presets */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#031118]/90 backdrop-blur-md p-1 rounded-xl border border-teal-500/30 text-xs font-mono z-10">
                  {(['perspective', 'front', 'isometric', 'top'] as const).map((angle) => (
                    <button
                      key={angle}
                      onClick={() => setCameraAngle(angle)}
                      className={`px-2.5 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                        cameraAngle === angle
                          ? 'bg-teal-400 text-[#031118] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {angle}
                    </button>
                  ))}
                </div>

                {/* Zoom & Orbit Controls on bottom right */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#031118]/90 backdrop-blur-md p-1 rounded-xl border border-teal-500/30 z-10">
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(90, prev - 10))}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b]"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono text-teal-300 px-1">{zoomLevel}%</span>
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(140, prev + 10))}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b]"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setZoomLevel(100);
                      setCameraAngle('perspective');
                    }}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b]"
                    title="Reset View"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewport Lower Footer Bar */}
              <div className="mt-3.5 pt-3 border-t border-teal-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-4 text-slate-300">
                  <span>MODEL STATS: 142 GROUPS</span>
                  <span>•</span>
                  <span>GEOMETRY: 4,800 SQ FT</span>
                  <span>•</span>
                  <span className="text-teal-400">ENGINE: V-RAY 6 + SKETCHUP PRO</span>
                </div>

                <button
                  onClick={onBookSession}
                  className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#031118] font-mono font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-teal-950/60 cursor-pointer"
                >
                  <span>Book 3D Model Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
