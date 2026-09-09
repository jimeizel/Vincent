import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Home, 
  Trees, 
  Box, 
  Palette, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Sparkles,
  Layers, 
  Compass,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface DisciplinesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string>(SERVICES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'custom-residential':
        return <Home className="w-5 h-5 text-teal-400" />;
      case '3d-modeling-massing':
        return <Box className="w-5 h-5 text-amber-400" />;
      case 'archviz-rendering':
        return <Sparkles className="w-5 h-5 text-teal-300" />;
      case 'layout-permit-drawings':
      default:
        return <Layers className="w-5 h-5 text-cyan-300" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>ARCHITECTURAL CAPABILITIES & SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Professional Design & 3D Visualization Services
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            From initial sketch massing to permitting-ready construction documents and photorealistic 8K imagery, Vincent Jimenez delivers architectural clarity across every phase.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#061e27] border-teal-400/70 shadow-2xl shadow-black/80'
                    : 'bg-[#04161f] border-teal-500/20 hover:border-teal-500/40'
                }`}
              >
                <div>
                  {/* Service Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#030d12] border border-teal-500/30 flex items-center justify-center shadow-inner">
                        {getIcon(service.id)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-teal-400 font-semibold tracking-wider uppercase">
                          SERVICE // {service.number}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-white mt-0.5">{service.title}</h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                      className="p-2 rounded-lg bg-[#07242f] text-slate-300 hover:text-white border border-teal-500/30 cursor-pointer"
                      aria-label="Toggle details"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-teal-400' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-xs font-mono text-teal-200/90 mb-3">{service.tagline}</p>
                  
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-teal-500/20">
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                          Standard Scope of Deliverables:
                        </div>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-200">
                              <Check className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Toolsets & Highlights */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-teal-500/15">
                        <div className="flex flex-wrap gap-1.5">
                          {service.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-[#030d12] border border-teal-500/25 text-[10px] font-mono text-teal-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Timeline: {service.estTimeline}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-teal-500/20 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.highlight}
                  </span>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 rounded-lg bg-teal-400 hover:bg-teal-300 text-[#031118] text-xs font-mono font-medium tracking-wide flex items-center gap-1.5 transition-all shadow-md shadow-teal-950/50 cursor-pointer flex-shrink-0"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
