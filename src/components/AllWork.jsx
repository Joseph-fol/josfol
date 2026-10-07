import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { ProductVisual, projects } from './Work';
import graphic1 from '../assets/graphics/graphic1.jpg';
import graphic2 from '../assets/graphics/graphic2.jpg';
import graphic3 from '../assets/graphics/graphic3.jpg';

import graphic4 from '../assets/graphics/graphic4.jpg';
import graphic5 from '../assets/graphics/graphic5.jpg';
import graphic6 from '../assets/graphics/graphic6.jpg';

import ScrollReveal from './ScrollReveal';

const graphicWorks = [
  {
    title: 'Brand identity explorations',
    category: 'BRANDING / IDENTITY',
    description: 'Visual identity directions, logo studies, and brand systems for growing businesses.',
    accent: 'orange',
    image: graphic1,
  },
  {
    title: 'media campaigns',
    category: 'CAMPAIGN DESIGN',
    description: 'Bold social graphics designed to make announcements and offers impossible to miss.',
    accent: 'blue',
    image: graphic2,
  },
  {
    title: 'Marketing materials',
    category: 'PRINT / DIGITAL',
    description: 'Clean promotional layouts for flyers, event materials, and digital campaigns.',
    accent: 'green',
    image: graphic3,
  },

  // Row two
  {
    title: 'Brand identity explorations',
    category: 'BRANDING / IDENTITY',
    description: 'Visual identity directions, logo studies, and brand systems for growing businesses.',
    accent: 'orange',
    image: graphic4,
  },
  {
    title: 'media campaigns',
    category: 'CAMPAIGN DESIGN',
    description: 'Bold social graphics designed to make announcements and offers impossible to miss.',
    accent: 'blue',
    image: graphic5,
  },
  {
    title: 'Marketing materials',
    category: 'PRINT / DIGITAL',
    description: 'Clean promotional layouts for flyers, event materials, and digital campaigns.',
    accent: 'green',
    image: graphic6,
  },
];

function GraphicVisual({ work }) {
  if (work.image) {
    return <img className="graphic-image" src={work.image} alt={`${work.title} preview`} />;
  }

  return (
    <div className={`graphic-placeholder graphic-placeholder-${work.accent}`} aria-label={`${work.title} placeholder`}>
      <span>YOUR DESIGN IMAGE</span>
      <strong>{work.title}</strong>
      <i />
    </div>
  );
}

export default function AllWork() {
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    if (!selectedWork) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedWork(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedWork]);

  return (
    <div className="all-work-page">
      <header className="all-work-header">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <a href="/" className="all-work-back"><ArrowLeft size={16} /> Back to home</a>
          <div className="section-kicker">02 — SELECTED WORK</div>
          <h1>Everything I&apos;ve built.</h1>
          <p>Production systems, digital experiences, and visual work crafted with intention.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 all-work-content">
        <section className="all-work-section">
          <div className="all-work-section-heading">
            <div>
              <span className="section-kicker">01 — WEB DEVELOPMENT</span>
              <h2>Websites that do the work.</h2>
            </div>
            <span className="all-work-count">{projects.length} projects</span>
          </div>
          <div className="work-grid">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 70}>
                <article className={`work-card work-card-${project.accent}`}>
                <ProductVisual
                  type={project.visual}
                  accent={project.accent}
                  image={project.image}
                  title={project.title}
                  onImageClick={() => setSelectedWork(project)}
                />
                <div className="work-card-body">
                  <div className="work-card-meta">
                    <span>{project.number} / {project.category}</span>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="work-card-footer">
                    <div className="work-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="work-link">
                      <span>{project.displayUrl}</span><ExternalLink size={13} />
                    </a>
                  </div>
                </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="all-work-section graphic-section">
          <div className="all-work-section-heading">
            <div>
              <span className="section-kicker">02 — GRAPHIC DESIGN</span>
              <h2>Ideas, made visual.</h2>
            </div>
            <span className="all-work-count">Design archive</span>
          </div>
          <div className="graphic-grid">
            {graphicWorks.map((work, index) => (
              <ScrollReveal key={work.title} delay={index * 90}>
                <article className="graphic-card">
                  <button
                    type="button"
                    className="graphic-image-button"
                    onClick={work.image ? () => setSelectedWork(work) : undefined}
                    disabled={!work.image}
                    aria-label={`View ${work.title} image`}
                  >
                    <GraphicVisual work={work} />
                  </button>
                  <div className="graphic-card-body">
                    <span>{work.category}</span>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      {selectedWork && (
        <div
          className="work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-lightbox-title"
          onClick={() => setSelectedWork(null)}
        >
          <div className="work-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="work-lightbox-close"
              onClick={() => setSelectedWork(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <img
              src={selectedWork.image}
              alt={`${selectedWork.title} full preview`}
              className="work-lightbox-image"
            />
            <div className="work-lightbox-details">
              <span>{selectedWork.category}</span>
              <h2 id="work-lightbox-title">{selectedWork.title}</h2>
              <p>{selectedWork.description}</p>
              {selectedWork.liveUrl ? (
                <a
                  href={selectedWork.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-lightbox-cta"
                >
                  View live project <ArrowUpRight size={16} />
                </a>
              ) : (
                <a href="mailto:olawoyinjoseph05@gmail.com" className="work-lightbox-cta">
                  Start a similar project <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

    <Footer/>
  
}
