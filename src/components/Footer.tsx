import { profile, socialLinks } from "../content";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-line px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
      <p className="font-mono text-label tabular-nums text-ink-3">
        © {new Date().getFullYear()} {profile.name} · David, Panamá
      </p>
      <div className="flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="text-meta text-ink-2 transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </footer>
  );
}
