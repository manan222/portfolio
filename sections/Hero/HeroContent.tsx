"use client";

import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import ProfileImage from "./ProfileImage";
import { SOCIAL_LINKS } from "../../lib/constants";

import { MdWorkspacePremium, MdEmail, MdLocationOn } from "react-icons/md";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function HeroContent() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "Abdul-Manan-Frontend-Resume.pdf";
    link.download = "Abdul-Manan-Frontend-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container>
      <div className="grid  items-center gap-16 pt-24 lg:grid-cols-2">
        {/* Left */}

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-lg text-indigo-400"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-5xl sm:text-4xl xs:text-2xl font-black leading-tight "
          >
            Abdul Manan <span className="gradient-text">Ali</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:text-2xl text-xl font-semibold text-indigo-300 md:text-3xl"
          >
            Senior Frontend Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-xl md:text-lg text-[12px] md:leading-8 leading-5 text-gray-300"
          >
            I'm Abdul Manan Ali, a Senior Frontend Engineer with over six years
            of experience building enterprise applications, SaaS products, CMS
            platforms, fintech solutions, and e-commerce applications using
            modern JavaScript technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 md:text-lg text-[12px] md:leading-8 leading-5 text-gray-300"
          >
            I enjoy transforming complex business requirements into intuitive
            user experiences while focusing on performance, scalability, and
            maintainable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 grid gap-5"
          >
            <div className="flex items-center gap-4">
              <MdWorkspacePremium className="text-indigo-400" size={28} />

              <div>
                <h4 className="font-semibold text-white">Experience</h4>

                <p className="text-gray-400">
                  6+ Years Professional Experience
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationOn className="text-indigo-400" size={28} />

              <div>
                <h4 className="font-semibold text-white">Location</h4>

                <p className="text-gray-400">Lahore, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button href="#contact">Hire Me</Button>

            <Button onClick={downloadResume} variant="secondary">
              <span className="flex items-center gap-2">
                <FaDownload />
                Resume
              </span>
            </Button>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex gap-6"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <FaGithub size={24} color="white" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <FaLinkedin size={24} color="white" />
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <MdEmail size={24} color="white" />
            </a>
          </motion.div>
        </div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex justify-center object-center"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </Container>
  );
}
