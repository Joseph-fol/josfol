import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Scope & Architecture',
      desc: 'We start with a focused discovery call to map out your requirements, user flows, and technical constraints. I then draft a project scope with a proposed stack, database schema, and delivery timeline before a single line of code is written.',
    },
    {
      num: '02',
      title: 'Build & Iterate',
      desc: 'I develop in short, reviewable cycles so you always see progress. Each milestone ships a working, testable feature, not a half-built prototype. Feedback is folded in continuously, keeping the project on track and on spec.',
    },
    {
      num: '03',
      title: 'Test & Harden',
      desc: 'Before any feature ships, it goes through functional testing, authentication checks, and basic load validation. I also handle environment configuration, environment variable management, and staging-to-production promotion.',
    },
    {
      num: '04',
      title: 'Deploy & Hand Off',
      desc: 'I deploy to your chosen hosting environment (Vercel, Railway, VPS, or otherwise), configure domains and SSL, and document the codebase. You get a clean, maintainable repo and a system you can confidently own going forward.',
    },
  ];

  return (
    <section id="process" data-aos="fade-up" data-aos-duration="1200" className="py-20 md:py-28 bg-[#F7F4EE] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-3">
            03 — PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416]">
            How I work
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              data-aos="zoom-in"
              data-aos-delay={Number(step.num) * 110}
              className="bg-[#FAF7F2] border border-[#C45738]/40 hover:border-[#C45738] transition-all rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs group hover:-translate-y-1 duration-200"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141416] mb-6">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#141416] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D5953] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
