"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import { PROJECTS, PROJECT_CATEGORIES } from "../../lib/projects";

import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

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
          subtitle="A collection of enterprise platforms, SaaS applications, CMS solutions and MERN products I've built throughout my professional career."
        />

        <ProjectFilter
          categories={PROJECT_CATEGORIES}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center py-24">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    No Projects Found
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Try selecting another category.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
