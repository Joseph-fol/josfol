import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import onlinecbt from '../assets/onlinecbt.png';
import dmdas from '../assets/dmdas.png';
import bakeryPreview from '../assets/nimibackery.png';
import excellenceacademy from '../assets/excellenceacademy.png';
import foodu from '../assets/foodu.png';
import tuitioncalculator from '../assets/tuitioncalculator.png';
import ScrollReveal from './ScrollReveal';

export const projects = [
  {
    number: '01',
    category: 'EDTECH / SAAS',
    title: 'Online CBT SaaS Platform',
    description: 'A real-time examination platform built for reliable, concurrent test sessions, timed state management, and zero grade-processing errors.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://onlinecbt.vercel.app',
    displayUrl: 'onlinecbt.vercel.app',
    image: onlinecbt,
    accent: 'orange',
    visual: 'exam',
  },
  {
    number: '02',
    category: 'PROCUREMENT / EDTECH',
    title: 'DMDAS',
    description: 'A digital manual distribution system replacing campus queue bottlenecks with trackable, verified student procurement and fulfillment.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://dmdas.com.ng',
    displayUrl: 'dmdas.com.ng',
    image: dmdas,
    accent: 'blue',
    visual: 'inventory',
  },
  {
    number: '03',
    category: 'LOCAL BUSINESS / F&B',
    title: 'Nimi Bakery Web Platform',
    description: 'A mobile-first catalog and storefront designed to turn local bakery discovery into direct WhatsApp customer orders.',
    stack: ['React', 'Tailwind CSS', 'SEO'],
    liveUrl: 'https://nimibakery.vercel.app',
    displayUrl: 'nimibakery.vercel.app',
    image: bakeryPreview,
    accent: 'amber',
    visual: 'storefront',
  },
  {
    number: '04',
    category: 'EDUCATION / INSTITUTIONAL',
    title: 'Excellence Academy Portal',
    description: 'An institutional web portal providing prospective students and parents with academic programs, admissions guidance, and campus announcements.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://excellence-academy-five.vercel.app',
    displayUrl: 'excellence-academy-five.vercel.app',
    image: excellenceacademy,
    accent: 'emerald',
    visual: 'campus',
  },
  {
    number: '05',
    category: 'RESTAURANT',
    title: 'Food-U (Pepper Soup King)',
    description: 'A responsive dining menu and contact portal highlighting kitchen specialties, location details, and direct takeaway ordering.',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
    liveUrl: 'https://food-u.vercel.app',
    displayUrl: 'food-u.vercel.app',
    image: foodu,
    accent: 'red',
    visual: 'menu',
  },
  {
    number: '06',
    category: 'FINTECH / UTILITY',
    title: 'Tuition Fee Calculator',
    description: 'A lightweight academic fee estimation tool computing dynamic departmental dues, faculty fees, and multi-tier institutional charges.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://tuitionfeecalculator.vercel.app',
    displayUrl: 'tuitionfeecalculator.vercel.app',
    image: tuitioncalculator,
    accent: 'purple',
    visual: 'calculator',
  },
];

// const navigate = useNavigate()

export function ProductVisual({ type, accent, image, title, onImageClick }) {
  if (image) {
    return (
      <div className={`work-visual work-visual-${accent} work-visual-image`}>
        <button
          type="button"
          className="work-image-button"
          onClick={onImageClick}
          disabled={!onImageClick}
          aria-label={`View ${title} image`}
        >
          <img src={image} alt={`${title} preview`} />
        </button>
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
  const navigateToWork = () => {
    window.location.assign('/work');
  };

  return (
    <section id="work" className="work-section py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="work-heading-row">
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

        <div className="work-bottom-line">
          <span className='text-sm'>More experiments, shipped every month.</span>
          <button type="button" onClick={navigateToWork} className="work-view-all">
            View all work <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="work-grid">
          {projects.slice(0, 5).map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 70}>
              <article
              className={`work-card work-card-${project.accent}`}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
