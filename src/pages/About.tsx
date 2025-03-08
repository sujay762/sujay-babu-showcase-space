
import React from 'react';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="container-custom">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Hey, I'm Sujay. I'm a Software Developer at Inncircles, where I contribute to the development of several outstanding products.
          </p>
          <p className="text-gray-600 mb-8">
            I also maintain various open-source projects and love to experiment with new technologies.
          </p>
        </div>
        <SocialLinks className="mb-12" />
      </div>
    </div>
  );
};

export default About;
