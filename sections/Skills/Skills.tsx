"use client";

import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import SkillCategory from "./SkillCategory";

import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animation";

import { SKILL_CATEGORIES } from "../../lib/skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 bg-[#050816]"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I use to build scalable, performant, and modern web applications."
          />

          <div className="space-y-20">
            {SKILL_CATEGORIES.map((category) => (
              <SkillCategory
                key={category.title}
                category={category}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}