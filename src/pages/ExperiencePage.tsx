import { experience } from "../content";

export function ExperiencePage() {
  return (
    <article className="prose-page">
      <h1>Experience</h1>
      <p>Professional work and the systems I have been closest to.</p>

      <div className="detail-stack">
        {experience.map((item) => (
          <section key={`${item.role}-${item.period}`} className="detail-block">
            <header className="detail-heading">
              <h2>
                {item.role} at{" "}
                {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noreferrer">
                    {item.company}
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
              </h2>
              <span>
                {item.period}, {item.location}
              </span>
            </header>
            {item.notes?.map((note) => (
              <p key={note}>{note}</p>
            ))}
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
