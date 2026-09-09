import React from 'react';
import { motion } from 'motion/react';
import { 
  Box, 
  Palette, 
  Layers, 
  Sun, 
  Trees, 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal,
  Compass,
  FileCheck
} from 'lucide-react';

export const WorkflowExplainer: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Topography & Massing in SketchUp',
      tool: 'Trimble SketchUp Pro',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      description: 'Ingesting surveyor CAD contour datasets. Using SketchUp Sandbox to generate graded natural terrain, retaining terraces, and exact spatial bounding boxes for interior and exterior envelopes.',
      bullets: [
        'Millimeter-precision real-world coordinates',
        'Contour grading, bioswales, and road contours',
        'Component organization by structural tags'
      ]
    },
    {
      step: '02',
      title: 'Solar Orientation & Spatial Sightlines',
      tool: 'Trimble SketchUp Sun Engine',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      description: 'Simulating sun azimuth and shadow vectors at specific global coordinates and seasons. Ensuring living volumes capture gentle diffused daylight while terraces deflect harsh seasonal glare.',
      bullets: [
        'Solstice & equinox shadow path studies',
        'Overhang cantilever depth calculations',
        'Framed sightlines connecting to living flora'
      ]
    },
    {
      step: '03',
      title: 'Base Pass & Multi-Channel Isolation',
      tool: 'V-Ray & Enscape Engine',
      badgeColor: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      description: 'Extracting high-resolution multi-channel render passes: diffuse color, ambient occlusion, material ID masks, specular reflections, and depth maps (Z-depth) for surgical post-production.',
      bullets: [
        'Material ID channels for surgical layer selection',
        'Ambient occlusion depth in structural reveals',
        'Z-depth maps for optical fog and atmosphere'
      ]
    },
    {
      step: '04',
      title: 'Atmospheric Painting & Grading',
      tool: 'Adobe Photoshop CC',
      badgeColor: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      description: 'Where technical CAD transforms into poetic architecture. Vincent meticulously paints weather moods, humidity, evening interior warm lighting glows, and layered endemic foliage.',
      bullets: [
        'Digital botanical brushes for endemic planting',
        'Camera Raw color grading (deep dark blue-green, warm amber)',
        'Water surface reflections, dew, and evening mist'
      ]
    }
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#031118] relative overflow-hidden border-t border-teal-500/20">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-architect-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>THE 4-STAGE ARCHITECTURAL PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            How Technical 3D Transmutes into Architecture
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A disciplined four-phase pipeline marrying mathematical CAD rigor with emotive visual atmosphere. Contractors receive buildable certainty; clients experience visceral emotion.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-[#061e27] border border-teal-500/25 p-6 flex flex-col justify-between hover:border-teal-400/60 transition-all duration-300 group shadow-xl shadow-[#020b10]/60"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif italic font-bold text-3xl text-teal-400">
                    {item.step}
                  </span>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.tool}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-teal-500/15">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] font-mono text-teal-200/90">
                      <span className="text-teal-400 font-bold">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-teal-500/20 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Phase {item.step} of 04</span>
                <span className="text-teal-400">Validated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
