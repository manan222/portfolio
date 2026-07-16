"use client";

import { motion } from "framer-motion";



import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import { staggerContainer } from "../../utils/animation";
import Timeline from "./Timeline";


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* ==============================
          Background Effects
      =============================== */}

      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />

      {/* Grid Overlay */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ==============================
          Content
      =============================== */}

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <SectionHeading
            title="Experience"
            subtitle="My professional journey building scalable products, enterprise applications and modern user experiences."
          />

          <Timeline />
        </motion.div>
      </Container>
    </section>
  );
}