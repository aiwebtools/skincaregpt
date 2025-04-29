
import { Link } from 'react-router-dom';
import CyberButton from './CyberButton';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-purple/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and branding */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-blue opacity-70 blur-sm"></div>
                <div className="relative h-full w-full rounded-full border border-cyber-purple/50 bg-black/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-cyber font-bold text-white neon-text text-glow">SKINCARE GPT</span>
                <span className="text-xs text-cyber-purple/90">Presented by <a href="https://www.aiwebtools.ai" className="hover:text-cyber-pink" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your personal AI skincare assistant, providing analysis and expert recommendations tailored to your unique skin needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-KyRzUxJzX-skincare-gpt" className="text-gray-400 hover:text-cyber-purple transition-colors" target="_blank" rel="noopener noreferrer">
                  SKINCARE GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-purple transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-purple transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-cyber-purple transition-colors" target="_blank" rel="noopener noreferrer">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-cyber-purple transition-colors" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" className="text-gray-400 hover:text-cyber-purple transition-colors" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-cyber text-white text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:4758008096" className="text-gray-400 hover:text-cyber-purple transition-colors flex items-center gap-2">
                  <Phone size={16} className="text-cyber-purple" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-cyber-purple transition-colors flex items-center gap-2">
                  <Mail size={16} className="text-cyber-purple" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-cyber-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-purple transition-colors">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm hidden md:inline-block">Made with</span>
            <Heart size={16} className="text-cyber-pink animate-pulse" />
            <CyberButton variant="outline" size="sm" className="rounded-full">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
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
