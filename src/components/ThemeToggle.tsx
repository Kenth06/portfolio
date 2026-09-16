import { useTheme } from "../useTheme";

/** Plain text toggle; the label names the mode you switch to. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      className="text-meta text-ink-2 transition-colors hover:text-ink"
    >
      {next === "dark" ? "Dark mode" : "Light mode"}
    </button>
  );
}
