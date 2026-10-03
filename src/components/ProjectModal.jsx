import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '$500 - $1,000 / ₦300k - ₦600k',
    timeline: '1-3 weeks',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal Dialog */}
      <div className="bg-[#FAF7F2] border border-[#DDD7CD] rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#757068] hover:text-[#19191C] hover:bg-[#EBE4D8] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#C45738]/10 text-[#C45738] flex items-center justify-center mb-6">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-[#141416] mb-3">
              Message Received!
            </h3>
            <p className="text-sm sm:text-base text-[#57534D] leading-relaxed max-w-md mb-8">
              Thank you for reaching out, <strong className="text-[#141416]">{formData.name}</strong>. I have received your project details and will review them and get back to you at <span className="text-[#C45738] font-medium">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#C45738] text-white text-sm font-semibold hover:bg-[#B34A2D] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 md:p-9">
            
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C45738] uppercase mb-2">
                <Sparkles size={14} />
                <span>Let's collaborate</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#141416] tracking-tight">
                Start a Project
              </h3>
              <p className="text-xs sm:text-sm text-[#635F58] mt-1.5">
                Tell me about the system you want to build, timeline, and requirements.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                  Project Type / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  <option value="Custom Web App / MVP Development">Custom Web App / MVP Development</option>
                  <option value="Business Website & Landing Page">Business Website & Landing Page</option>
                  <option value="API Design & Backend Integration">API Design & Backend Integration</option>
                  <option value="Full-Stack Technical Consultation">Full-Stack Technical Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all cursor-pointer"
                  >
                    <option value="< $300 / ₦150k">&lt; $300 / ₦150k</option>
                    <option value="$300 - $600 / ₦150k - ₦350k">$300 - $600 / ₦150k - ₦350k</option>
                    <option value="$600 - $1,500 / ₦350k - ₦1M">$600 - $1,500 / ₦350k - ₦1M</option>
                    <option value="$1,500+ / ₦1M+">$1,500+ / ₦1M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all cursor-pointer"
                  >
                    <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                    <option value="2-4 weeks">2 - 4 weeks</option>
                    <option value="1-2 months">1 - 2 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3A36] uppercase tracking-wider mb-1.5">
                  Project Details & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, user flows, tech preferences, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-[#19191C] text-sm focus:outline-none focus:border-[#C45738] focus:ring-1 focus:ring-[#C45738] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-[#C45738] text-white text-sm font-semibold hover:bg-[#B34A2D] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
