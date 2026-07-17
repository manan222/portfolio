"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "../../lib/skills";

interface Props {
  category: SkillCategory;
}

export default function SkillCard({
  category,
}: Props) {
  const Icon = category.icon;

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_60px_rgba(99,102,241,.18)]"
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
            <Icon className="h-6 w-6 text-indigo-300" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 transition hover:border-indigo-400 hover:bg-indigo-500/20"
            >
              • {skill}
            </span>
          ))}
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}

        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-500">
          <span>{category.id}</span>

          <span>{category.version}</span>
        </div>
      </div>
    </motion.article>
  );
}