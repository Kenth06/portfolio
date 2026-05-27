import { motion } from "framer-motion";
import type { Project } from "../content";
import { ProjectVisual, projectSpan } from "./projectVisuals";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.github;

  const transition = { delay: 0.16 + index * 0.06, duration: 0.6, ease: "easeOut" } as const;
  const className = `group flex flex-col ${href ? "cursor-pointer" : ""} ${projectSpan(index)}`;

  const inner = (
    <>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[12px] bg-[#f7f7f7] ring-1 ring-black/[0.02] transition duration-500 group-hover:scale-[0.99]">
        <ProjectVisual slug={project.slug} cardImage={project.cardImage} title={project.title} />
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-3">
        <p className="text-[14px] font-semibold tracking-[-0.02em] text-neutral-800">{project.title}</p>
        <span className="text-[13px] font-medium tracking-[-0.02em] text-neutral-400">{project.category}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={transition} className={className}>
      {inner}
    </motion.article>
  );
}
