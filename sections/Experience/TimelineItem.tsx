"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { Experience } from "../../lib/experience";

interface Props {
  experience: Experience;
}

export default function TimelineItem({
  experience,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_50px_rgba(99,102,241,0.18)]"
    >
      {/* Gradient Glow */}

      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-8 lg:p-10">

        {/* ==========================
            Header
        =========================== */}

        <div className="flex flex-col gap-6 md:flex-row md:items-start">

          {/* Logo */}

          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

            <Image
              src={experience.logo}
              alt={experience.company}
              width={60}
              height={60}
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Initials fallback */}

            <span className="absolute text-2xl font-bold text-indigo-400">
              {experience.company.charAt(0)}
            </span>

          </div>

          {/* Company Info */}

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h3 className="text-3xl font-bold text-white">
                {experience.role}
              </h3>

              {experience.current && (
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
                  Current
                </span>
              )}

            </div>

            <h4 className="mt-2 text-xl font-semibold text-indigo-400">
              {experience.company}
            </h4>

            <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-400">

              <div className="flex items-center gap-2">

                <FaCalendarAlt className="text-indigo-400" />

                <span>
                  {experience.startDate} — {experience.endDate}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <FaMapMarkerAlt className="text-indigo-400" />

                <span>{experience.location}</span>

              </div>

            </div>

          </div>

        </div>

        {/* ==========================
            Description
        =========================== */}

        <p className="mt-8 leading-8 text-gray-300">
          {experience.description}
        </p>

        {/* ==========================
            Responsibilities
        =========================== */}

        <div className="mt-10">

          <h4 className="mb-5 text-lg font-semibold text-white">
            Key Responsibilities
          </h4>

          <div className="grid gap-4">

            {experience.responsibilities.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  x: 5,
                }}
                className="flex items-start gap-4"
              >
                <FaCheckCircle
                  className="mt-1 shrink-0 text-indigo-400"
                  size={18}
                />

                <p className="leading-7 text-gray-300">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* ==========================
            Technologies
        =========================== */}

        <div className="mt-10">

          <h4 className="mb-5 text-lg font-semibold text-white">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300"
              >
                {tech}
              </motion.span>
            ))}

          </div>

        </div>

      </div>
    </motion.div>
  );
}