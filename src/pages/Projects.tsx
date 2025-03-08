
import React, { useState } from 'react';
import { useSequentialAnimation, useFadeInOnScroll } from '@/hooks/useAnimations';
import { Project, projects } from '@/lib/data';
import ProjectCard from '../components/ProjectCard';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const animatedItems = useSequentialAnimation(projects.length, 100, 150);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };
  
  return (
    <div className="container-custom py-20">
      <div ref={ref} className="mb-16">
        <h1 className={cn(
          "text-4xl md:text-5xl font-bold mb-6 opacity-0 transform translate-y-4 transition-all duration-500 delay-100",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Things I've made trying to put my dent in the universe.
        </h1>
        
        <p className={cn(
          "text-lg text-gray-600 max-w-3xl opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
          isVisible && "opacity-100 translate-y-0"
        )}>
          I've worked on many of little projects over the years but these are the ones that I'm most 
          proud of. Some of these are open-source, so if you see something that piques your interest, 
          check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-0 transform translate-y-8 transition-all duration-700",
              isVisible && animatedItems[index] ? "opacity-100 translate-y-0" : ""
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>{project.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto glass-panel border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
            <button 
              className="absolute top-4 right-4" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>
          
          {selectedProject && (
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Preview Images */}
              {selectedProject.previewImages && selectedProject.previewImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Preview Images</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.previewImages.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden glass-panel hover-lift">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} preview ${idx + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.url && (
                    <a 
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex items-center gap-2 transition-colors"
                    >
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-gray-300 flex items-center gap-2 hover:border-gray-400 transition-colors"
                    >
                      View Code <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
