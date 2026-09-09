import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Home, 
  Layers, 
  Sparkles, 
  Clock, 
  DollarSign, 
  ArrowUpRight, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface CostEstimatorProps {
  onQuoteWithEstimate: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onQuoteWithEstimate }) => {
  const [sqft, setSqft] = useState<number>(3500);
  const [projectType, setProjectType] = useState<'custom-home' | 'remodel' | 'interior' | 'landscape'>('custom-home');
  const [deliverables, setDeliverables] = useState({
    sketchupModel: true,
    layoutPermitSet: true,
    archvizRenders: true,
    solarStudy: false
  });

  // Rates
  const typeMultipliers = {
    'custom-home': { basePerSqft: 2.2, label: 'New Custom Luxury Home', estTimeline: '6 – 8 Weeks' },
    'remodel': { basePerSqft: 1.8, label: 'Modern Addition & Remodel', estTimeline: '4 – 6 Weeks' },
    'interior': { basePerSqft: 1.5, label: 'Interior Millwork & Architecture', estTimeline: '3 – 5 Weeks' },
    'landscape': { basePerSqft: 1.2, label: 'Landscape & Outdoor Living', estTimeline: '3 – 5 Weeks' },
  };

  const selectedType = typeMultipliers[projectType];

  let baseFee = sqft * selectedType.basePerSqft;
  if (!deliverables.layoutPermitSet) baseFee *= 0.75;
  if (!deliverables.archvizRenders) baseFee *= 0.85;
  if (deliverables.solarStudy) baseFee += 1200;

  const formattedFee = Math.round(baseFee).toLocaleString();
  const estConstructionLow = Math.round(sqft * 350).toLocaleString();
  const estConstructionHigh = Math.round(sqft * 520).toLocaleString();

  const handleExport = () => {
    const summary = `${selectedType.label} (${sqft.toLocaleString()} sq.ft) — Est. Design Fee: $${formattedFee}`;
    onQuoteWithEstimate(summary);
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>INTERACTIVE ARCHITECTURAL ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Instant Project Design & Cost Estimator
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Calculate estimated SketchUp 3D modeling fees, 2D LayOut permit drafting costs, and ballpark construction budgets for your project.
          </p>
        </div>

        {/* Estimator Calculator Card */}
        <div className="rounded-2xl bg-[#061e27] border border-teal-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-[#020b10]/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-3 font-semibold">
                  1. SELECT PROJECT TYPOLOGY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'custom-home', label: 'Custom Home', icon: Home },
                    { id: 'remodel', label: 'Modern Remodel', icon: Layers },
                    { id: 'interior', label: 'Interior Space', icon: Sparkles },
                    { id: 'landscape', label: 'Landscape Design', icon: Layers }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = projectType === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setProjectType(item.id as any)}
                        className={`p-3 rounded-xl text-center transition-all border cursor-pointer ${
                          isActive
                            ? 'bg-[#092d3a] border-teal-400 text-white shadow-md'
                            : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Icon className={`w-4 h-4 mx-auto mb-1.5 ${isActive ? 'text-teal-300' : 'text-slate-500'}`} />
                        <div className="text-xs font-mono font-medium">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Square Footage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    2. ESTIMATED TOTAL LIVING AREA
                  </label>
                  <span className="text-lg font-serif font-bold text-teal-300">
                    {sqft.toLocaleString()} Sq. Ft.
                  </span>
                </div>

                <input
                  type="range"
                  min={1200}
                  max={8500}
                  step={100}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 bg-[#041720] rounded-lg appearance-none cursor-pointer accent-teal-400"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                  <span>1,200 sq ft</span>
                  <span>3,500 sq ft</span>
                  <span>5,500 sq ft</span>
                  <span>8,500+ sq ft</span>
                </div>
              </div>

              {/* Step 3: Desired Deliverables */}
              <div>
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-3 font-semibold">
                  3. INCLUDED ARCHITECTURAL DELIVERABLES
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setDeliverables(p => ({ ...p, sketchupModel: !p.sketchupModel }))}
                    className={`p-3 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                      deliverables.sketchupModel ? 'bg-[#092d3a] border-teal-400 text-white' : 'bg-[#04161e] border-teal-500/20 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-medium">Trimble SketchUp Pro 3D Model</div>
                      <div className="text-[10px] text-slate-400">Layered, component-tagged .SKP</div>
                    </div>
                    {deliverables.sketchupModel && <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />}
                  </button>

                  <button
                    onClick={() => setDeliverables(p => ({ ...p, layoutPermitSet: !p.layoutPermitSet }))}
                    className={`p-3 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                      deliverables.layoutPermitSet ? 'bg-[#092d3a] border-teal-400 text-white' : 'bg-[#04161e] border-teal-500/20 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-medium">LayOut 2D Permitting Drawing Set</div>
                      <div className="text-[10px] text-slate-400">Plans, elevations & sections</div>
                    </div>
                    {deliverables.layoutPermitSet && <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />}
                  </button>

                  <button
                    onClick={() => setDeliverables(p => ({ ...p, archvizRenders: !p.archvizRenders }))}
                    className={`p-3 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                      deliverables.archvizRenders ? 'bg-[#092d3a] border-teal-400 text-white' : 'bg-[#04161e] border-teal-500/20 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-medium">Photorealistic V-Ray / Enscape 8K</div>
                      <div className="text-[10px] text-slate-400">Daylight & twilight stills</div>
                    </div>
                    {deliverables.archvizRenders && <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />}
                  </button>

                  <button
                    onClick={() => setDeliverables(p => ({ ...p, solarStudy: !p.solarStudy }))}
                    className={`p-3 rounded-xl text-left border flex items-center justify-between cursor-pointer transition-all ${
                      deliverables.solarStudy ? 'bg-[#092d3a] border-teal-400 text-white' : 'bg-[#04161e] border-teal-500/20 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-medium">Solar Shadow & Azimuth Analysis</div>
                      <div className="text-[10px] text-slate-400">Solstice shadow vectors</div>
                    </div>
                    {deliverables.solarStudy && <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#04161e] border border-teal-500/35 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-xs font-mono text-teal-300 uppercase tracking-wider mb-2 font-medium">
                  ESTIMATED PROJECT FEE
                </div>

                <div className="text-4xl sm:text-5xl font-serif font-bold text-white mb-1">
                  ${formattedFee}
                </div>

                <div className="text-xs font-mono text-slate-400 mb-6">
                  Estimated Design & 3D Modeling Services
                </div>

                <div className="space-y-3 pb-6 border-b border-teal-500/20 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Project Scope:</span>
                    <span className="text-white font-medium">{selectedType.label}</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Living Area:</span>
                    <span className="text-teal-300 font-semibold">{sqft.toLocaleString()} Sq Ft</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Project Timeline:</span>
                    <span className="text-white font-medium">{selectedType.estTimeline}</span>
                  </div>

                  <div className="flex justify-between text-slate-300 pt-2 border-t border-teal-500/15">
                    <span>Ballpark Build Cost:</span>
                    <span className="text-slate-200">${estConstructionLow} – ${estConstructionHigh}</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    onClick={handleExport}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-950/60 cursor-pointer"
                  >
                    <span>Request Official Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center font-mono">
                    *Estimates are preliminary and finalized after site and program review.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
