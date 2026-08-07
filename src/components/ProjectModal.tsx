import React, { useEffect, useState } from 'react';
import { X, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Project } from '../data/projectsData';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setSelectedImage(project.imageUrl);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Dias Painting & Decorating, I am interested in a project similar to "${project.title}" (${project.location}). Could you provide a quote for my property?`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-brand-dark/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-md shadow-2xl overflow-y-auto border border-brand-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark/70 hover:bg-brand-dark text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Image & Gallery */}
          <div className="lg:col-span-7 bg-brand-dark flex flex-col justify-between p-4 sm:p-6">
            <div className="relative aspect-video sm:aspect-4/3 w-full overflow-hidden rounded shadow-lg border border-white/10">
              <img 
                src={selectedImage || project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-brand-accent text-brand-dark text-xs font-semibold px-3 py-1 rounded">
                {project.category}
              </div>
            </div>

            {/* Gallery thumbnails */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-14 rounded overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImage === img ? 'border-brand-accent scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Project Information */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </div>

              <h2 id="project-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Scope of Work list */}
              {project.workDone && project.workDone.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                    Work Completed
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {project.workDone.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
              <a
                href={`https://wa.me/447833779462?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded font-medium text-sm flex items-center justify-center gap-2 shadow transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Enquire About Similar Project</span>
              </a>

              <Link
                to="/contact"
                onClick={onClose}
                className="w-full bg-brand-dark hover:bg-black text-white py-2.5 px-4 rounded font-medium text-sm flex items-center justify-center gap-2 shadow transition-colors text-center"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
