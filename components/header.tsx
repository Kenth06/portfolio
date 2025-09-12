"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
			{ href: "/projects", label: "Projects" },
			{ href: "/experience", label: "Experience" },
			{ href: "/skills", label: "Skills" },
		];

  return (
			<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<a href="/" className="text-xl font-bold text-primary">
								Kenneth Rios
							</a>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
								>
									{item.label}
								</a>
							))}
						</nav>

						{/* Mobile menu button */}
						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
								{navItems.map((item) => (
									<a
										key={item.href}
										href={item.href}
										className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
										onClick={() => setIsMenuOpen(false)}
									>
										{item.label}
									</a>
								))}
							</div>
						</div>
					)}
				</div>
			</header>
		);
}
