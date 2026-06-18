import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TopNav } from "./components/TopNav";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import type { Tab } from "./types";

export function App() {
  const [active, setActive] = useState<Tab>("Home");

  return (
    <main className="min-h-screen bg-bg font-sans text-ink">
      <div className="relative mx-auto min-h-screen max-w-[1280px] overflow-hidden bg-bg">
        <TopNav active={active} setActive={setActive} />

        <AnimatePresence mode="wait">
          {active === "Home" && <HomePage key="home" setActive={setActive} />}
          {active === "Projects" && <ProjectsPage key="projects" />}
          {active === "About" && <AboutPage key="about" />}
        </AnimatePresence>
      </div>
    </main>
  );
}
