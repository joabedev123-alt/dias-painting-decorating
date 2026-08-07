import React from 'react';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Eye, 
  MessageSquare, 
  Award, 
  ArrowRight, 
  Users
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="animate-fade-in">
      
      {/* Internal Hero */}
      <PageHero
        title="About Dias Painting & Decorating"
        description="Professional painting, decorating and renovation services focused on quality, care and meticulous attention to detail."
        currentPage="About Us"
      />

      {/* Institutional Story */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Our History & Commitment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                A family-run painting company built on reliability and quality craftsmanship.
              </h2>

              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  We are a dedicated family-run painting and decorating business delivering high-quality craftsmanship and exceptional customer service across London.
                </p>
                <p>
                  Specialising in both residential and commercial decorating, we provide professional interior and exterior painting with careful attention to every detail. Our objective is to protect and enhance your property, ensuring a smooth, long-lasting finish.
                </p>
                <p>
                  Built on honesty, trust and family values, we take pride in treating every property as if it were our own. From initial site evaluation to the final coat of paint, we are committed to exceeding your expectations.
                </p>
                <p>
                  Your complete satisfaction is our priority, and our reputation is built one satisfied client at a time.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-md overflow-hidden shadow-2xl border border-brand-border">
                <img 
                  src="/Fotos 02/WhatsApp Image 2026-08-05 at 19.20.19.jpeg" 
                  alt="Dias Painting & Decorating - Professional work" 
                  className="w-full h-auto block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission */}
          <div className="bg-brand-dark text-white p-8 sm:p-12 rounded-md mb-16 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                To transform residential and commercial spaces through thorough surface preparation, dependable service and superior decorating finishes.
              </h3>
            </div>
          </div>

          {/* Values Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              What Drives Us
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Uncompromising Quality</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                High standards of application in every coat, crisp paint edge and finished surface we deliver.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <CheckCircle2 className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Reliability</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Punctual start times, clear schedules and dependable execution from start to finish.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Heart className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Respect</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Treating your home, furnishings, personal items and routine with utmost care.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Eye className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Attention to Detail</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focusing on precise corner cutting, smooth sanding and clean protective masking.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <MessageSquare className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Clear Communication</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Keeping you informed at every stage of the project with honest, transparent updates.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border border-brand-border hover:border-brand-accent transition-colors">
              <Award className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">Professional Standards</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clean working environments, professional equipment and proper safety procedures.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Our Systematic Approach */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-2">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Our Professional Approach
            </h2>
            <p className="text-gray-600 text-base">
              A structured step-by-step process that ensures consistent, high-quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 1</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Initial Assessment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Thorough evaluation of the property, surface conditions, substrate health and client requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 2</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Site Protection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protecting floors, furniture, fixtures and surrounding areas with dust sheets and masking tape.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 3</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Surface Preparation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Scraping, crack filling, fine sanding and applying stain-blocking primers.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 4</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Material Selection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Using premium trade paints suitable for specific environments (anti-mould for wet areas, durable eggshell for high-traffic zones).
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 5</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Orderly Execution</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Systematic application of base coats, undercoats and topcoats with optimal drying intervals.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 6</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Clean-up & Restore</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Removing protective coverings, vacuuming fine dust and restoring furniture to original placements.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-brand-border col-span-1 md:col-span-2 lg:col-span-2">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">Step 7</span>
              <h4 className="font-serif font-bold text-base text-brand-dark mb-2">Final Inspection & Review</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Detailed walk-through with the client to verify every wall, trim and edge meets our exacting standards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Structured Placeholder for Future Team Photography */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-md bg-brand-light border border-dashed border-gray-300">
            <Users className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Our Team of Professionals</h3>
            <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
              We take pride in our experienced decorating team serving London. Official team photographs will be updated here shortly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Let's Discuss Your Project</h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Ready to give your property a professional finish? Contact us today for an initial consultation or estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

