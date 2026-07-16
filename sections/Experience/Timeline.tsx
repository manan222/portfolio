"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../../lib/experience";
import TimelineItem from "../../sections/Experience/TimelineItem";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-6xl">

      {/* Vertical Line */}

      <div className="absolute left-6 top-0 hidden h-full w-[3px] rounded-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500 lg:block" />

      {/* Timeline Items */}

      <div className="space-y-20">

        {EXPERIENCE.map((item, index) => (

          <motion.div
            key={item.id}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative lg:pl-20"
          >

            {/* Timeline Dot */}

            <div className="absolute left-0 top-12 hidden lg:flex">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-indigo-500 bg-[#050816]">

                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

                {item.current && (

                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="absolute h-12 w-12 rounded-full border border-indigo-400"
                  />

                )}

              </div>

            </div>

            {/* Card */}

            <TimelineItem
              experience={item}
            />

          </motion.div>

        ))}

      </div>

    </div>
  );
}