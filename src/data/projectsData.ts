export interface Project {
  id: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Residential' | 'Commercial' | 'Renovation';
  location: string;
  summary: string;
  description: string;
  workDone: string[];
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  gallery: string[];
  isFeatured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'kensington-townhouse-interior',
    title: 'Townhouse Interior Refresh',
    category: 'Interior',
    location: 'Kensington, London',
    summary: 'Full interior painting and woodwork restoring for a period residence.',
    description: 'A comprehensive interior decoration project involving detailed surface preparation, cornicing restoration, and flawless emulsion application across three floors.',
    workDone: [
      'Walls and ceilings painted with matte heritage emulsion',
      'Woodwork, skirtings, and window frames finished in satinwood',
      'Plaster crack repairs and smooth sanding',
      'Protective floor covering and spotless cleanup'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    beforeImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    afterImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'hampstead-victorian-exterior',
    title: 'Victorian Exterior Protection',
    category: 'Exterior',
    location: 'Hampstead, London',
    summary: 'Weather-resistant masonry painting and sash window re-decoration.',
    description: 'Restoration and exterior painting for a classic London property to protect masonry from harsh weather while accentuating architectural features.',
    workDone: [
      'High-pressure washing and masonry priming',
      'Filling exterior cracks and sealing window surrounds',
      'Fascias, soffits, and timber window frames painting',
      'Durable weather-shield masonry paint application'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    beforeImageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop',
    afterImageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'richmond-modern-apartment',
    title: 'Modern Apartment Renovation',
    category: 'Residential',
    location: 'Richmond, London',
    summary: 'Complete living space decoration with custom feature wall painting.',
    description: 'Transforming a residential flat with contemporary neutral tones, smooth plaster finishing, and precise door frame recoating.',
    workDone: [
      'Open-plan living room and kitchen walls repainted',
      'Architectural feature wall with premium eggshell finish',
      'Baseboard and internal door repainting',
      'Complete furniture masking and protection'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'mayfair-boutique-office',
    title: 'Boutique Office Decoration',
    category: 'Commercial',
    location: 'Mayfair, London',
    summary: 'Sophisticated commercial workspace update executed out of hours.',
    description: 'Refurbishment of a commercial workplace with durable, washable paints and refined neutral color scheme to enhance productivity and professional appearance.',
    workDone: [
      'Meeting rooms and reception area repainting',
      'Out-of-hours flexible schedule to avoid business disruption',
      'High-traffic wall coating application',
      'Woodwork trim touch-ups'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'chelsea-residential-renovation',
    title: 'Period Home Surface Restoration',
    category: 'Renovation',
    location: 'Chelsea, London',
    summary: 'Meticulous plaster repair, sanding, and decorative finishing.',
    description: 'Substantial surface preparation and complete re-decoration of damaged walls in a traditional Chelsea family home.',
    workDone: [
      'Plaster repairs and skim coating preparation',
      'Dustless sanding for smooth wall texture',
      'Multi-coat luxury wall painting',
      'Decorative dado rail and trim painting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'islington-flat-refresh',
    title: 'Mews House Interior Refreshed',
    category: 'Residential',
    location: 'Islington, London',
    summary: 'Brightening interior spaces with warm light-reflecting colours.',
    description: 'Complete internal repaint of a two-bedroom mews house, modernising hallways, staircases, and living areas with crisp off-white tones.',
    workDone: [
      'Staircase spindle and banister refinishing',
      'Hallway and landing ceiling painting',
      'Bedroom feature wall application',
      'Window sill and surround coating'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop'
    ],
    isFeatured: true
  },
  {
    id: 'clapham-kitchen-dining-decor',
    title: 'Kitchen & Dining Area Refresh',
    category: 'Interior',
    location: 'Clapham, London',
    summary: 'Moisture-resistant kitchen painting and dining space decoration.',
    description: 'Updating a modern extension with anti-mould kitchen paints and warm neutral tones for the dining quarter.',
    workDone: [
      'Anti-condensation paint for cooking areas',
      'Ceiling stain sealing and recoating',
      'Skirting board and radiator cover painting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'fulham-exterior-facade',
    title: 'Edwardian Facade Renovation',
    category: 'Exterior',
    location: 'Fulham, London',
    summary: 'Front door restoration, bay window timber treatment, and brickwork seal.',
    description: 'Refreshing kerb appeal with dark navy gloss front door painting and pristine white window trim coatings.',
    workDone: [
      'Front door timber sanding and high-gloss enamel coat',
      'Bay window timber filler and satin finish',
      'Threshold step painting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'greenwich-commercial-retail',
    title: 'Retail Shopfront & Display Room',
    category: 'Commercial',
    location: 'Greenwich, London',
    summary: 'Commercial shop interior painting with durable high-traffic finishes.',
    description: 'Rebranding an independent Greenwich retail store with clean modern walls and quick drying low-VOC paints.',
    workDone: [
      'Fast turnaround weekend application',
      'Low-odour non-toxic eco paint application',
      'Display shelving unit painted'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'notting-hill-bedroom-suite',
    title: 'Master Bedroom Suite Decorating',
    category: 'Interior',
    location: 'Notting Hill, London',
    summary: 'Tranquil luxury palette decoration with subtle accent moulding.',
    description: 'Creating a calming sanctuary with soft sage undertones, immaculate trim work, and seamless ceiling transitions.',
    workDone: [
      'Farrow & Ball colour scheme implementation',
      'Crown moulding detail highlight',
      'Built-in wardrobe spray/brush painting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'wandsworth-full-renovation',
    title: 'Entire Property General Renovation',
    category: 'Renovation',
    location: 'Wandsworth, London',
    summary: 'Pre-tenancy property restoration and thorough surface repair.',
    description: 'Full house preparation, wall patching, ceiling stain treatments, and crisp white repaint for a residential landlord.',
    workDone: [
      'Water damage repair and blocking primer',
      'Whole property wall filling and sanding',
      'Ceiling recoats and door framework'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'chiswick-family-residence',
    title: 'Family Residence Interior Decorating',
    category: 'Residential',
    location: 'Chiswick, London',
    summary: 'Kid-friendly, scrubbable wall paint for high-traffic corridors.',
    description: 'Refreshing hallways, children rooms, and family lounge with durable eggshell finishes designed for long-lasting beauty.',
    workDone: [
      'Scrubbable matte paint application',
      'Wainscoting and panelling painting',
      'Stairwell high-ceiling painting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];
