import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20property.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip visible on hover or default subtle display */}
      <div 
        className={`hidden sm:flex items-center bg-brand-dark text-white text-xs font-medium px-3.5 py-2 rounded-md shadow-lg border border-white/10 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Chat with us on WhatsApp</span>
        <div className="w-2 h-2 bg-brand-dark rotate-45 -mr-4 ml-1 border-r border-t border-white/10"></div>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300 animate-pulse-subtle group"
        aria-label="Chat with Dias Painting & Decorating on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
