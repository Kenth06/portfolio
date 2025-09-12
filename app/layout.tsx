import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Kenneth Rios",
  description: "Generative AI and automation developer. Experience with LLMs, RAG, APIs, and Cloudflare Workers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
			<html
				lang="en"
				className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<body className="font-sans text-fade-scope">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="relative z-30 flex justify-end px-4 mt-2 sm:fixed sm:top-4 sm:right-4 sm:px-0 sm:mt-0">
							<ThemeToggle />
						</div>
						{children}
					</ThemeProvider>
				</body>
			</html>
		);
}
