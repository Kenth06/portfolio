import { motion } from "framer-motion";
import { tabs, type Tab } from "../types";

export function TopNav({ active, setActive }: { active: Tab; setActive: (tab: Tab) => void }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="absolute left-1/2 top-7 z-50 -translate-x-1/2"
    >
      <div className="rounded-full bg-[#ececec]/95 p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] backdrop-blur-2xl dark:bg-white/[0.06] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:ring-white/[0.08]">
        <div className="relative flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative h-11 min-w-[64px] rounded-full px-3.5 text-[15px] font-medium tracking-[-0.035em] text-neutral-600 transition hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 sm:h-12 sm:min-w-[88px] sm:px-6 sm:text-[17px]"
            >
              {active === tab && (
                <motion.span
                  layoutId="top-nav-active"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_12px_30px_rgba(15,23,42,0.075)] ring-1 ring-white/90 dark:bg-white/[0.12] dark:shadow-[0_12px_30px_rgba(0,0,0,0.45)] dark:ring-white/[0.06]"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className={`relative z-10 ${active === tab ? "text-neutral-900 dark:text-white" : ""}`}>{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
