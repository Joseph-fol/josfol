import React from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProductVisual, projects } from './Work';

const graphicWorks = [
  {
    title: 'Brand identity explorations',
    category: 'BRANDING / IDENTITY',
    description: 'Visual identity directions, logo studies, and brand systems for growing businesses.',
    accent: 'orange',
    image: null,
  },
  {
    title: 'Social media campaigns',
    category: 'CAMPAIGN DESIGN',
    description: 'Bold social graphics designed to make announcements and offers impossible to miss.',
    accent: 'blue',
    image: null,
  },
  {
    title: 'Marketing materials',
    category: 'PRINT / DIGITAL',
    description: 'Clean promotional layouts for flyers, event materials, and digital campaigns.',
    accent: 'green',
    image: null,
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
            {projects.map((project) => (
              <article key={project.title} className={`work-card work-card-${project.accent}`}>
                <ProductVisual
                  type={project.visual}
                  accent={project.accent}
                  image={project.image}
                  title={project.title}
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
            {graphicWorks.map((work) => (
              <article key={work.title} className="graphic-card">
                <GraphicVisual work={work} />
                <div className="graphic-card-body">
                  <span>{work.category}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
