import { motion } from "framer-motion";
import { projects } from "../content";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40"
    >
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
        className="border-b border-line pb-10"
      >
        <h1 className="font-serif text-[56px] leading-none tracking-[-0.01em] text-ink sm:text-[72px]">
          Projects
        </h1>
      </motion.header>

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 pt-12 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
