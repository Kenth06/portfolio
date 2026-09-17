import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../motion";
import type { Project } from "../content";
import { ProjectImage } from "./ProjectImage";
import { Reveal } from "./Reveal";

export function ProjectRow({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const detailsId = useId();

  return (
    <Reveal delay={Math.min(index, 3) * 0.06}>
      <article
        className={`group grid gap-8 ${index === 0 ? "pb-10 sm:pb-12" : "border-t border-line py-10 sm:py-12"} ${
          featured ? "" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14"
        }`}
      >
        <ProjectImage
          project={project}
          className={`${featured ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10] lg:order-2"}`}
        />

        <div className={`flex flex-col ${featured ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14" : ""}`}>
          <div>
            <p className="flex flex-wrap gap-x-3 font-mono text-label text-ink-3">
              <span className="text-ink-2">{project.category}</span>
              <span className="tabular-nums">{project.shortDate}</span>
            </p>
            <h3 className={`pt-3 font-medium text-ink ${featured ? "text-display-sm sm:text-display" : "text-title sm:text-display-sm"}`}>
              {project.title}
            </h3>
          </div>

          <div className={featured ? "pt-4 lg:pt-7" : "pt-4"}>
            <p className="max-w-measure text-copy text-ink-2">{project.summary}</p>
            <p className="pt-4 font-mono text-label text-ink-3">{project.tech.join(" / ")}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-ui">
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" className="text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent">
                  Live site
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent">
                  Source
                </a>
              )}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={detailsId}
                className="text-ink-2 transition-colors hover:text-ink"
              >
                {open ? "Hide notes" : "Notes"}
              </button>
            </div>

            {open && (
              <motion.ul
                id={detailsId}
                initial={reduced ? { opacity: 0 } : { opacity: 0, transform: "translateY(-4px)" }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="max-w-measure"
              >
                {project.details.map((d) => (
                  <li key={d} className="pt-3 text-copy text-ink-2 first:pt-5">
                    {d}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
