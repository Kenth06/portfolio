import { experience } from "../content";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

/**
 * Career as a row list: mono period, role and company, location. `detailed` adds
 * the highlights under each role.
 */
export function ExperienceList({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="border-b border-line">
      {experience.map((job, i) => (
        <Reveal key={`${job.company}-${job.period}`} delay={Math.min(i, 4) * 0.06}>
          <li className="group grid grid-cols-1 gap-x-8 gap-y-2 border-t border-line py-6 sm:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)_auto]">
            <p className="font-mono text-label leading-7 tabular-nums text-ink-3">{job.period}</p>
            <div>
              <h3 className="text-subhead font-medium text-ink">
                {job.role}{" "}
                <span className="text-ink-3">at</span>{" "}
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noreferrer" className="underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              {detailed && (
                <ul className="max-w-measure space-y-2.5 pt-4">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-copy text-ink-2">
                      <RichText text={h} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="font-mono text-label leading-7 text-ink-3 sm:col-start-2 lg:col-start-auto">{job.location}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
