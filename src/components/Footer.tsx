import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-gray-300 border-t border-brand-border-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img 
                src="/logo.jpeg" 
                alt="Dias Painting & Decorating Logo" 
                className="h-12 w-auto object-contain rounded-sm p-0.5 bg-white/10"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  DIAS
                </span>
                <span className="text-[10px] tracking-[0.25em] text-brand-accent uppercase font-medium">
                  Painting & Decorating
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional painting, decorating and general renovation services for residential and commercial properties across London.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-brand-accent border border-brand-accent/20">
                <MapPin className="w-3.5 h-3.5" />
                Serving All London Boroughs
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4 tracking-wide border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Contact & Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4 tracking-wide border-b border-white/10 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#interior-painting" className="hover:text-brand-accent transition-colors">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link to="/services#exterior-painting" className="hover:text-brand-accent transition-colors">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link to="/services#residential-decorating" className="hover:text-brand-accent transition-colors">
                  Residential Decorating
                </Link>
              </li>
              <li>
                <Link to="/services#commercial-decorating" className="hover:text-brand-accent transition-colors">
                  Commercial Decorating
                </Link>
              </li>
              <li>
                <Link to="/services#surface-preparation" className="hover:text-brand-accent transition-colors">
                  Surface Preparation
                </Link>
              </li>
              <li>
                <Link to="/services#general-renovations" className="hover:text-brand-accent transition-colors">
                  General Renovations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4 tracking-wide border-b border-white/10 pb-2">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-sm">
              <a
                href="https://wa.me/447833779462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 group"
              >
                <div className="w-8 h-8 rounded bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">WhatsApp & Phone</span>
                  <span className="font-medium text-brand-accent group-hover:underline flex items-center gap-1">
                    +44 7833 779462
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                <span>London, United Kingdom</span>
              </div>

              <div className="text-xs text-gray-400 italic pt-1">
                Instagram coming soon
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Dias Painting & Decorating. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-brand-accent transition-colors">
              Cookie Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-brand-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
