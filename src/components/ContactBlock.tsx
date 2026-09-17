import { useEffect, useRef, useState } from "react";
import { socialLinks } from "../content";
import { FlareMark } from "../flare/FlareMark";
import { Reveal } from "./Reveal";

const emailHref = socialLinks.find((l) => l.label === "Email")?.href ?? "mailto:";
const email = emailHref.replace("mailto:", "");
const COPIED_HOLD_MS = 1800;

export function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = emailHref;
      return;
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), COPIED_HOLD_MS);
  };

  return (
    <section className="border-t border-line">
      <FlareMark className="h-[22rem] bg-field sm:h-[30rem]" />
      <div className="px-6 py-20 text-center sm:px-10 sm:py-28">
        <Reveal className="flex flex-col items-center">
          <h2 className="text-display-sm font-medium text-ink sm:text-display">Want to work together?</h2>
          <p className="max-w-measure pt-5 text-balance text-copy text-ink-2">
            Whether you have a project in mind or just want to chat, my inbox is always open.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={emailHref}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-field px-6 text-ui font-medium text-field-ink transition-transform duration-160 ease-out active:scale-[0.97]"
            >
              Send an email
            </a>

            <button
              onClick={copy}
              data-copied={copied}
              className="group inline-flex h-11 items-center gap-3 rounded-full border border-line-2 px-5 font-mono text-label text-ink-2 transition-[scale,color,border-color] duration-200 ease-out hover:text-ink active:scale-[0.97] data-[copied=true]:border-success data-[copied=true]:text-success"
            >
              {email}
              <span className="grid">
                <span className="col-start-1 row-start-1 transition-[opacity,filter,scale] duration-200 ease-out group-data-[copied=true]:scale-[0.96] group-data-[copied=true]:opacity-0 group-data-[copied=true]:blur-[2px] motion-reduce:group-data-[copied=true]:scale-100 motion-reduce:group-data-[copied=true]:blur-none">
                  copy
                </span>
                <span
                  aria-hidden
                  className="col-start-1 row-start-1 inline-flex scale-[0.96] items-center gap-1.5 opacity-0 blur-[2px] transition-[opacity,filter,scale] duration-200 ease-out group-data-[copied=true]:scale-100 group-data-[copied=true]:opacity-100 group-data-[copied=true]:blur-none motion-reduce:scale-100 motion-reduce:blur-none"
                >
                  <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M3 8.5 6.5 12 13 4.5"
                      pathLength={1}
                      className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] delay-75 duration-300 ease-out group-data-[copied=true]:[stroke-dashoffset:0] motion-reduce:[stroke-dashoffset:0] motion-reduce:transition-none"
                    />
                  </svg>
                  copied
                </span>
              </span>
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email address copied" : ""}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
