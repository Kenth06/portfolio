import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["light", "dark", "system"];

function getStoredTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
}

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? "#1d1f21" : "#fafafa");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme(getStoredTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const changeTheme = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      id="toggle-theme"
      className="theme-button"
      type="button"
      aria-label="Toggle theme"
      data-theme={theme}
      onClick={changeTheme}
    >
      {theme === "light" ? <Monitor size={25} strokeWidth={1.5} /> : null}
      {theme === "dark" ? <Sun size={25} strokeWidth={1.5} /> : null}
      {theme === "system" ? <Moon size={25} strokeWidth={1.5} /> : null}
    </button>
  );
}
