import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'website',
      title: 'Business Website & Landing Page',
      desc: 'High-converting, SEO-optimized site with mobile-first responsive design, custom branding, contact forms, and deployment. Ideal for local businesses, portfolios, and product launches.',
      price: 'From ₦150,000 / $250',
      popular: false,
    },
    {
      id: 'webapp',
      title: 'Custom Web App / MVP Development',
      desc: 'Full-stack web application from schema to deployment: responsive UI, database architecture, secure authentication, REST API, and production hosting. Built to spec, shipped on time.',
      price: 'From ₦350,000 / $600',
      popular: true,
    },
    {
      id: 'backend',
      title: 'API Design & Backend Integration',
      desc: 'RESTful API design and documentation, third-party service integration, database query optimization, and performance tuning. Drop-in or greenfield, depending on what your system needs.',
      price: 'From ₦120,000 / $200',
      popular: false,
    },
  ];

  return (
    <section id="services" data-aos="fade-up" data-aos-duration="1200" className="py-20 md:py-28 bg-[#F7F4EE] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-3">
            04 — SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416]">
            What I build for you
          </h2>
        </div>

        {/* 3 Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="flip-up"
              data-aos-delay={service.popular ? 0 : 150}
              className={`relative bg-[#FAF7F2] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                service.popular
                  ? 'border-2 border-[#C45738] shadow-md'
                  : 'border border-[#DFD8CC] hover:border-[#B5AEA1]'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3.5 left-8">
                  <span className="px-3.5 py-1 rounded-full bg-[#C45738] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#141416] tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-[#C45738]">→</span>
                  <span>{service.title}</span>
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#55514B] leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Pricing & CTA Action */}
              <div className="pt-6 border-t border-[#EAE3D6] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#7A756D] uppercase font-semibold block mb-0.5">Investment</span>
                  <span className="text-base sm:text-lg font-bold text-[#141416]">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    service.popular
                      ? 'bg-[#C45738] text-white hover:bg-[#B34A2D]'
                      : 'bg-[#EFE9DF] text-[#19191C] hover:bg-[#E3DCB1]'
                  }`}
                >
                  <span>Inquire</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
