import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../content";
import { seededGradient } from "../lib/gradient";

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
  const gradient = seededGradient(project.slug);
  const transition = { delay: 0.08 + index * 0.05, duration: 0.55, ease: "easeOut" } as const;

  const inner = (
    <>
      {/* Gradient cover — the project's visual identity, generated from its slug. */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-line ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
        style={{ background: gradient.mesh }}
      >
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/[0.08]" />
        {href && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        )}
      </div>

      {/* Caption */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-3.5">
        <h3
          className={`font-serif tracking-[-0.01em] text-ink ${
            featured ? "text-[26px] leading-none" : "text-[20px] leading-none"
          }`}
        >
          {project.title}
        </h3>
        <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-3">
          {project.category}
        </span>
      </div>
      <p className="max-w-[52ch] pt-2 text-[14px] leading-[1.5] text-ink-2">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 pt-3">
        {project.tech.slice(0, featured ? 5 : 3).map((item) => (
          <span
            key={item}
            className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[11px] text-ink-2"
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
