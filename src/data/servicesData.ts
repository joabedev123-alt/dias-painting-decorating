export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    shortDesc: 'Professional painting for walls, ceilings, doors, woodwork and interior spaces.',
    fullDesc: 'Transform the feel and light of your property with expert interior painting. We bring precision to every surface — from high ceilings and detailed cornices to skirting boards, doors, and window sills. Using premium emulsions, satinwood, and eggshell finishes, we deliver uniform coverage and seamless lines.',
    iconName: 'Paintbrush',
    features: [
      'Walls & ceiling painting with premium matte or silk finishes',
      'Door, frame, & timber woodwork recoating',
      'Skirting boards, architraves, & window sills',
      'Feature wall creation with precise colour blocking',
      'Stain-blocking for ceiling water marks'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.32.jpeg'
  },
  {
    id: 'wallpapering',
    title: 'Wallpapering & Wall Coverings',
    shortDesc: 'Expert installation of luxury wallpaper, patterned wallcoverings and feature walls.',
    fullDesc: 'Add elegance, texture, and personality to your interior spaces with professional wallpaper hanging. From intricate pattern matching to delicate fabric and luxury vinyl wallcoverings, we ensure seamless seams, smooth alignment, and immaculate surface preparation.',
    iconName: 'Sparkles',
    features: [
      'Professional hanging of patterned & luxury wallpapers',
      'Precise pattern matching & seamless vertical joins',
      'Surface lining paper application & wall smoothing',
      'Bespoke feature wall installations for homes & offices',
      'Removal of old wallpaper & wall plaster priming'
    ],
    image: '/Fotos 01/WhatsApp Image 2026-08-05 at 19.01.13.jpeg'
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    shortDesc: 'Exterior painting and decorating designed to improve appearance and protect surfaces.',
    fullDesc: 'Protect your building from London weather while dramatically boosting curb appeal. Our exterior painting covers masonry facades, stucco, render, wooden cladding, fascias, soffits, and sash window frames. We apply durable, weather-shield coatings built to resist flaking and dampness.',
    iconName: 'Home',
    features: [
      'Weather-resistant masonry painting',
      'External sash windows & timber frame treatment',
      'Front door high-gloss or satin refinishing',
      'Fascia, soffit, & guttering painting',
      'Exterior crack sealing & surface priming'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.40.jpeg'
  },
  {
    id: 'residential-decorating',
    title: 'Residential Decorating',
    shortDesc: 'Personalised decorating services for houses, flats, bedrooms, kitchens and living areas.',
    fullDesc: 'Your home deserves individual attention. Whether you are refreshing a single bedroom, updating a newly acquired flat, or re-decorating an entire family house, we work cleanly and respectfully around your daily life to deliver tailored finishes that align with your style.',
    iconName: 'Sparkles',
    features: [
      'Tailored color scheme guidance & testing',
      'Complete home refresh or single room decoration',
      'Kitchen & bathroom anti-mould paint application',
      'Bedroom, living room, & dining room refurbishing',
      'Protection of furniture, carpets, & personal belongings'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.42 (2).jpeg'
  },
  {
    id: 'commercial-decorating',
    title: 'Commercial Decorating',
    shortDesc: 'Professional solutions for offices, shops, rental properties and commercial environments.',
    fullDesc: 'Efficient, dependable decorating for London commercial spaces. We understand that business continuity is key, which is why we offer flexible out-of-hours scheduling. We use durable, washable, low-odour paints ideal for office spaces, retail boutiques, and managed rental properties.',
    iconName: 'Building2',
    features: [
      'Offices, retail stores, & commercial studios',
      'Flexible weekend or evening scheduling options',
      'Scrubbable, high-traffic commercial paint formulas',
      'Landlord & property manager pre-tenancy refreshes',
      'Clean & compliant working environment'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.20.12 (2).jpeg'
  },
  {
    id: 'surface-preparation',
    title: 'Surface Preparation',
    shortDesc: 'Careful preparation, filling, sanding and priming to achieve a smooth, durable finish.',
    fullDesc: 'The secret to a flawless paint job lies in meticulous preparation. We take time to repair plaster cracks, fill indentations, sand rough surfaces, and apply suitable primers. Skipping prep is never an option; we build a flawless foundation before a single paintbrush touches your wall.',
    iconName: 'Layers',
    features: [
      'Plaster crack, hole, & imperfection filling',
      'Fine sanding for ultra-smooth wall surface',
      'Stain-blocking & sealer priming',
      'Old loose paint scraping & smoothing',
      'Dustless sanding methods for clean indoor air'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.43.jpeg'
  },
  {
    id: 'general-renovations',
    title: 'General Renovations',
    shortDesc: 'General property improvements and renovation services tailored to each project.',
    fullDesc: 'General property improvement and renovation work can be discussed according to the requirements of each project. From room updates to general repair tasks that accompany painting and decorating, contact us with the details of your property and the work you are planning.',
    iconName: 'Wrench',
    features: [
      'General property touch-ups & improvements',
      'Pre-decoration timber & wall repairs',
      'Replacement of damaged skirting or trim',
      'Pre-sale & end-of-tenancy property restoration',
      'Bespoke project assessment upon request'
    ],
    image: '/Fotos 02/WhatsApp Image 2026-08-05 at 19.18.41.jpeg'
  }
];
