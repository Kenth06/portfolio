import { BackNavigation } from "@/components/back-navigation";

export default function ExperiencePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="max-w-2xl mx-auto px-6 py-16">
				<BackNavigation href="/" label="Home" />

				<header className="mb-16">
					<h1 className="text-2xl font-medium mb-4">Experience</h1>
					<p className="text-muted-foreground">
						My professional journey and key contributions.
					</p>
				</header>

				<div className="space-y-12">
					<div className="space-y-8">
						<div>
							<div className="flex items-center justify-between mb-2">
								<h3 className="text-foreground">
									Developer —{" "}
									<a
										href="https://rednbluepty.com/"
										target="_blank"
										rel="noreferrer"
										className="underline-offset-4 hover:underline"
									>
										RednBlue
									</a>
								</h3>
								<span className="text-muted-foreground text-sm">
									Apr 2024–Present, Panama
								</span>
							</div>
							<p className="text-sm text-muted-foreground mb-3">
								RednBlue’s Software Development Team is transitioning into a
								subcompany — see{" "}
								<a
									href="https://www.zelta.dev/"
									target="_blank"
									rel="noreferrer"
									className="underline-offset-4 hover:underline"
								>
									Zelta
								</a>
								.
							</p>
							<ul className="list-disc pl-5 text-muted-foreground space-y-2">
								<li>
									LLM integration with prompt engineering, tools, and function
									calling.
								</li>
								<li>
									Multi-tenant AI agents using Cloudflare Agents SDK and OpenAI
									Agents with MCP.
								</li>
								<li>
									High-performance APIs with Hono on Cloudflare Workers; queues
									with BullMQ.
								</li>
								<li>
									Safari and Chrome extension to streamline internal purchases.
								</li>
							</ul>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<h3 className="text-foreground">
									Intern —{" "}
									<a
										href="https://rednbluepty.com/"
										target="_blank"
										rel="noreferrer"
										className="underline-offset-4 hover:underline"
									>
										RednBlue
									</a>
								</h3>
								<span className="text-muted-foreground text-sm">
									Feb 2024–Apr 2024, Panama
								</span>
							</div>
							<ul className="list-disc pl-5 text-muted-foreground space-y-2">
								<li>
									RAG for a customer service assistant and chatbot with function
									calling.
								</li>
								<li>
									Stack: Cloudflare Workers, D1, Drizzle ORM, Vectorize, OpenAI
									embeddings, LangChain, KV.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
