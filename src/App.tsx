import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

// Layout Components
import { Header } from './src/components/layout/Header';
import { Footer } from './src/components/layout/Footer';
import { MobileMenu } from './src/components/layout/MobileMenu';

// Section Components
import { HeroSection } from './src/components/sections/HeroSection';
import { AboutSection } from './src/components/sections/AboutSection';
import { SkillsSection } from './src/components/sections/SkillsSection';
import { PortfolioSection } from './src/components/sections/PortfolioSection';
import { CTASection } from './src/components/sections/CTASection';
import { ContactSection } from './src/components/sections/ContactSection';

// Feature Components
import { VideoModal } from './src/components/features/VideoModal';
import { ScrollToTop } from './src/components/features/ScrollToTop';

// Hooks
import { useScrollSpy } from './src/hooks/useScrollSpy';

// Types
import { FilterOption } from './src/types';

export default function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState<FilterOption>('All');
  const activeSection = useScrollSpy(['about', 'portfolio', 'skills', 'contact']);

  const handleResumeDownload = () => {
    toast.success('Resume download started!');
    console.log('Downloading resume...');
    // In a real app, this would trigger a file download
    // Example: window.open('/path/to/resume.pdf', '_blank');
  };

  const handleShowreel = () => {
    setShowVideoModal(true);
    toast.info('Loading showreel...');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    setPortfolioFilter('All');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header
        activeSection={activeSection}
        onMenuClick={() => setShowMobileMenu(true)}
        onResumeDownload={handleResumeDownload}
      />

      {/* Hero Section */}
      <HeroSection
        onShowreel={handleShowreel}
        onContactClick={scrollToContact}
      />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Portfolio Section */}
      <PortfolioSection
        filter={portfolioFilter}
        onFilterChange={setPortfolioFilter}
      />

      {/* CTA Section */}
      <CTASection
        onContactClick={scrollToContact}
        onViewPortfolio={scrollToPortfolio}
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
}
