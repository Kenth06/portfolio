import { motion } from "framer-motion";
import { X } from "lucide-react";
import { skillGroups } from "../content";
import type { Tab } from "../types";
import { ProjectBackdrop } from "../components/projectVisuals";

export function SkillsPage({ setActive }: { setActive: (tab: Tab) => void }) {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative min-h-[100vh] overflow-hidden"
    >
      <ProjectBackdrop />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      <div className="relative z-10 flex min-h-[100vh] items-start justify-center px-5 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative flex max-h-[80vh] w-full max-w-[640px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.09)] ring-1 ring-black/[0.015]"
        >
          <div className="flex shrink-0 items-center justify-between px-8 pt-8 pb-5 sm:px-10 sm:pt-10">
            <h2 className="text-[15px] font-semibold tracking-[-0.03em] text-neutral-900">Skills</h2>
            <button
              onClick={() => setActive("Work")}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100/90 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-800 active:scale-95"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>

          <div className="no-scrollbar overflow-y-auto px-8 pb-9 sm:px-10 sm:pb-10">
            <div className="space-y-10">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-neutral-900">{group.title}</h3>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] tracking-[-0.02em] text-neutral-400">
                    {group.summary}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-[12px] font-medium tracking-[-0.01em] text-neutral-600"
                      >
                        {item}
                      </span>
                    ))}
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
