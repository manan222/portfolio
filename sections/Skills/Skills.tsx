"use client";

import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import SkillCard from "./SkillCard";

import { SKILLS } from "../../lib/skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies, frameworks, cloud platforms and tools I've used to build scalable enterprise applications."
        />

        <motion.div
          layout
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {SKILLS.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}