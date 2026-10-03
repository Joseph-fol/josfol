import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Work() {
  const projects = [
    {
      category: 'EDUCATIONAL INSTITUTIONS · EDTECH / SAAS · 2026',
      title: 'Online CBT SaaS Platform',
      badge: 'Concurrent exam traffic handled at scale',
      stack: 'React, Node.js, MongoDB, Vercel',
      features: 'Auto-submit timers, role-based admin workspaces, real-time state management',
      outcome: 'Commercial-ready platform handling concurrent exam sessions with zero grade-processing errors',
      liveUrl: 'https://onlinecbt.vercel.app',
      displayUrl: 'onlinecbt.vercel.app',
    },
    {
      category: 'CAMPUS ORGANIZATIONS · PROCUREMENT / EDTECH · 2026',
      title: 'DMDAS: Digital Manual Distribution System',
      badge: 'Manual procurement workflow fully digitized',
      stack: 'Next.js, React, Node.js, MongoDB',
      features: 'Digital inventory tracking, automated voucher/token redemption, student purchase verification',
      outcome: 'Eliminated physical queue bottlenecks and fully digitized course manual fulfillment',
      liveUrl: 'https://dmdas.com.ng',
      displayUrl: 'dmdas.com.ng',
    },
    {
      category: 'NIMI BAKERY · PEPPER SOUP KING · LOCAL BUSINESS / F&B · 2025',
      title: 'Local Business Web Solutions',
      badge: 'Improved digital footprint and local visibility',
      stack: 'React, Tailwind CSS, SEO Optimization, Vercel',
      features: 'Fast mobile-first storefront, digital menu ordering, automated WhatsApp order routing',
      outcome: 'Boosted customer discoverability, higher conversions, and zero order drop-off',
      liveUrl: 'https://nimibakery.vercel.app',
      displayUrl: 'nimibakery.vercel.app',
    },
  ];

  return (
    <section id="work" data-aos="fade-up" data-aos-duration="1200" className="py-20 md:py-28 bg-[#0C0C0E] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-3">
            02 — MY WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Recent builds and shipped systems
          </h2>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 120}
              className="bg-[#141417] border border-[#222228] rounded-2xl p-6 sm:p-8 md:p-10 transition-all hover:border-[#383842]"
            >
              {/* Top Row: Meta and Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold tracking-[0.16em] text-[#C45738] uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="self-start md:self-auto">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#C45738] text-[#C45738] text-xs sm:text-sm font-medium">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* 4-Box Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                
                {/* Stack */}
                <div className="bg-[#0E0E10] border border-[#1C1C22] rounded-xl p-4 sm:p-5">
                  <div className="text-[11px] font-semibold tracking-wider text-[#7E7E8A] uppercase mb-2">
                    STACK
                  </div>
                  <p className="text-sm text-[#D4D4D8] font-medium leading-relaxed">
                    {project.stack}
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-[#0E0E10] border border-[#1C1C22] rounded-xl p-4 sm:p-5">
                  <div className="text-[11px] font-semibold tracking-wider text-[#7E7E8A] uppercase mb-2">
                    KEY FEATURES
                  </div>
                  <p className="text-sm text-[#D4D4D8] font-medium leading-relaxed">
                    {project.features}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-[#0E0E10] border border-[#1C1C22] rounded-xl p-4 sm:p-5">
                  <div className="text-[11px] font-semibold tracking-wider text-[#7E7E8A] uppercase mb-2">
                    OUTCOME
                  </div>
                  <p className="text-sm text-[#D4D4D8] font-medium leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                {/* Live URL */}
                <div className="bg-[#0E0E10] border border-[#1C1C22] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  <div className="text-[11px] font-semibold tracking-wider text-[#7E7E8A] uppercase mb-2">
                    LIVE URL
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C45738] hover:text-[#E07253] transition-colors break-all"
                  >
                    <span>{project.displayUrl}</span>
                    <ExternalLink size={14} className="shrink-0" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
