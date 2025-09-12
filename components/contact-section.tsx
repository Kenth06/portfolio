import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Twitter, Github, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
			<section id="contact" className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold mb-6">
							Let's Connect
						</h2>
						<p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
							Reach me at kennethfi646@gmail.com or on LinkedIn for
							collaborations and questions.
						</p>

						<div className="grid sm:grid-cols-3 gap-6 mb-12">
							<Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
										<Mail className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold mb-2">Email</h3>
									<p className="text-sm text-muted-foreground mb-4">
										kennethfi646@gmail.com
									</p>
									<Button
										asChild
										variant="ghost"
										size="sm"
										className="group/btn"
									>
										<a href="mailto:kennethfi646@gmail.com">
											Send email
											<ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
										</a>
									</Button>
								</CardContent>
							</Card>

							<Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
										<Twitter className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold mb-2">LinkedIn</h3>
									<p className="text-sm text-muted-foreground mb-4">
										/in/kenneth-r-7328b8230
									</p>
									<Button
										asChild
										variant="ghost"
										size="sm"
										className="group/btn"
									>
										<a
											href="https://linkedin.com/in/kenneth-r-7328b8230"
											target="_blank"
											rel="noreferrer"
										>
											View profile
											<ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
										</a>
									</Button>
								</CardContent>
							</Card>

							<Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
										<Github className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold mb-2">GitHub</h3>
									<p className="text-sm text-muted-foreground mb-4">
										@your-github
									</p>
									<Button
										asChild
										variant="ghost"
										size="sm"
										className="group/btn"
									>
										<a href="#" target="_blank" rel="noreferrer">
											View code
											<ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
										</a>
									</Button>
								</CardContent>
							</Card>
						</div>

						<div className="text-center">
							<p className="text-muted-foreground italic">
								Building useful systems with care.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
}
