import { useMemo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { experience } from "../content";
import type { Tab } from "../types";
import { ProjectBackdrop } from "../components/projectVisuals";

/** Parse inline `[label](url)` markdown into clickable links. */
function renderRichText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
        className="text-neutral-700 underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-900 hover:decoration-neutral-500 dark:text-neutral-300 dark:decoration-neutral-600 dark:hover:text-white dark:hover:decoration-neutral-400"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function CVPage({ setActive }: { setActive: (tab: Tab) => void }) {
  const jobs = useMemo(() => experience, []);

  return (
    <motion.div
      key="cv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative min-h-[100vh] overflow-hidden"
    >
      <ProjectBackdrop />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] dark:bg-[#16181b]/55" />

      <div className="relative z-10 flex min-h-[100vh] items-start justify-center px-5 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative flex max-h-[80vh] w-full max-w-[640px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.09)] ring-1 ring-black/[0.015] dark:bg-[#1b1e23] dark:shadow-[0_28px_90px_rgba(0,0,0,0.55)] dark:ring-white/[0.06]"
        >
          <div className="flex shrink-0 items-center justify-between px-8 pt-8 pb-5 sm:px-10 sm:pt-10">
            <h2 className="text-[15px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-neutral-100">Experience</h2>
            <button
              onClick={() => setActive("Work")}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100/90 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-800 active:scale-95 dark:bg-white/[0.06] dark:text-neutral-400 dark:hover:bg-white/[0.12] dark:hover:text-neutral-100"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>

          <div className="no-scrollbar overflow-y-auto px-8 pb-9 sm:px-10 sm:pb-10">
            <div className="space-y-12 text-neutral-500 dark:text-neutral-400">
              {jobs.map((job) => (
                <div
                  key={`${job.company}-${job.period}`}
                  className="grid gap-x-7 gap-y-3 text-[15px] font-medium leading-[1.55] tracking-[-0.035em] sm:grid-cols-[150px_1fr]"
                >
                  <p className="text-neutral-400 dark:text-neutral-400">{job.period}</p>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">{job.role}</p>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-800 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-100"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <p>{job.company}</p>
                    )}
                    <p className="text-neutral-400 dark:text-neutral-400">{job.location}</p>
                    <ul className="mt-5 list-disc space-y-2.5 pl-5 marker:text-neutral-300 dark:marker:text-neutral-600">
                      {job.highlights.slice(0, 3).map((point) => (
                        <li key={point}>{renderRichText(point)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
