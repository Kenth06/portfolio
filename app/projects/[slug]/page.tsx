import { BackNavigation } from "@/components/back-navigation"
import { notFound } from "next/navigation"
import { ViewOnGithub } from "@/components/view-on-github";

const projectsData = {
	"safari-chrome-extension": {
		title: "Safari + Chrome Web Extension",
		date: "August 2024",
		category: "Extension",
		description:
			"Safari and Chrome extension developed to streamline internal purchases at RednBlue.",
		content: `
      A cross-browser extension that optimizes internal purchase workflows.

      Highlights:
      • Cross-browser support (Safari, Chrome)
      • Streamlined internal purchase UX
      • Secure data handling
      • Built with modern web extension APIs
    `,
		tech: ["TypeScript", "Web Extensions", "Chrome", "Safari"],
	},
	"rag-cs-assistant": {
		title: "RAG + CS Assistant",
		date: "March 2024",
		category: "AI / Chatbot",
		description:
			"RAG system for customer service with function calling and advanced integrations.",
		content: `
      Retrieval-Augmented Generation assistant for customer service with tool/function calling and integrations.

      Features:
      • Tool/function calling
      • RAG over support knowledge base
      • Multi-integration workflows
      • Observability-friendly design
    `,
		tech: ["Cloudflare Workers", "RAG", "LangChain", "OpenAI", "Vectorize"],
	},
	"order-tracking-scraper": {
		title: "Order-tracking Scraper",
		date: "May 2024",
		category: "Automation",
		description:
			"Scraper and webhook developed in Cloudflare Workers for order tracking.",
		content: `
      A scraping service that monitors order status and triggers webhooks upon changes.

      Capabilities:
      • Scheduled scraping
      • Webhook notifications
      • Resilient error handling
      • Deployed on Cloudflare Workers
    `,
		tech: ["Cloudflare Workers", "TypeScript", "Webhooks"],
	},
	"linear-mcp": {
		title: "Linear MCP (Cloudflare Workers)",
		date: "Sep 2025",
		category: "Workers / MCP",
		description:
			"Remote MCP server to manage Linear via HTTP on Cloudflare Workers. Built with TypeScript, Hono, and the MCP SDK. Can be used from any LLM client that supports MCP servers.",
		content: `
      What I built:
      • An MCP server that exposes Linear tools (create/update/delete/comment, list, get, webhooks) behind a clean JSON-RPC interface.
      • Runs on Cloudflare Workers for low-latency, globally-distributed execution and simple secret management.
      • Strong typing and a small Hono router for fast, maintainable endpoints.

      Capabilities:
      • Create/update/delete/comment issues by id or key (ENG-123).
      • List issues with filters: team, assignee, state, date ranges; supports pagination.
      • Get a single issue with enriched fields; map human-friendly state names to IDs.
      • Webhooks with HMAC verification and optional signed forwarding.
      • Typed responses, consistent error mapping, basic rate-limit handling.

      Why it matters:
      • Drop-in for MCP-compatible LLM clients (e.g., desktop assistants/Cursor/OpenAI/Claude) to operate on Linear issues with guardrails.
      • Secure by design: all credentials via Workers Secrets and HMAC verification for webhooks.
    `,
		tech: ["Cloudflare Workers", "TypeScript", "Hono", "MCP", "Linear API"],
		github: "https://github.com/Kenth06/linear-mcp",
		hero: "/linear-mcp-hero.png",
	},
} as const;

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = projectsData[params.slug as keyof typeof projectsData];

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-16">
				<BackNavigation href="/projects" label="Projects" />

				<header className="mb-8">
					<div className="flex items-center gap-4 mb-4">
						<span className="text-sm text-muted-foreground">
							{project.date}
						</span>
						<span className="text-sm text-muted-foreground/70">•</span>
						<span className="text-sm text-muted-foreground">
							{project.category}
						</span>
					</div>
					<h1 className="text-4xl font-medium mb-6 text-foreground">
						{project.title}
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed">
						{project.description}
					</p>
				</header>

				{project.hero && (
					<div className="mb-10 overflow-hidden rounded-lg">
						<img
							src={project.hero}
							alt={`${project.title} preview`}
							className="w-full h-auto object-cover"
						/>
					</div>
				)}

				<article className="prose prose-invert max-w-none mb-12">
					<div className="text-muted-foreground leading-relaxed whitespace-pre-line">
						{project.content}
					</div>
				</article>

				<div className="flex flex-wrap gap-2 mb-8">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-muted text-foreground/90 text-sm rounded-full"
						>
							{tech}
						</span>
					))}
				</div>

				<div className="flex gap-4">
					{project.github && <ViewOnGithub href={project.github} />}
				</div>
			</div>
		</div>
	);
}
