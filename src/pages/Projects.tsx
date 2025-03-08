
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
    <div className="container-custom">
      <div className="py-10 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-emerald-50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-emerald-50 to-transparent"></div>
          <div className="absolute top-1/3 right-10 w-20 h-20 border border-emerald-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 left-20 w-32 h-32 border border-teal-200 rounded-full opacity-30"></div>
        </div>
        
        <div ref={ref} className="mb-12 text-center">
          <div 
            className={cn(
              "inline-block py-1 px-3 rounded-full text-sm bg-gray-100 text-gray-600 mb-4 opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            My Work
          </div>
          
          <h1 
            className={cn(
              "text-4xl font-bold opacity-0 transform translate-y-4 transition-all duration-500 delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Things I've made
          </h1>
          
          <p 
            className={cn(
              "text-xl text-gray-600 mt-4 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Here are some of my projects that showcase my skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isAnimated={isVisible && animatedItems[index]}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
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
                  src={selectedProject.image || '/placeholder.svg'} 
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
