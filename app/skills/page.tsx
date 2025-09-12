import { BackNavigation } from "@/components/back-navigation";

export default function SkillsPage() {
  return (
			<div className="min-h-screen bg-background text-foreground">
				<div className="max-w-2xl mx-auto px-6 py-16">
					<BackNavigation href="/" label="Home" />

					<header className="mb-16">
						<h1 className="text-2xl font-medium mb-4">Skills</h1>
						<p className="text-muted-foreground">
							Core skills across AI/ML, backend, and cloud/infra.
						</p>
					</header>

					<div className="space-y-12">
						<div>
							<h2 className="text-muted-foreground mb-6">AI/ML</h2>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									LLMs, RAG, embeddings, prompt engineering, LangChain, vector
									databases (Vectorize, Pinecone).
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs px-2 py-1 bg-muted rounded">
										LLMs
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										RAG
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Embeddings
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Prompt Engineering
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										LangChain
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Vectorize
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Pinecone
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										OpenAI
									</span>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-muted-foreground mb-6">Backend</h2>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									Node.js, TypeScript, Express, Hono, REST, JWT. Automation and
									scraping with Puppeteer, Cheerio, Steel.dev.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Node.js
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										TypeScript
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Express
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Hono
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										REST
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										JWT
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Puppeteer
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Cheerio
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Steel.dev
									</span>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-muted-foreground mb-6">Cloud/Infra</h2>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									Cloudflare Workers, Docker, Redis, BullMQ, Email Workers.
									Monitoring and auth with Sentry and more.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Cloudflare Workers
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Docker
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Redis
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										BullMQ
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Email Workers
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Queues
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Automation
									</span>
									<span className="text-xs px-2 py-1 bg-muted rounded">
										Sentry
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
