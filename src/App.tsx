import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitecturalConcepts } from './components/ArchitecturalConcepts';
import { ProjectGallery } from './components/ProjectGallery';
import { StudioSimulator } from './components/StudioSimulator';
import { DisciplinesSection } from './components/DisciplinesSection';
import { CostEstimator } from './components/CostEstimator';
import { WorkflowExplainer } from './components/WorkflowExplainer';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingQuickInquiry } from './components/FloatingQuickInquiry';

export default function App() {
  const [inquiryServicePreset, setInquiryServicePreset] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState<string>('concepts');

  const handleScrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (servicePreset?: string) => {
    if (servicePreset) {
      setInquiryServicePreset(servicePreset);
    }
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#031118] text-[#E2E8F0] selection:bg-teal-400 selection:text-[#031118] relative">
      {/* Top Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenStudio={() => handleScrollTo('studio')}
        onScrollTo={handleScrollTo}
        activeSection={activeSection}
      />

      {/* Main Architectural Showcase */}
      <main>
        {/* Hero Section with Live Availability, Trust Strip, and Interactive Comparison */}
        <Hero
          onExploreProjects={() => handleScrollTo('projects')}
          onOpenConcepts={() => handleScrollTo('concepts')}
          onOpenContact={handleOpenContact}
          onOpenStudio={() => handleScrollTo('studio')}
        />

        {/* 5 Architectural Concepts */}
        <ArchitecturalConcepts onQuoteConcept={handleOpenContact} />

        {/* Selected SketchUp Works Gallery with Render/Clay toggles */}
        <ProjectGallery onInquireProject={handleOpenContact} />

        {/* Interactive 3D Studio Simulator */}
        <StudioSimulator onBookSession={() => handleOpenContact('Interactive 3D Studio Live Session')} />

        {/* Professional Services & Disciplines */}
        <DisciplinesSection onSelectService={handleOpenContact} />

        {/* Interactive Project Design & Cost Estimator */}
        <CostEstimator onQuoteWithEstimate={handleOpenContact} />

        {/* 4-Stage Methodology Pipeline */}
        <WorkflowExplainer />

        {/* About Vincent Jimenez & Endorsements */}
        <AboutSection onOpenContact={() => handleOpenContact()} />

        {/* Formal Consultation Request Form */}
        <ContactSection
          initialService={inquiryServicePreset}
          onResetInitialService={() => setInquiryServicePreset(undefined)}
        />
      </main>

      {/* Floating High-Conversion Customer Inquiry Widget */}
      <FloatingQuickInquiry 
        onOpenContact={handleOpenContact}
        onOpenEstimator={() => handleScrollTo('estimator')}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
