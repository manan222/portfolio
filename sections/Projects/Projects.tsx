"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import {
  PROJECTS,
  PROJECT_CATEGORIES,
} from "../../lib/projects";


import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof PROJECT_CATEGORIES)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid Overlay */}

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
          title="Featured Projects"
          subtitle="A selection of enterprise applications, CMS platforms, SaaS products and MERN applications I've built."
        />

        <ProjectFilter
          categories={[...PROJECT_CATEGORIES]}
          selected={selectedCategory}
          onChange={(category)=> {
            setSelectedCategory(category)
          }}
        />

        <motion.div
          layout
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}