import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function useFontsReady() {
  const [ready, setReady] = useState(() => typeof document !== "undefined" && document.fonts.status === "loaded");
  useEffect(() => {
    if (ready) return;
    let alive = true;
    document.fonts.ready.then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [ready]);
  return ready;
}
