
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-emerald-500' : 'text-foreground hover:text-emerald-400 transition-colors';
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-10 py-4 bg-white/80 backdrop-blur-sm">
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="avatar-ring w-10 h-10">
            <img 
              src="/lovable-uploads/b97a0075-56ff-4bef-9550-1bdeba2afa16.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        <div className="flex gap-6 px-6 py-2 rounded-full bg-gray-50 shadow-sm">
          <Link to="/about" className={`text-sm font-medium ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/projects" className={`text-sm font-medium ${isActive('/projects')}`}>
            Projects
          </Link>
          <Link to="/resume" className={`text-sm font-medium ${isActive('/resume')}`}>
            Resume
          </Link>
          <Link to="/blog" className={`text-sm font-medium ${isActive('/blog')}`}>
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
