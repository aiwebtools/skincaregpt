
import { Link } from 'react-router-dom';
import CyberButton from './CyberButton';
import { Heart, Mail, Phone, Bath } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-purple/20 mt-20 relative overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-500/10 to-cyan-400/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.2),_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and branding */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-purple-400 opacity-70 blur-sm animate-pulse"></div>
                <div className="relative h-full w-full rounded-full border border-teal-300/50 bg-black/30 flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <Bath size={18} className="text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-cyber font-bold text-white neon-text text-glow drop-shadow-2xl">SKINCARE GPT</span>
                <span className="text-xs text-cyber-purple/90">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyber-pink" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></span>
              </div>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Your personal AI skincare assistant, providing analysis and expert recommendations tailored to your unique skin needs.
            </p>
            <div className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-300/20 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-gray-400 italic">
                For informational, educational, and research purposes only.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4 drop-shadow-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg hover:text-shadow" target="_blank" rel="noopener noreferrer">
                  SKINCARE GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg" target="_blank" rel="noopener noreferrer">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4 drop-shadow-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/disclaimers" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4 drop-shadow-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:4758008096" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 flex items-center gap-2 hover:drop-shadow-lg">
                  <Phone size={16} className="text-cyber-purple drop-shadow-sm" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-cyber-purple transition-all duration-300 flex items-center gap-2 hover:drop-shadow-lg">
                  <Mail size={16} className="text-cyber-purple drop-shadow-sm" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-cyber-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-purple transition-all duration-300 hover:drop-shadow-lg">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm hidden md:inline-block">Made with</span>
            <Heart size={16} className="text-cyber-pink animate-pulse drop-shadow-lg" />
            <CyberButton variant="outline" size="sm" className="rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 transition-all duration-300">
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                More AI Tools
              </a>
            </CyberButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
