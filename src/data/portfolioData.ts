import { 
  Project, 
  ServiceItem, 
  ComparisonScene, 
  Testimonial,
  ArchitecturalConcept 
} from '../types';

export const ARCHITECTURAL_CONCEPTS: ArchitecturalConcept[] = [
  {
    id: 'concept-solstice',
    optionNumber: 'Option 01',
    title: 'The Solstice Desert Modern Villa',
    styleTag: 'Desert Modern & Rammed Earth',
    tagline: 'Deep solar overhangs, thermal earth walls & oasis courtyard swimming pool',
    renderImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    clayImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    specs: {
      totalArea: '4,200 Sq Ft',
      layout: '4 Beds / 4.5 Baths',
      estCostPerSqFt: '$380 – $480 / sq ft',
      idealEnvironment: 'Arid, High Sun & Desert Foothills'
    },
    highlights: [
      'Cantilevered roof shade overhangs engineered in SketchUp',
      'Central cooling courtyard pool with shade sail framing',
      'Solar angle shadow analysis for zero direct summer heat gain',
      'Floor-to-ceiling recessed pocketing glass sliders'
    ],
    materials: [
      'Stabilized Rammed Earth',
      'Black Powder-Coated Steel',
      'Low-E Thermal Glass',
      'Bleached Teak Slatting'
    ],
    narrative: 'Designed specifically for arid climate landscapes, Concept 1 balances earth-toned monolithic walls with dramatic glass cantilevers. Natural rammed earth walls regulate indoor temperature, while deep roof overhangs shield living areas from high midday summer sun.'
  },
  {
    id: 'concept-horizon',
    optionNumber: 'Option 02',
    title: 'Horizon Coastal Glass Pavilion',
    styleTag: 'Pacific Modern Cantilever',
    tagline: 'Defying coastal bluff topography with floating steel trusses and 270° marine vistas',
    renderImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    clayImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    specs: {
      totalArea: '5,600 Sq Ft',
      layout: '5 Beds / 5.5 Baths',
      estCostPerSqFt: '$450 – $580 / sq ft',
      idealEnvironment: 'Coastal Bluffs, Marine Climates & Sloping Headlands'
    },
    highlights: [
      'Suspended 18-foot cantilever deck with glass balustrade',
      'Aerodynamic wind-deflecting roofline modeled to withstand coastal gusts',
      'Double-height open living pavilion with submerged fire pit',
      'Integrated rainwater harvest cistern below podium'
    ],
    materials: [
      'Marine-Grade Corten Steel',
      'Charred Accoya Siding',
      'Board-Formed Concrete',
      'Acoustic Ceiling Slats'
    ],
    narrative: 'Conceived for steep coastal promontories where views and wind management dictate form. Vincent utilized SketchUp Sandbox tools to model the exact bluff contour, stepping foundations along bedrock while cantilevering the main living wing toward panoramic ocean sunsets.'
  },
  {
    id: 'concept-komorebi',
    optionNumber: 'Option 03',
    title: 'Komorebi Nordic Pavilion',
    styleTag: 'Nordic Black Timber & Glass',
    tagline: 'Framed forest living with double-height clerestory glass and charred timber envelopes',
    renderImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80',
    clayImage: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1600&q=80',
    specs: {
      totalArea: '3,400 Sq Ft',
      layout: '3 Beds / 3.5 Baths',
      estCostPerSqFt: '$350 – $440 / sq ft',
      idealEnvironment: 'Forest Ridges, Alpine Valleys & Temperate Woodlands'
    },
    highlights: [
      'Clerestory windows capturing dappled forest tree canopy light',
      'Shou Sugi Ban charred wood facade providing natural pest & fire resistance',
      'Sunken living conversation pit surrounding Scandinavian suspended fireplace',
      'Triple-glazed thermal envelope with solar heat recovery ventilation'
    ],
    materials: [
      'Shou Sugi Ban Charred Fir',
      'Natural Scandinavian Pine',
      'Honed Basalt Pavers',
      'Matte Black Zinc Seaming'
    ],
    narrative: 'Inspired by the Japanese concept of sunlight filtering through leaves (木漏れ日), this home embeds itself quietly into dense woodlands. The blackened exterior recedes into tree shadows, allowing warm interior illumination to glow like an evening lantern.'
  },
  {
    id: 'concept-monolith',
    optionNumber: 'Option 04',
    title: 'Monolith Hillside Concrete Residence',
    styleTag: 'Geometric Board-Formed Concrete',
    tagline: 'Sculptural brutalist volumes interlocked with native hillside garden pockets',
    renderImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    clayImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80',
    specs: {
      totalArea: '4,800 Sq Ft',
      layout: '4 Beds / 5 Baths',
      estCostPerSqFt: '$420 – $520 / sq ft',
      idealEnvironment: 'Hillside Terrains, Mountain Foothills & Urban Escarpments'
    },
    highlights: [
      'Interlocking rectilinear volumes with dramatic structural cantilevers',
      'Board-formed rough timber grain concrete walls providing immense thermal mass',
      'Multiple private courtyard garden cut-outs bringing cross-ventilation',
      'Infinity reflection pool cascading into lower terrace lightwell'
    ],
    materials: [
      'Douglas Fir Board-Formed Concrete',
      'Oxidized Raw Bronze Hardware',
      'Black Granite Hearth',
      'Low-Iron Floor-to-Ceiling Glazing'
    ],
    narrative: 'A masterclass in geometric permanence. The heavy thermal mass of concrete stabilizes internal temperatures through extreme seasons, while geometric apertures and garden cutouts flood interior living halls with changing shadows throughout the day.'
  },
  {
    id: 'concept-aura',
    optionNumber: 'Option 05',
    title: 'Aura Tropical Modern Sanctuary',
    styleTag: 'Tropical Organic & Teak Louvers',
    tagline: 'Breathing architecture featuring operable teak screen louvers and water reflection moats',
    renderImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    clayImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    specs: {
      totalArea: '3,900 Sq Ft',
      layout: '4 Beds / 4 Baths',
      estCostPerSqFt: '$360 – $460 / sq ft',
      idealEnvironment: 'Humid Subtropical, Coastal Islands & Rain-Fed Valleys'
    },
    highlights: [
      'Motorized pivot teak louvers regulating ocean breezes and sun glare',
      'Over-water boardwalk entrances flanked by botanical water gardens',
      'Open-air covered lanai entertaining terraces with outdoor shower gardens',
      'Deep hip-roof overhangs that shelter walls from monsoonal rain'
    ],
    materials: [
      'Reclaimed Burmese Teak',
      'Indonesian Sukabumi Stone',
      'Matte White Lime Stucco',
      'Perforated Brass Screens'
    ],
    narrative: 'A permeable house that breathes in dialogue with its tropical microclimate. By utilizing tall volume ceilings, operable wood slats, and perimeter water gardens, the residence stays cool without reliance on heavy air conditioning.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ridge-cantilever',
    projectCode: 'ARC-2401',
    title: 'The Ridge Cantilever Residence',
    subtitle: 'Cantilevered cliffside modern villa with integrated terrace pool',
    category: 'residential',
    categoryLabel: 'Residential Houses',
    year: '2024',
    location: 'Malibu, California',
    sqft: '4,800 SQ FT',
    software: ['SketchUp Pro 2025', 'V-Ray 6', 'Photoshop CC'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Suspended over a dramatic Malibu ridge line, this 4,800 sq.ft residence features a 24-foot cantilevered primary suite. Vincent engineered the massing model in Trimble SketchUp Pro to calculate wind deflection and solar angles, before producing the 8K twilight visualization in V-Ray and Photoshop.',
    architecturalIntent: 'To harmonize an unapologetically modern rectilinear form with the Pacific coastline, framing panoramic ocean horizons while providing secluded private courtyards shielded from salt-spray winds.',
    toolsUsed: ['Trimble SketchUp Pro', 'V-Ray 6 for SketchUp', 'Adobe Photoshop CC', 'SketchUp LayOut'],
    specs: {
      area: '4,800 sq. ft.',
      timeline: '5 Months (Concept to LayOut Set)',
      style: 'Modern Pacific Cantilever',
      elevationOrFloors: '2 Stories + Lower Infinity Deck',
      scaleRatio: '1:100 Metric Blueprint'
    },
    materials: ['Board-Formed White Concrete', 'Charred Accoya Siding', 'Thermally Broken Glass', 'Brushed Bronze Trim'],
    workflowHighlights: [
      'Engineered contour grading directly with SketchUp Sandbox toolset.',
      'Calibrated solar angle studies across summer and winter solstice extremes.',
      'Generated 24-page permitting LayOut construction drawing set with full dimensions.',
      'Composited multi-layer V-Ray lighting passes into Photoshop with aerial backdrop.'
    ],
    featured: true
  },
  {
    id: 'cascade-timber-villa',
    projectCode: 'ARC-2402',
    title: 'Cascade Timber & Stone Villa',
    subtitle: 'Heavy timber framing with local fieldstone foundation and green roof',
    category: 'exterior',
    categoryLabel: 'Exterior Visualizations',
    year: '2024',
    location: 'Seattle, Washington',
    sqft: '3,600 SQ FT',
    software: ['SketchUp Pro', 'Enscape 3D', 'Photoshop'],
    renderEngine: 'Enscape 3D Realtime',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Immersed in the Pacific Northwest evergreen canopy, this villa integrates Douglas fir timber beams with rugged river stone masonry. Vincent created detailed 3D structural component assemblies in SketchUp, allowing the construction team to visualize timber joints prior to milling.',
    architecturalIntent: 'Connecting the built structure with endemic cedar groves through continuous sightlines, deep sheltered porches, and natural stone fireplaces anchored in the terrain.',
    toolsUsed: ['SketchUp Pro', 'Enscape 3D', 'Adobe Photoshop CC'],
    specs: {
      area: '3,600 sq. ft.',
      timeline: '3.5 Months Design & 3D Sets',
      style: 'Pacific Northwest Craftsman Modern',
      elevationOrFloors: 'Split-Level 2 Floors'
    },
    materials: ['Heavy Timber Douglas Fir', 'Split-Face Granite Stone', 'Standing Seam Metal Roof', 'Black Casement Windows'],
    workflowHighlights: [
      'Built parametric 3D timber truss joints with exact steel bolt hardware in SketchUp.',
      'Simulated soft rainy Pacific mist and tree canopy shadows in Photoshop post-production.',
      'Exported detailed roof pitch & drainage details for framing carpenters.'
    ],
    featured: true
  },
  {
    id: 'metro-infill-courtyard',
    projectCode: 'ARC-2403',
    title: 'Metropolitan Infill Courtyard House',
    subtitle: 'Urban privacy sanctuary centering a Japanese maple courtyard and lap pool',
    category: 'residential',
    categoryLabel: 'Residential Houses',
    year: '2023',
    location: 'Austin, Texas',
    sqft: '2,950 SQ FT',
    software: ['SketchUp Pro', 'V-Ray 6', 'LayOut'],
    renderEngine: 'V-Ray 6 Photorealistic',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed for a tight urban lot, this home turns inward. A continuous solid perimeter brick facade blocks street noise, while the interior opens entirely into a glass-enclosed central courtyard with water reflections.',
    architecturalIntent: 'Maximizing perceived space and daylight on a narrow 50-foot city lot through internal transparency and double-height ceiling voids.',
    toolsUsed: ['SketchUp Pro', 'V-Ray', 'Photoshop CC', 'LayOut 2D'],
    specs: {
      area: '2,950 sq. ft.',
      timeline: '4 Months Permitting & 3D Sets',
      style: 'Urban Minimalist Infill',
      elevationOrFloors: '2 Floors with Rooftop Deck'
    },
    materials: ['Handmade Roman Grey Brick', 'Floor-to-Ceiling Steel Glass Doors', 'Polished Concrete Slabs', 'Japanese Maple Canopy'],
    workflowHighlights: [
      'Zero-lot line property boundary validation in SketchUp.',
      'Daylight bounce simulations off courtyard brick surfaces.',
      'Coordinated full MEP and structural plumbing chases in 3D.'
    ],
    featured: true
  },
  {
    id: 'brutalist-minimalist-clay',
    projectCode: 'ARC-2404',
    title: 'Brutalist Minimalist Residence',
    subtitle: 'Pure sculptural massing study focusing on shadow rhythm and monolithic geometry',
    category: 'clay',
    categoryLabel: 'SketchUp 3D Clay Models',
    year: '2024',
    location: 'Concept Project',
    sqft: '5,200 SQ FT',
    software: ['SketchUp Clay Mode', 'Curviloft', 'LayOut'],
    renderEngine: 'Monochrome SketchUp Clay',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural exploration of raw concrete volumes without decorative cladding. The focus of this SketchUp study is the relationship between heavy mass, razor-sharp edge reveals, and deep sun shadow channels.',
    architecturalIntent: 'Proving that dramatic architecture comes from volume, proportion, and natural shadow play before any surface finishes are chosen.',
    toolsUsed: ['SketchUp Pro', 'Curviloft Extension', 'Clay Shading Mode'],
    specs: {
      area: '5,200 sq. ft.',
      timeline: '2 Months Spatial Modeling',
      style: 'Monolithic Sculptural Brutalism',
      elevationOrFloors: '3 Tiered Volumes'
    },
    materials: ['Pure Unfinished Concrete', 'Shadow Reveal Grooves', 'Recessed Glazing', 'Raw Basalt Blocks'],
    workflowHighlights: [
      'Created non-destructive component hierarchy in SketchUp.',
      'Studied 360-degree solar shadow casting for summer and winter comfort.',
      'Exported high-res vector line linework for architectural publication.'
    ],
    featured: true
  },
  {
    id: 'warm-modern-interior',
    projectCode: 'INT-2405',
    title: 'Warm Modern Interior & Millwork',
    subtitle: 'Bespoke floating white oak cabinetry, linear slats, and architectural cove illumination',
    category: 'interior',
    categoryLabel: 'Interior Architecture',
    year: '2024',
    location: 'Denver, Colorado',
    sqft: '2,400 SQ FT',
    software: ['SketchUp Pro', 'Photoshop CC', 'Enscape'],
    renderEngine: 'Photoshop Atmospheric Composite',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Transforming an open living floorplan through architectural millwork partitions. Every cabinet reveal, hidden flush door, and LED channel was modeled to 1mm tolerance in SketchUp, then enhanced in Photoshop with warm 2700K lighting.',
    architecturalIntent: 'Eliminating clutter through concealed built-in architecture, creating a warm, tactile sanctuary bathed in indirect illumination.',
    toolsUsed: ['SketchUp Pro', 'Photoshop CC', 'Cabinet Vision', 'Enscape'],
    specs: {
      area: '2,400 sq. ft.',
      timeline: '2.5 Months Design & Visualization',
      style: 'Warm Minimalist Contemporary',
      elevationOrFloors: 'Single Level Great Room'
    },
    materials: ['Rift-Cut White Oak', 'Honed Travertine', 'Brushed Champagne Brass', 'Linen Wall Panels'],
    workflowHighlights: [
      'Modeled 100% custom millwork shop drawings in SketchUp with hardware clearances.',
      'Fine-tuned material grain direction and soft reflection bounce in Photoshop.',
      'Delivered fabrication files directly to local custom cabinetmaker.'
    ],
    featured: true
  },
  {
    id: 'modern-mediterranean-villa',
    projectCode: 'ARC-2406',
    title: 'Modern Mediterranean Coastal Estate',
    subtitle: 'Smooth white stucco arches, reclaimed terracotta, and olive courtyard garden',
    category: 'layout',
    categoryLabel: 'Floor Plans & LayOut',
    year: '2023',
    location: 'Santa Barbara, California',
    sqft: '4,100 SQ FT',
    software: ['SketchUp Pro', 'LayOut 2D', 'Photoshop'],
    renderEngine: 'SketchUp LayOut Drawing Set',
    coverImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    sketchupImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    photoshopFinalImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'A contemporary take on traditional Santa Barbara Spanish colonial architecture. Vincent drafted the comprehensive 28-sheet LayOut construction document set directly linked to the SketchUp master 3D model, ensuring plan-to-section consistency.',
    architecturalIntent: 'Celebrating California indoor-outdoor living with deep shaded arcades, limestone fountains, and drought-tolerant olive and lavender gardens.',
    toolsUsed: ['SketchUp Pro', 'SketchUp LayOut', 'Photoshop CC'],
    specs: {
      area: '4,100 sq. ft.',
      timeline: '4.5 Months Permitting Documents',
      style: 'Modern Mediterranean Coastal',
      elevationOrFloors: '2 Levels with Courtyard Loggia'
    },
    materials: ['Smooth Hand-Troweled Stucco', 'Reclaimed Spanish Clay Roof Tiles', 'Santa Barbara Sandstone', 'Custom Wrought Iron'],
    workflowHighlights: [
      'Linked SketchUp 3D scenes dynamically into LayOut 2D sheets.',
      'Generated window schedules, dimensioned wall sections, and door assemblies.',
      'Passed Santa Barbara Historic & Architectural Board review on initial submittal.'
    ],
    featured: true
  }
];

export const COMPARISON_SCENES: ComparisonScene[] = [
  {
    id: 'villa-solaris',
    title: 'The Obsidian Pavilion & Courtyard',
    location: 'Kyoto Prefecture, Japan',
    discipline: 'Exterior & Landscape Synergy',
    sketchupLabel: 'Trimble SketchUp (Massing & Solar Model)',
    photoshopLabel: 'Adobe Photoshop (Atmospheric Composite)',
    sketchupDescription: 'Precision 3D geometric massing, solar angle calibration at 35° azimuth, structural cantilever calculations, and initial terrain stepped contour grading.',
    photoshopDescription: 'Multi-layer atmospheric grading, warm twilight interior emission, misty pine forest background matte painting, wet stone reflection detailing, and ambient occlusion passes.',
    sketchupImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    photoshopImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    techNotes: [
      'SketchUp: Sandbox tool for natural sloped topography',
      'SketchUp: Dynamic component louvers with shadow cast',
      'Photoshop: Camera Raw filter for moody blue-green grading',
      'Photoshop: 42 layered lighting and depth-of-field passes'
    ]
  },
  {
    id: 'nordic-residence',
    title: 'Aethelgard Biophilic Atrium & Lounge',
    location: 'Oslo Fjord, Norway',
    discipline: 'Interior & Landscape Living',
    sketchupLabel: 'Trimble SketchUp (Millwork & Interior Volumetrics)',
    photoshopLabel: 'Adobe Photoshop (Materiality & Natural Illumination)',
    sketchupDescription: 'Millwork tolerance modeling, custom sunken conversation pit coordinates, double-height glazing frames, and structural timber beam integration.',
    photoshopDescription: 'Bespoke walnut grain texture enhancement, volumetric morning mist drifting through clerestory windows, warm 2700K ambient light bounce, and lush indoor botanical grading.',
    sketchupImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    photoshopImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    techNotes: [
      'SketchUp: Parametric custom cabinetry & ceiling slats',
      'SketchUp: Accurate furniture clearance and sightlines',
      'Photoshop: High-pass sharpening on brushed bronze accents',
      'Photoshop: Soft natural glow falloff from floor-to-ceiling glass'
    ]
  },
  {
    id: 'serenity-gardens',
    title: 'Komorebi Cascading Zen Landscape',
    location: 'Vancouver Island, BC',
    discipline: 'Landscape & Garden Architecture',
    sketchupLabel: 'Trimble SketchUp (Grading, Hardscape & Water Levels)',
    photoshopLabel: 'Adobe Photoshop (Foliage Density & Water Caustics)',
    sketchupDescription: 'Contour line triangulation, granite retaining wall steps, reflecting pond basin geometry, and stone pathway placement.',
    photoshopDescription: 'Photorealistic Japanese maple canopy overlay, submerged moss bank textures, twilight stone lantern bloom, and mirrored water surface reflections with ripples.',
    sketchupImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    photoshopImage: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1600&q=80',
    techNotes: [
      'SketchUp: Accurate spot elevation tagging and drainage slope',
      'SketchUp: Custom cut-and-fill retaining geometry',
      'Photoshop: Custom botanical brush stamp engine for endemic foliage',
      'Photoshop: Deep blue-green moody oceanic atmospheric depth'
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
    highlight: 'Zero discrepancy between your 3D model and the contractor’s printed plans.',
    estTimeline: '3 – 6 Weeks'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Vincent's dual mastery of SketchUp precision and photorealistic lighting won our client over instantly. The way he engineered the cantilever roof overhangs and captured the sunset glow in Malibu was pure artistry.",
    author: 'Marcus Vance',
    role: 'Principal Architect',
    company: 'Vance & Holbrook Architects',
    project: 'The Ridge Cantilever Residence',
    rating: 5
  },
  {
    id: 'test-2',
    quote: "Most 3D visualizers produce sterile, cold images. Vincent's post-production brings authentic soul, natural light, and weather moods that look like photographs of a completed architectural masterpiece.",
    author: 'Elena Rostova',
    role: 'Lead Interior Designer',
    company: 'Studio Rostova Milan',
    project: 'Cascade Timber Villa',
    rating: 5
  },
  {
    id: 'test-3',
    quote: "Our city review board demanded rigorous solar shadow studies and 2D LayOut plans before approving our modern infill home. Vincent delivered both within two weeks, and we received permitting on the very first submittal.",
    author: 'Julian Chen',
    role: 'Residential Developer',
    company: 'Apex Urban Living',
    project: 'Metropolitan Infill Courtyard',
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
