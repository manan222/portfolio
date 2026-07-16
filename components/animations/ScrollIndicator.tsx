"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center">

        <span className="mb-3 text-xs uppercase tracking-[4px] text-gray-400">
          Scroll
        </span>

        <div className="flex h-16 w-8 justify-center rounded-full border border-white/20">

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-indigo-500"
          />

        </div>

      </div>
    </motion.div>
  );
}