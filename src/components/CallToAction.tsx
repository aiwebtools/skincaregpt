
import CyberButton from "./CyberButton";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full cyber-grid-bg opacity-10 z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyber-purple/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyber-pink/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-10 border border-cyber-purple/30 relative overflow-hidden">
          {/* Decorative scan line */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-cyber-purple/70 to-transparent w-full animate-scan-line"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
              <span className="text-gradient neon-text">Transform Your Skincare Routine Today</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get personalized skincare analysis, product recommendations, and spa service suggestions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CyberButton glowing={true} size="lg">
                <a 
                  href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center"
                >
                  Try SKINCARE GPT Now
                </a>
              </CyberButton>
              <CyberButton variant="outline" size="lg">
                <a href="#how-it-works" className="flex items-center justify-center">
                  Learn More
                </a>
              </CyberButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
