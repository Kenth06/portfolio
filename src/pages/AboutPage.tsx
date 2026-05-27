import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { socialLinks } from "../content";
import type { Tab } from "../types";
import { ProjectBackdrop } from "../components/projectVisuals";

const githubUrl = socialLinks.find((link) => link.label === "Github")?.href ?? "#";
const linkedinUrl = socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "#";
const emailUrl = socialLinks.find((link) => link.label === "Email")?.href ?? "#";

const aboutSegments = ["Philosophy", "Thoughts"] as const;
type AboutSegment = (typeof aboutSegments)[number];

export function AboutPage({ setActive }: { setActive: (tab: Tab) => void }) {
  const [segment, setSegment] = useState<AboutSegment>("Philosophy");

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-5 py-24"
    >
      <ProjectBackdrop />
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[3px]" />

      {/* Centered modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.85 }}
        className="relative z-10 w-full max-w-[480px] rounded-[30px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.14)] ring-1 ring-black/[0.02] sm:p-7"
      >
        {/* Top bar: segmented toggle + close */}
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center rounded-full bg-neutral-100/90 p-1">
            {aboutSegments.map((item) => (
              <button
                key={item}
                onClick={() => setSegment(item)}
                className="relative flex-1 rounded-full px-4 py-2.5 text-[13px] font-medium tracking-[-0.02em] text-neutral-500 transition hover:text-neutral-700"
              >
                {segment === item && (
                  <motion.span
                    layoutId="about-segment-active"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className={`relative z-10 ${segment === item ? "text-neutral-900" : ""}`}>{item}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setActive("Work")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100/90 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-800 active:scale-95"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {segment === "Philosophy" ? (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="px-2 pt-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Panamá · GMT-5</p>
              <p className="mt-4 font-[Georgia,'Times_New_Roman',serif] text-[18px] leading-[1.5] tracking-[-0.01em] text-neutral-800">
                I build AI systems and backends that have to survive contact with production. I care most about
                verification, auditability, and reliability, extending what already works instead of rewriting it,
                and keeping agents honest with evaluation pipelines and quality gates.
              </p>

              <div className="mt-9 space-y-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Expertise</p>
                  <div className="mt-2 space-y-0.5 text-[13px] font-medium tracking-[-0.02em] text-neutral-500">
                    <p>Agentic AI &amp; multi-agent systems</p>
                    <p>Backend, APIs &amp; automation</p>
                    <p>Cloudflare edge &amp; Durable Objects</p>
                    <p>RAG &amp; retrieval pipelines</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Credits</p>
                  <p className="mt-2 text-[13px] font-medium tracking-[-0.02em] text-neutral-500">
                    Built with React, Tailwind &amp; Framer Motion
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Contact</p>
                    <div className="mt-2 flex flex-col items-start gap-0.5 text-[13px] font-medium tracking-[-0.02em] text-neutral-500">
                      <a href={emailUrl} className="transition hover:text-neutral-900">Email</a>
                      <a href={linkedinUrl} target="_blank" rel="noreferrer" className="transition hover:text-neutral-900">LinkedIn</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Code</p>
                    <div className="mt-2 flex flex-col items-start gap-0.5 text-[13px] font-medium tracking-[-0.02em] text-neutral-500">
                      <a href={githubUrl} target="_blank" rel="noreferrer" className="transition hover:text-neutral-900">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="thoughts"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="px-2 pt-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Note</p>
              <p className="mt-4 font-[Georgia,'Times_New_Roman',serif] text-[18px] leading-[1.5] tracking-[-0.01em] text-neutral-800">
                I like systems that are simple enough to reason about and observable enough to trust. Lately I spend
                most of my time on agents with real memory, MCP tooling, and the unglamorous work of making them
                behave the same way twice.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
