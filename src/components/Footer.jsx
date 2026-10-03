import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'olawoyinjoseph05@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0C0C0E] text-[#71717A] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Name and Email */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollToTop}
            className="text-[#E4E4E7] font-medium hover:text-white transition-colors cursor-pointer"
          >
            Joseph
          </button>
          <span>·</span>
          <a
            href={`mailto:${email}`}
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            {email}
          </a>
          <button
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="p-1 rounded text-[#71717A] hover:text-[#C45738] transition-colors ml-1 cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
          {copied && (
            <span className="text-[11px] text-emerald-400 font-medium animate-fadeIn">
              Copied!
            </span>
          )}
        </div>

        {/* Right: Copyright */}
        <div className="text-[#65656E]">
          © 2026 Olawoyin Joseph. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
