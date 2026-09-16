import { motion, useReducedMotion } from "framer-motion";
import { experience, projects } from "../content";
import { AsciiField } from "../ascii/AsciiField";
import { ContactBlock } from "../components/ContactBlock";
import { ExperienceList } from "../components/ExperienceList";
import { Footer } from "../components/Footer";
import { ProjectRow } from "../components/ProjectRow";
import { Section } from "../components/Section";
import { EASE_OUT } from "../motion";
import type { Tab } from "../types";

const current = experience[0];

export function HomePage({ setActive }: { setActive: (tab: Tab) => void }) {
  const reduced = useReducedMotion();
  const enter = (delay: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
      : {
          initial: { opacity: 0, transform: "translateY(16px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.6, ease: EASE_OUT, delay },
        };

  return (
    <div>
      {/* First screen is exactly one viewport: identity field above, claim band below. */}
      <div className="grid h-svh min-h-[36rem] grid-rows-[minmax(0,1fr)_auto]">
        {/* The canvas gets its own band between the nav and the caption, so glyphs never run under text. */}
        <section className="flex min-h-0 flex-col bg-field text-field-ink">
          <div aria-hidden className="h-20 shrink-0" />
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <AsciiField className="absolute inset-0 h-full w-full" fontSize={13} />
          </div>
          <div className="flex flex-wrap justify-between gap-2 px-6 pb-5 pt-3 font-mono text-label opacity-70 sm:px-10 lg:px-14">
            <span>David, Panamá</span>
            <span className="hidden sm:inline">
              Now: {current.role} at {current.company}
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-7 px-6 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-14 lg:py-14">
          <motion.h1 {...enter(0.1)} className="text-display-sm font-medium text-ink sm:text-display xl:text-display-lg">
            AI systems that survive
            <br className="hidden sm:block" /> contact with production.
          </motion.h1>
          <motion.div {...enter(0.2)} className="lg:max-w-sm">
            <p className="text-copy text-ink-2">
              I&rsquo;m Kenneth, a full-stack developer and AI engineer. Agents, RAG pipelines,
              automation and APIs, most of it running on the edge.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <button
                onClick={() => setActive("Projects")}
                className="inline-flex h-11 items-center rounded-full bg-field px-6 text-ui font-medium text-field-ink transition-transform duration-160 ease-out active:scale-[0.97]"
              >
                View projects
              </button>
              <button
                onClick={() => setActive("About")}
                className="inline-flex h-11 items-center rounded-full border border-line-2 px-6 text-ui font-medium text-ink transition-[scale,background-color] duration-160 ease-out hover:bg-surface active:scale-[0.97]"
              >
                About me
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Section
        title="Selected work"
        action={
          <button onClick={() => setActive("Projects")} className="text-ui text-ink-2 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink">
            All {projects.length} projects
          </button>
        }
      >
        {projects.slice(0, 3).map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} featured={i === 0} />
        ))}
      </Section>

      <Section
        title="Where I've worked"
        action={
          <button onClick={() => setActive("About")} className="text-ui text-ink-2 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink">
            Full history
          </button>
        }
      >
        <ExperienceList />
      </Section>

      <ContactBlock />
      <Footer />
    </div>
  );
}
