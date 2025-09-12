"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"
  const handleClick = () => setTheme(isDark ? "light" : "dark")

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-2 text-sm text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <div className="h-4 w-4 rounded-full border border-border" />
      )}
      <span className="hidden sm:inline">{mounted ? (isDark ? "Light" : "Dark") : "Theme"}</span>
    </button>
  )
}
