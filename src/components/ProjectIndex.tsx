import type { Project } from "../content";
import { AsciiImage } from "../ascii/AsciiImage";
import { Reveal } from "./Reveal";

const hasImage = (p: Project) => Boolean(p.cardImage && !p.cardImage.includes("placeholder"));

/**
 * Compact project index for the home page: one scannable row per project
 * (thumbnail, title + one-line summary, stack, date). Full notes live on the
 * Projects page. The whole row is the hit area via a stretched title link, so
 * there are no nested interactive elements.
 *
 * Hover is a tens-of-times-a-day interaction, so it stays near-imperceptible:
 * the ASCII thumbnail crossfades to the real image and the title shifts color,
 * both 200ms `ease`. Tailwind v4 already gates `hover:` behind
 * `(hover: hover)`, so touch taps never leave a stuck hover state.
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <ol className="border-b border-line">
      {projects.map((project, i) => {
        const href = project.url ?? project.github;
        const image = hasImage(project) ? project.cardImage : undefined;
        return (
          <Reveal key={project.slug} delay={Math.min(i, 4) * 0.05}>
            <li className="group relative grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-x-5 gap-y-1 border-t border-line py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,15rem)_4.5rem]">
              <AsciiImage
                src={image}
                seed={project.slug}
                alt={project.title}
                revealOnHover
                fontSize={5}
                className="row-span-2 aspect-[4/3] self-start lg:row-span-1 lg:self-center"
              />

              <div className="min-w-0">
                <h3 className="text-subhead font-medium text-ink sm:text-heading">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors duration-200 ease-[ease] after:absolute after:inset-0 group-hover:text-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="line-clamp-2 pt-1 text-meta text-ink-2 sm:text-copy">{project.summary}</p>
              </div>

              <p className="col-start-2 flex flex-col gap-0.5 font-mono text-label text-ink-3 lg:col-start-auto">
                <span className="text-ink-2">{project.category}</span>
                <span className="hidden truncate sm:block">{project.tech.slice(0, 2).join(" / ")}</span>
              </p>

              <p className="hidden text-right font-mono text-label tabular-nums text-ink-3 lg:block">{project.shortDate}</p>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
