
import React from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard = ({ project, isAnimated, index, onOpenDetails }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-lg overflow-hidden hover-lift cursor-pointer transform transition-all duration-500",
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => onOpenDetails(project)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image || '/placeholder.svg'} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-emerald-500 hover:text-emerald-600 flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Code</span>
              <Github className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
