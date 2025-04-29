
import { useState, useRef, useEffect } from 'react';
import CyberButton from './CyberButton';
import { Camera } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Simple 3D rotation effect on mouse move
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    };

    const handleMouseLeave = () => {
      if (!container) return;
      container.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen py-20 flex items-center overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyber-dark to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-purple/20 filter blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyber-pink/10 filter blur-3xl"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-16 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold mb-6">
              <span className="text-gradient neon-text">SKINCARE GPT</span>
              <span className="block text-white mt-2">AI Skin Analysis & Recommendations</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Your personal AI skincare assistant with advanced image analysis capability. 
              Upload a photo for personalized skincare advice, product recommendations, 
              and comprehensive skin analysis.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <CyberButton glowing={true}>
                <a href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Camera size={18} />
                  Analyze My Skin
                </a>
              </CyberButton>
              
              <CyberButton variant="outline">
                <a href="#how-it-works">Learn More</a>
              </CyberButton>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div ref={containerRef} className="transition-transform duration-300 ease-out">
              <div className="relative rounded-xl overflow-hidden neon-border">
                {/* Decorative elements for cyber aesthetic */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-blue"></div>
                </div>
                
                <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-cyber-purple border border-cyber-purple/30">
                  SkinScan v1.0
                </div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="h-1 bg-gradient-to-r from-transparent via-cyber-purple/70 to-transparent w-full animate-scan-line"></div>
                </div>
                
                {/* Placeholder image/screen */}
                <div className="aspect-[4/3] bg-black relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-cyber-purple flex items-center justify-center mb-4 relative animate-pulse-glow">
                      <Camera size={36} className="text-cyber-purple" />
                      <div className="absolute inset-0 border border-cyber-purple/50 rounded-full animate-ping"></div>
                    </div>
                    <h3 className="text-cyber-purple font-cyber text-xl mb-2">SKIN ANALYSIS MODULE</h3>
                    <p className="text-gray-400 max-w-md">
                      Upload an image of your skin to receive a detailed analysis of your skin type, 
                      concerns, and personalized product recommendations
                    </p>
                  </div>
                  
                  {/* Terminal-like text at bottom */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/80 p-2 text-xs font-mono text-green-400 border-t border-cyber-purple/30">
                    <div className="animate-pulse">
                      _ system: ready for skin analysis | upload image to begin scan...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
