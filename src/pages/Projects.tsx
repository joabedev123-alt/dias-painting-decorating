import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/PageHero';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, MessageCircle } from 'lucide-react';

type CategoryFilter = 'All' | 'Interior' | 'Exterior' | 'Residential' | 'Commercial' | 'Renovation';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: CategoryFilter[] = [
    'All',
    'Interior',
    'Exterior',
    'Residential',
    'Commercial',
    'Renovation',
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="animate-fade-in">
      
      {/* Internal Hero */}
      <PageHero
        title="Our Painting and Decorating Projects"
        description="Explore a selection of spaces transformed through professional preparation, painting, decorating and renovation work across London."
        currentPage="Projects"
      />

      {/* Gallery Section */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-brand-dark text-white shadow-md border border-brand-accent'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-brand-border'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-border flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-brand-dark">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <span className="text-xs text-brand-accent font-semibold block mb-1">
                        {project.location}
                      </span>
                      <h4 className="font-serif text-lg font-bold">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-1 mt-1">
                        {project.summary}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-brand-accent font-medium mt-2">
                        <Eye className="w-3.5 h-3.5" />
                        Click to view full project gallery
                      </span>
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 bg-brand-dark/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>{project.location}</span>
                    <span className="font-semibold text-brand-dark uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded border border-brand-border">
              <p className="text-gray-500 text-sm">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Would You Like to Transform Your Property?
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto font-light">
            Share your ideas with our London team and get a comprehensive quotation for your painting and decorating project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/447833779462?text=Hello%20Dias%20Painting%20%26%20Decorating%2C%20I%20saw%20your%20projects%20and%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded font-semibold text-sm transition-all shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
};
