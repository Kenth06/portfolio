import { Link } from "react-router-dom";
import { homeEntries } from "../content";

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
    </section>
  );
}
