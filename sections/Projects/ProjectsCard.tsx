"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";

import { Project } from "../../lib/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const technologies = project.technologies.slice(0, 4);
  const remaining = project.technologies.length - technologies.length;

  return (
    <motion.article
      layout
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_20px_60px_rgba(79,70,229,0.25)]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Folder className="h-6 w-6 text-indigo-400" />
          </div>

          {(project.demo || project.github) && (
            <Link
              href={project.demo || project.github}
              target="_blank"
              className="rounded-lg p-2 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
          {project.title}
        </h3>

        {/* Category */}

        <p className="mt-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
          {project.category}
        </p>

        {/* Description */}

        <p className="mt-5 line-clamp-3 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
            >
              {tech}
            </span>
          ))}

          {remaining > 0 && (
            <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
              +{remaining} more
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}