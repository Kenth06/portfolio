"use client"

import React from "react"

export function ViewOnGithub({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition"
    >
      View on GitHub
    </a>
  )
}
