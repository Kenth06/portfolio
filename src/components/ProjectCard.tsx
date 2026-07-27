import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../content";
import { ProjectVisual } from "./projectVisuals";

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const href = project.url ?? project.github;
  const transition = { delay: 0.08 + index * 0.05, duration: 0.55, ease: "easeOut" } as const;

  const inner = (
    <>
      {/* Cover */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-line bg-surface ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <ProjectVisual slug={project.slug} cardImage={project.cardImage} title={project.title} />
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.06]" />
        {href && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        )}
      </div>

      {/* Caption */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-3.5">
        <h3 className={`font-serif text-ink ${featured ? "text-heading" : "text-subhead"}`}>
          {project.title}
        </h3>
        <span className="text-eyebrow uppercase text-ink-3">{project.category}</span>
      </div>
      <p className="max-w-measure pt-2 text-ui text-ink-2">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 pt-3">
        {project.tech.slice(0, featured ? 5 : 3).map((item) => (
          <span
            key={item}
            className="whitespace-nowrap rounded-md border border-line bg-surface px-2 py-1 text-label text-ink-2"
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );

  const className = `group flex flex-col ${href ? "cursor-pointer" : ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className={className}
    >
      {inner}
    </motion.article>
  );
}
