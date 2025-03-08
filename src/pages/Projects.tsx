
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container-custom">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Things I've made</h1>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of my projects that showcase my skills and interests.
        </p>
      </div>

      <div className="space-y-8">
        <ProjectCard
          title="Health Connect"
          description="An essential tool for healthcare professionals streamlining the process of patient care coordination"
          technologies={[
            { name: 'React', color: 'bg-blue-100 text-blue-700' },
            { name: 'Node.js', color: 'bg-green-100 text-green-700' },
            { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-700' }
          ]}
          links={[
            { label: 'GitHub', url: '#' },
            { label: 'Live Demo', url: '#' }
          ]}
        />
        
        <ProjectCard
          title="Destination Changer"
          description="A web app that allows users to whitelists URLs and automates URL routing"
          technologies={[
            { name: 'TypeScript', color: 'bg-blue-100 text-blue-700' },
            { name: 'React', color: 'bg-blue-100 text-blue-700' },
            { name: 'Node.js', color: 'bg-green-100 text-green-700' }
          ]}
          links={[
            { label: 'GitHub', url: '#' }
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
