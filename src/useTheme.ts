import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const themeColorDark = "#16181b";
const themeColorLight = "#ffffff";

/** Read the theme the bootstrap script already applied to <html>. */
function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Apply a theme to the document and persist the user's explicit choice. */
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const dark = theme === "dark";
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? themeColorDark : themeColorLight);
  localStorage.setItem("theme", theme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
