import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <div className="mb-8">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Portfolio / 2025</div>
            <h1 className="leading-none">
              <span className="name-pair inline-block select-none">
                <span title="Kenneth" className="first block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-semibold tracking-[-0.02em]">Kenneth</span>
                <span title="Rios" className="last block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem] font-light tracking-[-0.025em]">Rios</span>
              </span>
            </h1>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <em>AI Engineer and Backend Developer.</em>
            </p>
            <p>
              Located in David, Chiriquí, Panama.
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="space-y-16 mb-16">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-muted-foreground">Experience</h2>
              <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                View all →
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-8">
              <div className="lg:flex-1 lg:min-w-[300px]">
                <h3 className="text-foreground mb-2">RednBlue - Developer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LLM integration with prompt engineering, tools, and function calling. Multi-tenant AI agents with
                  Cloudflare Agents SDK and OpenAI Agents with MCP.
                </p>
              </div>
              <div className="lg:flex-1 lg:min-w-[300px]">
                <h3 className="text-foreground mb-2">RednBlue - Intern</h3>
                <p className="text-muted-foreground leading-relaxed">
                  RAG for customer service and chatbot with function calling. Stack: Workers, D1, Drizzle ORM,
                  Vectorize, OpenAI embeddings, LangChain, KV.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-muted-foreground">Projects</h2>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                View all →
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-8">
              <div className="lg:flex-1 lg:min-w-[280px]">
                <Link
                  href="/projects/safari-chrome-extension"
                  className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1 mb-2"
                >
                  Safari+Chrome Web Extension <span className="text-xs opacity-60">↗</span>
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Safari and Chrome extension developed to streamline internal purchases at RednBlue.
                </p>
              </div>
              <div className="lg:flex-1 lg:min-w-[280px]">
                <Link
                  href="/projects/rag-cs-assistant"
                  className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1 mb-2"
                >
                  RAG + CS Assistant <span className="text-xs opacity-60">↗</span>
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  RAG system for customer service with function calling and advanced integrations.
                </p>
              </div>
              <div className="lg:flex-1 lg:min-w-[280px]">
                <Link
                  href="/projects/order-tracking-scraper"
                  className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1 mb-2"
                >
                  Order-tracking Scraper <span className="text-xs opacity-60">↗</span>
                </Link>
                <p className="text-muted-foreground leading-relaxed">
                  Scraper and webhook developed in Cloudflare Workers for order tracking.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-muted-foreground">Skills</h2>
              <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                View all →
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-8">
              <div className="lg:flex-1 lg:min-w-[280px]">
                <h3 className="text-foreground mb-2">AI/ML</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LLMs, RAG, embeddings, prompt engineering, LangChain, vector DBs (Vectorize, Pinecone).
                </p>
              </div>
              <div className="lg:flex-1 lg:min-w-[280px]">
                <h3 className="text-foreground mb-2">Backend</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Node.js, TypeScript, Express, Hono, REST, JWT. Fast APIs with Cloudflare Workers.
                </p>
              </div>
              <div className="lg:flex-1 lg:min-w-[280px]">
                <h3 className="text-foreground mb-2">Cloud/Infra</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cloudflare Workers, Docker, Redis, BullMQ, Email Workers. Experience with queues and automation.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-16">
          <h2 className="text-muted-foreground mb-6">Now</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality.
              <em className="block mt-2">Mindful that everything around me is someone's life work.</em>
            </p>
            <p>
              All I want to do is build intelligent systems. Generative AI, automation, efficient APIs, user
              experiences— technology is an endless medium of opportunity and creativity of which I've only scratched
              the surface.
            </p>
            <p>
              Currently focused on multi-tenant AI agents, LLM integration with function calling, and workflow
              optimization with Cloudflare Workers. Always learning new technologies and improving existing ones.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-muted-foreground mb-6">Connect</h2>
          <p className="text-muted-foreground leading-relaxed">
            Reach me at{" "}
            <a href="mailto:kennethfi646@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors">
              kennethfi646@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com/in/kenneth-r-7328b8230"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  )
}
