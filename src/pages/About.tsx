
import React, { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import { useFadeInOnScroll } from '@/hooks/useAnimations';
import { about, loadDynamicData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      await loadDynamicData();
      setDataLoaded(true);
    }
    fetchData();
  }, []);
  
  return (
    <div className="container-custom">
      <div className="py-10 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 border border-gray-200 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-40 h-40 border border-gray-200 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-emerald-100 rounded-full blur-md animate-float" style={{animationDelay: '-2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-cyan-100 rounded-full blur-md animate-float" style={{animationDelay: '-1s'}}></div>
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-block py-1 px-3 rounded-full text-sm bg-gray-100 text-gray-600 mb-4">
              About Me
            </div>
            
            <h1 className="text-4xl font-bold">My Background</h1>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <div 
              className={cn(
                "transform transition-all duration-1000",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-emerald-400 pb-2">
                Skills & Technologies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {about.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="glass-panel p-4 rounded-lg flex items-start hover-lift"
                    style={{transitionDelay: `${index * 50}ms`}}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Section */}
            <div 
              className={cn(
                "transform transition-all duration-1000",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-emerald-400 pb-2">
                Experience
              </h3>
              
              <div className="space-y-6">
                {about.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="glass-panel p-5 rounded-lg relative hover-lift"
                    style={{transitionDelay: `${index * 100}ms`}}
                  >
                    <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="text-sm text-emerald-500 font-medium">{exp.period}</div>
                    <div className="text-xl font-bold mt-1">{exp.position}</div>
                    <div className="text-gray-600 mb-3">{exp.company}</div>
                    
                    {exp.description && (
                      <p className="text-sm text-gray-600 mb-4">{exp.description}</p>
                    )}
                    
                    {exp.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded text-xs bg-emerald-400 text-white hover:bg-emerald-500 transition-colors flex items-center gap-1"
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded text-xs bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1"
                        >
                          <span>View Code</span>
                          <Github className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
