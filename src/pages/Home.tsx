import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  ArrowRight, 
  CheckCircle2, 
  Paintbrush, 
  Home as HomeIcon, 
  Sparkles, 
  Building2, 
  Layers, 
  Wrench,
  Clock, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProjectModal } from '../components/ProjectModal';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <div className="animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 bg-brand-dark text-white overflow-hidden">
        {/* Background Hero Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.50.jpeg" 
            alt="Professional painting and decorating in London" 
            className="w-full h-full object-cover object-center opacity-55 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/25" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-dark/30 to-brand-dark/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-accent text-xs font-semibold tracking-wider uppercase mb-6 border border-brand-accent/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Painting & Decorating in London</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              Beautifully Finished Spaces, Created with Care
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 font-light max-w-2xl">
              Professional painting, decorating and renovation services for homes and businesses across London. From careful preparation to the final finish, every detail matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-sm font-semibold text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/projects"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-sm font-semibold text-base transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>View Our Projects</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Interior & Exterior</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>London-Based Service</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIFFERENTIALS STRIP */}
      <section className="bg-brand-cream border-y border-brand-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-brand-dark flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="font-serif font-bold text-base text-brand-dark">Professional Finish</h3>
              <p className="text-xs text-gray-600 mt-1">Immaculate lines & smooth coats</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-brand-dark flex items-center justify-center mb-3">
                <Layers className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="font-serif font-bold text-base text-brand-dark">Careful Preparation</h3>
              <p className="text-xs text-gray-600 mt-1">Filling, sanding & priming</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-brand-dark flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="font-serif font-bold text-base text-brand-dark">Reliable Service</h3>
              <p className="text-xs text-gray-600 mt-1">Respect for your schedule</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-brand-dark flex items-center justify-center mb-3">
                <Eye className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="font-serif font-bold text-base text-brand-dark">Attention to Detail</h3>
              <p className="text-xs text-gray-600 mt-1">Clean working process</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Overlap Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-md overflow-hidden shadow-2xl border border-brand-border">
                <img 
                  src="/Fotos 02/WhatsApp Image 2026-08-05 at 19.20.11 (2).jpeg" 
                  alt="Beautiful interior decorating in London" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 z-20 w-3/5 rounded-md overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/Fotos 02/WhatsApp Image 2026-08-05 at 19.20.10.jpeg" 
                  alt="Luxury wallpaper installation detail" 
                  className="w-full h-[240px] object-cover"
                />
              </div>

              {/* Decorative Accent box */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-md -z-0" />
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                About Dias Painting & Decorating
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Painting and Decorating That Transforms Your Space
              </h2>
              
              <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
                <p>
                  Dias Painting & Decorating provides professional painting, decorating and general renovation services throughout London. We approach every project with careful planning, clean execution and close attention to the final result.
                </p>
                <p>
                  Whether you are refreshing a single room, renovating a property or improving a commercial space, our goal is to deliver a finish that looks professional and lasts.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-black text-white px-7 py-3.5 rounded-sm font-medium text-sm transition-all shadow hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Comprehensive Painting & Decorating Services
            </h2>
            <p className="text-gray-600 text-base">
              Tailored solutions for homeowners, landlords, and commercial property owners across London.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Service 1 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Paintbrush className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">Interior Painting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Professional painting for walls, ceilings, doors, woodwork and interior spaces.
                </p>
              </div>
              <Link to="/services#interior-painting" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">Exterior Painting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Exterior painting and decorating designed to improve appearance and protect surfaces.
                </p>
              </div>
              <Link to="/services#exterior-painting" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">Residential Decorating</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Personalised decorating services for houses, flats, bedrooms, kitchens and living areas.
                </p>
              </div>
              <Link to="/services#residential-decorating" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">Commercial Decorating</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Professional solutions for offices, shops, rental properties and commercial environments.
                </p>
              </div>
              <Link to="/services#commercial-decorating" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">Surface Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Careful preparation, filling, sanding and priming to achieve a smooth, durable finish.
                </p>
              </div>
              <Link to="/services#surface-preparation" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="group bg-brand-light p-8 rounded-sm border border-brand-border hover:border-brand-accent transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-brand-dark text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">General Renovations</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  General property improvements and renovation services tailored to each project.
                </p>
              </div>
              <Link to="/services#general-renovations" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-accent uppercase tracking-wider transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3.5 rounded-sm font-semibold text-sm transition-all shadow"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Dias Painting & Decorating?
            </h2>
            <p className="text-gray-300 text-base font-light">
              We treat every property with respect and work with precision so that your renovation or redecoration is effortless and satisfying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Detailed Preparation</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Meticulous filling, sanding, and priming before any painting begins for a longer-lasting finish.
              </p>
            </div>

            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Clean Working Process</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                We protect floors, furniture, and fixtures, ensuring your space remains clean throughout the project.
              </p>
            </div>

            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Quality Materials</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Using professional paints and tools tailored to each surface for optimum coverage and durability.
              </p>
            </div>

            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Clear Communication</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Transparent updates from initial estimate to final walkthrough so you always know what to expect.
              </p>
            </div>

            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Respect for Your Property</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Punctual, polite, and respectful service tailored around your daily schedule and convenience.
              </p>
            </div>

            <div className="p-6 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-brand-accent mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">Personalised Quotes</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Fair, itemised quotations based on your specific requirements with no hidden extra charges.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WORK PROCESS */}
      <section className="py-20 bg-brand-cream border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Step by Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Our Simple Working Process
            </h2>
            <p className="text-gray-600 text-base">
              How we take your idea from initial contact to a beautifully finished result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Process Step 1 */}
            <div className="relative bg-white p-6 rounded border border-brand-border shadow-sm">
              <span className="font-serif text-4xl font-bold text-brand-accent/40 block mb-4">01</span>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">Tell Us About Your Project</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contact our team and share the details of the work you need for your property.
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="relative bg-white p-6 rounded border border-brand-border shadow-sm">
              <span className="font-serif text-4xl font-bold text-brand-accent/40 block mb-4">02</span>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">Receive Your Quote</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We assess the requirements and prepare a clear, personalised quotation.
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="relative bg-white p-6 rounded border border-brand-border shadow-sm">
              <span className="font-serif text-4xl font-bold text-brand-accent/40 block mb-4">03</span>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">Preparation & Execution</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Surfaces are carefully prepared before the painting, decorating or renovation work begins.
              </p>
            </div>

            {/* Process Step 4 */}
            <div className="relative bg-white p-6 rounded border border-brand-border shadow-sm">
              <span className="font-serif text-4xl font-bold text-brand-accent/40 block mb-4">04</span>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">Final Review</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We review the completed work and ensure every detail has been properly finished.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FEATURED PROJECTS */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Portfolio Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-border flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-brand-dark">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-brand-accent font-medium flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      Click to view details
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-brand-dark/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-xs text-gray-500 block mb-1">{project.location}</span>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. BEFORE AND AFTER */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider 
            beforeImage="/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.43.jpeg"
            afterImage="/Fotos 02/WhatsApp Image 2026-08-05 at 19.19.45.jpeg"
            title="Transformation in Detail"
            subtitle="Slide to experience the difference expert surface preparation and high-quality painting makes."
            isPlaceholderDemo={true}
          />
        </div>
      </section>

      {/* 9. CTA FOR QUOTE */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Planning to Refresh or Renovate Your Property?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
            Tell us about your project and request a personalised quotation for painting, decorating or renovation work in London.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-semibold px-8 py-4 rounded-sm text-base transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-sm text-base transition-all shadow flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREA */}
      <section className="py-16 bg-brand-cream border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
            Painting and Decorating Services Across London
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Dias Painting & Decorating provides professional services for residential and commercial properties throughout London. Contact us to confirm availability in your area.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
};
