
import { useState } from "react";
import { Link } from "react-router-dom";
import CyberButton from "./CyberButton";
import { Menu, X, Bath } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-lg border-b border-cyber-purple/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-purple-400 opacity-70 blur-sm"></div>
                <div className="relative h-full w-full rounded-full border border-teal-300/50 bg-black/30 flex items-center justify-center">
                  <Bath size={18} className="text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-cyber font-bold text-white neon-text text-glow">SKINCARE GPT</span>
                <span className="text-xs text-cyber-purple/90">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyber-pink" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" 
              className="text-white hover:text-cyber-purple transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              SKINCARE GPT
            </a>
            <a href="#faq" className="text-white hover:text-cyber-purple transition-colors">
              FAQ
            </a>
            <a href="#disclaimer" className="text-white hover:text-cyber-purple transition-colors">
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white hover:text-cyber-purple transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
            <CyberButton variant="default" className="ml-4">
              <a href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Try Now
              </a>
            </CyberButton>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-cyber-purple" />
            ) : (
              <Menu size={24} className="text-cyber-purple" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-cyber-purple/20 mt-4">
            <a 
              href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" 
              className="text-white hover:text-cyber-purple py-2 transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SKINCARE GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-purple py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-purple py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white hover:text-cyber-purple py-2 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
            <CyberButton variant="default" className="mt-2">
              <a href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Try Now
              </a>
            </CyberButton>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
