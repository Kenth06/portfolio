import { motion } from "framer-motion";
import { profile, projects } from "../content";
import { ProjectCard } from "../components/ProjectCard";

export function WorkPage() {
  return (
    <motion.div
      key="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative min-h-[100dvh]"
    >
      {/* Hero — fixed, predefined space */}
      <div className="flex h-[40vh] min-h-[280px] flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.65, ease: "easeOut" }}
          className="text-[14px] font-semibold leading-none tracking-[-0.035em] text-neutral-700 sm:text-[15px]"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.65, ease: "easeOut" }}
          className="mt-2 text-[13px] font-medium leading-none tracking-[-0.025em] text-neutral-400 sm:text-[14px]"
        >
          {profile.role}
        </motion.p>
      </div>

      {/* Projects */}
      <div className="px-4 pb-10 sm:px-5">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" }}
          className="mb-4 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400"
        >
          Projects
        </motion.h2>
        <div className="grid auto-rows-[200px] grid-cols-1 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
