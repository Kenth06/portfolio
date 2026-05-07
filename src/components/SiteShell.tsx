import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, socialLinks } from "../content";
import { LogoMark } from "./LogoMark";
import { SearchDialog } from "./SearchDialog";
import { ThemeToggle } from "./ThemeToggle";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <header className="site-header">
        <Link className="brand-link" to="/" aria-label="The logo of Kenneth Rios Kenneth Rios">
          <LogoMark />
          <span className="brand-text">Kenneth Rios</span>
        </Link>

        <nav className="main-nav" aria-label="Main menu">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <SearchDialog />
          <ThemeToggle />
        </div>
      </header>

      <main id="main">{children}</main>

      <section className="social-row" aria-label="Find me online">
        <span>Find me on</span>
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} aria-label={link.label}>
            {link.label === "Github" ? <Github size={20} /> : null}
            {link.label === "LinkedIn" ? <Linkedin size={18} /> : null}
            {link.label === "Email" ? <Mail size={19} /> : null}
          </a>
        ))}
      </section>

      <footer className="site-footer">
        <span>
          Copyright &copy; {new Date().getFullYear()} <span>Kenneth Rios</span>
        </span>
        <nav aria-label="More on this site">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  );
}
