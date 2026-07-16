"use client";

import { motion } from "framer-motion";

import { SkillCategory as SkillCategoryType } from "../../lib/skill";
import SkillCard from "./SkillCard";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({
  category,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="space-y-10"
    >
      {/* Category Heading */}

      <div className="flex items-center gap-5">

        <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

        <h3 className="text-3xl font-bold text-white">
          {category.title}
        </h3>

      </div>

      {/* Skills */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}