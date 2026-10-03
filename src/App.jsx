import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import Writing from './components/Writing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      mirror: false,
    });
  }, []);

  const handleOpenModal = () => {
    setSelectedService('');
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#19191C] font-sans selection:bg-[#C45738] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Single-Page Sections */}
      <main>
        {/* 01 — OLAWOYIN JOSEPH (Hero) */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 02 — MY WORK (Recent builds and shipped systems) */}
        <Work />

        {/* 03 — PROCESS (How I work) */}
        <Process />

        {/* 04 — SERVICES (What I build for you) */}
        <Services onSelectService={handleSelectService} />

        {/* 07 — MEMOIR (The engineer behind the work) */}
        <About />

        {/* 08 — WRITING (Technical writings & engineering proposals) */}
        {/* <Writing /> */}

        {/* 09 — FINAL CTA (Got a system to build?) */}
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
      />
    </div>
  );
}
