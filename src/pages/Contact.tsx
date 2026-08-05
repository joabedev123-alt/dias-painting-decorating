import React from 'react';
import { PageHero } from '../components/PageHero';
import { QuoteForm } from '../components/QuoteForm';
import { MessageCircle, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      
      {/* Internal Hero */}
      <PageHero
        title="Request a Free Quote"
        description="Tell us about your painting, decorating or renovation project and we will contact you to discuss the details."
        currentPage="Contact"
      />

      {/* Main Content */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

            {/* Right Column: Direct Info & Map Visual */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* Contact Card */}
              <div className="bg-brand-dark text-white p-8 rounded-md shadow-xl border border-brand-border-dark">
                <h3 className="font-serif text-2xl font-bold mb-6 text-white border-b border-white/10 pb-3">
                  Direct Contact
                </h3>

                <div className="space-y-6">
                  
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/447833779462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                  >
                    <div className="w-10 h-10 rounded bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">
                        WhatsApp & Phone
                      </span>
                      <span className="text-lg font-bold text-brand-accent group-hover:underline">
                        +44 7833 779462
                      </span>
                      <span className="text-xs text-emerald-400 block mt-1">
                        Click for instant chat & photo submission
                      </span>
                    </div>
                  </a>

                  {/* Service Area */}
                  <div className="flex items-start gap-4 p-4 rounded bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">
                        Service Area
                      </span>
                      <span className="text-base font-semibold text-white">
                        London, United Kingdom
                      </span>
                      <span className="text-xs text-gray-400 block mt-1">
                        Residential & commercial properties
                      </span>
                    </div>
                  </div>

                  {/* Instagram notice */}
                  <div className="p-4 rounded bg-white/5 border border-white/10 text-xs text-gray-400">
                    <span className="font-semibold text-gray-300 block mb-1">Instagram:</span>
                    Official gallery profile coming soon.
                  </div>

                </div>
              </div>

              {/* Stylized London Map Visual Graphic */}
              <div className="bg-brand-cream p-8 rounded-md border border-brand-border text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-accent flex items-center justify-center mx-auto mb-3 shadow">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">
                  Serving London Boroughs
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                  From Kensington and Chelsea to Hampstead, Richmond, Fulham, Islington, and central London.
                </p>
                <div className="mt-4 pt-4 border-t border-brand-border text-[11px] font-medium text-brand-accent uppercase tracking-widest">
                  Quality • Reliability • Attention to Detail
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
