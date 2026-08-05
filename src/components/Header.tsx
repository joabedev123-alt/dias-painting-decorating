import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10 text-white'
          : 'bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-sm p-1"
            aria-label="Dias Painting & Decorating Home"
          >
            <img 
              src="/logo.jpeg" 
              alt="Dias Painting & Decorating Logo" 
              className="h-10 sm:h-12 w-auto object-contain rounded-sm shadow-md group-hover:scale-105 transition-transform bg-white/10 p-0.5"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                DIAS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-accent uppercase font-medium">
                Painting & Decorating
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 lg:px-4 py-2 text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-brand-accent font-semibold'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-accent rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-5 py-2.5 rounded-sm font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-border-dark px-4 pt-4 pb-6 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-sm text-base font-medium transition-colors flex items-center justify-between ${
                  isActive(link.path)
                    ? 'bg-white/10 text-brand-accent font-semibold border-l-4 border-brand-accent'
                    : 'text-gray-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-5 py-3 rounded-sm font-medium text-base shadow-md flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/447833779462"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-sm font-medium text-base shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: +44 7833 779462</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
