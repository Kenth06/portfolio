export type Project = {
  slug: string;
  title: string;
  date: string;
  shortDate: string;
  category: string;
  summary: string;
  details: string[];
  tech: string[];
  github?: string;
  cardImage?: string;
  detailImages?: string[];
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  notes?: string[];
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" }
] as const;

export const socialLinks = [
  { href: "https://github.com/Kenth06", label: "Github" },
  { href: "https://linkedin.com/in/kenneth-r-7328b8230", label: "LinkedIn" },
  { href: "mailto:kennethfi646@gmail.com", label: "Email" }
] as const;

export const projects: Project[] = [
  {
    slug: "linear-mcp",
    title: "Linear MCP",
    date: "September 2025",
    shortDate: "Sep 2025",
    category: "Workers / MCP",
    summary:
      "MCP server that brings Linear issue, project, and roadmap workflows to any LLM client.",
    details: [
      "A typed MCP server exposing Linear tools behind a clean JSON-RPC contract.",
      "Runs on Cloudflare Workers for globally distributed execution and simple secret management.",
      "Uses a small Hono router and GraphQL helpers to resolve human-friendly inputs into Linear IDs.",
      "Supports issue creation, updates, comments, deletion, filtering, detail lookup, and HMAC-validated webhook forwarding."
    ],
    tech: ["Cloudflare Workers", "TypeScript", "Hono", "MCP", "Linear API"],
    github: "https://github.com/Kenth06/linear-mcp",
    cardImage: "/linear-mcp-card.png",
    detailImages: ["/linear-mcp-hero.png", "/linear-mcp-card.png"]
  },
  {
    slug: "safari-chrome-extension",
    title: "Safari + Chrome Web Extension",
    date: "August 2024",
    shortDate: "Aug 2024",
    category: "Extension",
    summary: "Cross-browser extension built to streamline internal purchasing workflows at RednBlue.",
    details: [
      "Built a cross-browser extension for Safari and Chrome using modern web extension APIs.",
      "Improved internal purchase flows with a faster, cleaner interface for repeated operational tasks.",
      "Handled sensitive workflow data carefully while keeping the extension lightweight."
    ],
    tech: ["TypeScript", "Web Extensions", "Chrome", "Safari"],
    cardImage: "/placeholder.jpg"
  },
  {
    slug: "order-tracking-scraper",
    title: "Order-tracking Scraper",
    date: "May 2024",
    shortDate: "May 2024",
    category: "Automation",
    summary: "Scraper and webhook service built on Cloudflare Workers for order tracking.",
    details: [
      "Monitors order status and triggers webhooks when meaningful changes occur.",
      "Uses scheduled scraping, resilient error handling, and a small Worker deployment footprint.",
      "Designed to automate a repetitive internal tracking process without adding operational weight."
    ],
    tech: ["Cloudflare Workers", "TypeScript", "Webhooks"],
    cardImage: "/placeholder.jpg"
  },
  {
    slug: "rag-cs-assistant",
    title: "RAG + CS Assistant",
    date: "March 2024",
    shortDate: "Mar 2024",
    category: "AI / Chatbot",
    summary: "Retrieval-augmented customer service assistant with function calling and integrations.",
    details: [
      "Built RAG over a support knowledge base with tool/function calling for operational workflows.",
      "Used Cloudflare Workers, D1, Drizzle ORM, Vectorize, OpenAI embeddings, LangChain, and KV.",
      "Focused on useful retrieval, integration ergonomics, and observability-friendly behavior."
    ],
    tech: ["Cloudflare Workers", "RAG", "LangChain", "OpenAI", "Vectorize"],
    cardImage: "/placeholder.jpg"
  }
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "ASSA Compania de Seguros",
    period: "May 2026-Present",
    location: "Panama",
    highlights: [
      "Current full-stack role in insurance technology, building production software across frontend and backend systems.",
      "Bringing AI engineering, automation, and Cloudflare-oriented delivery experience into enterprise workflows."
    ]
  },
  {
    role: "Software Developer | AI Engineer",
    company: "Zelta",
    companyUrl: "https://www.zelta.dev/",
    period: "Jan 2026-Apr 2026",
    location: "David, Panama",
    highlights: [
      "Designed autonomous AI agent platforms with persistent vector memory, dynamic code execution, and scheduled tasks.",
      "Built multi-agent code review systems with supervisor architecture, durable checkpoints, and human approval endpoints.",
      "Developed self-correcting pipelines that generate, compile, test, and deploy full-stack applications from natural language.",
      "Created AI tooling integrated with GitHub for code review, bug fixing, documentation, and direct commits.",
      "Implemented evaluation pipelines with GEPA and PromptFoo to measure and improve production agent behavior."
    ]
  },
  {
    role: "Software Developer | AI Engineering",
    company: "RednBlue",
    companyUrl: "https://rednbluepty.com/",
    period: "Apr 2024-Feb 2026",
    location: "David, Chiriqui, Panama",
    highlights: [
      "Created no-code SaaS for building AI agents with custom memory, multi-tenant routing, draft/publish versioning, and dynamic MCP tool injection.",
      "Built conversational AI for a pharmacy chain with 9 tools, bilingual support, policy pre-flight checks, and 106 documented evaluation cases.",
      "Developed real-time voice interview automation with screening, follow-up, scoring, and mid-session AI agent handoffs.",
      "Shipped 15+ typed MCP tools across 3 production servers for logistics, customer operations, and shipping workflows.",
      "Built 20+ automation microservices for tracking scrapers, CRM sync, audio transcription, document extraction, email processing, and invoice generation."
    ]
  },
  {
    role: "Software Development Intern",
    company: "RednBlue",
    companyUrl: "https://rednbluepty.com/",
    period: "Feb 2024-Apr 2024",
    location: "David, Chiriqui, Panama",
    highlights: [
      "Built a customer service chatbot with RAG and function calling from scratch, my first production AI engineering work.",
      "Worked with JavaScript, TypeScript, OpenAI, RAG, LLMs, object-oriented programming, Git, and Cloudflare."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML",
    summary:
      "LLMs, RAG, embeddings, prompt engineering, LangChain, and vector databases such as Vectorize and Pinecone.",
    items: ["LLMs", "RAG", "Embeddings", "Prompt Engineering", "LangChain", "Vectorize", "Pinecone", "OpenAI"]
  },
  {
    title: "Backend",
    summary:
      "Node.js, TypeScript, Express, Hono, REST, JWT, automation, scraping, Puppeteer, Cheerio, and Steel.dev.",
    items: ["Node.js", "TypeScript", "Express", "Hono", "REST", "JWT", "Puppeteer", "Cheerio", "Steel.dev"]
  },
  {
    title: "Cloud / Infra",
    summary:
      "Cloudflare Workers, Docker, Redis, BullMQ, Email Workers, queues, automation, and Sentry.",
    items: ["Cloudflare Workers", "Docker", "Redis", "BullMQ", "Email Workers", "Queues", "Automation", "Sentry"]
  }
];

export const homeEntries = [
  {
    date: "May 2026-Now",
    title: "Full Stack Developer at ASSA Compania de Seguros",
    href: "/experience"
  },
  {
    date: "Jan-Apr 2026",
    title: "Software Developer | AI Engineer at Zelta",
    href: "/experience"
  },
  {
    date: "Apr 2024-Feb 2026",
    title: "Software Developer | AI Engineering at RednBlue",
    href: "/experience"
  },
  {
    date: "Feb-Apr 2024",
    title: "Software Development Intern at RednBlue",
    href: "/experience"
  }
];
