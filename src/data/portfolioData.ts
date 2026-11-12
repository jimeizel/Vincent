import {
  Project,
  ServiceItem,
  ComparisonScene,
  Testimonial,
  ArchitecturalConcept
} from '../types';

export const ARCHITECTURAL_CONCEPTS: ArchitecturalConcept[] = [
  {
    id: 'concept-contemporary-cubic',
    optionNumber: 'Option 01',
    title: 'Contemporary Cubic — Ultra-Modern International',
    styleTag: 'Ultra-Modern International',
    tagline: 'Bold geometric volumes, expansive glass planes & crisp rectilinear massing',
    renderImage: '/images/concepts/contemporary-cubic.jpg',
    clayImage: '/images/concepts/contemporary-cubic.jpg',
    specs: {
      totalArea: '4,500 Sq Ft',
      layout: '4 Beds / 4.5 Baths',
      estCostPerSqFt: '$380 – $480 / sq ft',
      idealEnvironment: 'Urban Infill, Hillside & Suburban Premium Lots'
    },
    highlights: [
      'Cantilevered volumes engineered for dramatic horizontal projection',
      'Floor-to-ceiling frameless glass curtain wall systems',
      'Flat or low-pitch roof with integrated drainage detailing',
      'Precision-modeled reveals and flush surface transitions'
    ],
    materials: [
      'Board-Formed Concrete',
      'Black Powder-Coated Steel',
      'Low-E Thermal Glass',
      'Smooth Stucco Panels'
    ],
    narrative: 'Defined by its assertive geometry and premium materiality, this concept delivers the hallmark of contemporary architecture — clean planes, deep cantilevers, and a palette of concrete, steel, and glass that communicates confidence and precision.'
  },
  {
    id: 'concept-modern-ranch',
    optionNumber: 'Option 02',
    title: 'Modern Ranch — Contemporary Craftsman',
    styleTag: 'Contemporary Craftsman',
    tagline: 'Warm timber detailing, wide sheltering rooflines & natural material palette',
    renderImage: '/images/concepts/modern-ranch.jpg',
    clayImage: '/images/concepts/modern-ranch.jpg',
    specs: {
      totalArea: '3,200 Sq Ft',
      layout: '3 Beds / 3 Baths',
      estCostPerSqFt: '$320 – $420 / sq ft',
      idealEnvironment: 'Rural, Semi-Rural & Suburban Single-Story Lots'
    },
    highlights: [
      'Wide overhanging eaves providing year-round shade and weather protection',
      'Exposed timber rafter tails and bracket detailing',
      'Deep wraparound porch with stone column bases',
      'Open great room with vaulted ceilings and clerestory lighting'
    ],
    materials: [
      'Douglas Fir Timber Accents',
      'Natural Fieldstone Veneer',
      'Standing Seam Metal Roof',
      'Cedar Board & Batten Siding'
    ],
    narrative: 'The Modern Ranch blends the ease of single-story living with elevated contemporary Craftsman details — hand-selected timber brackets, authentic stonework, and welcoming broad porches that anchor the home to its landscape.'
  },
  {
    id: 'concept-modern-split-level',
    optionNumber: 'Option 03',
    title: 'Modern Split-Level — Transitional',
    styleTag: 'Transitional Modern',
    tagline: 'Multi-tier massing that steps with the terrain, blending modern and traditional',
    renderImage: '/images/concepts/modern-split-level.jpg',
    clayImage: '/images/concepts/modern-split-level.jpg',
    specs: {
      totalArea: '3,800 Sq Ft',
      layout: '4 Beds / 3.5 Baths',
      estCostPerSqFt: '$340 – $440 / sq ft',
      idealEnvironment: 'Sloped Sites, Hillside Neighborhoods & Transitional Suburbs'
    },
    highlights: [
      'Split-level floor plan maximizing natural grade changes',
      'Transitional detailing bridging traditional and contemporary tastes',
      'Layered roofline with mixed pitch variations',
      'Integrated garage with refined facade composition'
    ],
    materials: [
      'Smooth Stucco with Wood Trim',
      'Composite Shingle Roof',
      'Aluminum-Clad Windows',
      'Brick Accent Banding'
    ],
    narrative: 'The Transitional Split-Level capitalizes on challenging sites, turning grade changes into architectural assets. Interior zones step naturally at half-levels, creating spatial variety while maintaining visual connection between living areas.'
  },
  {
    id: 'concept-modern-subdivision',
    optionNumber: 'Option 04',
    title: 'Modern Subdivision — Contemporary Row Housing',
    styleTag: 'Contemporary Row Housing',
    tagline: 'Repeatable modern townhome design with individual identity and shared massing rhythm',
    renderImage: '/images/concepts/modern-subdivision.jpg',
    clayImage: '/images/concepts/modern-subdivision.jpg',
    specs: {
      totalArea: '1,800 – 2,400 Sq Ft / Unit',
      layout: '3 Beds / 2.5 Baths',
      estCostPerSqFt: '$280 – $380 / sq ft',
      idealEnvironment: 'Urban Infill, Transit-Oriented & New Subdivision Tracts'
    },
    highlights: [
      'Modular unit bays with facade variation per unit for visual diversity',
      'Rooftop deck potential on each unit for private outdoor living',
      'Shared underground or tandem garage infrastructure',
      'Energy-efficient party wall construction minimizing thermal loss'
    ],
    materials: [
      'Fiber Cement Panel Cladding',
      'Metal Accent Canopies',
      'Large Fixed Glass Windows',
      'Painted Concrete Masonry'
    ],
    narrative: 'Designed for density without uniformity, this row housing concept gives each unit a distinct address while maintaining a cohesive streetscape rhythm. Repeatable construction logic keeps costs controlled while modern material variation keeps the block lively.'
  },
  {
    id: 'concept-spanish-colonial',
    optionNumber: 'Option 05',
    title: 'Spanish Colonial Revival — Desert Tuscan',
    styleTag: 'Spanish Colonial & Desert Tuscan',
    tagline: 'Handcrafted terracotta, shaded arcaded loggias & authentic Mediterranean warmth',
    renderImage: '/images/concepts/spanish-colonial.jpg',
    clayImage: '/images/concepts/spanish-colonial.jpg',
    specs: {
      totalArea: '4,200 Sq Ft',
      layout: '4 Beds / 4 Baths',
      estCostPerSqFt: '$360 – $460 / sq ft',
      idealEnvironment: 'Arid Southwest, Sun Belt & Mediterranean-Climate Regions'
    },
    highlights: [
      'Smooth lime plaster exterior in warm sand and terracotta tones',
      'Reclaimed Spanish clay barrel tile roofing with copper gutters',
      'Arched arcade loggia creating deep shaded outdoor living',
      'Interior courtyard with central fountain and drought-tolerant garden'
    ],
    materials: [
      'Hand-Troweled Lime Stucco',
      'Reclaimed Spanish Clay Tile',
      'Santa Barbara Sandstone',
      'Custom Wrought Iron Grilles'
    ],
    narrative: 'Rooted in centuries of Mediterranean building tradition, this concept channels California mission architecture into a modern luxury home — thick walls that stay cool naturally, shaded arcades for outdoor dining, and artisan details that only improve with age.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pacific-heights',
    projectCode: 'ARC-2401',
    title: 'Pacific Heights Residence',
    subtitle: 'Multi-angle exterior visualization with clay model and photorealistic final renders',
    category: 'residential',
    categoryLabel: 'Residential Houses',
    year: '2024',
    location: 'Pacific Heights',
    sqft: '3,600 SQ FT',
    software: ['SketchUp Pro 2025', 'V-Ray 6', 'Photoshop CC'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: '/images/exterior/pacific-heights-front-highres.jpg',
    galleryImages: [
      '/images/exterior/pacific-heights-front-highres.jpg',
      '/images/exterior/pacific-heights-left-highres.jpg',
      '/images/exterior/pacific-heights-right-highres.jpg',
      '/images/exterior/pacific-heights-front-clay.jpg',
      '/images/exterior/pacific-heights-left-clay.jpg',
      '/images/exterior/pacific-heights-right-clay.jpg',
    ],
    sketchupImage: '/images/exterior/pacific-heights-front-clay.jpg',
    photoshopFinalImage: '/images/exterior/pacific-heights-front-highres.jpg',
    description: 'A full-angle exterior visualization package for a modern residential home — covering front, left and right elevations in both photorealistic final renders and clay model views. The project demonstrates complete massing control from multiple vantage points.',
    architecturalIntent: 'To deliver a cohesive exterior language that reads confidently from every approach, with clean proportions, balanced material contrast, and precise shadow depth across all elevations.',
    toolsUsed: ['Trimble SketchUp Pro', 'V-Ray 6 for SketchUp', 'Adobe Photoshop CC'],
    specs: {
      area: '3,600 sq. ft.',
      timeline: '4 Weeks (Concept to Final Renders)',
      style: 'Contemporary Modern Residential',
      elevationOrFloors: '2 Stories',
      scaleRatio: '1:100 Metric Blueprint'
    },
    materials: ['Smooth Stucco', 'Dark Metal Trim', 'Large Format Glazing', 'Composite Roofing'],
    workflowHighlights: [
      'Three-angle camera setup calibrated in SketchUp for maximum massing clarity.',
      'Clay render pass isolated geometry and shadow quality before texturing.',
      'Multi-layer V-Ray lighting composited in Photoshop with contextual landscaping.',
      'Final renders delivered at print resolution for permitting and client presentation.'
    ],
    featured: true
  },
  {
    id: 'groove-streets-apartments',
    projectCode: 'ARC-2402',
    title: 'Groove Streets Apartments',
    subtitle: 'Multi-family residential development with front and rear elevation renders',
    category: 'residential',
    categoryLabel: 'Residential Houses',
    year: '2024',
    location: 'Groove Streets',
    sqft: '24,000 SQ FT',
    software: ['SketchUp Pro', 'V-Ray 6', 'Photoshop CC'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: '/images/large/groove-streets-front-highres.jpg',
    galleryImages: [
      '/images/large/groove-streets-front-highres.jpg',
      '/images/large/groove-streets-rear-highres.jpg',
      '/images/large/groove-streets-front-clay.jpg',
      '/images/large/groove-streets-rear-clay.jpg',
    ],
    sketchupImage: '/images/large/groove-streets-front-clay.jpg',
    photoshopFinalImage: '/images/large/groove-streets-front-highres.jpg',
    description: 'A multi-family apartment complex rendered from both front street-facing and rear courtyard perspectives. The project included full clay model validation before final photorealistic production, ensuring massing accuracy at a larger residential scale.',
    architecturalIntent: 'To balance urban density requirements with architectural character — an approachable street presence and a private rear courtyard environment that reduces visual bulk.',
    toolsUsed: ['SketchUp Pro', 'V-Ray 6', 'Adobe Photoshop CC'],
    specs: {
      area: '24,000 sq. ft.',
      timeline: '6 Weeks Design & Visualization',
      style: 'Contemporary Urban Multi-Family',
      elevationOrFloors: '3–4 Stories'
    },
    materials: ['Fiber Cement Panels', 'Brick Accent Banding', 'Aluminum Windows', 'Metal Canopies'],
    workflowHighlights: [
      'Massing model validated against zoning setback and height envelopes.',
      'Front and rear elevations rendered to show full project scope.',
      'Clay renders delivered to client for design review prior to final production.',
      'Contextual streetscape environment composited in Photoshop post-production.'
    ],
    featured: true
  },
  {
    id: 'bozeman-residence',
    projectCode: 'ARC-2403',
    title: '693 Clancey — Bozeman Residence',
    subtitle: 'Dual-view exterior visualization with clay-to-photorealistic workflow',
    category: 'exterior',
    categoryLabel: 'Exterior Visualizations',
    year: '2024',
    location: 'Bozeman, Montana',
    sqft: '3,200 SQ FT',
    software: ['SketchUp Pro', 'V-Ray 6', 'Photoshop CC'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: '/images/exterior/693-clancey-view1-highres.jpg',
    galleryImages: [
      '/images/exterior/693-clancey-view1-highres.jpg',
      '/images/exterior/693-clancey-view2-highres.jpg',
      '/images/exterior/693-clancey-view1-clay.jpg',
      '/images/exterior/693-clancey-view2-clay.jpg',
    ],
    sketchupImage: '/images/exterior/693-clancey-view1-clay.jpg',
    photoshopFinalImage: '/images/exterior/693-clancey-view1-highres.jpg',
    description: 'Two-angle exterior visualization package for a Bozeman, Montana residence set against a mountain backdrop. Each view was delivered as both a clay wireframe for client review and a final photorealistic render with environmental context.',
    architecturalIntent: 'To frame the home within its dramatic Montana landscape context, using mountainous distant backdrops and native vegetation to anchor the structure to its site.',
    toolsUsed: ['SketchUp Pro', 'V-Ray 6', 'Adobe Photoshop CC'],
    specs: {
      area: '3,200 sq. ft.',
      timeline: '3 Weeks Modeling & Renders',
      style: 'Contemporary Mountain Residential',
      elevationOrFloors: '2 Stories'
    },
    materials: ['Natural Wood Siding', 'Stone Veneer Base', 'Dark Metal Roof', 'Large Fixed Glazing'],
    workflowHighlights: [
      'Site topography modeled in SketchUp Sandbox from survey data.',
      'Mountain backdrop matte-painted in Photoshop for regional context.',
      'Clay renders reviewed and approved before final lighting production.',
      'Two camera angles delivered to cover entry approach and secondary facade.'
    ],
    featured: true
  },
  {
    id: 'devon-residence-interior',
    projectCode: 'INT-2404',
    title: 'Devon Residence — Interior Suite',
    subtitle: 'Full interior visualization package: kitchen, great room, master suite & ADU',
    category: 'interior',
    categoryLabel: 'Interior Architecture',
    year: '2024',
    location: 'Devon Residence',
    sqft: '2,800 SQ FT',
    software: ['SketchUp Pro', 'Enscape 3D', 'Photoshop CC'],
    renderEngine: 'Photoshop Atmospheric Composite',
    coverImage: '/images/interior/devon-kitchen-highres.jpg',
    galleryImages: [
      '/images/interior/devon-kitchen-highres.jpg',
      '/images/interior/devon-greatroom-highres.jpg',
      '/images/interior/devon-masterbedroom-highres.jpg',
      '/images/interior/devon-masterbath-highres.jpg',
      '/images/interior/devon-adu-highres.jpg',
    ],
    sketchupImage: '/images/interior/devon-greatroom-highres.jpg',
    photoshopFinalImage: '/images/interior/devon-kitchen-highres.jpg',
    description: 'A comprehensive five-room interior visualization package for the Devon Residence — covering kitchen, great room, master bedroom, master bathroom, and ADU. Each space was modeled to millwork tolerance in SketchUp and post-produced with warm atmospheric lighting.',
    architecturalIntent: 'To create a cohesive interior environment built around warm natural materials, integrated millwork, and carefully calibrated spatial proportions across all primary living zones.',
    toolsUsed: ['SketchUp Pro', 'Enscape 3D', 'Adobe Photoshop CC'],
    specs: {
      area: '2,800 sq. ft.',
      timeline: '5 Weeks Modeling & Post-Production',
      style: 'Warm Contemporary Modern',
      elevationOrFloors: 'Single Level with ADU'
    },
    materials: ['White Oak Millwork', 'Honed Stone Countertops', 'Warm Brass Hardware', 'Linen Wall Panels'],
    workflowHighlights: [
      'Each room modeled to 1mm millwork tolerance in SketchUp.',
      'Warm 2700K ambient lighting atmosphere built in Photoshop post-production.',
      'ADU modeled as separate linked component within the master SketchUp file.',
      'Five-room package delivered for client design presentation and contractor coordination.'
    ],
    featured: true
  },
  {
    id: 'rose-cottage',
    projectCode: 'ARC-2405',
    title: 'Rose Cottage',
    subtitle: 'Complete interior and exterior visualization — bedroom, living kitchen & facade',
    category: 'residential',
    categoryLabel: 'Residential Houses',
    year: '2023',
    location: 'Rose Cottage',
    sqft: '1,800 SQ FT',
    software: ['SketchUp Pro', 'V-Ray 6', 'Photoshop CC'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: '/images/exterior/rose-cottage-exterior-highres.jpg',
    galleryImages: [
      '/images/exterior/rose-cottage-exterior-highres.jpg',
      '/images/exterior/rose-cottage-exterior-clay.jpg',
      '/images/interior/rose-cottage-living-kitchen-highres.jpg',
      '/images/interior/rose-cottage-bedroom-highres.jpg',
      '/images/interior/rose-cottage-bedroom-clay.jpg',
    ],
    sketchupImage: '/images/exterior/rose-cottage-exterior-clay.jpg',
    photoshopFinalImage: '/images/exterior/rose-cottage-exterior-highres.jpg',
    description: 'A full inside-out visualization project for a charming residential cottage — exterior facade with clay wireframe validation, open-plan living kitchen, and master bedroom suite. Demonstrates the complete architectural visualization workflow from raw model to photorealistic final.',
    architecturalIntent: 'To deliver an intimate, light-filled cottage aesthetic — where the exterior character and interior warmth speak a unified architectural language of natural materials and thoughtful proportion.',
    toolsUsed: ['SketchUp Pro', 'V-Ray 6', 'Adobe Photoshop CC'],
    specs: {
      area: '1,800 sq. ft.',
      timeline: '3.5 Weeks Design & Visualization',
      style: 'Contemporary Cottage Residential',
      elevationOrFloors: '1–2 Stories'
    },
    materials: ['Smooth Render Facade', 'Timber Accents', 'Natural Stone Features', 'Large Windows'],
    workflowHighlights: [
      'Single master SketchUp model used for both interior and exterior camera scenes.',
      'Clay exterior approved before final V-Ray material and lighting production.',
      'Interior spaces modeled with accurate furniture and millwork clearances.',
      'Cohesive material palette maintained across all interior and exterior renders.'
    ],
    featured: true
  },
  {
    id: '3d-floor-plan-suite',
    projectCode: 'LAY-2406',
    title: '3D Floor Plan Suite',
    subtitle: 'Isometric 3D floor plan visualizations for residential and mixed-use projects',
    category: 'layout',
    categoryLabel: 'Floor Plans & LayOut',
    year: '2024',
    location: 'Various Projects',
    sqft: 'Multiple Scales',
    software: ['SketchUp Pro 2025', 'V-Ray 6', 'LayOut'],
    renderEngine: 'SketchUp LayOut Drawing Set',
    coverImage: '/images/floorplan/1st-floor-highres.png',
    galleryImages: [
      '/images/floorplan/1st-floor-highres.png',
      '/images/floorplan/2nd-floor-highres.png',
      '/images/floorplan/darmstadt-basement-highres.png',
      '/images/floorplan/tomaree-highres.jpg',
    ],
    sketchupImage: '/images/floorplan/darmstadt-basement-highres.png',
    photoshopFinalImage: '/images/floorplan/1st-floor-highres.png',
    description: 'A collection of 3D isometric floor plan visualizations across residential and specialized projects — 1st floor, 2nd floor, basement level, and a unique headland site plan. These 3D plans give buyers and clients immediate spatial clarity unavailable in traditional 2D drawings.',
    architecturalIntent: 'To transform flat 2D floor plan documentation into engaging 3D isometric views that communicate room relationships, flow, and spatial hierarchy at a glance.',
    toolsUsed: ['SketchUp Pro 2025', 'SketchUp LayOut', 'V-Ray 6'],
    specs: {
      area: 'Multiple Projects',
      timeline: '1 – 2 Weeks per Plan Set',
      style: 'Isometric 3D Floor Plan Visualization',
      elevationOrFloors: 'Multi-Level Coverage'
    },
    materials: ['Color-Coded Rooms', 'Isometric Projection', 'Furniture Layout', 'Wall Cut Sections'],
    workflowHighlights: [
      'Each level rendered as a separate isometric camera scene in SketchUp.',
      'Color-coded room zones for immediate spatial legibility.',
      'Furniture and fixture placement included for scale comprehension.',
      'Basement level Darmstadt project demonstrates below-grade massing capability.'
    ],
    featured: true
  }
];

export const COMPARISON_SCENES: ComparisonScene[] = [
  {
    id: 'bozeman-clay-vs-final',
    title: '693 Clancey — Bozeman Residence',
    location: 'Bozeman, Montana',
    discipline: 'Exterior Visualization Workflow',
    sketchupLabel: 'SketchUp Clay Model',
    photoshopLabel: 'V-Ray + Photoshop Final Render',
    sketchupDescription: 'Clean geometric massing, accurate roof pitch, window and door placement, structural bay spacing, and site terrain integration — all validated at clay stage before texturing begins.',
    photoshopDescription: 'Full photorealistic materialization, V-Ray sun and sky lighting, atmospheric depth, native landscaping entourage, and color-graded sky backdrop composited in Photoshop.',
    sketchupImage: '/images/exterior/693-clancey-view1-clay.jpg',
    photoshopImage: '/images/exterior/693-clancey-view1-highres.jpg',
    techNotes: [
      'SketchUp: Massing validated against zoning setbacks and height limits',
      'SketchUp: Accurate window-to-wall ratio calibration',
      'Photoshop: Atmospheric mountain backdrop matte painting',
      'Photoshop: Native Montana vegetation entourage composited'
    ]
  },
  {
    id: 'crescent-blvd-exterior',
    title: 'Crescent Blvd — Exterior Residence',
    location: 'Crescent Boulevard',
    discipline: 'Exterior & Facade Visualization',
    sketchupLabel: 'SketchUp Clay Model',
    photoshopLabel: 'V-Ray + Photoshop Final Render',
    sketchupDescription: 'Structural massing geometry, facade articulation, window placement validation, roof overhangs, and driveway approach modeled in clean clay for client review.',
    photoshopDescription: 'V-Ray material textures applied, warm afternoon sun lighting calibrated, sky replacement, driveway hardscape and softscape landscaping composited in final production.',
    sketchupImage: '/images/exterior/crescent-blvd-exterior-clay.jpg',
    photoshopImage: '/images/exterior/crescent-blvd-exterior-highres.jpg',
    techNotes: [
      'SketchUp: Facade articulation and shadow depth validated at clay stage',
      'SketchUp: Driveway approach grade modeled from site survey',
      'Photoshop: Warm golden hour lighting atmosphere composited',
      'Photoshop: Foreground softscape and mature tree canopy added'
    ]
  },
  {
    id: 'rose-cottage-interior',
    title: 'Rose Cottage — Interior Living Kitchen',
    location: 'Rose Cottage',
    discipline: 'Interior Architecture Visualization',
    sketchupLabel: 'SketchUp Clay Interior',
    photoshopLabel: 'V-Ray + Photoshop Final Interior',
    sketchupDescription: 'Millwork cabinet geometry, island proportions, ceiling height, window placement, and furniture layout validated in clay — ensuring spatial accuracy before material application.',
    photoshopDescription: 'Warm 2700K ambient light, natural material textures on cabinetry and counters, window light bloom, and lifestyle entourage composited for a photorealistic interior atmosphere.',
    sketchupImage: '/images/interior/rose-cottage-living-kitchen-clay.jpg',
    photoshopImage: '/images/interior/rose-cottage-living-kitchen-highres.jpg',
    techNotes: [
      'SketchUp: Cabinet millwork modeled to 1mm tolerance',
      'SketchUp: Furniture clearances and traffic flow validated in plan',
      'Photoshop: Warm interior light bounce calibrated through window glazing',
      'Photoshop: Counter material grain and cabinet reflection tuned per surface'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-residential',
    number: '01',
    title: 'Custom Residential House Design',
    tagline: 'End-to-end bespoke home design from initial sketches to permit-ready sets.',
    description: 'Collaborative architectural design tailored to your lifestyle, lot contours, and aesthetic vision. We craft custom modern floor plans, dynamic elevations, and complete structural coordination in Trimble SketchUp.',
    deliverables: [
      'Complete SketchUp 3D parametric building model',
      'Detailed dimensioned floor plans & room layouts',
      'Exterior elevations with solar shadow calculations',
      'Permitting-ready SketchUp LayOut 2D drawing sets'
    ],
    tools: ['Trimble SketchUp Pro', 'SketchUp LayOut', 'V-Ray 6'],
    highlight: 'Bespoke homes balancing structural boldness with efficient daily living.',
    estTimeline: '6 – 10 Weeks'
  },
  {
    id: '3d-modeling-massing',
    number: '02',
    title: 'SketchUp 3D Massing & Modeling',
    tagline: 'Precision 3D digital twins built from CAD plans, sketches, or site scans.',
    description: 'Transforming 2D architectural blueprints or hand sketches into clean, organized 3D SketchUp files. Every wall, roof pitch, window opening, and structural beam is strictly tagged and component-organized for easy editing.',
    deliverables: [
      'Organized .SKP file with clean layer/tag hierarchy',
      'Dynamic components (operable doors, windows, louvers)',
      'Accurate terrain & site topography mesh from surveyor DXF',
      'Direct compatibility with V-Ray, Enscape, Lumion & Twinmotion'
    ],
    tools: ['SketchUp Pro 2025', 'Sandbox Topo Tool', 'Extension Warehouse'],
    highlight: 'Clean, lightweight models that render instantly and pass engineering review.',
    estTimeline: '2 – 4 Weeks'
  },
  {
    id: 'archviz-rendering',
    number: '03',
    title: 'Photorealistic V-Ray & Photoshop ArchViz',
    tagline: 'Emotion-evoking 8K architectural renderings and atmospheric post-production.',
    description: 'Sterile 3D renders fail to sell ideas. Vincent applies multi-layered lighting, atmospheric depth, realistic foliage scattering, and cinematic color grading in Adobe Photoshop to make unbuilt homes feel tangibly alive.',
    deliverables: [
      'High-resolution 8K stills (Daylight, Golden Hour, Twilight Dusk)',
      'Photoshop multi-pass lighting adjustments & material gloss',
      'Contextual entourage (native landscaping, realistic environment)',
      'Presentation decks ready for investor pitches or client approvals'
    ],
    tools: ['V-Ray 6', 'Enscape Realtime', 'Adobe Photoshop CC', 'Camera Raw'],
    highlight: 'Atmospheric depth and cinematic realism that secures client enthusiasm.',
    estTimeline: '1 – 3 Weeks'
  },
  {
    id: 'layout-permit-drawings',
    number: '04',
    title: 'SketchUp LayOut 2D Permitting Sets',
    tagline: 'Vector-sharp construction document sheets dynamically linked to 3D models.',
    description: 'Bridging 3D visualization and physical construction. We generate comprehensive 24x36 architectural drawing sets in SketchUp LayOut—fully dimensioned, annotated, and scheduled for building department submission.',
    deliverables: [
      'Full architectural sheet sets (Cover, Plans, Elevations, Sections)',
      'Window & door schedules with accurate tags',
      'Construction details, wall assemblies & millwork sections',
      'Direct dynamic link to 3D SketchUp model for real-time updates'
    ],
    tools: ['SketchUp LayOut', 'Vector Hybrid Render', 'AutoCAD Export'],
    highlight: "Zero discrepancy between your 3D model and the contractor's printed plans.",
    estTimeline: '3 – 6 Weeks'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Vincent's dual mastery of SketchUp precision and photorealistic lighting won our client over instantly. The clay model reviews kept us aligned at every stage before the final renders — a workflow that saved us weeks of revision.",
    author: 'Marcus Vance',
    role: 'Principal Architect',
    company: 'Vance & Holbrook Architects',
    project: 'Pacific Heights Residence',
    rating: 5
  },
  {
    id: 'test-2',
    quote: "Most 3D visualizers produce sterile, cold images. Vincent's post-production brings authentic soul, natural light, and weather moods that look like photographs of a completed architectural masterpiece.",
    author: 'Elena Rostova',
    role: 'Lead Interior Designer',
    company: 'Studio Rostova Milan',
    project: 'Devon Residence Interior Suite',
    rating: 5
  },
  {
    id: 'test-3',
    quote: "Our city review board demanded rigorous floor plan documentation and elevations before approving our project. Vincent delivered a complete 3D floor plan suite within two weeks, and we received approval on the very first submittal.",
    author: 'Julian Chen',
    role: 'Residential Developer',
    company: 'Apex Urban Living',
    project: 'Groove Streets Apartments',
    rating: 5
  }
];

export const VINCENT_BIO = {
  name: 'Vincent Jimenez',
  role: 'Architectural & SketchUp Designer',
  experience: '10+ Years Professional CAD & 3D Visualization',
  tagline: 'Transforming architectural concepts into buildable SketchUp models and photorealistic spatial narratives.',
  bio: 'Vincent Jimenez is an architectural designer and SketchUp specialist with a decade of expertise crafting custom residential homes, complex 3D massing geometries, and high-impact architectural visualizations. Having collaborated with leading architectural firms, boutique developers, and private luxury clients worldwide, Vincent bridges the gap between technical engineering precision in Trimble SketchUp Pro and evocative, cinematic storytelling in V-Ray and Adobe Photoshop.',
  specialties: [
    'Custom Residential Architectural Design',
    'Complex 3D Massing & Parametric Geometry',
    'Permitting-Ready SketchUp LayOut Construction Sets',
    'Photorealistic V-Ray & Enscape Rendering',
    'Solar Angle & Environmental Shadow Simulation',
    'Topographic Terrain Modeling (SketchUp Sandbox)'
  ],
  softwareProficiency: [
    { name: 'Trimble SketchUp Pro 2025', level: '100% Mastery' },
    { name: 'SketchUp LayOut 2D Drafting', level: '98% Expert' },
    { name: 'V-Ray 6 & Enscape 3D', level: '96% Expert' },
    { name: 'Adobe Photoshop CC ArchViz', level: '98% Master' },
    { name: 'Sandbox Topography & Terrain', level: '95% Expert' },
    { name: 'Solar Azimuth & Energy Studies', level: '92% Expert' }
  ]
};
