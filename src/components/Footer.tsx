import { profile, socialLinks } from "../content";
import { ThemeToggle } from "./ThemeToggle";

/** Slim bottom bar shared across pages: copyright, social links, theme toggle. */
export function Footer() {
  return (
    <div className="flex flex-col gap-4 border-t border-line py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p className="font-geist text-[13px] text-ink-3">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="flex items-center justify-center gap-6 sm:justify-end">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-medium text-ink-2 transition hover:text-accent"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </div>
  );
}
