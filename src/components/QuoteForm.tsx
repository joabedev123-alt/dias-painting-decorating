import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Send, CheckCircle2, AlertCircle, Camera, ShieldCheck } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: '',
    propertyType: 'House',
    serviceRequired: 'Interior Painting',
    timeframe: 'Within 2 weeks',
    details: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.area.trim()) newErrors.area = 'Postcode or area in London is required.';
    if (!formData.consent) newErrors.consent = 'You must agree to the processing of your details.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Construct structured WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = `*New Quote Request - Dias Painting & Decorating*
----------------------------------------
*Name:* ${formData.fullName || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Area / Postcode:* ${formData.area || 'London'}
*Property Type:* ${formData.propertyType}
*Service Required:* ${formData.serviceRequired}
*Timeframe:* ${formData.timeframe}
*Details:* ${formData.details || 'No additional details provided.'}
----------------------------------------
Hello! I would like to request a quote.`;

    return `https://wa.me/447833779462?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-md p-6 sm:p-10 shadow-2xl border border-brand-border">
      
      {isSubmitted ? (
        <div className="text-center py-10 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
            Thank You for Your Request
          </h3>
          <p className="text-gray-600 text-base max-w-lg mx-auto mb-8">
            Your quotation details have been prepared. We review every London enquiry promptly and will be in touch shortly.
          </p>
          
          <div className="p-6 bg-brand-light rounded border border-brand-border max-w-md mx-auto mb-6 text-left">
            <h4 className="text-sm font-semibold text-brand-dark mb-2 flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
              Instant WhatsApp Option:
            </h4>
            <p className="text-xs text-gray-600 mb-4">
              Would you like an immediate response or want to send photos of your property right away?
            </p>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded text-sm flex items-center justify-center gap-2 shadow transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Send This Request Directly to WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                area: '',
                propertyType: 'House',
                serviceRequired: 'Interior Painting',
                timeframe: 'Within 2 weeks',
                details: '',
                consent: false,
              });
            }}
            className="text-xs text-gray-500 hover:text-brand-dark underline"
          >
            Submit another quotation request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="font-serif text-2xl font-bold text-brand-dark">Request a Free Quote</h3>
            <p className="text-xs text-gray-500 mt-1">
              Complete the form below to receive a personalised estimate for your London property.
            </p>
          </div>

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. James Smith"
                className={`w-full px-4 py-3 rounded text-sm bg-brand-light border ${
                  errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-accent'
                } transition-colors focus:outline-none`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. james@example.co.uk"
                className={`w-full px-4 py-3 rounded text-sm bg-brand-light border ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-accent'
                } transition-colors focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Postcode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 07123 456789"
                className={`w-full px-4 py-3 rounded text-sm bg-brand-light border ${
                  errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-accent'
                } transition-colors focus:outline-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="area" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Postcode or Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="area"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                placeholder="e.g. SW1, Kensington, Richmond"
                className={`w-full px-4 py-3 rounded text-sm bg-brand-light border ${
                  errors.area ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-brand-accent'
                } transition-colors focus:outline-none`}
              />
              {errors.area && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.area}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Property Type & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="propertyType" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Property Type
              </label>
              <select
                id="propertyType"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full px-4 py-3 rounded text-sm bg-brand-light border border-gray-300 focus:border-brand-accent transition-colors focus:outline-none"
              >
                <option value="House">House</option>
                <option value="Flat">Flat</option>
                <option value="Commercial Property">Commercial Property</option>
                <option value="Rental Property">Rental Property</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                Service Required
              </label>
              <select
                id="serviceRequired"
                value={formData.serviceRequired}
                onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                className="w-full px-4 py-3 rounded text-sm bg-brand-light border border-gray-300 focus:border-brand-accent transition-colors focus:outline-none"
              >
                <option value="Interior Painting">Interior Painting</option>
                <option value="Exterior Painting">Exterior Painting</option>
                <option value="Residential Decorating">Residential Decorating</option>
                <option value="Commercial Decorating">Commercial Decorating</option>
                <option value="General Renovation">General Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 4: Preferred Timeframe */}
          <div>
            <label htmlFor="timeframe" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
              Preferred Timeframe
            </label>
            <select
              id="timeframe"
              value={formData.timeframe}
              onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
              className="w-full px-4 py-3 rounded text-sm bg-brand-light border border-gray-300 focus:border-brand-accent transition-colors focus:outline-none"
            >
              <option value="ASAP">ASAP (Urgent)</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Planning stage">Planning stage / Future</option>
            </select>
          </div>

          {/* Row 5: Project Details */}
          <div>
            <label htmlFor="details" className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
              Project Details & Requirements
            </label>
            <textarea
              id="details"
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Describe the rooms, surfaces, or specific work required..."
              className="w-full px-4 py-3 rounded text-sm bg-brand-light border border-gray-300 focus:border-brand-accent transition-colors focus:outline-none"
            />
          </div>

          {/* Photo Upload Notice */}
          <div className="p-4 bg-emerald-50 rounded border border-emerald-200 flex items-start gap-3">
            <Camera className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-800 leading-relaxed">
              <span className="font-semibold block mb-0.5">Have property photos ready?</span>
              You can send photographs directly via WhatsApp for a faster initial quote evaluation.
            </div>
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 text-brand-accent rounded border-gray-300 focus:ring-brand-accent"
              />
              <span className="text-xs text-gray-600 leading-relaxed">
                I agree to Dias Painting & Decorating processing my submitted details to provide a quotation for my project in London.
              </span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.consent}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-brand-dark hover:bg-black text-white font-medium px-8 py-3.5 rounded text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Request My Quote</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded text-sm flex items-center justify-center gap-2 shadow transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Or Send via WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-2 border-t border-gray-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Your information is strictly protected and used solely to prepare your quote.</span>
          </div>

        </form>
      )}

    </div>
  );
};
