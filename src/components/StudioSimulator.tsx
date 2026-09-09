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
  CheckCircle2,
  Camera,
  Activity,
  Check,
  Zap,
  SlidersHorizontal,
  Flame,
  TreePine,
  Building2,
  Shapes
} from 'lucide-react';

interface StudioSimulatorProps {
  onBookSession: () => void;
}

type CameraAngle = 'perspective' | 'front' | 'isometric' | 'top';
type SunAngle = 'morning' | 'midday' | 'sunset' | 'twilight';
type MaterialType = 'cedar' | 'stucco' | 'shou-sugi-ban' | 'concrete';
type DisplayMode = 'render' | 'clay' | 'wireframe' | 'shadows';

export const StudioSimulator: React.FC<StudioSimulatorProps> = ({ onBookSession }) => {
  const [sunAngle, setSunAngle] = useState<SunAngle>('sunset');
  const [material, setMaterial] = useState<MaterialType>('stucco');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('render');
  const [cameraAngle, setCameraAngle] = useState<CameraAngle>('perspective');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('3D Viewport Calibrated');

  // Trigger feedback banner & laser scan
  const triggerUpdate = (msg: string) => {
    setFeedbackMessage(msg);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 700);
  };

  // 1. Camera Angle Presets with 4 Completely Distinct Images & Descriptions
  const cameraAngles: {
    id: CameraAngle;
    label: string;
    lens: string;
    desc: string;
    image: string;
    tiltClass: string;
  }[] = [
    {
      id: 'perspective',
      label: 'Perspective',
      lens: '24mm Wide-Angle',
      desc: 'Human Eye-Level 3D Courtyard Perspective',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      tiltClass: 'rotate-x-0 rotate-y-0 scale-100'
    },
    {
      id: 'front',
      label: 'Front',
      lens: 'Orthographic 50mm',
      desc: 'True Front Architectural Elevation Facade',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      tiltClass: 'scale-105'
    },
    {
      id: 'isometric',
      label: 'Isometric',
      lens: 'Parallel Axonometric 30°',
      desc: '3D Volumetric Structural Massing View',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      tiltClass: 'scale-95 -rotate-1'
    },
    {
      id: 'top',
      label: 'Top',
      lens: 'Aerial Plan 90° Nadir',
      desc: "True Bird's-Eye Site Plan & Rooflines",
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
      tiltClass: 'scale-100'
    }
  ];

  // 2. Material Finishes
  const materials: {
    id: MaterialType;
    name: string;
    hex: string;
    note: string;
    roughness: string;
    textureEffect: string;
  }[] = [
    { 
      id: 'cedar', 
      name: 'Natural Cedar Siding', 
      hex: '#B45309', 
      note: 'Warm horizontal tongue & groove timber slats',
      roughness: 'Roughness: 0.45 • Diffuse Teak Wood',
      textureEffect: 'amber-wood'
    },
    { 
      id: 'stucco', 
      name: 'Smooth White Stucco', 
      hex: '#E2E8F0', 
      note: 'Hand-troweled clean white lime plaster',
      roughness: 'Roughness: 0.85 • Pure White Plaster',
      textureEffect: 'white-stucco'
    },
    { 
      id: 'shou-sugi-ban', 
      name: 'Charred Shou Sugi Ban', 
      hex: '#111827', 
      note: 'Japanese flame-charred blackened cypress wood',
      roughness: 'Roughness: 0.30 • Matte Carbon Black',
      textureEffect: 'charred-black'
    },
    { 
      id: 'concrete', 
      name: 'Board-Formed Concrete', 
      hex: '#6B7280', 
      note: 'Architectural concrete with horizontal timber knots',
      roughness: 'Roughness: 0.70 • Industrial Concrete',
      textureEffect: 'raw-concrete'
    },
  ];

  // 3. Sun Studies
  const sunStudies = [
    { 
      id: 'morning' as const, 
      label: 'Morning Sun', 
      time: '08:00 AM', 
      azimuth: '75° East',
      elevation: '22°',
      temp: '4200K Dawn',
      desc: 'Soft dawn golden rays with long cool shadows', 
      icon: Sun 
    },
    { 
      id: 'midday' as const, 
      label: 'Midday High', 
      time: '12:30 PM', 
      azimuth: '180° South',
      elevation: '68°',
      temp: '5600K Direct',
      desc: 'High-intensity vertical sun testing roof overhangs', 
      icon: Sun 
    },
    { 
      id: 'sunset' as const, 
      label: 'Golden Sunset', 
      time: '06:45 PM', 
      azimuth: '265° West',
      elevation: '14°',
      temp: '2700K Warm',
      desc: 'Deep warm sunset glow and dramatic pool reflections', 
      icon: Sunset 
    },
    { 
      id: 'twilight' as const, 
      label: 'Twilight Night', 
      time: '08:45 PM', 
      azimuth: '310° NW',
      elevation: '-8°',
      temp: 'Blue Hour + 2700K Glow',
      desc: 'Deep blue-hour sky with warm interior architectural lights', 
      icon: Moon 
    },
  ];

  // 4. Display Modes
  const displayModes = [
    { id: 'render' as const, label: 'Full Render', desc: 'V-Ray 6 photorealistic materials and illumination' },
    { id: 'clay' as const, label: 'SketchUp Clay', desc: 'Monochrome volumetric 3D clay without textures' },
    { id: 'wireframe' as const, label: 'Wireframe X-Ray', desc: 'Architectural structural edge lines & vectors' },
    { id: 'shadows' as const, label: 'Shadow Vectors', desc: 'High-contrast solar shadow vector projections' },
  ];

  const currentCamera = cameraAngles.find(c => c.id === cameraAngle) || cameraAngles[0];
  const currentMaterial = materials.find(m => m.id === material) || materials[1];
  const currentSun = sunStudies.find(s => s.id === sunAngle) || sunStudies[2];

  return (
    <section id="studio" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-teal-500/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>INTERACTIVE SKETCHUP STUDIO SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Experience 3D Space, Sun Angles &amp; Materials
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Interact directly with Vincent Jimenez's digital model studio. Switch camera views (Perspective, Front, Isometric, Top), dial in sun angles from dawn to twilight, and apply custom exterior material shaders in real time.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Control 1: Sun Angle & Time Study */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60 corner-crosshair">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>SUN ANGLE &amp; TIME STUDY</span>
                </div>
                <span className="text-[10px] font-mono text-teal-300 bg-[#04151c] px-2 py-0.5 rounded border border-teal-500/25">
                  {currentSun.time}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {sunStudies.map((study) => {
                  const Icon = study.icon;
                  const isActive = sunAngle === study.id;
                  return (
                    <button
                      key={study.id}
                      onClick={() => {
                        setSunAngle(study.id);
                        triggerUpdate(`☀️ Solar Study: ${study.label} (${study.time}) — Azimuth: ${study.azimuth}`);
                      }}
                      className={`p-3 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'bg-[#092e3c] border-teal-400 text-white shadow-lg shadow-teal-950/60 ring-1 ring-teal-400/50'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07232e]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-teal-400" />
                      )}
                      <div className="flex items-center gap-2 text-xs font-mono font-medium">
                        <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                        <span className={isActive ? 'text-white font-bold' : ''}>{study.label}</span>
                      </div>
                      <div className="text-[10px] text-teal-300/90 font-mono mt-1">{study.time}</div>
                      <div className="text-[9px] text-slate-400 font-mono mt-0.5">{study.azimuth}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 2: Exterior Material Texture */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60 corner-crosshair">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Box className="w-4 h-4 text-teal-400" />
                  <span>EXTERIOR MATERIAL TEXTURE</span>
                </div>
                <span className="text-[10px] font-mono text-amber-300">
                  Active: {currentMaterial.name.split(' ')[0]}
                </span>
              </div>

              <div className="space-y-2.5">
                {materials.map((mat) => {
                  const isActive = material === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => {
                        setMaterial(mat.id);
                        triggerUpdate(`🎨 Applying Facade Material: ${mat.name}`);
                      }}
                      className={`w-full p-3 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'bg-[#092e3c] border-teal-400 text-white shadow-lg shadow-teal-950/60 ring-1 ring-teal-400/50'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07232e]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-teal-400 to-emerald-400" />
                      )}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full border border-white/30 shadow-sm flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: mat.hex }}
                        />
                        <div>
                          <div className={`text-xs font-mono font-medium ${isActive ? 'text-white font-bold' : 'text-slate-200'}`}>
                            {mat.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-light">{mat.note}</div>
                        </div>
                      </div>
                      {isActive ? (
                        <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500 group-hover:text-teal-300">Apply</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 3: Display / Layer Mode */}
            <div className="p-5 rounded-2xl bg-[#061e27] border border-teal-500/25 shadow-xl shadow-[#020b10]/60 corner-crosshair">
              <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>DISPLAY / LAYER MODE</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {displayModes.map((mode) => {
                  const isActive = displayMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setDisplayMode(mode.id);
                        triggerUpdate(`📐 Layer Mode Switched: ${mode.label}`);
                      }}
                      className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#092e3c] border-teal-400 text-white shadow-md ring-1 ring-teal-400/40'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07232e]'
                      }`}
                    >
                      <div className={`text-xs font-mono font-medium ${isActive ? 'text-white font-bold' : ''}`}>
                        {mode.label}
                      </div>
                      <div className="text-[9px] text-slate-400 line-clamp-1 mt-0.5">{mode.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Viewport */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="rounded-2xl bg-[#061e27] border border-teal-500/35 p-3 sm:p-4 shadow-2xl shadow-[#020b10]/95 relative corner-crosshair">
              
              {/* Viewport Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-teal-500/20 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-200 font-semibold tracking-wider">
                    SKETCHUP PRO 2025 • INTERACTIVE VIEWPORT
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 text-[11px]">
                  <span className="text-teal-300 font-semibold">AZIMUTH: {currentSun.azimuth}</span>
                  <span>•</span>
                  <span>ELEV: {currentSun.elevation}</span>
                  <span>•</span>
                  <span className="text-amber-400 font-semibold uppercase">
                    {currentSun.label}
                  </span>
                </div>
              </div>

              {/* Viewport Canvas Screen */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#030d12] border border-teal-500/30 group">
                
                {/* 3D Viewport Visual Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${cameraAngle}-${displayMode}`}
                    initial={{ opacity: 0.3, scale: 0.97 }}
                    animate={{ 
                      opacity: 1, 
                      scale: zoomLevel / 100 
                    }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full h-full relative transition-transform duration-500 ${currentCamera.tiltClass}`}
                  >
                    <img
                      src={currentCamera.image}
                      alt={`${currentCamera.label} architectural rendering`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';
                      }}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        displayMode === 'clay' ? 'contrast-125 grayscale brightness-95' :
                        displayMode === 'wireframe' ? 'contrast-140 invert hue-rotate-180 brightness-90' :
                        displayMode === 'shadows' ? 'contrast-160 grayscale' :
                        sunAngle === 'sunset' ? 'sepia-30 saturate-140 brightness-105' :
                        sunAngle === 'twilight' ? 'contrast-120 brightness-75 hue-rotate-15' :
                        sunAngle === 'morning' ? 'brightness-108 saturate-115' : 'brightness-118 contrast-110'
                      }`}
                    />

                    {/* ==============================================================
                        MATERIAL SHADER SIMULATION OVERLAYS
                        ============================================================== */}
                    {displayMode === 'render' && material === 'cedar' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-700/25 via-amber-900/15 to-transparent mix-blend-color-burn pointer-events-none" />
                    )}

                    {displayMode === 'render' && material === 'shou-sugi-ban' && (
                      <div className="absolute inset-0 bg-[#060a0f]/45 mix-blend-multiply pointer-events-none" />
                    )}

                    {displayMode === 'render' && material === 'concrete' && (
                      <div className="absolute inset-0 bg-slate-400/20 mix-blend-soft-light pointer-events-none" />
                    )}

                    {displayMode === 'render' && material === 'stucco' && (
                      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" />
                    )}

                    {/* ==============================================================
                        SUN STUDY ATMOSPHERIC LIGHTING OVERLAYS
                        ============================================================== */}
                    {displayMode === 'render' && sunAngle === 'sunset' && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/40 via-orange-500/25 to-transparent mix-blend-color-dodge pointer-events-none" />
                    )}

                    {displayMode === 'render' && sunAngle === 'twilight' && (
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-indigo-950/45 to-[#020b10]/60 mix-blend-multiply pointer-events-none">
                        {/* Simulated glowing interior window light bloom */}
                        <div className="absolute top-1/3 left-1/3 w-64 h-32 bg-amber-400/30 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-1/4 right-1/4 w-72 h-32 bg-teal-400/35 rounded-full blur-3xl pointer-events-none" />
                      </div>
                    )}

                    {displayMode === 'render' && sunAngle === 'morning' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 via-transparent to-teal-950/20 mix-blend-screen pointer-events-none" />
                    )}

                    {displayMode === 'render' && sunAngle === 'midday' && (
                      <div className="absolute inset-0 bg-white/10 mix-blend-soft-light pointer-events-none" />
                    )}

                    {/* ==============================================================
                        DISPLAY LAYER MODES: BLUEPRINT GRID / SHADOW VECTORS
                        ============================================================== */}
                    {(displayMode === 'clay' || displayMode === 'wireframe') && (
                      <div className="absolute inset-0 bg-architect-grid opacity-50 pointer-events-none" />
                    )}

                    {displayMode === 'shadows' && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-amber-500/15 pointer-events-none mix-blend-multiply" />
                    )}

                    {/* ==============================================================
                        CAMERA ANGLE ARCHITECTURAL OVERLAYS
                        ============================================================== */}
                    {/* Top / Aerial View Overlays */}
                    {cameraAngle === 'top' && (
                      <div className="absolute inset-0 pointer-events-none border-4 border-dashed border-teal-400/50 m-5 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start font-mono text-[11px] text-teal-300 bg-[#031118]/90 px-3 py-1.5 rounded-lg border border-teal-500/40">
                          <span>AERIAL BIRD'S-EYE VIEW • 90° NADIR • BOUNDARY: 140' x 95'</span>
                        </div>
                        <div className="flex justify-between items-end font-mono text-[11px] text-amber-300 bg-[#031118]/90 px-3 py-1.5 rounded-lg border border-amber-500/40">
                          <span>COMPASS: TRUE NORTH (0° N) • ROOF SURFACE: 4,800 SQ FT</span>
                        </div>
                      </div>
                    )}

                    {/* Front Elevation View Overlays */}
                    {cameraAngle === 'front' && (
                      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
                        <div className="border-b-2 border-dashed border-teal-400/60 w-full flex justify-between text-[11px] font-mono text-teal-300 bg-[#031118]/70 px-2 py-0.5 rounded">
                          <span>PARAPET ROOFLINE ELEVATION +24'-0"</span>
                          <span>T.O.P. LEVEL 02</span>
                        </div>
                        <div className="border-b-2 border-dashed border-teal-400/60 w-full flex justify-between text-[11px] font-mono text-teal-300 bg-[#031118]/70 px-2 py-0.5 rounded">
                          <span>MAIN FINISH SLAB ELEVATION +0'-0"</span>
                          <span>FINISH GRADE (0.00m)</span>
                        </div>
                      </div>
                    )}

                    {/* Isometric View Overlays */}
                    {cameraAngle === 'isometric' && (
                      <div className="absolute inset-0 pointer-events-none bg-architect-dots opacity-55 flex items-end p-4">
                        <div className="font-mono text-[11px] text-teal-300 bg-[#031118]/90 px-3 py-1.5 rounded-lg border border-teal-400/40 shadow-lg">
                          AXIS: X-AXIS (RED) • Y-AXIS (GREEN) • Z-AXIS (BLUE) • 30° PARALLEL PROJECTION
                        </div>
                      </div>
                    )}

                    {/* Perspective View Overlays */}
                    {cameraAngle === 'perspective' && (
                      <div className="absolute bottom-4 left-4 pointer-events-none font-mono text-[11px] text-teal-300 bg-[#031118]/85 px-3 py-1.5 rounded-lg border border-teal-500/30">
                        HUMAN SCALE EYE-LEVEL 5'-6" • 24mm WIDE-ANGLE LENS
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Laser Scanning Animation Bar */}
                {isScanning && (
                  <motion.div
                    initial={{ top: '-5%' }}
                    animate={{ top: '105%' }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent shadow-[0_0_20px_#2dd4bf] pointer-events-none z-30"
                  />
                )}

                {/* Live Feedback Toast Banner */}
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 z-30 bg-[#031118]/95 border border-teal-400 text-teal-200 text-xs font-mono px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md"
                  >
                    <Activity className="w-4 h-4 text-teal-400 animate-spin" />
                    <span className="font-semibold">{feedbackMessage}</span>
                  </motion.div>
                )}

                {/* Top-Left Floating HUD: Active Material & Sun Stats */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/95 backdrop-blur-md border border-teal-500/40 text-[11px] font-mono text-teal-200 shadow-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shadow-xs" style={{ backgroundColor: currentMaterial.hex }} />
                    <span>Material:</span>
                    <span className="text-white font-bold">{currentMaterial.name}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/95 backdrop-blur-md border border-teal-500/40 text-[11px] font-mono text-amber-300 shadow-xl flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sun Study:</span>
                    <span className="text-white font-bold">{currentSun.label} ({currentSun.time})</span>
                  </div>
                </div>

                {/* Top-Right Camera Angle Buttons */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#031118]/95 backdrop-blur-md p-1.5 rounded-xl border border-teal-500/40 text-xs font-mono z-20 shadow-2xl">
                  {cameraAngles.map((angle) => {
                    const isActive = cameraAngle === angle.id;
                    return (
                      <button
                        key={angle.id}
                        onClick={() => {
                          setCameraAngle(angle.id);
                          triggerUpdate(`📷 Camera View: ${angle.label.toUpperCase()} (${angle.lens})`);
                        }}
                        className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer font-mono text-xs ${
                          isActive
                            ? 'bg-teal-400 text-[#031118] font-bold shadow-md'
                            : 'text-slate-300 hover:text-white hover:bg-teal-500/20'
                        }`}
                      >
                        {angle.label}
                      </button>
                    );
                  })}
                </div>

                {/* Zoom & Orbit Controls on bottom right */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#031118]/95 backdrop-blur-md p-1.5 rounded-xl border border-teal-500/40 z-20 shadow-xl">
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(90, prev - 10))}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b] cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-teal-300 px-1 font-semibold">{zoomLevel}%</span>
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(140, prev + 10))}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b] cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setZoomLevel(100);
                      setCameraAngle('perspective');
                      triggerUpdate('🔄 Viewport Reset to 100% Perspective');
                    }}
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-[#06202b] cursor-pointer"
                    title="Reset View to Default"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewport Lower Footer Bar */}
              <div className="mt-3.5 pt-3 border-t border-teal-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-3 text-slate-300">
                  <span className="text-teal-300">CAMERA: {currentCamera.lens.toUpperCase()}</span>
                  <span>•</span>
                  <span>SHADOWS: {currentSun.temp.toUpperCase()}</span>
                  <span>•</span>
                  <span className="text-emerald-300 font-semibold">SKETCHUP PRO 2025</span>
                </div>

                <button
                  onClick={onBookSession}
                  className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#031118] font-mono font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-teal-950/70 cursor-pointer btn-shine-sweep"
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
