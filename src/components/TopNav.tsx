import { motion } from "framer-motion";
import { profile } from "../content";
import { tabs, type Tab } from "../types";

/** Floats over the oxide field on every page, so it is always drawn in field ink. */
export function TopNav({ active, setActive }: { active: Tab; setActive: (tab: Tab) => void }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 text-field-ink sm:px-10 lg:px-14">
      <button
        onClick={() => setActive("Home")}
        className="whitespace-nowrap text-wordmark font-medium transition-opacity hover:opacity-80"
      >
        {profile.name}
      </button>

      <nav aria-label="Primary">
        <ul className="flex items-center gap-5 sm:gap-7">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActive(tab)}
                aria-current={active === tab ? "page" : undefined}
                className={`relative py-1.5 text-ui transition-opacity ${active === tab ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
              >
                {tab}
                {active === tab && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-field-ink"
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
