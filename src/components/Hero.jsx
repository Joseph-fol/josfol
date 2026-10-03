import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.png';

export default function Hero({ onOpenModal }) {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#F7F4EE] border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Bio & Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag / Numbering */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase">
                01 — OLAWOYIN JOSEPH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141416] leading-[1.12] mb-6">
              I help startups build fast, reliable web applications that scale.
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-[#55514B] leading-relaxed max-w-2xl mb-8 md:mb-10 font-normal">
              Full-stack engineer specializing in React, Node.js, Graphql, JavaScript, TypeScript, and Next.js. I turn complex operational workflows into clean, deployable software that actually works in production.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14 md:mb-16">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C45738] text-white text-sm font-semibold hover:bg-[#B34A2D] transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#222120] text-sm font-semibold border border-[#D5CDC1] hover:border-[#9E988E] hover:bg-[#F2ECE3] transition-all cursor-pointer"
              >
                See My Work
              </a>
            </div>

            {/* Key Metrics / Highlights Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5DFD4]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141416] tracking-tight">
                  5 months
                </div>
                <div className="text-xs sm:text-sm text-[#736E67] mt-1 leading-snug">
                  2 production SaaS platforms shipped
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141416] tracking-tight">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-[#736E67] mt-1 leading-snug">
                  Commercial clients served
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141416] tracking-tight">
                  Full-stack
                </div>
                <div className="text-xs sm:text-sm text-[#736E67] mt-1 leading-snug">
                  React · Node.js · Next.js · MongoDB
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start relative pt-0">
            <div className="relative max-w-[460px] sm:max-w-[520px] lg:max-w-[620px] xl:max-w-[680px] -mt-2 sm:-mt-3 lg:mt-20">
              <img
                src={heroPortrait}
                alt="Olawoyin Joseph - Full-stack Software Engineer"
                className="block w-full h-auto object-contain object-top filter grayscale contrast-105 drop-shadow-md select-none lg:scale-[1.08]"
                loading="eager"
                height={740}
                width={560}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
