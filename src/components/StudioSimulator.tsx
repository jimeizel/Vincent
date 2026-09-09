import React, { useState, useEffect } from 'react';
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
  Grid,
  Camera,
  Activity,
  Zap,
  Check
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
  const [scanMessage, setScanMessage] = useState<string>('Viewport Ready');

  // Trigger scanning laser animation whenever settings change
  const triggerScan = (msg: string) => {
    setScanMessage(msg);
    setIsScanning(true);
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 600);
    return () => clearTimeout(timer);
  };

  // Material configurations
  const materials: { id: MaterialType; name: string; hex: string; note: string; tag: string }[] = [
    { 
      id: 'cedar', 
      name: 'Natural Cedar Siding', 
      hex: '#A2673B', 
      note: 'Warm horizontal tongue & groove timber slats',
      tag: 'Warm Teak & Cedar Grain'
    },
    { 
      id: 'stucco', 
      name: 'Smooth White Stucco', 
      hex: '#E5E7EB', 
      note: 'Hand-troweled clean white lime plaster',
      tag: 'Minimalist White Plaster'
    },
    { 
      id: 'shou-sugi-ban', 
      name: 'Charred Shou Sugi Ban', 
      hex: '#181C22', 
      note: 'Japanese flame-charred blackened cypress siding',
      tag: 'Matte Carbon Black Wood'
    },
    { 
      id: 'concrete', 
      name: 'Board-Formed Concrete', 
      hex: '#6B7280', 
      note: 'Architectural concrete with horizontal timber imprints',
      tag: 'Industrial Formwork Concrete'
    },
  ];

  // Sun studies
  const sunStudies = [
    { 
      id: 'morning' as const, 
      label: 'Morning Sun', 
      time: '08:00 AM', 
      azimuth: '75° East',
      elevation: '22°',
      desc: 'Soft golden dawn low-angle rays with long east shadows', 
      icon: Sun 
    },
    { 
      id: 'midday' as const, 
      label: 'Midday High', 
      time: '12:30 PM', 
      azimuth: '180° South',
      elevation: '68°',
      desc: 'Crisp vertical sunlight testing deep roof overhang shade', 
      icon: Sun 
    },
    { 
      id: 'sunset' as const, 
      label: 'Golden Sunset', 
      time: '06:45 PM', 
      azimuth: '265° West',
      elevation: '14°',
      desc: 'Warm 2700K golden hour illumination and reflection', 
      icon: Sunset 
    },
    { 
      id: 'twilight' as const, 
      label: 'Twilight Night', 
      time: '08:45 PM', 
      azimuth: '310° NW',
      elevation: '-8°',
      desc: 'Deep blue-hour ambient tone with glowing interior lights', 
      icon: Moon 
    },
  ];

  // Display modes
  const displayModes = [
    { id: 'render' as const, label: 'Full Render', desc: 'V-Ray photorealistic lighting and atmospheric composite' },
    { id: 'clay' as const, label: 'SketchUp Clay', desc: 'Monochrome volumetric massing without textures' },
    { id: 'wireframe' as const, label: 'Wireframe X-Ray', desc: 'Architectural structural edge lines and internal geometry' },
    { id: 'shadows' as const, label: 'Shadow Vectors', desc: 'High-contrast solar shadow study vectors' },
  ];

  // Camera presets
  const cameraPresets: { id: CameraAngle; label: string; fov: string; desc: string }[] = [
    { id: 'perspective', label: 'Perspective', fov: '24mm Wide-Angle', desc: 'Eye-level 3D Human Perspective' },
    { id: 'front', label: 'Front', fov: 'Orthographic 50mm', desc: 'True Front Elevation Facade' },
    { id: 'isometric', label: 'Isometric', fov: 'Parallel Axonometric', desc: '30° Architectural Massing Angle' },
    { id: 'top', label: 'Top', fov: 'Plan View 90° Nadir', desc: "Aerial Bird's-Eye Site Plan" },
  ];

  // Dynamic Scene Matrix based on Camera Angle, Material, and Sun Angle
  const getSceneImage = () => {
    // 1. TOP VIEW (Bird's Eye Site Plan)
    if (cameraAngle === 'top') {
      return 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80';
    }

    // 2. FRONT VIEW (Elevation Facade)
    if (cameraAngle === 'front') {
      if (material === 'shou-sugi-ban') {
        return 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80';
      }
      if (material === 'concrete') {
        return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80';
      }
      if (material === 'cedar') {
        return 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80';
      }
      return 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80';
    }

    // 3. ISOMETRIC VIEW (30° Axonometric Massing Angle)
    if (cameraAngle === 'isometric') {
      if (material === 'cedar') {
        return 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80';
      }
      if (material === 'shou-sugi-ban') {
        return 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80';
      }
      return 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80';
    }

    // 4. PERSPECTIVE VIEW (Courtyard Villa Eye-Level)
    // Differentiate by Material & Sun Angle
    if (material === 'cedar') {
      return 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80';
    }
    if (material === 'shou-sugi-ban') {
      return 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80';
    }
    if (material === 'concrete') {
      return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80';
    }

    // Default Stucco / Dynamic Lighting
    if (sunAngle === 'twilight') {
      return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80';
    }
    if (sunAngle === 'morning') {
      return 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80';
    }
    if (sunAngle === 'midday') {
      return 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80';
    }
    // Sunset default
    return 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80';
  };

  const activeSun = sunStudies.find(s => s.id === sunAngle) || sunStudies[2];
  const activeMaterial = materials.find(m => m.id === material) || materials[1];
  const activeCamera = cameraPresets.find(c => c.id === cameraAngle) || cameraPresets[0];

  return (
    <section id="studio" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Background atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Image 7 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>INTERACTIVE SKETCHUP STUDIO SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Experience 3D Space, Sun Angles &amp; Materials
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Simulate how Vincent Jimenez configures SketchUp models with custom sunlight vectors, material swatches, and structural layer explosions. Click any view, time, or texture below to watch the scene adapt in real time.
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
                <span className="text-[10px] font-mono text-teal-400 bg-[#04151c] px-2 py-0.5 rounded border border-teal-500/20">
                  {activeSun.time}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {sunStudies.map((study) => {
                  const Icon = study.icon;
                  const isActive = sunAngle === study.id;
                  return (
                    <button
                      key={study.id}
                      onClick={() => {
                        setSunAngle(study.id);
                        triggerScan(`Simulating Solar Angle: ${study.label} (${study.time})`);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07212c]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-teal-400" />
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-medium">
                        <Icon className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                        <span>{study.label}</span>
                      </div>
                      <div className="text-[10px] text-teal-300/90 font-mono mt-0.5">{study.time}</div>
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
                  4 Finishes
                </span>
              </div>

              <div className="space-y-2">
                {materials.map((mat) => {
                  const isActive = material === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => {
                        setMaterial(mat.id);
                        triggerScan(`Applying Facade Material: ${mat.name}`);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer relative overflow-hidden ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07212c]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400" />
                      )}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full border border-white/30 shadow-xs flex-shrink-0"
                          style={{ backgroundColor: mat.hex }}
                        />
                        <div>
                          <div className="text-xs font-mono font-medium text-white">{mat.name}</div>
                          <div className="text-[10px] text-slate-400">{mat.note}</div>
                        </div>
                      </div>
                      {isActive ? (
                        <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500">Select</span>
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

              <div className="grid grid-cols-2 gap-2">
                {displayModes.map((mode) => {
                  const isActive = displayMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setDisplayMode(mode.id);
                        triggerScan(`Layer Mode: ${mode.label}`);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                          : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white hover:bg-[#07212c]'
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
                  <span className="text-teal-300">AZIMUTH: {activeSun.azimuth}</span>
                  <span>•</span>
                  <span className="text-slate-400">ELEV: {activeSun.elevation}</span>
                  <span>•</span>
                  <span className="text-amber-400 uppercase font-semibold">
                    {sunAngle.toUpperCase()} LIGHTING
                  </span>
                </div>
              </div>

              {/* Viewport Canvas Screen */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#030d12] border border-teal-500/30 group">
                
                {/* 3D Viewport Image with Animated Transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${cameraAngle}-${material}-${sunAngle}-${displayMode}`}
                    initial={{ opacity: 0.2, scale: 0.98 }}
                    animate={{ 
                      opacity: 1, 
                      scale: zoomLevel / 100,
                      rotateX: cameraAngle === 'isometric' ? 4 : 0,
                      rotateY: cameraAngle === 'isometric' ? -4 : 0
                    }}
                    exit={{ opacity: 0.2 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={getSceneImage()}
                      alt={`${cameraAngle} view of residence with ${activeMaterial.name}`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80';
                      }}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        displayMode === 'clay' ? 'contrast-125 grayscale brightness-95' :
                        displayMode === 'wireframe' ? 'contrast-140 invert hue-rotate-180 brightness-90' :
                        displayMode === 'shadows' ? 'contrast-150 grayscale' :
                        sunAngle === 'sunset' ? 'brightness-105 saturate-125' :
                        sunAngle === 'twilight' ? 'hue-rotate-10 contrast-110 brightness-90' :
                        sunAngle === 'morning' ? 'brightness-105 saturate-110' : 'brightness-110 contrast-105'
                      }`}
                    />

                    {/* Atmospheric Lighting Filters per Sun Angle */}
                    {displayMode === 'render' && sunAngle === 'sunset' && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-orange-500/15 to-transparent mix-blend-color-dodge pointer-events-none" />
                    )}

                    {displayMode === 'render' && sunAngle === 'twilight' && (
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/35 via-indigo-950/30 to-amber-500/10 mix-blend-multiply pointer-events-none" />
                    )}

                    {displayMode === 'render' && sunAngle === 'morning' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-200/25 via-transparent to-teal-900/15 mix-blend-screen pointer-events-none" />
                    )}

                    {/* Material Tonal Calibration Shader Overlays */}
                    {displayMode === 'render' && material === 'shou-sugi-ban' && (
                      <div className="absolute inset-0 bg-[#020508]/30 mix-blend-multiply pointer-events-none" />
                    )}

                    {displayMode === 'render' && material === 'cedar' && (
                      <div className="absolute inset-0 bg-amber-800/15 mix-blend-color-burn pointer-events-none" />
                    )}

                    {displayMode === 'render' && material === 'concrete' && (
                      <div className="absolute inset-0 bg-slate-500/15 mix-blend-soft-light pointer-events-none" />
                    )}

                    {/* Blueprint grid overlay on clay/wireframe */}
                    {(displayMode === 'clay' || displayMode === 'wireframe') && (
                      <div className="absolute inset-0 bg-architect-grid opacity-40 pointer-events-none" />
                    )}

                    {/* Shadow vector overlay simulation */}
                    {displayMode === 'shadows' && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-amber-500/20 pointer-events-none mix-blend-multiply" />
                    )}

                    {/* Camera Angle Architectural Overlays */}
                    {cameraAngle === 'top' && (
                      <div className="absolute inset-0 pointer-events-none border-4 border-dashed border-teal-400/40 m-4 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start font-mono text-[11px] text-teal-300 bg-[#031118]/80 px-2 py-1 rounded w-fit">
                          <span>AERIAL NADIR 90° • SITE BOUNDARY: 140' x 95'</span>
                        </div>
                        <div className="flex justify-between items-end font-mono text-[11px] text-amber-300 bg-[#031118]/80 px-2 py-1 rounded w-fit">
                          <span>NORTH (N 0° 0' 0" E)</span>
                        </div>
                      </div>
                    )}

                    {cameraAngle === 'front' && (
                      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6">
                        <div className="border-b border-dashed border-teal-400/50 w-full flex justify-between text-[10px] font-mono text-teal-300">
                          <span>ROOFLINE ELEVATION +24'-0"</span>
                          <span>LEVEL 02</span>
                        </div>
                        <div className="border-b border-dashed border-teal-400/50 w-full flex justify-between text-[10px] font-mono text-teal-300">
                          <span>MAIN FLOOR SLAB +0'-0"</span>
                          <span>FINISH GRADE</span>
                        </div>
                      </div>
                    )}

                    {cameraAngle === 'isometric' && (
                      <div className="absolute inset-0 pointer-events-none bg-architect-dots opacity-45">
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-teal-300 bg-[#031118]/90 px-2 py-1 rounded border border-teal-400/30">
                          AXIS: X(RED) • Y(GREEN) • Z(BLUE) • 30° PARALLEL
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Laser Scanline Transition Sweep when Settings Change */}
                {isScanning && (
                  <motion.div
                    initial={{ top: '-10%' }}
                    animate={{ top: '110%' }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent shadow-[0_0_15px_#2dd4bf] pointer-events-none z-30"
                  />
                )}

                {/* Simulated Floating Tool HUD */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/95 backdrop-blur-md border border-teal-500/40 text-[11px] font-mono text-teal-200 shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeMaterial.hex }} />
                    <span>Material:</span>
                    <span className="text-white font-semibold">{activeMaterial.name}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/95 backdrop-blur-md border border-teal-500/40 text-[11px] font-mono text-amber-300 shadow-xl flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sun Study:</span>
                    <span className="text-white font-semibold">{activeSun.label} ({activeSun.time})</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#031118]/95 backdrop-blur-md border border-teal-500/40 text-[11px] font-mono text-cyan-300 shadow-xl flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Camera:</span>
                    <span className="text-white font-semibold">{activeCamera.label} ({activeCamera.fov})</span>
                  </div>
                </div>

                {/* Camera Control Presets with Animated Active Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#031118]/95 backdrop-blur-md p-1.5 rounded-xl border border-teal-500/40 text-xs font-mono z-20 shadow-xl">
                  {cameraPresets.map((preset) => {
                    const isActive = cameraAngle === preset.id;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => {
                          setCameraAngle(preset.id);
                          triggerScan(`Switched Camera to: ${preset.desc}`);
                        }}
                        className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer relative ${
                          isActive
                            ? 'bg-teal-400 text-[#031118] font-bold shadow-sm'
                            : 'text-slate-300 hover:text-white hover:bg-teal-500/15'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>

                {/* Scanning Live Feedback Indicator Bar */}
                {isScanning && (
                  <div className="absolute bottom-16 left-4 z-20 bg-[#031118]/90 border border-teal-400 text-teal-200 text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl animate-pulse">
                    <Activity className="w-3.5 h-3.5 text-teal-400 animate-spin" />
                    <span>{scanMessage}</span>
                  </div>
                )}

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
                      triggerScan('Reset Camera Viewport to 100%');
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
                  <span className="text-teal-300">MODEL STATS: 142 GROUPS</span>
                  <span>•</span>
                  <span>GEOMETRY: 4,800 SQ FT</span>
                  <span>•</span>
                  <span className="text-emerald-300 font-semibold">ENGINE: V-RAY 6 + SKETCHUP PRO 2025</span>
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
