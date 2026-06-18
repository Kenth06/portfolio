import { motion } from "framer-motion";
import { profile } from "../content";
import { tabs, type Tab } from "../types";

export function TopNav({ active, setActive }: { active: Tab; setActive: (tab: Tab) => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="absolute inset-x-0 top-6 z-50 flex items-center justify-between px-6 sm:top-7 sm:px-10"
    >
      {/* Wordmark → Home */}
      <button
        onClick={() => setActive("Home")}
        className="text-[18px] font-semibold tracking-[-0.02em] text-ink transition hover:opacity-80"
      >
        {profile.name}
      </button>

      {/* Centered nav pill */}
      <nav className="absolute left-1/2 -translate-x-1/2">
        <div className="rounded-full border border-line bg-surface/80 p-1.5 backdrop-blur-2xl">
          <div className="relative flex items-center gap-0.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="relative h-10 min-w-[72px] rounded-full px-4 text-[14px] font-medium tracking-[-0.01em] text-ink-2 transition hover:text-ink sm:text-[15px]"
              >
                {active === tab && (
                  <motion.span
                    layoutId="top-nav-active"
                    className="absolute inset-0 rounded-full bg-ink/[0.06] ring-1 ring-line dark:bg-white/[0.10]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className={`relative z-10 ${active === tab ? "text-ink" : ""}`}>{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
