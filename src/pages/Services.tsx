import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Paintbrush, 
  Home as HomeIcon, 
  Sparkles, 
  Building2, 
  Layers, 
  Wrench,
  Camera
} from 'lucide-react';

export const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush': return <Paintbrush className="w-8 h-8 text-brand-accent" />;
      case 'Home': return <HomeIcon className="w-8 h-8 text-brand-accent" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-brand-accent" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-brand-accent" />;
      case 'Layers': return <Layers className="w-8 h-8 text-brand-accent" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-brand-accent" />;
      default: return <Paintbrush className="w-8 h-8 text-brand-accent" />;
    }
  };

  return (
    <div className="animate-fade-in">
      
      {/* Internal Hero */}
      <PageHero
        title="Professional Painting, Decorating and Renovation Services"
        description="Practical and professional solutions for residential and commercial properties throughout London."
        currentPage="Services"
      />

      {/* Services List */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                id={service.id} 
                className="scroll-mt-32 bg-white rounded-md p-8 sm:p-12 border border-brand-border shadow-lg"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Details */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-brand-dark rounded-sm">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-light">
                      {service.fullDesc}
                    </p>

                    {/* Features list */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-4">
                        Key Features & Scope
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 rounded text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-2"
                      >
                        <span>Request Quote for {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-brand-accent" />
                      </Link>

                      <a
                        href={`https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Discuss on WhatsApp</span>
                      </a>
                    </div>

                  </div>

                  {/* Service Image */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded overflow-hidden shadow-xl border border-brand-border aspect-4/3">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* WhatsApp Interstitial Helper CTA */}
      <section className="py-16 bg-brand-dark text-white border-y border-brand-border-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
            <Camera className="w-6 h-6" />
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Send us photographs and details of your property through WhatsApp and our team will help you understand the next steps.
          </p>

          <a
            href="https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20have%20photos%20of%20my%20property%20and%20would%20like%20to%20discuss%20the%20required%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded font-semibold text-sm transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss Your Project</span>
          </a>
        </div>
      </section>

    </div>
  );
};
