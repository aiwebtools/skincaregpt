
import { useState, useEffect } from "react";
import CyberButton from "./CyberButton";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleAccept}></div>
      
      <div className="glass-panel border border-cyber-purple/50 p-6 md:p-8 max-w-md w-full relative z-10 animate-fade-in">
        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-cyber-purple animate-pulse"></div>
        
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-cyber font-bold text-white mb-4">
            <span className="text-gradient">Disclaimer Agreement</span>
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            By using SKINCARE GPT, you acknowledge that:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-cyber-purple">•</span>
              <span>This tool provides general information only, not medical advice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-purple">•</span>
              <span>Skin analysis and product recommendations are for informational purposes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-purple">•</span>
              <span>You should consult healthcare professionals for medical conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-purple">•</span>
              <span>You have read and understood our full legal disclaimer</span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <CyberButton onClick={handleAccept}>
            I Agree
          </CyberButton>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
