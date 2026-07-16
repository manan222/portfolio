"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    size: "h-[450px] w-[450px]",
    color: "from-indigo-600/35 to-blue-500/5",
    position: "-top-20 -left-24",
    duration: 12,
  },
  {
    size: "h-[380px] w-[380px]",
    color: "from-purple-600/35 to-pink-500/5",
    position: "top-32 right-0",
    duration: 16,
  },
  {
    size: "h-[320px] w-[320px]",
    color: "from-cyan-500/25 to-indigo-500/5",
    position: "bottom-0 left-1/3",
    duration: 18,
  },
];

export default function AuroraBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Blobs */}

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${blob.position} ${blob.size} rounded-full bg-gradient-to-br ${blob.color} blur-[120px]`}
        />
      ))}

      {/* Aurora Beam */}

      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[1000px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[160px]"
      />

      {/* Noise Overlay */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </>
  );
}