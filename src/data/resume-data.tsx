import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shrut Sureja",
  initials: "SS",
  location: "Rajkot, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Rajkot",
  about:
    "Software Engineer focused on building projectss with extra attention to detail",
  summary:
    "As a Software Engineer, I have successfully taken multiple projects from 0 to 1. Currently, I work mostly with TypeScript, React, Node.js and NextJS.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92169549?v=4",
  personalWebsiteUrl: "https://shrutsureja.me",
  contact: {
    email: "shrutsureja@gmail.com",
    tel: "+918160460050",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shrutsureja",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shrutsureja/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/shrutsureja",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Marwadi University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Cygner",
      link: "https://www.cygner.net/",
      badges: ["Onsite"],
      title: "Web Developer Intern",
      logo: "",
      start: "3/2025",
      end: "6/2025",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "ExpressJS",
    "Cloudflare Workers",
    "Hono",
    "SQL",
    "NoSQL",
    "C/C++",
  ],
  projects: [
    {
      title: "Maze Game",
      techStack: [
        "Side Project",
        "TypeScript",
        "ReactJS",
        "Vite",
        "REST",
        "ExpressJS",
        "Canva",
      ],
      description:
        "An interactive maze game where you can play as well as visualise how maze is generated.",
      logo: "",
      link: {
        label: "maze.shrutsureja.me",
        href: "https://maze.shrutsureja.me/",
      },
    },
    {
      title: "BharatShamikshak",
      techStack: [
        "Hackathon Project",
        "ReactJS",
        "Flask",
        "Langchain",
        "LlamaCpp",
        "ChromaDB",
      ],
      description:
        "LLM based application which lets users chat, search and explore documents with the help of LLM.",
      logo: "",
      link: {
        label: "maze.shrutsureja.me",
        href: "https://maze.shrutsureja.me/",
      },
    },
  ],
} as const;
