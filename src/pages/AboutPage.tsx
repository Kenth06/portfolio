import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { experience, skillGroups, socialLinks } from "../content";

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
        className="text-ink underline decoration-line-2 underline-offset-2 transition hover:text-accent hover:decoration-accent"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink-3">{children}</p>
);

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40"
    >
      {/* Intro */}
      <section className="border-b border-line pb-16">
        <h1 className="font-serif text-[64px] leading-none tracking-[-0.01em] text-ink sm:text-[80px]">
          About
        </h1>
        <p className="max-w-[58ch] pt-8 text-[18px] leading-[1.6] text-ink-2">
          I'm a full-stack developer and AI engineer based in Panamá. I build AI systems and
          backends that have to survive contact with production — and I care most about
          verification, auditability, and reliability.
        </p>
        <p className="max-w-[58ch] pt-4 text-[18px] leading-[1.6] text-ink-2">
          Lately I spend most of my time on agents with real memory, MCP tooling, and the
          unglamorous work of making them behave the same way twice.
        </p>
      </section>

      {/* Skills */}
      <section className="border-b border-line py-16">
        <Eyebrow>Skills</Eyebrow>
        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-[24px] leading-none text-ink">{group.title}</h3>
              <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.5] text-ink-2">
                {group.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / CV */}
      <section className="border-b border-line py-16">
        <Eyebrow>Experience</Eyebrow>
        <div className="mt-10 space-y-14">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="grid gap-x-10 gap-y-3 sm:grid-cols-[170px_1fr]"
            >
              <p className="font-mono text-[13px] leading-relaxed text-ink-3">{job.period}</p>
              <div>
                <h3 className="font-serif text-[24px] leading-tight text-ink">{job.role}</h3>
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] font-medium text-ink-2 underline decoration-line-2 underline-offset-2 transition hover:text-accent"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="text-[15px] font-medium text-ink-2">{job.company}</p>
                )}
                <p className="text-[14px] text-ink-3">{job.location}</p>
                <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[15px] leading-[1.55] text-ink-2 marker:text-ink-3">
                  {job.highlights.slice(0, 4).map((point) => (
                    <li key={point}>{renderRichText(point)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-3 font-serif text-[36px] leading-tight text-ink">
          Let's build something.
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line-2 px-5 py-3 text-[14px] font-medium text-ink transition hover:bg-surface hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
