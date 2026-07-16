"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import {
  MdWorkspacePremium,
  MdLocationOn,
} from "react-icons/md";

import Button from "../../components/ui/Button";
import developerImage from "../../public/images/abdul-manan-ali.jpeg"

import {
  fadeLeft,
  fadeRight,
} from "../../utils/animation";

export default function AboutContent() {
  return (
    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* Left */}

      <motion.div
        variants={fadeLeft()}
      >
        <div className="relative mx-auto w-fit">

          {/* Glow */}

          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-3xl" />

          <div className="glass relative overflow-hidden rounded-3xl border border-white/10">

            <Image
              src={developerImage}
              alt="Abdul Manan Ali"
              width={520}
              height={620}
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Experience Badge */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -right-8 bottom-8 rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl"
          >
            <h3 className="gradient-text text-3xl font-black">
              6+
            </h3>

            <p className="text-sm text-gray-400">
              Years Experience
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Right */}

      <motion.div
        variants={fadeRight()}
      >
        <span className="rounded-full bg-indigo-500/20 px-5 py-2 text-sm text-indigo-300">
          Senior Frontend Engineer
        </span>

        <h2 className="mt-6 text-5xl font-black leading-tight">
          Creating
          <span className="gradient-text">
            {" "}Modern Digital Experiences
          </span>
        </h2>

        <p className="mt-8 leading-8 text-gray-300">
          I&apost;m Abdul Manan Ali, a Senior Frontend Engineer with over
          six years of experience building enterprise applications,
          SaaS products, CMS platforms, fintech solutions and
          e-commerce applications using modern JavaScript technologies.
        </p>

        <p className="mt-6 leading-8 text-gray-300">
          I enjoy transforming complex business requirements into
          intuitive user experiences while focusing on performance,
          scalability and maintainable architecture.
        </p>

        {/* Info */}

        <div className="mt-10 grid gap-5">

          <div className="flex items-center gap-4">

            <MdWorkspacePremium
              className="text-indigo-400"
              size={28}
            />

            <div>

              <h4 className="font-semibold">
                Experience
              </h4>

              <p className="text-gray-400">
                6+ Years Professional Experience
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <MdLocationOn
              className="text-indigo-400"
              size={28}
            />

            <div>

              <h4 className="font-semibold">
                Location
              </h4>

              <p className="text-gray-400">
                Lahore, Pakistan
              </p>

            </div>

          </div>

        </div>

        {/* Technologies */}

        <div className="mt-12 flex flex-wrap gap-5">

          <FaReact
            className="text-cyan-400"
            size={36}
          />

          <SiNextdotjs
            className="text-white"
            size={36}
          />

          <SiTypescript
            className="text-blue-400"
            size={36}
          />

          <SiTailwindcss
            className="text-cyan-300"
            size={36}
          />

          <FaNodeJs
            className="text-green-500"
            size={36}
          />

          <SiMongodb
            className="text-green-400"
            size={36}
          />

          <FaGitAlt
            className="text-orange-500"
            size={36}
          />

        </div>

        {/* CTA */}

        <div className="mt-14 flex flex-wrap gap-5">

          <Button href="#projects">
            View Projects
          </Button>

          <Button
            href="/resume.pdf"
            variant="secondary"
          >
            Download Resume
          </Button>

        </div>

      </motion.div>

    </div>
  );
}