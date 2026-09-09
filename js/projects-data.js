/**
 * Vincent - Portfolio Projects Data
 * Detailed architectural, interior, exterior, and landscape design projects.
 */

const projectsData = [
  {
    id: "villa-lumina",
    title: "Villa Lumina Residence",
    category: "interior",
    categoryLabel: "Interior Design",
    subtitle: "Minimalist open-plan living with raw concrete and warm timber accents",
    location: "Zurich, Switzerland",
    year: "2025",
    area: "340 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "V-Ray Core"],
    summary: "A complete interior spatial overhaul emphasizing natural daylit volumes, recessed ambient linear lighting, and custom monolithic millwork. The design connects the sunken living room with an open culinary island overlooking private alpine vistas.",
    challenge: "Integrating massive cast-in-place concrete walls without making the living volume feel cold or cavernous, while concealing HVAC plenums and acoustic dampening panels.",
    solution: "Designed custom quarter-sawn white oak acoustic slatted panels modeled to sub-millimeter tolerances in SketchUp. In Adobe Photoshop, dialed in multi-layered atmospheric bounce lighting, soft rayleigh scattering, and calibrated material specularities.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/villa-lumina.svg",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Interior Architecture", "SketchUp 3D", "Photoshop Lighting", "Custom Millwork"]
  },
  {
    id: "azure-courtyard",
    title: "Azure Biophilic Courtyard",
    category: "landscape",
    categoryLabel: "Landscape Design",
    subtitle: "Multi-tiered subtropical oasis featuring reflective water mirrors and native flora",
    location: "Cascais, Portugal",
    year: "2025",
    area: "620 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Terrain Modeler"],
    summary: "An immersive outdoor sanctuary developed around an infinity reflecting pool, sunken firepit, and layered Mediterranean vegetation. The design creates a microclimate that shields occupants from coastal winds while framing ocean vistas.",
    challenge: "Steep 18-degree granite slope with strict municipal rainwater runoff restrictions and preservation orders on century-old maritime pines.",
    solution: "Terraced the slope into three distinct functional plateaus using local dry-stack schist stone. Modeled precise topographical contours in SketchUp and applied hyper-detailed atmospheric humidity, caustics, and evening twilight illumination in Photoshop.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/azure-courtyard.svg",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Landscape Architecture", "Water Feature", "SketchUp Topography", "Botanical Palette"]
  },
  {
    id: "cantilever-house",
    title: "Monolithic Cantilever Residence",
    category: "exterior",
    categoryLabel: "Exterior Design",
    subtitle: "Dramatic board-formed concrete volumes floating above a rocky ridge",
    location: "Kyoto Prefecture, Japan",
    year: "2024",
    area: "480 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Curviloft"],
    summary: "A modern structural statement consisting of dual interlocking rectangular volumes. The upper level cantilevers 6.5 meters over the hillside, providing dramatic shaded outdoor living space below while presenting an austere, protective facade to the road.",
    challenge: "Balancing the visual weight of structural concrete with delicate Japanese cedar slatting, ensuring the home feels anchored to the bedrock rather than imposing.",
    solution: "Refined structural massing in SketchUp using precise shadow studies to calculate seasonal solar gains. Rendered weathering textures, wet rain reflections, and misty hillside ambient depth through Photoshop multi-pass compositing.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/cantilever-house.svg",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Exterior Facade", "Cantilever Engineering", "SketchUp Massing", "Material Contrast"]
  },
  {
    id: "nordic-loft",
    title: "Nordic Timber Penthouse Loft",
    category: "interior",
    categoryLabel: "Interior Design",
    subtitle: "Adaptive reuse of an industrial warehouse loft into a warm scandinavian sanctuary",
    location: "Stockholm, Sweden",
    year: "2024",
    area: "210 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "StyleBuilder"],
    summary: "Transformation of a 5-meter ceiling industrial loft into an airy dual-level penthouse. Features a custom steel-and-ash staircase, mezzanine reading lounge, and floor-to-ceiling blackened steel glass partitions.",
    challenge: "Preserving the historic masonry and steel truss ceiling while establishing acoustic privacy between the public entertaining zone and private master suite.",
    solution: "Developed exact 3D models of every structural steel tie-rod and HVAC duct in SketchUp. In Photoshop, executed nuanced daylight studies for low-angle Nordic winter sun, crafting photorealistic wool, leather, and smoked oak textures.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/nordic-loft.svg",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2b81404c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Interior Renovation", "Timber Detailing", "SketchUp Components", "Warm Minimalism"]
  },
  {
    id: "zenith-garden",
    title: "Zenith Tiered Rock & Water Garden",
    category: "landscape",
    categoryLabel: "Landscape Design",
    subtitle: "Contemporary Zen-inspired landscape with basalt monoliths and cascading water walls",
    location: "Vancouver, Canada",
    year: "2024",
    area: "510 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Skatter"],
    summary: "A contemplative residential garden incorporating black basalt water runnels, sculptured Japanese maples, mossy groundcovers, and floating slate walkways. Subtle 2700K concealed warm LED strips highlight stone textures after dusk.",
    challenge: "Integrating sound dampening against nearby urban traffic noise without building tall, visually oppressive masonry walls.",
    solution: "Constructed cascading acoustic water steps with precision weir edges modeled in SketchUp. In Photoshop, performed intricate post-production on water spray translucency, moss growth maps, and evening illumination balance.",
    image: "https://images.unsplash.com/photo-1558904541-efa8c4a52d31?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/zenith-garden.svg",
    gallery: [
      "https://images.unsplash.com/photo-1558904541-efa8c4a52d31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Landscape Architecture", "Zen Philosophy", "Hardscaping", "SketchUp 3D"]
  },
  {
    id: "geometric-pavilion",
    title: "Geometric Timber & Glass Pavilion",
    category: "exterior",
    categoryLabel: "Exterior Design",
    subtitle: "Sculptural outdoor pavilion extending modern architecture into nature",
    location: "Aspen, Colorado",
    year: "2023",
    area: "190 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Fredo6 Tools"],
    summary: "A freestanding alpine pavilion featuring a faceted timber brise-soleil roof structure, motorized glass curtain walls, and an integrated Corten steel outdoor fireplace. Acts as a four-season mountain retreat.",
    challenge: "Severe mountain snow-load engineering requirements while maintaining an ultra-slender, delicate roof edge profile.",
    solution: "Generated geometric parametric louvers in SketchUp, testing sun angles and snow runoff slopes. Layered high-dynamic-range Photoshop composite passes with realistic mountain snow reflections and warm interior hearth fire glow.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/geometric-pavilion.svg",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Exterior Pavilion", "Timber Structure", "Alpine Architecture", "Photoshop Post-Production"]
  },
  {
    id: "atrium-sanctuary",
    title: "Sunken Atrium Living Lounge",
    category: "interior",
    categoryLabel: "Interior Design",
    subtitle: "Conversational pit with double-height glass atrium and integrated botanical planter",
    location: "Melbourne, Australia",
    year: "2023",
    area: "165 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Enscape"],
    summary: "A mid-century inspired sunken living room immersed in natural light via a 6-meter vertical skylight shaft. Features continuous custom upholstered banquet seating in olive velvet, microcement flooring, and travertine step transitions.",
    challenge: "Accommodating natural root-zone drainage for a mature internal Ficus lyrata tree within a suspended slab floor plate.",
    solution: "Created detailed sub-floor section models in SketchUp for root containment and irrigation routing. Crafted photorealistic atmospheric god-rays and dust motes streaming from the skylight using Photoshop radial blur and depth channel masking.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/atrium-sanctuary.svg",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Interior Lounge", "Sunken Seating", "Biophilic Interior", "Photoshop Lighting"]
  },
  {
    id: "verona-estate",
    title: "Verona Modernist Terraced Estate",
    category: "landscape",
    categoryLabel: "Landscape Design",
    subtitle: "Sculpted Italianate garden terraces combining formal cypress lines with contemporary infinity edges",
    location: "Verona, Italy",
    year: "2023",
    area: "890 sq.m",
    tools: "Modeled in SketchUp · Rendered in Photoshop",
    software: ["SketchUp Pro", "Adobe Photoshop CC", "Artisan Organics"],
    summary: "A grand countryside landscape reimagining classic Italian terrace geometry for modern living. Features limestone retaining walls, fragrant lavender parterres, olive grove walkways, and an illuminated cantilevered viewing deck.",
    challenge: "Maintaining sightlines across 4 levels of terracing while concealing safety glass railings and perimeter lighting fixtures.",
    solution: "Designed recessed glass shoe bases hidden beneath overhang coping stones in SketchUp. In Photoshop, perfected the warm golden-hour sunset atmosphere with deep Italian cypress shadows and glowing warm travertine stone highlights.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "assets/images/verona-estate.svg",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Landscape Masterplan", "Terraced Gardens", "SketchUp Terrain", "Atmospheric Render"]
  }
];

// Export if in Node/module context, otherwise attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData };
}
