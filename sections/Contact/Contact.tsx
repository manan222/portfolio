"use client";

import { motion } from "framer-motion";

import Container from "../../components/layout/Container";

import SectionHeading from "../../components/ui/SectionHeading";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <SectionHeading
          title="Let's Work Together"
          subtitle="Interested in working together or have a project in mind? I'd love to hear from you."
        />

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
}
