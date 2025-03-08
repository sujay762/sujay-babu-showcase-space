
import React from 'react';

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  links?: { label: string; url: string }[];
  imageSrc?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  links = [],
  imageSrc
}: ProjectCardProps) => {
  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="w-10 h-10 object-contain" />
            ) : (
              <div className="w-10 h-10 bg-emerald-100 rounded-md"></div>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  tech.color || 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech.name}
              </span>
            ))}
          </div>
          
          {links.length > 0 && (
            <div className="flex gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
