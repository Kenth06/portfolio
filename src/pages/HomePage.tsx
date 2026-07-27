import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { profile, projects, socialLinks } from "../content";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";
import type { Tab } from "../types";

const githubUrl = socialLinks.find((l) => l.label === "Github")?.href ?? "#";
const emailUrl = socialLinks.find((l) => l.label === "Email")?.href ?? "#";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" as const },
});

export function HomePage({ setActive }: { setActive: (tab: Tab) => void }) {
  const selected = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40"
    >
      {/* Hero */}
      <section className="border-b border-line pb-20">
        <motion.h1
          {...fade(0.06)}
          className="font-serif text-display-md text-ink sm:text-display-xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p {...fade(0.12)} className="pt-3 text-lead text-ink-2 sm:text-lead-lg">
          {profile.role}
        </motion.p>
        <motion.p
          {...fade(0.18)}
          className="max-w-measure pt-7 text-copy text-ink-2 sm:text-copy-lg"
        >
          I build AI systems and backends that survive contact with production, agents,
          RAG pipelines, automation, and APIs, most of it running on the edge.
        </motion.p>

        <motion.div {...fade(0.28)} className="flex flex-wrap items-center gap-3 pt-9">
          <button
            onClick={() => setActive("Projects")}
            className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-ui font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
          >
            View Projects <ArrowRight size={16} strokeWidth={2} />
          </button>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-line-2 px-5 py-3 text-ui font-medium text-ink transition hover:bg-surface"
          >
            GitHub <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </motion.div>
      </section>

      {/* Selected work */}
      <section className="pt-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-subhead font-semibold text-ink">Selected Work</h2>
            <p className="pt-1.5 text-copy-sm text-ink-2">
              A collection of projects I&rsquo;ve built.
            </p>
          </div>
          <button
            onClick={() => setActive("Projects")}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-ui font-medium text-ink-2 transition hover:text-accent"
          >
            View all projects <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-24 border-t border-line">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden py-28 text-center">
          {/* Soft gray/white spotlight behind the CTA */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(65% 80% at 50% 40%, var(--glow-cta) 0%, transparent 70%)",
            }}
          />
          <h2 className="relative z-10 font-serif text-display-sm text-ink sm:text-display">
            Want to work together?
          </h2>
          {/* Centered and only two lines long, so balance beats the global `pretty`. */}
          <p className="relative z-10 max-w-measure text-balance text-copy text-ink-2">
            Whether you have a project in mind or just want to chat, my inbox is always open.
          </p>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={emailUrl}
              className="flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-ui font-medium text-bg shadow-[0_2px_8px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:opacity-90 active:scale-[0.98]"
            >
              Get in touch <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-line-2 bg-surface px-6 py-3.5 text-ui font-medium text-ink shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition hover:bg-surface-2 active:scale-[0.98]"
            >
              <Github size={16} strokeWidth={1.8} /> GitHub
            </a>
          </div>
        </div>

        <Footer />
      </footer>
    </motion.div>
  );
}
