import type { Project } from "../content";

const hasImage = (p: Project) => Boolean(p.cardImage && !p.cardImage.includes("placeholder"));

export function ProjectImage({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {hasImage(project) ? (
        <img src={project.cardImage} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <span aria-hidden className="absolute inset-0 flex items-center justify-center px-2 text-center font-mono text-label text-ink-3">
          {project.category}
        </span>
      )}
    </div>
  );
}
