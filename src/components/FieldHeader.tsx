import type { ReactNode } from "react";
import { AsciiField } from "../ascii/AsciiField";

/**
 * Compact identity field for inner pages: the same oxide surface and ASCII
 * field as the home hero, at a shorter height, with the page title set inside it.
 */
export function FieldHeader({ title, meta, seed }: { title: string; meta: ReactNode; seed: number }) {
  return (
    <section className="relative flex min-h-[26rem] flex-col justify-end overflow-hidden bg-field px-6 pb-10 pt-28 text-field-ink sm:h-[52svh] sm:px-10 lg:px-14 lg:pb-14">
      <AsciiField seed={seed} fontSize={12} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <h1 className="text-display-lg font-medium sm:text-display-xl">{title}</h1>
        <p className="font-mono text-label opacity-70">{meta}</p>
      </div>
    </section>
  );
}
