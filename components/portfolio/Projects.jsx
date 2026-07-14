'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Layers, Maximize2, X } from 'lucide-react';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('Tous');
  const [lightbox, setLightbox] = useState(null);

  const categories = ['Tous', ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  // Fermeture au clavier (Échap) + blocage du scroll quand la lightbox est ouverte
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="projects" className="py-28 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs text-accent tracking-[0.3em] uppercase font-mono">
          03 &mdash; Portfolio
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 mb-6">
          Projets sélectionnés
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === cat
                  ? 'border-accent/40 bg-accent/10 text-accent'
                  : 'border-dark-600 text-dark-300 hover:border-dark-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setLightbox(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-dark-400 text-sm">
            Aucun projet dans cette catégorie.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-dark-950/90 backdrop-blur-sm dash-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu du projet ${lightbox.title}`}
        >
          <button
            className="fixed top-5 right-5 z-10 w-10 h-10 rounded-lg bg-dark-800/80 border border-dark-700 flex items-center justify-center text-dark-200 hover:text-accent hover:border-accent/30 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={18} />
          </button>

          {/* Wrapper scrollable : centré si l'image tient, entièrement défilable sinon */}
          <div className="flex min-h-screen items-center justify-center px-4 py-16">
            <figure
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.imageFull || lightbox.image}
                alt={lightbox.title}
                className="w-auto max-w-full sm:max-w-2xl rounded-lg shadow-2xl"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-white font-display font-semibold">
                  {lightbox.title}
                </span>
                <span className="text-dark-400 text-sm ml-2">
                  {lightbox.category} &middot; {lightbox.year}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !imgError && project.image;

  return (
    <div className="group relative bg-dark-800/40 border border-dark-700/50 rounded-xl overflow-hidden hover:border-accent/15 transition-all duration-300">
      {/* Image (cliquable pour agrandir) */}
      <button
        type="button"
        onClick={hasImage ? onOpen : undefined}
        aria-label={hasImage ? `Agrandir l'image de ${project.title}` : undefined}
        className={`block w-full aspect-[16/10] overflow-hidden bg-dark-800 relative ${
          hasImage ? 'cursor-zoom-in' : 'cursor-default'
        }`}
      >
        {hasImage ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
              onError={() => setImgError(true)}
            />
            {/* Overlay zoom au survol */}
            <span className="absolute inset-0 flex items-center justify-center bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-11 h-11 rounded-full bg-dark-900/80 border border-white/15 flex items-center justify-center text-white">
                <Maximize2 size={18} />
              </span>
            </span>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center project-img-placeholder">
            <Layers size={32} className="text-dark-500" />
          </div>
        )}
      </button>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[0.65rem] text-accent tracking-widest uppercase font-mono">
            {project.category}
          </span>
          <span className="text-[0.65rem] text-dark-400 font-mono">
            {project.year}
          </span>
        </div>
        <h3 className="font-display font-semibold text-white text-lg mb-2 flex items-center gap-2">
          {project.title}
          <ArrowUpRight
            size={14}
            className="text-dark-400 group-hover:text-accent transition-colors duration-200"
          />
        </h3>
        <p className="text-sm text-dark-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
}
