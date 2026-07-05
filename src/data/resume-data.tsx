import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shrut Sureja",
  initials: "SS",
  location: "Rajkot, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Rajkot",
  about: "Backend Engineer | Go | Distributed Systems",
  summary:
    "Backend Engineer working with Go, RabbitMQ and distributed systems. Currently at Kevit.io, leading the migration of NestJS microservices to Go for an enterprise messaging platform processing ~500 million API calls/month, and building a multi-tenant CRM backend from scratch.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92169549?v=4",
  personalWebsiteUrl: "https://shrutsureja.com",
  contact: {
    email: "shrutsureja.work@gmail.com",
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
      degree: "Bachelor's Degree in Computer Engineering (CGPA: 8.99)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Kevit.io",
      link: "https://kevit.io/",
      badges: ["Onsite"],
      title: "Jr. Software Development Engineer",
      logo: "",
      start: "6/2024",
      end: undefined,
      description:
        "Leading the strategic migration of NestJS microservices to Go for Chatomate, an enterprise messaging platform processing ~500 million API calls/month — achieved a 95% memory reduction and 71% lower peak CPU usage. Architected a multi-tenant CRM backend (LeadMastro) from scratch in Go with RabbitMQ-driven automation and Razorpay subscriptions. Technologies: Go, RabbitMQ, MongoDB, Redis, Postgres, AWS",
    },
  ],
  leadership: [
    "Leading AI adoption across the engineering team by identifying and implementing LLM-based tools to optimize development workflows.",
    "Managed the development of Introo (internal product), providing technical roadmap guidance and direct mentorship to a junior intern.",
  ],
  skills: [
    "Go",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C/C++",
    "Node.js",
    "RabbitMQ",
    "Postgres",
    "Redis",
    "MongoDB",
    "GORM",
    "Gofiber",
    "Hono",
    "ExpressJS",
    "Cloudflare Workers",
    "AWS (S3, SES, Cognito)",
  ],
  projects: [
    {
      title: "Bounty Hook",
      techStack: ["Open Source", "Cloudflare Workers", "Twitter API", "Hono", "Bun"],
      description:
        "Automated tweets announcing bounty winners chosen by repository admins. Serverless Cloudflare Workers handle bounty triggers from GitHub via Twitter APIs and OAuth2. Received a $50 bounty for the contribution.",
      logo: "",
      link: {
        label: "github.com/code100x/bounty-hook",
        href: "https://github.com/code100x/bounty-hook",
      },
    },
    {
      title: "Maze Game",
      techStack: ["Side Project", "TypeScript", "ReactJS", "Vite", "ExpressJS"],
      description:
        "An interactive maze game where you can play as well as visualise how the maze is generated.",
      logo: "",
      link: {
        label: "maze.shrutsureja.me",
        href: "https://maze.shrutsureja.me/",
      },
    },
  ],
} as const;
