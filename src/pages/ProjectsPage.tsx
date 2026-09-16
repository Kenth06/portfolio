import { projects } from "../content";
import { ContactBlock } from "../components/ContactBlock";
import { FieldHeader } from "../components/FieldHeader";
import { Footer } from "../components/Footer";
import { ProjectRow } from "../components/ProjectRow";

export function ProjectsPage() {
  return (
    <div>
      <FieldHeader title="Projects" meta={`${projects.length} projects · 2024–2026`} seed={21} />
      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </section>
      <ContactBlock />
      <Footer />
    </div>
  );
}
