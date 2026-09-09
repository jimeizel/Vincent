import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Quote, 
  Award, 
  CheckCircle2, 
  Box, 
  Palette, 
  Compass, 
  Building2, 
  Trees, 
  Star, 
  ArrowUpRight,
  Check
} from 'lucide-react';
import { VINCENT_BIO, TESTIMONIALS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column: About Vincent & Skill Proficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Profile & Studio Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono shadow-sm">
              <User className="w-3.5 h-3.5 text-teal-400" />
              <span>ABOUT VINCENT JIMENEZ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-snug">
              Designing at the Convergence of Architecture, Living Space & Digital Precision.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {VINCENT_BIO.bio}
            </p>

            <div className="bg-[#061e27] p-6 rounded-2xl border-l-4 border-teal-400 border-r border-t border-b border-teal-500/25 space-y-3 shadow-xl">
              <div className="text-[11px] font-mono uppercase text-teal-400 tracking-wider font-semibold">
                Studio Philosophy & Commitment
              </div>
              <p className="text-slate-200 text-sm sm:text-base italic font-serif leading-relaxed">
                "{VINCENT_BIO.tagline}"
              </p>
              <div className="text-xs font-mono text-teal-300 pt-1">
                — {VINCENT_BIO.name}, {VINCENT_BIO.role}
              </div>
            </div>

            {/* Specialties list */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                CORE ARCHITECTURAL SPECIALTIES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {VINCENT_BIO.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                    <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-medium text-xs tracking-wider uppercase transition-all shadow-lg shadow-teal-950/60 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Technical Software & Discipline Proficiency */}
          <div className="lg:col-span-6 bg-[#061e27] p-6 sm:p-8 rounded-2xl border border-teal-500/30 shadow-2xl shadow-[#020b10]/80">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-serif font-bold text-white">
                Technical Software Proficiency
              </h3>
              <span className="text-xs font-mono text-teal-400">{VINCENT_BIO.experience}</span>
            </div>
            
            <p className="text-xs text-slate-400 mb-6 font-mono font-light">
              Calibrated Trimble SketchUp 3D modeling, LayOut 2D drafting, and photorealistic post-production.
            </p>

            <div className="space-y-4">
              {VINCENT_BIO.softwareProficiency.map((skill) => {
                const numericPercent = parseInt(skill.level, 10) || 95;
                return (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-teal-300 font-medium">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 bg-[#031118] rounded-full overflow-hidden border border-teal-500/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${numericPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-300 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Badges Below */}
            <div className="mt-8 pt-6 border-t border-teal-500/20 grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#04161e] p-3.5 rounded-xl border border-teal-500/25">
                <div className="text-xl sm:text-2xl font-serif font-bold text-teal-300">
                  10+ Years
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">SKETCHUP PRACTICE</div>
              </div>

              <div className="bg-[#04161e] p-3.5 rounded-xl border border-teal-500/25">
                <div className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  100%
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">PERMIT & BUILD APPROVAL</div>
              </div>
            </div>

          </div>

        </div>

        {/* Client Testimonials Section */}
        <div className="pt-12 border-t border-teal-500/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              Endorsements from Architects, Builders & Clients
            </h3>
            <p className="text-xs sm:text-sm font-mono text-teal-300">
              Verified feedback on SketchUp deliverables, rendering clarity, and turnaround reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-[#061e27] border border-teal-500/25 flex flex-col justify-between shadow-xl shadow-[#020b10]/50"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic mb-4">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-teal-500/20">
                  <div className="text-xs font-mono font-bold text-white">{test.author}</div>
                  <div className="text-[11px] text-teal-300 font-mono">{test.role} • {test.company}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{test.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
