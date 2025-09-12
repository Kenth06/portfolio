import { BackNavigation } from "@/components/back-navigation"
import { notFound } from "next/navigation"

const projectsData = {
  "safari-chrome-extension": {
    title: "Safari + Chrome Web Extension",
    date: "August 2024",
    category: "Extension",
    description: "Safari and Chrome extension developed to streamline internal purchases at RednBlue.",
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
    description: "RAG system for customer service with function calling and advanced integrations.",
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
    description: "Scraper and webhook developed in Cloudflare Workers for order tracking.",
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
} as const

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <BackNavigation href="/projects" label="Projects" />

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-muted-foreground">{project.date}</span>
            <span className="text-sm text-muted-foreground/70">•</span>
            <span className="text-sm text-muted-foreground">{project.category}</span>
          </div>
          <h1 className="text-4xl font-medium mb-6 text-foreground">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
        </header>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 rounded-lg p-8 mb-8">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">{project.title}</div>
              <p className="text-lg">Project Preview</p>
            </div>
          </div>
        </div>

        <article className="prose prose-invert max-w-none mb-12">
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.content}</div>
        </article>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-muted text-foreground/90 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {/* Links could be added here if needed */}
        </div>
      </div>
    </div>
  )
}
