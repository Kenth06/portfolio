import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Chapter wrapper: 1px rule on top, gutters, and a head (title
 * on the left, optional action on the right). Chapters are separated by
 * rules, never wrapped in cards.
 */
export function Section({
  title,
  action,
  children,
  id,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-line px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-title font-medium text-ink sm:text-display-sm">{title}</h2>
        </div>
        {action}
      </Reveal>
      <div className="pt-12 sm:pt-16">{children}</div>
    </section>
  );
}
