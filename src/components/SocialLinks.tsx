
import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        <Twitter size={20} />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:youremail@example.com" className="text-gray-700 hover:text-black transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
