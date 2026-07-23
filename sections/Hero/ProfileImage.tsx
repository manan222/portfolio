"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import developerImage from "../../public/images/abdul-manan-ali.jpeg";

export default function ProfileImage() {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Outer Glow */}

      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-40 blur-3xl" />

      {/* Animated Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-4 rounded-full border border-indigo-500/30"
      />

      {/* Second Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-8 rounded-full border border-cyan-400/20"
      />

      {/* Image */}

      <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10 bg-[#111827] shadow-2xl lg:h-[430px] lg:w-[430px]">
        <Image
          src={developerImage}
          alt="Abdul Manan Ali"
          fill
          priority
          className="object-cover transition duration-700 hover:scale-110"
        />
      </div>

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute -right-4 bottom-10 rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl"
      >
        <h4 className="gradient-text text-lg font-bold">React Expert</h4>

        <p className="text-sm text-gray-400">6+ Years Experience</p>
      </motion.div>
    </motion.div>
  );
}
