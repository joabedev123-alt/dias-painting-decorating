import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  currentPage: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = "Dias Painting & Decorating London",
  title,
  description,
  currentPage,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-brand-dark text-white overflow-hidden border-b border-brand-border-dark">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs font-medium text-gray-400">
            <li>
              <Link to="/" className="hover:text-brand-accent transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-600" />
              <span className="text-brand-accent">{currentPage}</span>
            </li>
          </ol>
        </nav>

        {/* Hero Copy */}
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-3">
              {eyebrow}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
};
