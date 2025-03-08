
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
  github?: string;
  previewImages?: string[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description?: string;
  tags?: string[];
  url?: string;
  github?: string;
}

export const about = {
  skills: [
    "React.js / Next.js",
    "TypeScript / JavaScript",
    "Node.js / Express",
    "MongoDB / PostgreSQL",
    "REST APIs / GraphQL",
    "Tailwind CSS / SCSS",
    "AWS / Cloud Services",
    "CI/CD Pipelines"
  ],
  experience: [
    {
      position: "Software Developer",
      company: "Inncircles",
      period: "Oct 2023 - Present",
      description: "Contributing to scalable microservices with Node.js, automated CI/CD pipelines, and built client onboarding platform.",
      tags: ["Node.js", "React", "TypeScript"]
    },
    {
      position: "Software Developer Intern",
      company: "Catalog.fi",
      period: "Mar 2023 - Sept 2023",
      description: "Contributed to the advancement of the crypto wallet through React.js, TypeScript, Node.js, Tailwind CSS."
    },
    {
      position: "Backend Developer",
      company: "Myally.ai",
      period: "April - July 2023",
      description: "Collaborated with the team to implement an automated accounting system, reducing manual workload by 90%."
    }
  ]
};

export const projects: Project[] = [
  {
    id: "health-connect",
    title: "Health Connect",
    description: "An essential tool for healthcare professionals streamlining the process of patient care coordination",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/lovable-uploads/placeholder.svg",
    github: "#",
    url: "#"
  },
  {
    id: "destination-changer",
    title: "Destination Changer",
    description: "A web app that allows users to whitelists URLs and automates URL routing",
    tags: ["TypeScript", "React", "Node.js"],
    image: "/lovable-uploads/placeholder.svg", 
    github: "#"
  }
];

export function loadDynamicData() {
  return new Promise<void>((resolve) => {
    // Simulate data loading
    setTimeout(() => {
      resolve();
    }, 800);
  });
}
