"use client";

import { Project } from "../../lib/projects";
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.article
      layout
      whileHover={{
        y: -10,
        transition: {
          duration: 0.3,
        },
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_60px_rgba(99,102,241,.18)]"
    >
      {/* ==========================
          Image
      ========================== */}

      <div className="relative h-64 overflow-hidden">

        {/* <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width:768px)100vw,
                 (max-width:1200px)50vw,
                 33vw"
        /> */}

        {/* Dark Overlay */}

        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" /> */}

        {/* Hover Overlay */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-purple-500/20"
        />

        {/* Animated Glow */}

        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

          <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

        </div>

      </div>

      {/* ==========================
          Content
      ========================== */}

      <div className="relative p-7">
          {/* ==========================
            Header
        ========================== */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                {project.category}
              </span>

              {project.featured && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Featured
                </span>
              )}

            </div>

            <h3 className="mt-5 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
              {project.title}
            </h3>

            <p className="mt-2 text-lg font-medium text-indigo-400">
              {project.subtitle}
            </p>

          </div>

        </div>

        {/* ==========================
            Description
        ========================== */}

        <p className="mt-6 line-clamp-4 leading-7 text-gray-300">
          {project.description}
        </p>

        {/* Divider */}

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Technologies & Buttons continue in 8C-2 */}
                {/* ==========================
            Technologies
        ========================== */}

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 transition hover:border-indigo-400 hover:bg-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ==========================
            Key Features
        ========================== */}

        {/* <div className="mt-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Key Features
          </h4>

          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature) => (
              <motion.li
                key={feature}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <div className="h-2 w-2 rounded-full bg-indigo-400" />

                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div> */}

        {/* ==========================
            Footer
        ========================== */}

        {/* <div className="mt-10 flex flex-wrap gap-4">

          {project.demo ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500"
            >
              Live Demo
            </motion.a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-gray-700 px-5 py-3 text-gray-400"
            >
              Private Project
            </button>
          )}

          {project.github ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-indigo-500 hover:bg-indigo-500/10"
            >
              GitHub
            </motion.a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-gray-500"
            >
              Source Private
            </button>
          )}

        </div> */}

      </div>
    </motion.article>
  );
}