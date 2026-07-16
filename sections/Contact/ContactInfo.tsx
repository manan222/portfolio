"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "../../lib/contacts";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
          Contact Information
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Let&apost;s build something amazing together.
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          I&apost;m always interested in discussing new opportunities,
          React & Next.js projects, enterprise applications,
          or simply connecting with fellow developers.
        </p>

      </div>

      {/* Contact Cards */}

      <div className="space-y-5">

        {CONTACT_INFO.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                x: 8,
              }}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">

                <Icon
                  size={26}
                  className="text-indigo-400 transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              <div>

                <h4 className="text-sm uppercase tracking-wider text-gray-400">
                  {item.title}
                </h4>

                <p className="mt-1 text-lg font-semibold text-white">
                  {item.value}
                </p>

              </div>

            </motion.a>

          );
        })}

      </div>

      {/* Social Links */}

      <div>

        <h3 className="mb-5 text-xl font-semibold text-white">
          Connect With Me
        </h3>

        <div className="flex gap-4">

          {SOCIAL_LINKS.map((social) => {

            const Icon = social.icon;

            return (

              <motion.div
                key={social.name}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
              >

                <Link
                  href={social.href}
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500/10"
                >

                  <Icon
                    size={24}
                    className="text-white"
                  />

                </Link>

              </motion.div>

            );

          })}

        </div>

      </div>

      {/* Resume */}

      <motion.a
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        href="/resume.pdf"
        download
        className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:shadow-indigo-500/30"
      >
        Download Resume
      </motion.a>

    </div>
  );
}