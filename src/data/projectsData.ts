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
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.32.jpeg',
    beforeImageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.43.jpeg',
    afterImageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.32.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.32.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.33.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.34.jpeg'
    ],
    isFeatured: true
  },
  {
    id: 'luxury-wallpaper-installation',
    title: 'Luxury Wallpaper Hanging & Feature Wall',
    category: 'Interior',
    location: 'Chelsea, London',
    summary: 'Bespoke wallpaper hanging with precise pattern matching and surface prep.',
    description: 'High-end wallpaper application for a luxury residence feature wall, involving meticulous surface lining, wall priming, and exact edge matching.',
    workDone: [
      'Removal of existing wall coverings and wall priming',
      'Lining paper application for ultra-smooth foundation',
      'Precision pattern alignment and vertical join smoothing',
      'Clean border trimming around light switches and sockets'
    ],
    imageUrl: '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.13.jpeg',
    gallery: [
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.13.jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.14 (1).jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.14 (2).jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.56.jpeg'
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
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.40.jpeg',
    beforeImageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.41.jpeg',
    afterImageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.40.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.40.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.41.jpeg'
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
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.56.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.56.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.43.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.42.jpeg'
    ],
    isFeatured: true
  },
  {
    id: 'designer-wallpapering-residence',
    title: 'Patterned Wallpaper & Decorating',
    category: 'Residential',
    location: 'Mayfair, London',
    summary: 'Elegant patterned wallpaper installation across dining and living areas.',
    description: 'Exquisite papering for a Mayfair townhouse dining room, featuring detailed corner cutting, non-stretch paste application, and seamless finish.',
    workDone: [
      'Custom wall paste application and soak timing',
      'Seam rolling for invisible join lines',
      'Detailed trimming around architraves and picture rails'
    ],
    imageUrl: '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.14 (3).jpeg',
    gallery: [
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.14 (3).jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.03.04.jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.03.04 (1).jpeg'
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
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.50.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.50.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.37.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.37 (1).jpeg'
    ],
    isFeatured: true
  },
  {
    id: 'chelsea-residential-renovation',
    title: 'Period Home Surface Restoration',
    category: 'Renovation',
    location: 'Fulham, London',
    summary: 'Meticulous plaster repair, sanding, and decorative finishing.',
    description: 'Substantial surface preparation and complete re-decoration of damaged walls in a traditional Chelsea family home.',
    workDone: [
      'Plaster repairs and skim coating preparation',
      'Dustless sanding for smooth wall texture',
      'Multi-coat luxury wall painting',
      'Decorative dado rail and trim painting'
    ],
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.41.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.41.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.41 (1).jpeg'
    ]
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
    imageUrl: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.39.jpeg',
    gallery: [
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.39.jpeg',
      '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.39 (1).jpeg'
    ]
  },
  {
    id: 'textured-wallpaper-bedroom',
    title: 'Textured Wallpaper & Bedroom Decor',
    category: 'Interior',
    location: 'Notting Hill, London',
    summary: 'Luxury textured wallpaper hanging for master bedroom suite.',
    description: 'Delicate installation of woven wallcoverings creating a serene and sophisticated master suite retreat.',
    workDone: [
      'Precise wall smoothing and sealing',
      'Specialist paste application for heavyweight wallpaper',
      'Seamless corner wraps and clean outlet cutouts'
    ],
    imageUrl: '/Fotos 01/WhatsApp Image 2026-08-05 at 19.05.48 (1).jpeg',
    gallery: [
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.05.48 (1).jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.05.48 (2).jpeg',
      '/Fotos 01/WhatsApp Image 2026-08-05 at 19.05.49.jpeg'
    ]
  }
];
