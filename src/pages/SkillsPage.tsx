import { skillGroups } from "../content";

export function SkillsPage() {
  return (
    <article className="prose-page">
      <h1>Skills</h1>
      <p>Core tools and patterns across AI systems, backend work, and Cloudflare infrastructure.</p>

      <div className="detail-stack">
        {skillGroups.map((group) => (
          <section key={group.title} className="detail-block">
            <h2>{group.title}</h2>
            <p>{group.summary}</p>
            <ul className="inline-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
