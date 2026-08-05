import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { PrivacyPolicy, CookiePolicy, TermsConditions } from './pages/Legal';

// Helper component to scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-accent selection:text-brand-dark">
        {/* Persistent Sticky / Transparent Header */}
        <Header />

        {/* Main Page Routing */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
