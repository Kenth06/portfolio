import { skillGroups } from "../content";
import { Reveal } from "./Reveal";

export function SkillsTable() {
  return (
    <dl className="border-b border-line">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={Math.min(i, 4) * 0.05}>
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line py-7 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <dt>
              <p className="text-subhead font-medium text-ink">{group.title}</p>
              <p className="max-w-measure pt-1.5 text-meta text-ink-3">{group.summary}</p>
            </dt>
            <dd className="min-w-0 text-copy-lg leading-8 text-ink-2">
              {group.items.map((item, j) => (
                <span key={item}>
                  <span className="whitespace-nowrap text-ink">{item}</span>
                  {j < group.items.length - 1 && <span aria-hidden className="px-2 font-mono text-ink-3">/</span>}{" "}
                </span>
              ))}
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
