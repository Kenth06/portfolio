import type { ReactNode } from "react";
import { AsciiField } from "../ascii/AsciiField";

export function FieldHeader({ title, meta, seed }: { title: string; meta: ReactNode; seed: number }) {
  return (
    <section className="flex h-[30rem] flex-col bg-field px-6 pb-10 text-field-ink sm:h-[60svh] sm:min-h-[30rem] sm:px-10 lg:px-14 lg:pb-14">
      <div aria-hidden className="h-20 shrink-0" />
      <div className="relative -mx-6 min-h-0 flex-1 overflow-hidden sm:-mx-10 lg:-mx-14">
        <AsciiField seed={seed} fontSize={12} className="absolute inset-0 h-full w-full opacity-80" />
      </div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pt-6">
        <h1 className="text-display-lg font-medium sm:text-display-xl">{title}</h1>
        <p className="font-mono text-label opacity-70">{meta}</p>
      </div>
    </section>
  );
}
