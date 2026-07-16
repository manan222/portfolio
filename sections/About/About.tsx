"use client";

import AboutContent from "./AboutContent";
import SectionHeading from "../../components/ui/SectionHeading";
import Container from "../../components/layout/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animation";
import Stats from "./Stats";
import TechStack from "./TechStack";


export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 bg-[#050816]"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Frontend Engineer passionate about building scalable, beautiful and performant web applications."
          />

          <AboutContent />
          <Stats />
          <TechStack/>
        </motion.div>
      </Container>
    </section>
  );
}