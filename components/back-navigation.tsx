import Link from "next/link"

interface BackNavigationProps {
  href: string
  label: string
}

export function BackNavigation({ href, label }: BackNavigationProps) {
  return (
    <div className="mb-8">
      <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
        ← {label}
      </Link>
    </div>
  )
}
