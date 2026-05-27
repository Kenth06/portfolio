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
      className="relative flex min-h-[100dvh] flex-col sm:h-[100dvh]"
    >
      <div className="flex shrink-0 flex-col items-center px-6 pt-28 pb-10 text-center">
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

      <div className="grid auto-rows-[260px] grid-cols-1 gap-4 px-5 pb-6 sm:min-h-0 sm:flex-1 sm:auto-rows-fr sm:grid-cols-4 sm:gap-5 sm:px-8 sm:pb-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
