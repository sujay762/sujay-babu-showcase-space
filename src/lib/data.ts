
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

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

export const education: Education[] = [
  {
    institution: "SRKR Engineering College",
    degree: "B-Tech in Computer Science and Design",
    period: "2023-2026",
    location: "Bhimavaram, Andhra Pradesh",
    gpa: "8.21"
  }
];

export const about = {
  skills: [
    "Python, JavaScript",
    "React, Node.js, HTML5, CSS3",
    "MongoDB, SQLite, MySQL",
    "Frontend Design (Figma)",
    "Cloud Deployment",
    "Android Development (Kotlin)",
    "Git & Version Control",
    "RESTful APIs"
  ],
  experience: [
    {
      position: "Full-stack Developer",
      company: "Wonderkids School Website",
      period: "1OCT-1NOV",
      description: "Developed and maintained web applications for students and educators. Utilized HTML, JavaScript, PHP, and SQL for responsive user interfaces and robust backends.",
      tags: ["HTML", "JavaScript", "PHP", "SQL"],
      url: "https://wonderkids.example.com",
      github: "https://github.com/example/wonderkids"
    },
    {
      position: "Python Full-stack Intern",
      company: "IDTT Blackbucks",
      period: "May 2024 - July 2024",
      description: "Developed a notes-taking app using Python Django with CRUD operations. Designed a user-friendly interface for managing notes efficiently.",
      tags: ["Python", "Django", "CRUD"],
      url: "https://blackbucks.example.com",
      github: "https://github.com/example/notes-app"
    },
    {
      position: "Android Developer Virtual Internship",
      company: "Google",
      period: "OCT-DEC 2024",
      description: "Gained hands-on experience in Android development using Kotlin and Java. Created a basic app using Android Studio.",
      tags: ["Android", "Kotlin", "Java"],
      url: "https://android.example.com",
      github: "https://github.com/example/android-app"
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
