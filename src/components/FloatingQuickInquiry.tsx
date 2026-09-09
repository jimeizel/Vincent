import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Phone, 
  Mail, 
  Calendar, 
  Sparkles, 
  Calculator, 
  ArrowUpRight,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface FloatingQuickInquiryProps {
  onOpenContact: (preset?: string) => void;
  onOpenEstimator: () => void;
}

export const FloatingQuickInquiry: React.FC<FloatingQuickInquiryProps> = ({
  onOpenContact,
  onOpenEstimator
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show after user scrolls 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#061c24] border border-teal-500/40 p-5 shadow-2xl shadow-black/80 backdrop-blur-xl relative corner-crosshair"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-teal-500/20 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-[#10333a] border border-teal-400 flex items-center justify-center font-serif font-bold text-white text-sm shadow-md">
                    VJ
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#061c24] status-pulse-dot" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm flex items-center gap-1.5">
                    Vincent Jimenez
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      STUDIO
                    </span>
                  </h4>
                  <p className="text-[11px] font-mono text-teal-300/80 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-teal-400" />
                    <span>Avg. Response: &lt; 2 hours</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-teal-500/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Pitch */}
            <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
              Planning a new custom residence, landscape sanctuary, or need permitting-ready SketchUp 3D models? Let's discuss your project scope.
            </p>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact('Priority 15-Minute 3D Feasibility Review');
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer btn-shine-sweep"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 15-Min Feasibility Call</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#082631] hover:bg-[#0c3342] border border-teal-500/30 text-teal-200 hover:text-white font-mono text-xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>Calculate Instant 3D Estimate</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact('Direct Consultation Inquiry');
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#07202a] hover:bg-[#0b2b38] border border-teal-500/20 text-slate-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Send Architectural Inquiry</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Footer trust badge */}
            <div className="mt-3.5 pt-2.5 border-t border-teal-500/15 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-teal-400">
                <ShieldCheck className="w-3 h-3 text-teal-400" />
                <span>100% Permitting Compliance Guarantee</span>
              </span>
              <span>Q4 Commissions Open</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#0b2b36] to-[#082028] border border-teal-400/60 text-white shadow-xl shadow-black/80 hover:shadow-teal-500/20 transition-all cursor-pointer group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
        </span>
        <span className="font-mono text-xs text-teal-200 group-hover:text-white transition-colors">
          {isOpen ? 'Close' : 'Quick Inquiry & Estimate'}
        </span>
        <MessageSquare className="w-4 h-4 text-teal-400 group-hover:rotate-12 transition-transform" />
      </motion.button>
    </div>
  );
};
