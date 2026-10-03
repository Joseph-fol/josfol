import React from 'react';
import { ArrowUpRight, BookOpen, FileText, Cpu } from 'lucide-react';

export default function Writing() {
  const articles = [
    {
      type: 'ENGINEERING PROPOSAL',
      icon: Cpu,
      title: 'Decentralized Solar-Powered Water Distribution Network using GIS Mapping',
      desc: 'Technical proposal detailing hydraulic design, automated solar-pump telemetry, and GIS parcel routing to solve reliable off-grid water access.',
      link: 'https://dev.to/olawoyinjoseph',
      readTime: '8 min read',
    },
    {
      type: 'SYSTEM DESIGN & ARCHITECTURE',
      icon: FileText,
      title: 'Architecting a Real-Time Online CBT Platform for Concurrent High-Stakes Exams',
      desc: 'Deep dive into handling concurrent test-takers with zero grade loss, auto-submitting countdown state engines, and resilient MongoDB schemas.',
      link: 'https://dev.to/olawoyinjoseph',
      readTime: '6 min read',
    },
    {
      type: 'OPERATIONAL WORKFLOWS',
      icon: BookOpen,
      title: 'Digitizing Campus Procurement: DMDAS Architecture from Zero to Production',
      desc: 'How we replaced manual paper queues and fraud risks with cryptographic verification tokens and role-based student distribution.',
      link: 'https://dev.to/olawoyinjoseph',
      readTime: '5 min read',
    },
  ];

  return (
    <section id="writing" className="py-20 md:py-28 bg-[#F7F4EE] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C45738] uppercase mb-3">
              08 — WRITING & PUBLICATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141416]">
              Technical writings & engineering proposals
            </h2>
          </div>

          <a
            href="https://dev.to/olawoyinjoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C45738] hover:text-[#A74327] transition-colors"
          >
            <span>View all articles on DEV.to</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FAF7F2] border border-[#E3DDD2] hover:border-[#C45738] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#C45738] uppercase mb-4">
                    <span className="flex items-center gap-1.5">
                      <Icon size={14} />
                      {item.type}
                    </span>
                    <span className="text-[#8A847B] font-normal lowercase">{item.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#141416] tracking-tight group-hover:text-[#C45738] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5750] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBE5DB] flex items-center gap-1 text-xs font-semibold text-[#141416] group-hover:text-[#C45738] transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
