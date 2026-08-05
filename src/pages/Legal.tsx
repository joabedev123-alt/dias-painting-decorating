import React from 'react';
import { PageHero } from '../components/PageHero';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHero
        title="Privacy Policy"
        description="How Dias Painting & Decorating handles and protects your personal information."
        currentPage="Privacy Policy"
      />
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded border border-brand-border space-y-6 text-gray-700 text-sm leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-brand-dark">1. Overview</h2>
          <p>
            Dias Painting & Decorating respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and store your details when you request a quotation or contact us regarding our painting and decorating services in London.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">2. Information We Collect</h2>
          <p>
            When submitting an enquiry or quotation request through our website or direct contact channels, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full Name</li>
            <li>Contact Information (Email address and phone number)</li>
            <li>Property Location (Postcode or London borough area)</li>
            <li>Project specifics and photographs submitted voluntarily</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">3. How We Use Your Data</h2>
          <p>
            We use your information strictly to prepare quotations, communicate project details, schedule site visits, and execute agreed painting, decorating, or renovation work. We do not sell or rent your personal data to third parties.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">4. Your Rights</h2>
          <p>
            Under UK data protection regulations (UK GDPR), you have the right to request access to, correction of, or deletion of your personal data held by us at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export const CookiePolicy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHero
        title="Cookie Policy"
        description="Information regarding the use of cookies on the Dias Painting & Decorating website."
        currentPage="Cookie Policy"
      />
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded border border-brand-border space-y-6 text-gray-700 text-sm leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-brand-dark">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your browser or device when you visit websites. They help enhance navigation, remember preferences, and ensure optimal site functionality.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">2. How We Use Cookies</h2>
          <p>
            Our website uses minimal essential cookies to maintain user session states, improve page rendering performance, and gather aggregated, non-identifiable usage statistics.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">3. Managing Cookies</h2>
          <p>
            You can configure your internet browser settings to decline or clear cookies at any time. Please note that disabling cookies may affect certain visual features or interactive functions of the website.
          </p>
        </div>
      </section>
    </div>
  );
};

export const TermsConditions: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHero
        title="Terms and Conditions"
        description="Terms governing the use of the Dias Painting & Decorating website."
        currentPage="Terms & Conditions"
      />
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded border border-brand-border space-y-6 text-gray-700 text-sm leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-brand-dark">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using the site.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">2. Quotations and Service Scope</h2>
          <p>
            Quotations provided through initial website submissions or WhatsApp chats are estimates subject to final site inspection and specification approval. All painting, decorating, and renovation agreements will be formalised prior to work commencement.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-dark">3. Intellectual Property</h2>
          <p>
            All content, visual presentation, logo representations, and text on this website are the property of Dias Painting & Decorating and protected under applicable copyright laws.
          </p>
        </div>
      </section>
    </div>
  );
};
