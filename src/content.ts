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

export const profile = {
  name: "Kenneth Rios",
  role: "Full Stack Developer & AI Engineer",
};

export const socialLinks = [
  { href: "https://github.com/Kenth06", label: "Github" },
  { href: "https://linkedin.com/in/kenneth-r-7328b8230", label: "LinkedIn" },
  { href: "mailto:kennethfi646@gmail.com", label: "Email" },
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
      "Supports issue creation, updates, comments, deletion, filtering, detail lookup, and HMAC-validated webhook forwarding.",
    ],
    tech: ["Cloudflare Workers", "TypeScript", "Hono", "MCP", "Linear API"],
    github: "https://github.com/Kenth06/linear-mcp",
    cardImage: "/linear-mcp-card.png",
    detailImages: ["/linear-mcp-hero.png"],
  },
  {
    slug: "safari-chrome-extension",
    title: "Safari + Chrome Web Extension",
    date: "August 2024",
    shortDate: "Aug 2024",
    category: "Extension",
    summary:
      "Cross-browser extension built to streamline internal purchasing workflows at RednBlue.",
    details: [
      "Built a cross-browser extension for Safari and Chrome using modern web extension APIs.",
      "Improved internal purchase flows with a faster, cleaner interface for repeated operational tasks.",
      "Handled sensitive workflow data carefully while keeping the extension lightweight.",
    ],
    tech: ["TypeScript", "Web Extensions", "Chrome", "Safari"],
    cardImage: "/Safari + Chrome.png",
  },
  {
    slug: "order-tracking-scraper",
    title: "Order-tracking Scraper",
    date: "May 2024",
    shortDate: "May 2024",
    category: "Automation",
    summary:
      "Scraper and webhook service built on Cloudflare Workers for order tracking.",
    details: [
      "Monitors order status and triggers webhooks when meaningful changes occur.",
      "Uses scheduled scraping, resilient error handling, and a small Worker deployment footprint.",
      "Designed to automate a repetitive internal tracking process without adding operational weight.",
    ],
    tech: ["Cloudflare Workers", "TypeScript", "Webhooks"],
    cardImage: "/placeholder.jpg",
  },
  {
    slug: "rag-cs-assistant",
    title: "RAG + CS Assistant",
    date: "March 2024",
    shortDate: "Mar 2024",
    category: "AI / Chatbot",
    summary:
      "Retrieval-augmented customer service assistant with function calling and integrations.",
    details: [
      "Built RAG over a support knowledge base with tool/function calling for operational workflows.",
      "Used Cloudflare Workers, D1, Drizzle ORM, Vectorize, OpenAI embeddings, LangChain, and KV.",
      "Focused on useful retrieval, integration ergonomics, and observability-friendly behavior.",
    ],
    tech: ["Cloudflare Workers", "RAG", "LangChain", "OpenAI", "Vectorize"],
    cardImage: "/placeholder.jpg",
  },
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "ASSA Compañía de Seguros",
    companyUrl: "https://www.assanet.com/",
    period: "May 2026 to Present",
    location: "Panama",
    highlights: [
      "Helping bring AI capabilities into the company's existing platforms: agents, small tools, microservices, and [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) / graph-RAG pipelines used in day-to-day workflows.",
      "Working across TypeScript, React, .NET / C# ASP.NET, and Python, on Azure and Azure DevOps under agile delivery.",
      "Trying to extend what is already in place carefully, with an eye on security, auditability, and reliability.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Zelta",
    companyUrl: "https://www.zelta.dev/",
    period: "Feb 2026 to Apr 2026",
    location: "David, Panama",
    highlights: [
      "Worked on an autonomous agent platform with long-term memory, cross-session fact extraction, and task scheduling.",
      "Built self-correcting pipelines that take natural language and generate, compile, test, and deploy full-stack apps, running several agents in parallel with isolated workspaces.",
      "Built custom [Claude Code](https://www.anthropic.com/claude-code) and [Codex](https://openai.com/index/introducing-codex/) skills used internally for repetitive engineering processes and for code design and verification, plus a small governance setup to keep projects consistent.",
      "Helped shape internal guidelines for how the team's agents behave: verification habits, quality gates in CI, and a small library of reusable skills.",
      "Set up evaluation pipelines with [GEPA](https://github.com/gepa-ai/gepa) and [PromptFoo](https://www.promptfoo.dev/) to keep an eye on agent quality and iterate on prompts based on real behavior.",
      "At [Nomyt](https://nomyt.co) (recruitment SaaS for Latin America), I built all of the platform's AI features: candidate recommendations based on AI comparisons between CVs and job openings, AI-assisted job opening creation, [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) to extract information from user CVs, and embeddings to relate CV tags and experience to platform tags.",
      "Contributed features and bug fixes to [Chatwoot](https://www.chatwoot.com) (open-source omnichannel platform, 27.8k+ stars), including [MCP](https://modelcontextprotocol.io/) support for Captain AI, the platform's built-in AI agent.",
    ],
  },
  {
    role: "Software Developer · AI Engineering",
    company: "RednBlue",
    companyUrl: "https://rednbluepty.com/",
    period: "Apr 2024 to Feb 2026",
    location: "David, Chiriquí, Panama",
    highlights: [
      "Created a no-code SaaS for building AI agents with custom memory (confidence scoring, per-memory TTL), multi-tenant routing, draft/publish versioning, and dynamic [MCP](https://modelcontextprotocol.io/) tool injection.",
      "Built a natural-language data insights system with two coordinated agents: one runs SQL queries, the other turns results into interactive visualizations.",
      "Created several remote MCP servers running in production for logistics, customer operations, and shipping at RednBlue.",
      "Built a customer service bot with RAG, several tools, asynchronous processing, and a small multi-agent RAG setup isolated per tenant.",
      "Built Photowall for [FANLYC Chiriquí](https://relevo.fanlyc.org/), a live photo wall shown on a public screen during the event. Attendees scanned a QR code on a banner to upload photos from their phones; behind the scenes a single [Durable Object](https://developers.cloudflare.com/durable-objects/) coordinated the whole flow: [OpenAI moderation](https://platform.openai.com/docs/guides/moderation), approved / rejected / queued states, [R2](https://developers.cloudflare.com/r2/) for the images themselves, [D1](https://developers.cloudflare.com/d1/) for metadata, and real-time delivery to the on-site screen. On the admin side I added role-based controls so organizers could reorder the queue, adjust the photo transition speed, delete photos, and slot in video ads between photos.",
      "Built tracking scrapers with [Puppeteer](https://pptr.dev/) on Cloudflare Workers, using the [steel-sdk](https://github.com/steel-dev/steel-browser) for browser sessions.",
      "Built email automations on Cloudflare [Email Workers](https://developers.cloudflare.com/email-routing/email-workers/), along with smaller services for CRM sync, audio transcription, document extraction, and invoice generation.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "RednBlue",
    companyUrl: "https://rednbluepty.com/",
    period: "Feb 2024 to Apr 2024",
    location: "David, Chiriquí, Panama",
    highlights: [
      "Built a customer service chatbot with [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) and [function calling](https://platform.openai.com/docs/guides/function-calling) from scratch, my first hands-on exposure to production AI work.",
    ],
  },
  {
    role: "Customer Service Team Supervisor",
    company: "RednBlue",
    companyUrl: "https://rednbluepty.com/",
    period: "Dec 2023 to Feb 2024",
    location: "David, Chiriquí, Panama",
    highlights: [
      "Helped run a virtual team: task assignment, load balancing, cross-department communication, and small process improvements.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Agentic AI",
    summary:
      "Building autonomous and multi-agent systems with persistent memory, human-in-the-loop, and evaluation pipelines.",
    items: [
      "OpenAI Agents SDK",
      "Cloudflare Agents SDK",
      "MCP",
      "Multi-Agent Orchestration",
      "HITL Workflows",
      "Vector Memory",
      "RAG",
      "Graph RAG",
      "Function Calling",
      "Prompt Engineering",
      "GEPA",
      "PromptFoo",
    ],
  },
  {
    title: "Production Models",
    summary:
      "Models shipped to production across reasoning, coding, transcription, and multimodal workloads.",
    items: [
      "GPT-5",
      "GPT-5-mini",
      "GPT-4.1",
      "Claude Sonnet 4.5",
      "Claude Haiku 4.5",
      "Gemini Flash / Pro",
      "Whisper-1",
      "Cloudflare Workers AI",
    ],
  },
  {
    title: "Cloudflare",
    summary:
      "Edge-first infrastructure for AI, agents, and data. Most of my recent backend work runs here.",
    items: [
      "Workers",
      "Durable Objects",
      "D1",
      "R2",
      "KV",
      "Vectorize",
      "Queues",
      "Workflows",
      "Hyperdrive",
      "AI Gateway",
      "Browser Rendering",
    ],
  },
  {
    title: "Languages & Frameworks",
    summary:
      "Daily-driver languages and frameworks across web, API, and enterprise work.",
    items: [
      "TypeScript",
      "JavaScript",
      "Ruby",
      "Python",
      "Elixir",
      "C# / .NET",
      "ASP.NET",
      "Hono",
      "Next.js 15",
      "React 19",
      "Vue 3",
      "Rails 7",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
  },
  {
    title: "Infrastructure & Data",
    summary:
      "Cloud, databases, and the boring-but-important plumbing that keeps production honest.",
    items: [
      "Azure",
      "Azure DevOps",
      "Docker",
      "Git",
      "GitHub Actions",
      "Sentry",
      "Playwright",
      "OAuth 2.1",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Vectorize",
    ],
  },
  {
    title: "Open Source",
    summary:
      "Public contributions to widely-used projects in the AI ecosystem.",
    items: [
      "OpenAI Agents SDK (20k+ stars)",
      "Chatwoot (27.8k+ stars)",
    ],
  },
];
