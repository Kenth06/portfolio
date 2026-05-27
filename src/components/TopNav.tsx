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
      <div className="rounded-full bg-[#ececec]/95 p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] backdrop-blur-2xl">
        <div className="relative flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative h-12 min-w-[92px] rounded-full px-6 text-[17px] font-medium tracking-[-0.035em] text-neutral-600 transition hover:text-neutral-800"
            >
              {active === tab && (
                <motion.span
                  layoutId="top-nav-active"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_12px_30px_rgba(15,23,42,0.075)] ring-1 ring-white/90"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className={`relative z-10 ${active === tab ? "text-neutral-900" : ""}`}>{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
