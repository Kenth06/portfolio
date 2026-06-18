import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects, socialLinks } from "../content";
import { ProjectCard } from "../components/ProjectCard";
import type { Tab } from "../types";

const githubUrl = socialLinks.find((l) => l.label === "Github")?.href ?? "#";

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
        <motion.p
          {...fade(0.05)}
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink-3"
        >
          Panamá · Available for work
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="pt-6 font-serif text-[64px] leading-[0.95] tracking-[-0.01em] text-ink sm:text-[88px]"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          {...fade(0.16)}
          className="pt-3 font-serif text-[24px] italic leading-tight text-ink-2 sm:text-[30px]"
        >
          {profile.role}
        </motion.p>
        <motion.p
          {...fade(0.22)}
          className="max-w-[40ch] pt-7 text-[17px] leading-[1.6] text-ink-2 sm:text-[18px]"
        >
          I build AI systems and backends that survive contact with production — agents,
          RAG pipelines, automation, and APIs, most of it running on the edge.
        </motion.p>

        <motion.div {...fade(0.28)} className="flex flex-wrap items-center gap-3 pt-9">
          <button
            onClick={() => setActive("Projects")}
            className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[14px] font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
          >
            View Projects <ArrowRight size={16} strokeWidth={2} />
          </button>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-line-2 px-5 py-3 text-[14px] font-medium text-ink transition hover:bg-surface"
          >
            GitHub <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </motion.div>
      </section>

      {/* Selected work */}
      <section className="pt-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink-3">
              Selected Work
            </p>
            <h2 className="pt-2 font-serif text-[36px] leading-none text-ink">Things I've shipped</h2>
          </div>
          <button
            onClick={() => setActive("Projects")}
            className="flex items-center gap-1.5 text-[14px] font-medium text-ink-2 transition hover:text-accent"
          >
            All projects <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-3">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-medium text-ink-2 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </motion.div>
  );
}
