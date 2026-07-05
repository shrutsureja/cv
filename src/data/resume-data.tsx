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
        "Backend engineer working primarily in Go on enterprise messaging and CRM products. Technologies: Go, RabbitMQ, MongoDB, Redis, Postgres, AWS",
      projects: [
        {
          title: "Chatomate (Enterprise Messaging Platform)",
          link: "https://chatomate.in/",
          highlights: [
            "Leading the strategic migration of NestJS microservices to Go for a platform processing ~500 million API calls/month.",
            "Achieved a 95% baseline memory reduction and a 71% reduction in peak CPU usage during k6 stress testing.",
            "Developed a generic connection manager using Go generics with a 5-state machine, heartbeat monitoring and exponential backoff for MongoDB and Redis.",
            "Built reusable Go packages (connmgr, logx, mongox, redisx) to standardize production-grade connection management across the monorepo.",
          ],
        },
        {
          title: "LeadMastro (Multi-tenant CRM)",
          link: "https://leadmastro.com/",
          highlights: [
            "Architected a complete multi-tenant CRM backend from scratch in Go, with 50+ database models and RBAC-based role management.",
            "Built an event-driven automation engine using RabbitMQ with a custom worker pool pattern and dynamic per-tenant queue partitioning.",
            "Designed a per-user subscription lifecycle using Razorpay with HMAC-verified webhooks for 10+ event types; integrated OAuth 2.0, WhatsApp Business API and AWS (S3, SES, Cognito).",
          ],
        },
      ],
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
