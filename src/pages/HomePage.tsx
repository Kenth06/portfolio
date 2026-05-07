import { Link } from "react-router-dom";
import { homeEntries, projects } from "../content";

export function HomePage() {
  return (
    <section aria-label="Portfolio index">
      <h1 className="sr-only">Kenneth Rios portfolio</h1>
      <h2>Work</h2>
      <ol className="entry-list">
        {homeEntries.map((entry) => (
          <li key={`${entry.date}-${entry.title}`}>
            <time>{entry.date}</time>
            <Link to={entry.href}>{entry.title}</Link>
          </li>
        ))}
      </ol>

      <section className="note-section">
        <div className="section-heading-row">
          <h2>Projects</h2>
          <a href="https://github.com/Kenth06" target="_blank" rel="noreferrer">
            View more
          </a>
        </div>
        <p>
          A small set of AI, automation, and Cloudflare systems. The details stay quiet on
          purpose: useful links, direct descriptions, and enough technical context to inspect the
          work.
        </p>
        <div className="project-showcase">
          {projects.map((project) => (
            <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
              <span className="project-card-image">
                <img src={project.cardImage ?? "/placeholder.jpg"} alt="" loading="lazy" />
              </span>
              <span className="project-card-copy">
                <span className="project-card-title">{project.title}</span>
                <span className="project-card-meta">
                  <span>{project.category}</span>
                  <time>{project.shortDate}</time>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
