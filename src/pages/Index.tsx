
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to sections when clicking on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark overflow-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-dark via-black to-cyber-dark z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FAQSection />
          <DisclaimerSection />
          <CallToAction />
        </main>
        <Footer />
        <DisclaimerModal />
      </div>
    </div>
  );
};

export default Index;
