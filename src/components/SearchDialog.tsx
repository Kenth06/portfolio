import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchPortfolio } from "../search";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchPortfolio(query), [query]);

  useEffect(() => {
    if (!open) return;
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="icon-button search-button" type="button" aria-label="search" onClick={() => setOpen(true)}>
        <Search size={24} strokeWidth={1.5} />
      </button>

      {open ? (
        <div className="search-layer" role="presentation">
          <button
            className="search-backdrop"
            type="button"
            aria-label="Close search"
            onClick={() => setOpen(false)}
          />
          <section
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search portfolio"
          >
            <div className="search-panel-header">
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="search-close" type="button" onClick={() => setOpen(false)}>
                <X size={18} aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>
            <ul className="search-results">
              {results.map((result) => (
                <li key={`${result.href}-${result.title}`}>
                  <a href={result.href} onClick={() => setOpen(false)}>
                    <span>{result.title}</span>
                    <small>{result.description}</small>
                  </a>
                </li>
              ))}
              {results.length === 0 ? <li className="empty-search">No matches</li> : null}
            </ul>
          </section>
        </div>
      ) : null}
    </>
  );
}
