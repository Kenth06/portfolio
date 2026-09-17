import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { TopNav } from "./components/TopNav";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { tabs, type Tab } from "./types";

function tabFromHash(): Tab {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  return tabs.find((t) => t.toLowerCase() === hash) ?? "Home";
}

export function App() {
  const [active, setActive] = useState<Tab>(tabFromHash);
  const navigated = useRef(false);

  useEffect(() => {
    const onHash = () => {
      navigated.current = true;
      setActive(tabFromHash());
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (tab: Tab) => {
    navigated.current = true;
    const hash = tab === "Home" ? "" : `#${tab.toLowerCase()}`;
    if (window.location.hash !== hash) history.pushState(null, "", hash || window.location.pathname);
    setActive(tab);
    window.scrollTo({ top: 0 });
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-bg font-sans text-ink">
        <TopNav active={active} setActive={go} />
        <div key={active}>
          {active === "Home" && <HomePage setActive={go} animateEntrance={!navigated.current} />}
          {active === "Projects" && <ProjectsPage />}
          {active === "About" && <AboutPage />}
        </div>
      </main>
    </MotionConfig>
  );
}
