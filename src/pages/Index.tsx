
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

  // SEO Schema markup injection
  useEffect(() => {
    // Add breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI Web Tools",
          "item": "https://aiwebtools.lovable.app/?via=aiwebtools"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SKINCARE GPT",
          "item": "https://aiwebtools.lovable.app/"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark overflow-hidden relative">
      {/* Hidden SEO Content for search engines */}
      <div className="sr-only">
        <h1>Free AI Skincare Analysis Tool - SKINCARE GPT by AI Web Tools</h1>
        <p>Get professional skincare analysis using artificial intelligence. Free AI tool for personalized skincare routines, product recommendations, and skin health assessment.</p>
        <span>Keywords: AI web tools, free AI tools, skincare AI, artificial intelligence beauty tools, skin analysis, dermatology AI, beauty assistant</span>
      </div>

      {/* Divine background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-indigo-900/30 z-0"></div>
      
      {/* Floating divine orbs */}
      <div className="divine-orb w-64 h-64 top-10 left-10 z-0"></div>
      <div className="divine-orb w-96 h-96 top-1/3 right-20 z-0" style={{animationDelay: '2s'}}></div>
      <div className="divine-orb w-48 h-48 bottom-20 left-1/4 z-0" style={{animationDelay: '4s'}}></div>
      <div className="divine-orb w-80 h-80 bottom-10 right-10 z-0" style={{animationDelay: '6s'}}></div>
      
      {/* Divine particles */}
      <div className="divine-particles fixed inset-0 z-0 opacity-60"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16 relative" role="main">
          <div className="ethereal-glow">
            <HeroSection />
          </div>
          <div className="relative">
            <FeaturesSection />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
          </div>
          <div className="ethereal-glow">
            <HowItWorksSection />
          </div>
          <TestimonialsSection />
          <div className="relative">
            <FAQSection />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/5 to-transparent"></div>
          </div>
          <div className="ethereal-glow">
            <DisclaimerSection />
          </div>
          <CallToAction />
        </main>
        <Footer />
        <DisclaimerModal />
      </div>
    </div>
  );
};

export default Index;
