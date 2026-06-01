import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="absolute right-7 top-7 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#ececec]/95 text-neutral-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] backdrop-blur-2xl transition hover:text-neutral-900 active:scale-95 dark:bg-white/[0.06] dark:text-neutral-300 dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:ring-white/[0.08] dark:hover:text-white sm:flex"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
