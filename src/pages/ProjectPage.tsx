import { ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../content";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <article className="prose-page project-page">
      <p className="back-link">
        <Link to="/">Home</Link> / <span>{project.category}</span>
      </p>
      <h1>{project.title}</h1>
      <p className="project-meta">
        {project.date} / {project.category}
      </p>
      <p>{project.summary}</p>

      {project.detailImages?.length ? (
        <div className="project-image-stack">
          {project.detailImages.map((image, index) => (
            <figure className="project-image" key={image}>
              <img src={image} alt={`${project.title} preview ${index + 1}`} />
            </figure>
          ))}
        </div>
      ) : null}

      <section>
        <h2>Notes</h2>
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Stack</h2>
        <ul className="inline-list">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      {project.github ? (
        <p>
          <a className="external-action" href={project.github} target="_blank" rel="noreferrer">
            View on Github
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </p>
      ) : null}
    </article>
  );
}

function ProjectNotFound() {
  return (
    <article className="prose-page">
      <h1>Project not found</h1>
      <p>
        That project is not in the index. <Link to="/">Go home</Link>.
      </p>
    </article>
  );
}
