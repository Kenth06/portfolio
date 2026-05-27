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
      className="relative min-h-[100vh]"
    >
      <div className="flex min-h-[55vh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
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

      <div className="grid auto-rows-[260px] grid-cols-1 gap-3 px-3 pb-3 sm:auto-rows-[230px] sm:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
