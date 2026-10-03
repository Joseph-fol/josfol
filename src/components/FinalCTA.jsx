import React from 'react';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section id="contact" data-aos="zoom-in" data-aos-duration="1200" className="py-24 md:py-32 bg-[#0C0C0E] text-white text-center border-b border-[#1D1D22]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Tag */}
        <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-4">
          09 — FINAL CTA
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Got a system to build?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#9B9BA3] leading-relaxed max-w-2xl mx-auto mb-10">
          Whether it's an MVP, a backend API, or a business website, I'll scope it, build it, and ship it. Let's talk about what you're working on.
        </p>

        {/* Button */}
        <div>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-[#C45738] text-[#E87352] hover:text-white hover:bg-[#C45738] text-sm sm:text-base font-semibold transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Start a Project
          </button>
        </div>

      </div>
    </section>
  );
}
