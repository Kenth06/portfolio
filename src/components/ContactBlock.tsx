import { useState } from "react";
import { socialLinks } from "../content";
import { Reveal } from "./Reveal";

const emailHref = socialLinks.find((l) => l.label === "Email")?.href ?? "mailto:";
const email = emailHref.replace("mailto:", "");

/** Closing CTA: largest padding tier, centered, the address in mono with a working copy button. */
export function ContactBlock() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = emailHref;
    }
  };

  return (
    <section className="border-t border-line px-6 py-24 text-center sm:px-10 sm:py-32">
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
            className="inline-flex h-11 items-center gap-3 rounded-full border border-line-2 px-5 font-mono text-label text-ink-2 transition-[scale,color] duration-160 ease-out hover:text-ink active:scale-[0.97]"
          >
            {email}
            <span className="text-ink-3">{copied ? "copied" : "copy"}</span>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
