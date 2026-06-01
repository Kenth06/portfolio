import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TopNav } from "./components/TopNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { CVPage } from "./pages/CVPage";
import type { Tab } from "./types";

export function App() {
  const [active, setActive] = useState<Tab>("Work");

  return (
    <main className="min-h-screen bg-white font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Helvetica_Neue',Arial,sans-serif] text-neutral-900 dark:bg-[#16181b] dark:text-neutral-100">
      <section className="relative mx-auto min-h-screen max-w-[1500px] overflow-hidden bg-white dark:bg-[#16181b]">
        <TopNav active={active} setActive={setActive} />
        <ThemeToggle />

        <AnimatePresence mode="wait">
          {active === "Work" && <WorkPage />}
          {active === "About" && <AboutPage setActive={setActive} />}
          {active === "Skills" && <SkillsPage setActive={setActive} />}
          {active === "CV" && <CVPage setActive={setActive} />}
        </AnimatePresence>
      </section>
    </main>
  );
}
