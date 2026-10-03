import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import aboutPortrait from '../assets/about-portrait.png';

export default function About() {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="1200" className="py-20 md:py-28 bg-[#F7F4EE] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header with Social Links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-3">
              07 — MEMOIR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416]">
              The engineer behind the work
            </h2>
          </div>

          {/* External Profile Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="https://github.com/olawoyinjoseph05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#5A554E] hover:text-[#C45738] transition-colors border-b border-transparent hover:border-[#C45738] pb-0.5"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href="https://dev.to/olawoyinjoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#5A554E] hover:text-[#C45738] transition-colors border-b border-transparent hover:border-[#C45738] pb-0.5"
            >
              <span>DEV.to</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href="mailto:olawoyinjoseph05@gmail.com"
              className="inline-flex items-center gap-1 text-[#5A554E] hover:text-[#C45738] transition-colors border-b border-transparent hover:border-[#C45738] pb-0.5"
            >
              <span>Email</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* 2-Column Layout: Story & Framed Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Memoir Text */}
          <div className="lg:col-span-7 space-y-6 text-[#4F4B45] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I'm <strong className="text-[#141416] font-semibold">Olawoyin Joseph</strong>, a full-stack software engineer based in Ogbomoso, Oyo State, Nigeria. My background spans web application development, RESTful API design, and hardware systems, trained through SQI College of ICT's Software Engineering program and currently deepening that foundation through a Bachelor of Technology in Computer Engineering at Ladoke Akintola University of Technology.
            </p>

            <p>
              I build primarily on the MERN stack, Next.js, GraphQL, TypeScript and JavaScript , with a focus on shipping clean, maintainable code that solves real operational problems. In 2026, I engineered and deployed two full production systems: an Online CBT SaaS platform for educational institutions and a Digital Manual Distribution System (DMDAS) for campus procurement. Both went live, both handle real traffic.
            </p>

            <p>
              Beyond the web, I've written an engineering proposal for a decentralized solar-powered water distribution network using GIS mapping, published technical project walkthroughs on DEV.to, and earned an AI Bootcamp certification from CEPHAS ICT HUB. I'm drawn to the kinds of problems where software actually changes how an organization operates, not just how it looks.
            </p>

            <p className="pt-2 text-[#242220] font-medium italic">
              If you're building something that needs to work reliably in the real world, I'd like to help you build it right.
            </p>
          </div>

          {/* Right Column: Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div data-aos="zoom-in-left" data-aos-delay="150" className="relative p-2 max-w-[340px] sm:max-w-[380px]">
              <img
                src={aboutPortrait}
                alt="Olawoyin Joseph in suit"
                className="w-full h-auto object-cover rounded-sm shadow-sm select-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
