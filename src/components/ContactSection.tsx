import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Check, 
  Copy, 
  CheckCheck, 
  Mail, 
  Building2, 
  Calendar, 
  Box, 
  Palette, 
  MapPin, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Upload, 
  FileText, 
  Trash2,
  Phone,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onResetInitialService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService,
  onResetInitialService 
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(
    initialService || 'Full Architectural Design & 3D Modeling'
  );
  const [selectedScale, setSelectedScale] = useState<string>('Custom Residence (2,500 – 5,000 sq.ft)');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard (4 – 8 Weeks)');
  const [softwareDeliverables, setSoftwareDeliverables] = useState<string[]>([
    'SketchUp .SKP 3D Model',
    'Photorealistic 8K Renders'
  ]);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<{ name: string; size: string }[]>([]);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const disciplines = [
    'Full Architectural Design & 3D Modeling',
    'Concept 01: The Solstice Desert Modern Villa',
    'Concept 02: Horizon Coastal Glass Pavilion',
    'Concept 03: Komorebi Nordic Pavilion',
    'Concept 04: Monolith Hillside Concrete',
    'Concept 05: Aura Tropical Sanctuary',
    'SketchUp Pro 3D Massing & Modeling',
    'V-Ray & Enscape Photorealistic Renderings',
    'LayOut 2D Permitting Drawing Sets',
  ];

  const scales = [
    'Boutique Pavilion / ADU (< 1,500 sq.ft)',
    'Custom Residence (2,500 – 5,000 sq.ft)',
    'Luxury Hillside Estate (5,000+ sq.ft)',
    'Commercial / Multi-Unit Development'
  ];

  const deliverableOptions = [
    'SketchUp .SKP 3D Model',
    'Photorealistic 8K Renders',
    'LayOut 2D Permitting Drawings',
    'Solar & Shadow Azimuth Studies'
  ];

  const toggleDeliverable = (item: string) => {
    if (softwareDeliverables.includes(item)) {
      setSoftwareDeliverables(softwareDeliverables.filter((d) => d !== item));
    } else {
      setSoftwareDeliverables([...softwareDeliverables, item]);
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).map((f) => ({
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`
    }));
    setAttachedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleCopyBrief = () => {
    const briefText = `ARCHITECTURAL INQUIRY — VINCENT JIMENEZ
Service: ${selectedDiscipline}
Scale: ${selectedScale}
Timeline: ${selectedTimeline}
Deliverables: ${softwareDeliverables.join(', ')}
Client: ${name || 'Prospective Client'} (${email || 'Email not provided'})
Phone: ${phone || 'Not provided'}
Site Location: ${location || 'Not provided'}
Files: ${attachedFiles.map((f) => f.name).join(', ') || 'None'}

Project Description:
${projectBrief || 'Detailed discussion during initial consultation call.'}`;

    navigator.clipboard.writeText(briefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-teal-600/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>COMMISSION INQUIRY & CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Request an Architectural Consultation
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Collaborate directly with Vincent Jimenez on your next custom residential build, 3D SketchUp model, or photorealistic rendering set. Fill out the scope below to receive a formal proposal within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#061e27] border border-teal-500/30 p-6 sm:p-10 shadow-2xl shadow-[#020b10]/90">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#04161e] border border-teal-400 flex items-center justify-center mx-auto text-teal-300 shadow-xl shadow-teal-950/60">
                  <CheckCheck className="w-8 h-8 text-teal-400" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Consultation Request Received
                </h3>

                <p className="text-sm text-slate-300 max-w-lg mx-auto font-light leading-relaxed">
                  Thank you, <span className="text-teal-300 font-medium">{name || 'Client'}</span>. Vincent Jimenez will review your project requirements for <span className="text-white font-medium">{selectedDiscipline}</span> and contact you within 24 hours at <span className="text-teal-300">{email}</span>.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleCopyBrief}
                    className="px-4 py-2.5 rounded-xl bg-[#04161e] border border-teal-500/30 text-teal-300 hover:text-white text-xs font-mono flex items-center gap-2 cursor-pointer transition-all"
                  >
                    {copiedBrief ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedBrief ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setProjectBrief('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-teal-400 text-[#031118] text-xs font-mono font-medium hover:bg-teal-300 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Discipline Selection */}
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-3 font-semibold">
                    1. PROJECT SCOPE OR CONCEPT
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {disciplines.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDiscipline(d)}
                        className={`p-3 rounded-xl text-left text-xs font-mono transition-all border cursor-pointer ${
                          selectedDiscipline === d
                            ? 'bg-[#092d3a] border-teal-400 text-white font-medium shadow-sm'
                            : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Scale & Living Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                      2. APPROXIMATE SCALE
                    </label>
                    <select
                      value={selectedScale}
                      onChange={(e) => setSelectedScale(e.target.value)}
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-teal-400"
                    >
                      {scales.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                      3. DESIRED TIMELINE
                    </label>
                    <select
                      value={selectedTimeline}
                      onChange={(e) => setSelectedTimeline(e.target.value)}
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-teal-400"
                    >
                      <option>Accelerated (2 – 4 Weeks)</option>
                      <option>Standard (4 – 8 Weeks)</option>
                      <option>Comprehensive Phased (8 – 16 Weeks)</option>
                      <option>Flexible / In Planning</option>
                    </select>
                  </div>
                </div>

                {/* 3. Deliverables */}
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-3 font-semibold">
                    4. REQUESTED DELIVERABLES
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {deliverableOptions.map((item) => {
                      const isSelected = softwareDeliverables.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleDeliverable(item)}
                          className={`p-3 rounded-xl text-left text-xs font-mono transition-all border flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#092d3a] border-teal-400 text-white font-medium'
                              : 'bg-[#04161e] border-teal-500/20 text-slate-400 hover:text-white'
                          }`}
                        >
                          <span className="text-[11px]">{item}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marcus@domain.com"
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                      PROJECT LOCATION / CITY
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Austin, TX or Malibu, CA"
                      className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                {/* 5. Project Brief */}
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                    PROJECT VISION & GOALS
                  </label>
                  <textarea
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Describe your site, architectural style preferences, program goals, or specific SketchUp/render requirements..."
                    className="w-full bg-[#04161e] border border-teal-500/30 rounded-xl p-4 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                {/* 6. Drag & Drop File Upload */}
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-1.5 font-semibold">
                    UPLOAD SITE PLANS, SKETCHES, OR SURVEY CAD (OPTIONAL)
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDraggingFile(true); }}
                    onDragLeave={() => setIsDraggingFile(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDraggingFile(false);
                      handleFileUpload(e.dataTransfer.files);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                      isDraggingFile
                        ? 'border-teal-400 bg-[#072836]'
                        : 'border-teal-500/30 bg-[#04161e] hover:border-teal-400/60'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <p className="text-xs font-mono text-slate-300">
                      Drag and drop PDF, DWG, SKP, or image files, or <span className="text-teal-300 underline">browse files</span>
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">
                      Max file size: 50MB per file
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFileUpload(e.target.files)}
                    />
                  </div>

                  {/* Uploaded files list */}
                  {attachedFiles.length > 0 && (
                    <div className="mt-3 space-y-1.5">
                      {attachedFiles.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#04161e] border border-teal-500/25 text-xs font-mono"
                        >
                          <div className="flex items-center gap-2 text-slate-200">
                            <FileText className="w-3.5 h-3.5 text-teal-400" />
                            <span>{f.name}</span>
                            <span className="text-slate-500">({f.size})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setAttachedFiles(attachedFiles.filter((_, idx) => idx !== i))}
                            className="text-slate-400 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-4 border-t border-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>Response guaranteed within 24 hours</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="px-4 py-3 rounded-xl bg-[#04161e] hover:bg-[#072533] border border-teal-500/30 text-teal-300 text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                      {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBrief ? 'Copied' : 'Copy Summary'}</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#031118] font-mono font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-950/60 cursor-pointer w-full sm:w-auto"
                    >
                      <span>Send Consultation Request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
