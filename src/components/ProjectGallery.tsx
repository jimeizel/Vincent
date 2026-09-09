import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  Sparkles, 
  Search, 
  MapPin, 
  Layers, 
  ArrowUpRight, 
  Filter,
  SlidersHorizontal,
  FileCode,
  Eye,
  Maximize2
} from 'lucide-react';
import { CategoryType, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectGalleryProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onInquireProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Track render vs clay toggle per project card
  const [cardModes, setCardModes] = useState<Record<string, 'render' | 'clay'>>({});

  const toggleCardMode = (projectId: string, mode: 'render' | 'clay', e: React.MouseEvent) => {
    e.stopPropagation();
    setCardModes(prev => ({
      ...prev,
      [projectId]: mode
    }));
  };

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'residential', label: 'Residential Houses', count: PROJECTS.filter(p => p.category === 'residential').length },
    { id: 'exterior', label: 'Exterior Visualizations', count: PROJECTS.filter(p => p.category === 'exterior').length },
    { id: 'interior', label: 'Interior Architecture', count: PROJECTS.filter(p => p.category === 'interior').length },
    { id: 'clay', label: 'SketchUp 3D Clay Models', count: PROJECTS.filter(p => p.category === 'clay').length },
    { id: 'layout', label: 'Floor Plans & LayOut', count: PROJECTS.filter(p => p.category === 'layout').length },
  ];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      project.title.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.toolsUsed.some(t => t.toLowerCase().includes(query)) ||
      project.software.some(s => s.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#031118] relative border-t border-teal-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-teal-600/7 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Image 5 & 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07242f] border border-teal-500/30 text-teal-300 text-xs font-mono mb-4 shadow-sm">
            <Box className="w-3.5 h-3.5 text-amber-400" />
            <span>SELECTED SKETCHUP WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Architectural Design &amp; Rendering Showcase
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Explore Vincent Jimenez's portfolio of custom modern homes, SketchUp 3D massing models, photorealistic exterior renderings, and construction drawing sets.
          </p>
        </motion.div>

        {/* Search Bar matching Image 5 & 6 */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search style, software, city (e.g. SketchUp, Austin, Modern)..."
              className="w-full bg-[#061e27] border border-teal-500/30 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-slate-400 hover:text-white px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-400 text-[#031118] font-semibold shadow-md shadow-teal-950/70'
                    : 'bg-[#061c24] hover:bg-[#092b37] border border-teal-500/20 text-slate-300 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#031118]/30 text-[#031118]' : 'bg-[#031118] text-teal-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#061c24] rounded-2xl border border-teal-500/20">
            <p className="text-slate-400 font-mono text-sm">No projects matching your search filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs text-teal-300 hover:underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => {
              const currentMode = cardModes[project.id] || 'render';
              const displayImage = currentMode === 'render' ? project.coverImage : project.sketchupImage;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-2xl bg-[#061e27] border border-teal-500/25 hover:border-teal-400/80 transition-all duration-300 shadow-xl shadow-[#020b10]/60 overflow-hidden flex flex-col cursor-pointer corner-crosshair"
                >
                  {/* Card Visual Header with Direct Toggle */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#030e13]">
                    <img
                      src={displayImage}
                      alt={project.title}
                      onError={(e) => {
                        // Fallback when compiling images or if link changes
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-104 ${
                        currentMode === 'clay' ? 'contrast-115 grayscale brightness-95' : 'brightness-105'
                      }`}
                    />

                    {/* Grid overlay on clay mode */}
                    {currentMode === 'clay' && (
                      <div className="absolute inset-0 bg-architect-grid opacity-35 pointer-events-none" />
                    )}

                    {/* Quick View Hover Pill */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#031118]/90 border border-teal-400/60 text-teal-200 text-xs font-mono shadow-lg backdrop-blur-md">
                        <Eye className="w-3.5 h-3.5 text-teal-400" />
                        <span>Explore Project Detail</span>
                      </span>
                    </div>

                    {/* Top Right: Render / Clay Toggle Buttons directly on card */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#031118]/90 backdrop-blur-md p-1 rounded-xl border border-teal-500/30 text-[10px] font-mono z-10">
                      <button
                        onClick={(e) => toggleCardMode(project.id, 'render', e)}
                        className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                          currentMode === 'render'
                            ? 'bg-teal-400 text-[#031118] font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="View Photorealistic Render"
                      >
                        Render
                      </button>
                      <button
                        onClick={(e) => toggleCardMode(project.id, 'clay', e)}
                        className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                          currentMode === 'clay'
                            ? 'bg-amber-400 text-[#031118] font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="View SketchUp Clay 3D Model"
                      >
                        Clay
                      </button>
                    </div>

                    {/* Top Left: Category & Location Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#031118]/90 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-teal-200">
                      <MapPin className="w-3 h-3 text-teal-400" />
                      <span>{project.location}</span>
                    </div>

                    {/* Bottom Status Overlay */}
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-[#031118]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-teal-500/20">
                      <span className="text-teal-300 font-semibold">{project.sqft}</span>
                      <span>{currentMode === 'render' ? project.renderEngine : 'SketchUp 3D Geometry'}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-teal-200/80 font-mono mt-0.5 mb-2 line-clamp-1">
                        {project.subtitle}
                      </p>

                      <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Software tags & Case study button */}
                    <div className="pt-3 border-t border-teal-500/20 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.software.slice(0, 2).map((soft, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-[#041720] border border-teal-500/20 text-[10px] font-mono text-slate-300"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-mono text-teal-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={() => {
            const title = selectedProject.title;
            setSelectedProject(null);
            onInquireProject(title);
          }}
        />
      )}
    </section>
  );
};
