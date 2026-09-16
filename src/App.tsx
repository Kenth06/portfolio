import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { EASE_OUT } from "./motion";
import { TopNav } from "./components/TopNav";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { tabs, type Tab } from "./types";

/** Tabs are mirrored in the URL hash (#projects, #about) so views can be linked and survive reloads. */
function tabFromHash(): Tab {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  return tabs.find((t) => t.toLowerCase() === hash) ?? "Home";
}

export function App() {
  const [active, setActive] = useState<Tab>(tabFromHash);

  useEffect(() => {
    const onHash = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (tab: Tab) => {
    const hash = tab === "Home" ? "" : `#${tab.toLowerCase()}`;
    if (window.location.hash !== hash) history.pushState(null, "", hash || window.location.pathname);
    setActive(tab);
    window.scrollTo({ top: 0 });
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-bg font-sans text-ink">
        <TopNav active={active} setActive={go} />
        {/* Tab switches are frequent: the new view fades in immediately, with no exit that would block it. */}
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15, ease: EASE_OUT }}>
          {active === "Home" && <HomePage setActive={go} />}
          {active === "Projects" && <ProjectsPage />}
          {active === "About" && <AboutPage />}
        </motion.div>
      </main>
    </MotionConfig>
  );
}
