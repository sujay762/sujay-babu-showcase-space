
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="container-custom">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">My Resume</h1>
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {/* Experience content will go here */}
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {/* Education content will go here */}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            {/* Skills content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
