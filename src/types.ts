export type CategoryType = 'all' | 'interior' | 'exterior' | 'landscape' | 'concept' | 'residential' | 'clay' | 'layout';

export interface MaterialSwatch {
  name: string;
  category: 'Timber' | 'Stone' | 'Metal' | 'Flora' | 'Glass' | 'Textile' | 'Concrete';
  colorHex: string;
  finish: string;
  tactileNote: string;
}

export interface ArchitecturalConcept {
  id: string;
  optionNumber: string;
  title: string;
  styleTag: string;
  tagline: string;
  renderImage: string;
  clayImage: string;
  specs: {
    totalArea: string;
    layout: string;
    estCostPerSqFt: string;
    idealEnvironment: string;
  };
  highlights: string[];
  materials: string[];
  narrative: string;
}

export interface Project {
  id: string;
  projectCode: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'exterior' | 'interior' | 'clay' | 'layout' | 'landscape';
  categoryLabel: string;
  year: string;
  location: string;
  sqft: string;
  software: string[];
  renderEngine: string;
  coverImage: string;
  galleryImages: string[];
  sketchupImage: string;
  photoshopFinalImage: string;
  description: string;
  architecturalIntent: string;
  toolsUsed: string[];
  specs: {
    area: string;
    timeline: string;
    style: string;
    elevationOrFloors?: string;
    scaleRatio?: string;
  };
  materials: string[];
  materialSwatches?: MaterialSwatch[];
  workflowHighlights: string[];
  featured?: boolean;
}

export interface StudioSetting {
  sunAngle: 'morning' | 'midday' | 'sunset' | 'twilight';
  material: 'cedar' | 'stucco' | 'shou-sugi-ban' | 'concrete';
  displayMode: 'render' | 'clay' | 'wireframe' | 'shadows';
  cameraAngle: 'perspective' | 'front' | 'isometric' | 'top';
  zoom: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  highlight: string;
  estTimeline: string;
  badge?: string;
}

export interface ComparisonScene {
  id: string;
  title: string;
  location: string;
  discipline: string;
  sketchupLabel: string;
  photoshopLabel: string;
  sketchupDescription: string;
  photoshopDescription: string;
  sketchupImage: string;
  photoshopImage: string;
  techNotes: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  rating: number;
}

