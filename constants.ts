import { Project, SocialLink } from './types';

export const PROFILE = {
  name: "Kalmadi Saisiddi",
  role: "Creative Front-End Developer & Cybersecurity Student",
  tagline: "I don't just build websites; I build experiences.",
  bio: "I am a First-Year B.Tech Cybersecurity student with a deep passion for interactive web development. Beyond the classroom, I am a serial hackathon competitor, consistently securing top-10 finishes at major institutions. I bridge the gap between secure systems and creative, immersive user interfaces.",
  status: "Open for opportunities",
  email: "143saisiddi@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    title: "MedInsight AI",
    description: "AI-powered diagnostic assistant analyzing medical records (X-ray, OCR) with multilingual text-to-speech capabilities.",
    stack: ["React", "AI Integration", "Tailwind"],
    links: {
      demo: "#",
      github: "#"
    },
    image: "https://picsum.photos/seed/medinsight/800/600"
  },
  {
    title: "SmartSplit",
    description: "Group travel expense splitting platform with real-time tracking, automated debt simplification logic, and secure transaction flow.",
    stack: ["React", "Fintech Logic", "CSS"],
    links: {
      demo: "#",
      github: "#"
    },
    image: "https://picsum.photos/seed/smartsplit/800/600"
  }
];

export const SKILLS = [
  "React", "Three.js", "Cybersecurity", "Python", "Tailwind CSS", "TypeScript", "Framer Motion", "Next.js", "Node.js", "Ethical Hacking"
];

export const SOCIALS: SocialLink[] = [
  { label: "LinkedIn", url: "https://linkedin.com/in/saisiddi-kalmadi-172672382" },
  { label: "GitHub", url: "https://github.com" },
  { label: "Email", url: "mailto:143saisiddi@gmail.com", email: true }
];