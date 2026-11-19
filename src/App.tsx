import React from 'react';
import { PortfolioLayout } from './layouts/PortfolioLayout';
import { FloatingNav } from './components/navigation/FloatingNav';
import { HeroSection } from './components/hero/HeroSection';
import { BentoAbout } from './components/about/BentoAbout';
import { TechArsenal } from './components/stack/TechArsenal';
import { ProjectsShowcase } from './components/projects/ProjectsShowcase';
import { ExperienceTimeline } from './components/timeline/ExperienceTimeline';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/contact/Footer';

export const App: React.FC = () => {
  return (
    <PortfolioLayout>
      <FloatingNav />
      <main className="flex flex-col">
        <HeroSection />
        <BentoAbout />
        <TechArsenal />
        <ProjectsShowcase />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </PortfolioLayout>
  );
};

export default App;
