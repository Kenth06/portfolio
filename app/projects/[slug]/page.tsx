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
			"MCP server that brings Linear’s issue, project and roadmap workflows to any LLM client (Cursor/Claude/ChatGPT). Low‑latency Cloudflare Worker with secure secrets and optional webhooks.",
		content: `
      About Linear:
      • Linear is a purpose‑built tool for modern product development — issues, projects, roadmaps and cycles.

      What I built:
      • A typed MCP server exposing Linear tools behind a clean JSON‑RPC contract.
      • Runs on Cloudflare Workers for globally distributed, fast execution and simple secret management.
      • Small Hono router + GraphQL helpers; human‑friendly inputs are resolved to Linear IDs when needed.

      Capabilities (tools):
      • linearCreateIssue — create by team key; supports due dates.
      • linearUpdateIssue — update title/description/state (accepts state name/type alias), assignee, due date.
      • linearComment — add Markdown comments by id or key (e.g., ENG‑123).
      • linearDeleteIssue — remove issues by id or key.
      • linearListIssues — filter by team, assignee, state and date ranges (supports pagination).
      • linearListIssuesToday — issues updated today for a team or assignee.
      • linearGetIssue — detailed single issue (with relationships).
      • linearWebhookCreate / linearWebhookDelete — HMAC‑validated webhooks; optional signed forwarding.

      Why it matters:
      • Operate Linear from LLM clients with guardrails; automate triage, updates and project routines.
      • Secure by design — credentials in Workers Secrets; HMAC verification for webhooks.
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
