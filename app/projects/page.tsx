import { BackNavigation } from "@/components/back-navigation"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      slug: "safari-chrome-extension",
      title: "Safari + Chrome Web Extension",
      date: "Aug 2024",
      category: "Extension",
      image: "/placeholder.jpg",
    },
    {
      slug: "rag-cs-assistant",
      title: "RAG + CS Assistant",
      date: "Mar 2024",
      category: "AI / Chatbot",
      image: "/placeholder.jpg",
    },
    {
      slug: "order-tracking-scraper",
      title: "Order-tracking Scraper",
      date: "May 2024",
      category: "Automation",
      image: "/placeholder.jpg",
    },
  ]

  return (
			<div className="min-h-screen bg-background text-foreground">
				<div className="max-w-6xl mx-auto px-6 py-16">
					<BackNavigation href="/" label="Home" />

					<header className="mb-16">
						<h1 className="text-2xl font-medium mb-4">Projects</h1>
						<p className="text-muted-foreground">
							A collection of things I've built and contributed to.
						</p>
					</header>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						{projects.map((project) => (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className="group block overflow-hidden hover:opacity-80 transition-opacity"
							>
								<div className="aspect-[4/3] overflow-hidden rounded-lg">
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="pt-4">
									<h3 className="text-foreground text-base font-medium mb-2 group-hover:text-muted-foreground transition-colors">
										{project.title}
									</h3>
									<div className="flex justify-between items-center text-sm">
										<span className="text-muted-foreground">
											{project.category}
										</span>
										<span className="text-muted-foreground/80">
											{project.date}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		);
}
