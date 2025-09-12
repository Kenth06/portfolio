export function Footer() {
  return (
			<footer className="border-t border-border bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="text-sm text-muted-foreground mb-4 sm:mb-0">
							© {new Date().getFullYear()} Kenneth Rios. All rights reserved.
						</div>
						<div className="text-sm text-muted-foreground">
							Built with Next.js and Tailwind CSS
						</div>
					</div>
				</div>
			</footer>
		);
}
