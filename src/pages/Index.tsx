
import React from 'react';
import SocialLinks from '../components/SocialLinks';
import ExperienceCard from '../components/ExperienceCard';

const Index = () => {
  return (
    <div className="container-custom">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">I'm Sujay Babu.</h1>
        <h2 className="text-5xl font-bold mb-6">I'm a Software Developer.</h2>
        <p className="text-xl text-gray-600 mb-8">
          A brief introduction to me, my background, and my interests.
        </p>
        <SocialLinks />
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        
        <ExperienceCard
          logo="/lovable-uploads/4543a941-fcb1-4252-8440-84197375ca1b.png"
          company="Inncircles"
          role="Software Developer"
          period="Oct 2023 - Present"
          description="Contributing to the scalable microservices with Node.js, automated CI/CD pipelines, and built client onboarding platform. Contributed to mobile app development with React Native and core product modules."
        />
        
        <ExperienceCard
          logo="/lovable-uploads/20bb6c52-8eb8-4baf-8bb5-a6f86969b86b.png"
          company="Catalog.fi"
          role="Software Developer Intern"
          period="Mar 2023 - Sept 2023"
          description="Contributed to the advancement of the crypto wallet through React.js, TypeScript, Node.js, Tailwind CSS."
        />
        
        <ExperienceCard
          logo="/lovable-uploads/d11ecb23-f2f8-45fe-a357-c6457bd8b65d.png"
          company="Myally.ai"
          role="Backend Developer"
          period="April - July 2023"
          description="Collaborated with the team to implement an automated accounting system, reducing manual workload by 90%."
        />
      </section>
    </div>
  );
};

export default Index;
