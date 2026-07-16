"use client";

import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import ProfileImage from "./ProfileImage";
import { SOCIAL_LINKS } from "../../lib/constants";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

export default function HeroContent() {
  return (
    <Container>

      <div className="grid min-h-screen items-center gap-16 pt-24 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-3 text-lg text-indigo-400"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Abdul Manan{" "}
            <span className="gradient-text">
              Ali
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-6 text-2xl font-semibold text-indigo-300 md:text-3xl"
          >
            Senior Frontend Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            I build beautiful, scalable and high-performance
            web applications using React, Next.js,
            TypeScript, Node.js and modern frontend
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-8 flex items-center gap-3 text-gray-300"
          >
            <MdLocationOn
              className="text-indigo-400"
              size={22}
            />

            Lahore, Pakistan
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button href="#contact">
              Hire Me
            </Button>

            <Button
              href="/resume.pdf"
              variant="secondary"
            >
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
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <FaGithub
                size={24}
                color="white"
              />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <FaLinkedin
                size={24}
                color="white"
              />
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="rounded-full border border-white/10 p-4 transition hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500/20"
            >
              <MdEmail
                size={24}
                color="white"
              />
            </a>

          </motion.div>

          {/* Experience */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-14 flex gap-12"
          >

            <div>

              <h3 className="gradient-text text-4xl font-black">
                6+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>

            </div>

            <div>

              <h3 className="gradient-text text-4xl font-black">
                30+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: .9,
          }}
          className="flex justify-center"
        >
          <ProfileImage />
        </motion.div>

      </div>

    </Container>
  );
}