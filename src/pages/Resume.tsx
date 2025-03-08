
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Resume = () => {
  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold">My Resume</h1>
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">THOTA. SUJAY BABU</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4 text-gray-600">
              <div className="flex items-center gap-2 justify-center">
                <Phone size={16} />
                <span>+91 9346491221</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail size={16} />
                <span>sujayss149@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin size={16} />
                <span>Bhimavaram, west godavari, Andhra Pradesh</span>
              </div>
            </div>
          </div>
          
          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">SUMMARY</h3>
            <p className="text-gray-700 mb-3">
              Full-stack Developer | B-Tech in Computer Science and Design (Graduating 2026)
            </p>
            <p className="text-gray-700 mb-3">
              Results-driven Full-stack Developer proficient in React, Django, Node.js, Kotlin, and database management systems (MongoDB, SQLite, MySQL). 
              Successfully developed a feature-rich notes-taking app during a Python Full-stack internship at IDDT Blackbucks, implementing CRUD operations 
              with Django and full functionality to enhance user experience.
            </p>
            <p className="text-gray-700">
              Skilled in development, cloud deployment, and version control with Github. Currently pursuing a B-Tech degree at SRKR Engineering College 
              (JNTUK) with a CGPA of 8.21. Passionate about creating innovative solutions and eager to contribute to impactful full-stack and mobile 
              development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">SRKR Engineering College</span>
                  <span>2023-2026</span>
                </div>
                <p className="text-gray-700">Bhimavaram, Andhra Pradesh</p>
                <p className="text-gray-700">CGPA: 8.21</p>
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4">SKILLS</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-semibold">Programming Languages:</span> Python, JavaScript</li>
                <li><span className="font-semibold">Web Development:</span> React, Node.js, HTML5, CSS3</li>
                <li><span className="font-semibold">Database:</span> MongoDB, SQLite, MySQL</li>
                <li><span className="font-semibold">UI/UX Design:</span> Frontend Design (Figma)</li>
                <li><span className="font-semibold">Cloud & Hosting:</span> Experienced cloud deployment and server management</li>
              </ul>
            </div>
          </div>
          
          {/* Work Experience */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">WORK EXPERIENCE</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Job 1 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Full-stack Developer</h4>
                  <span className="text-sm text-gray-600">1OCT-1NOV</span>
                </div>
                <p className="text-gray-700 mb-2">Wonderkids School Website</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed and maintained web applications for students and educators.</li>
                  <li>Utilized HTML, JavaScript, PHP, and SQL for responsive user interfaces and robust backends.</li>
                  <li>Conducted testing and debugging to ensure performance and security.</li>
                  <li>Participated in code reviews.</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Python Full-stack Intern</h4>
                  <span className="text-sm text-gray-600">May 2024 - July 2024</span>
                </div>
                <p className="text-gray-700 mb-2">IDTT Blackbucks</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed a notes-taking app using Python Django with CRUD operations.</li>
                  <li>Designed a user-friendly interface for managing notes efficiently.</li>
                  <li>Collaborated with the team to troubleshoot, optimize, and implement best practices.</li>
                </ul>
              </div>
              
              {/* Job 3 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Android Developer Virtual Internship</h4>
                  <span className="text-sm text-gray-600">OCT-DEC 2024</span>
                </div>
                <p className="text-gray-700 mb-2">Google</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Gained hands-on experience in Android development using Kotlin and Java.</li>
                  <li>Created a basic app using Android Studio, demonstrating proficiency in mobile app development.</li>
                  <li>Explored best practices for building scalable and user-friendly mobile applications.</li>
                </ul>
              </div>
              
              {/* Job 4 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">MERN Full stack Developer</h4>
                  <span className="text-sm text-gray-600">SIH Gujarat Project</span>
                </div>
                <p className="text-gray-700 mb-2">Smart India Hackathon</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developing a comprehensive web application to manage research, IPR, innovation, and start-up ecosystem in Gujarat.</li>
                  <li>Implementing centralized data management, resource allocation, and collaboration tools to support innovators and entrepreneurs.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-4">CERTIFICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Java Certification</li>
                <li>Android Developer (GOOGLE)</li>
                <li>C Programming (CISCO Networking Academy)</li>
                <li>SQL-BASIC (HackerRank)</li>
              </ul>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Python (IDTT BLACKBUCKS)</li>
                <li>Analytics Certification</li>
                <li>Google Ads Certification</li>
                <li>C Programming (CISCO Networking Academy)</li>
              </ul>
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">LANGUAGES</h3>
            <p className="text-gray-700">TELUGU, ENGLISH, HINDI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
