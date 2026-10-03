import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    category: 'EDTECH / SAAS',
    title: 'Online CBT SaaS Platform',
    description: 'A real-time examination platform built for reliable, concurrent sessions and zero grade-processing errors.',
    stack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://onlinecbt.vercel.app',
    displayUrl: 'onlinecbt.vercel.app',
    image: null,
    accent: 'orange',
    visual: 'exam',
  },
  {
    number: '02',
    category: 'PROCUREMENT / EDTECH',
    title: 'DMDAS',
    description: 'A digital manual distribution system that replaces campus queues with trackable, verified fulfillment.',
    stack: ['Next.js', 'Express', 'MongoDB'],
    liveUrl: 'https://dmdas.com.ng',
    displayUrl: 'dmdas.com.ng',
    image: null,
    accent: 'blue',
    visual: 'inventory',
  },
  {
    number: '03',
    category: 'LOCAL BUSINESS / F&B',
    title: 'Local Business Web Solutions',
    description: 'Fast, mobile-first storefronts that turn local discovery into simple, direct WhatsApp orders.',
    stack: ['React', 'Tailwind', 'SEO'],
    liveUrl: 'https://nimibakery.vercel.app',
    displayUrl: 'nimibakery.vercel.app',
    image: null,
    accent: 'green',
    visual: 'orders',
  },

  {
    number: '04',
    category: 'LMS',
    title: 'School Website',
    description: 'A Fast, mobile-first storefronts that turn local discovery into simple, direct WhatsApp orders.',
    stack: ['React', 'Tailwind', 'SEO'],
    liveUrl: 'https://nimibakery.vercel.app',
    displayUrl: 'nimibakery.vercel.app',
    image: null,
    accent: 'green',
    visual: 'orders',
  },
];

function ProductVisual({ type, accent, image, title }) {
  if (image) {
    return (
      <div className={`work-visual work-visual-${accent} work-visual-image`}>
        <img src={image} alt={`${title} preview`} />
        <span className="work-visual-label">PROJECT PREVIEW</span>
      </div>
    );
  }

  return (
    <div className={`work-visual work-visual-${accent}`} aria-hidden="true">
      <div className="work-visual-grid" />
      <div className="work-window">
        <div className="work-window-bar">
          <span />
          <span />
          <span />
          <b>{type === 'exam' ? 'exam / dashboard' : type === 'inventory' ? 'dmdas / inventory' : 'orders / today'}</b>
        </div>
        {type === 'exam' && (
          <div className="work-exam-screen">
            <div className="work-mini-sidebar">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="work-screen-content">
              <div className="work-screen-heading">
                <strong>Mathematics CBT</strong>
                <em>01:24:08</em>
              </div>
              <div className="work-question">
                <span>Question 14 of 40</span>
                <strong>Which value completes the sequence?</strong>
                <div className="work-options"><i /><i /><i /></div>
              </div>
            </div>
          </div>
        )}
        {type === 'inventory' && (
          <div className="work-inventory-screen">
            <div className="work-screen-heading"><strong>Distribution overview</strong><em>+ Add item</em></div>
            <div className="work-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="work-data-lines"><i /><i /><i /></div>
          </div>
        )}
        {type === 'orders' && (
          <div className="work-orders-screen">
            <div className="work-screen-heading"><strong>Good morning, Nimi</strong><em>•••</em></div>
            <div className="work-order-feature"><span>Fresh from the oven</span><strong>Today's picks</strong></div>
            <div className="work-food-cards"><i /><i /><i /></div>
          </div>
        )}
      </div>
      <div className="work-orbit work-orbit-one" />
      <div className="work-orbit work-orbit-two" />
      <span className="work-visual-label">{accent === 'orange' ? 'LIVE SYSTEM' : accent === 'blue' ? 'IN PROGRESS' : 'SHIPPED'}</span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="work-section py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="work-heading-row" data-aos="fade-up">
          <div>
            <div className="section-kicker">02 — SPOTLIGHT</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416]">
              From the codebase
            </h2>
          </div>
          <p className="work-heading-note">
            A few systems I&apos;ve designed, built, and shipped into the real world.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`work-card work-card-${project.accent}`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <ProductVisual
                type={project.visual}
                accent={project.accent}
                image={project.image}
                title={project.title}
              />
              <div className="work-card-body">
                <div className="work-card-meta">
                  <span>{project.number} / {project.category}</span>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-card-footer">
                  <div className="work-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="work-link">
                    <span>{project.displayUrl}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-bottom-line" data-aos="fade-up">
          <span>More experiments, shipped every month.</span>
          <span className="work-pulse"><i /> Available for a new build</span>
        </div>
      </div>
    </section>
  );
}
