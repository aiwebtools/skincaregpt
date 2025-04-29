
import { useState } from 'react';
import { Camera, Search, Check } from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      number: 1,
      icon: Camera,
      title: 'Upload Your Photo',
      description: 'Take a clear photo of your skin or area of concern and upload it to SKINCARE GPT for analysis.',
      imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b'
    },
    {
      number: 2,
      icon: Search,
      title: 'AI Analysis',
      description: 'Our advanced AI examines your skin type, concerns, and conditions to generate a comprehensive assessment.',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      number: 3,
      icon: Check,
      title: 'Personalized Recommendations',
      description: 'Receive tailored product suggestions, skincare routines, and spa service recommendations based on your unique needs.',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-4 inline-block relative">
            <span className="text-gradient neon-text">How It Works</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Get started with SKINCARE GPT in three simple steps and transform your skincare routine
          </p>
        </div>
        
        {/* Desktop view - horizontal timeline */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start mb-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex-1 text-center ${index < steps.length - 1 ? 'relative' : ''}`}
                onMouseEnter={() => setActiveStep(step.number)}
              >
                <div className={`
                  w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center z-10 
                  transition-all duration-300 relative
                  ${activeStep === step.number ? 'bg-cyber-purple text-black scale-110' : 'bg-cyber-dark border border-cyber-purple/50 text-cyber-purple'}
                `}>
                  <step.icon size={20} />
                  <div className={`absolute inset-0 rounded-full ${activeStep === step.number ? 'animate-pulse-glow' : ''}`}></div>
                </div>
                <h3 className={`text-lg font-cyber font-semibold mb-2 transition-colors ${activeStep === step.number ? 'text-cyber-purple' : 'text-white'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-400 max-w-xs mx-auto text-sm">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-cyber-purple/30 via-cyber-purple/50 to-cyber-purple/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile view - vertical steps */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative pl-12 ${index < steps.length - 1 ? 'pb-12' : ''}`}
              onClick={() => setActiveStep(step.number)}
            >
              <div className={`
                absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center z-10 
                transition-all duration-300
                ${activeStep === step.number ? 'bg-cyber-purple text-black' : 'bg-cyber-dark border border-cyber-purple/50 text-cyber-purple'}
              `}>
                <step.icon size={18} />
              </div>
              <h3 className={`text-lg font-cyber font-semibold mb-2 transition-colors ${activeStep === step.number ? 'text-cyber-purple' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-5 h-full w-px bg-gradient-to-b from-cyber-purple/50 to-cyber-purple/10"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-panel p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden border border-cyber-purple/30 relative">
                <img 
                  src={steps[activeStep - 1].imageUrl} 
                  alt={`Step ${activeStep}: ${steps[activeStep - 1].title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-cyber-purple/80 text-black text-xs px-2 py-1 rounded font-cyber">
                    STEP {activeStep}
                  </span>
                  <h4 className="text-white text-lg mt-2 font-cyber">{steps[activeStep - 1].title}</h4>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-cyber font-bold text-white mb-4">
                Start Your Skincare Journey
              </h3>
              <p className="text-gray-300 mb-6">
                SKINCARE GPT utilizes advanced computer vision technology to analyze your skin and provide personalized recommendations. Our AI can identify common skin conditions, assess your skin type, and suggest products and treatments tailored to your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="p-1 bg-cyber-purple/20 rounded-full text-cyber-purple mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300">Deeply analyzes multiple skin parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 bg-cyber-purple/20 rounded-full text-cyber-purple mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300">Creates customized skincare routines</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 bg-cyber-purple/20 rounded-full text-cyber-purple mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300">Recommends spa services in your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 bg-cyber-purple/20 rounded-full text-cyber-purple mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300">Provides up-to-date product information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
