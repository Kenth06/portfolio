import { ContactBlock } from "../components/ContactBlock";
import { ExperienceList } from "../components/ExperienceList";
import { FieldHeader } from "../components/FieldHeader";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { SkillsTable } from "../components/SkillsTable";

export function AboutPage() {
  return (
    <div>
      <FieldHeader title="About" meta="Full-stack developer & AI engineer" seed={42} />

      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <Reveal className="max-w-[44rem]">
          <p className="text-heading font-medium text-ink sm:text-title">
            I build AI systems and backends that have to survive contact with production, and I
            care most about verification, auditability, and reliability.
          </p>
          <p className="max-w-measure pt-6 text-copy-lg text-ink-2">
            I&rsquo;m based in Panamá. Lately I spend most of my time on agents with real memory,
            MCP tooling, and the unglamorous work of making them behave the same way twice.
          </p>
        </Reveal>
      </section>

      <Section title="Experience">
        <ExperienceList detailed />
      </Section>

      <Section title="What I work with">
        <SkillsTable />
      </Section>

      <ContactBlock />
      <Footer />
    </div>
  );
}
