
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
      tags: ["Node.js", "React", "TypeScript"],
      url: "https://inncircles.com",
      github: "https://github.com/inncircles"
    },
    {
      position: "Software Developer Intern",
      company: "Catalog.fi",
      period: "Mar 2023 - Sept 2023",
      description: "Contributed to the advancement of the crypto wallet through React.js, TypeScript, Node.js, Tailwind CSS.",
      url: "https://catalog.fi"
    },
    {
      position: "Backend Developer",
      company: "Myally.ai",
      period: "April - July 2023",
      description: "Collaborated with the team to implement an automated accounting system, reducing manual workload by 90%.",
      github: "https://github.com/myally-ai"
    }
  ]
};

export const projects: Project[] = [
  {
    id: "health-connect",
    title: "Health Connect",
    description: "An essential tool for healthcare professionals that streamlines access and ensures secure sharing of confidential patient health data, enhancing care coordination.",
    tags: ["Python", "Flask", "IBM Cloud", "Docker", "RedHat"],
    image: "/lovable-uploads/d11ecb23-f2f8-45fe-a357-c6457bd8b65d.png",
    github: "#",
    url: "https://health-connect-project.com"
  },
  {
    id: "destination-changer",
    title: "Destination Changer",
    description: "A Web app that allows users to shorten URLs and track the number of clicks on the shortened URL. The app also provides a QR code for the shortened URL.",
    tags: ["NextJS", "NodeJS", "MongoDB", "TailwindCSS", "Vercel"],
    image: "/lovable-uploads/b97a0075-56ff-4bef-9550-1bdeba2afa16.png", 
    github: "#",
    url: "https://destination-changer.com"
  },
  {
    id: "ayoohoo-family-health",
    title: "Ayoohoo Family Health Game",
    description: "Designed and developed a gamification platform promoting healthy habits in children through interactive gameplay, including daily challenges, rewards, and habit-tracking features. Drove rapid adoption, achieving 5,000 monthly active users within the first month.",
    tags: ["AngularJS", "NodeJS", "MongoDB", "TailwindCSS", "AWS"],
    image: "/lovable-uploads/20bb6c52-8eb8-4baf-8bb5-a6f86969b86b.png",
    github: "#",
    url: "https://games.ayoohoo.com"
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
