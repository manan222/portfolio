"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "../../lib/techStack";

function TechnologyCard({
  name,
  Icon,
  color,
}: {
  name: string;
  Icon: React.ElementType;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="group glass glow-card rounded-2xl border border-white/10 p-6 transition-all duration-300"
    >
      <div className="flex flex-col items-center">

        <Icon
          size={42}
          style={{
            color,
          }}
          className="transition duration-300 group-hover:rotate-12"
        />

        <h4 className="mt-5 text-center font-semibold text-white">
          {name}
        </h4>

      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="mt-28">

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mb-14 text-center text-4xl font-black gradient-text"
      >
        Technology Stack
      </motion.h2>

      <div className="space-y-16">

        {TECH_STACK.map((group) => (

          <motion.div
            key={group.category}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="mb-8 text-2xl font-bold text-indigo-300">
              {group.category}
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {group.technologies.map((tech) => (

                <TechnologyCard
                  key={tech.name}
                  name={tech.name}
                  Icon={tech.icon}
                  color={tech.color}
                />

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}