"use client";

import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        x: x - 250,
        y: y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 25,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,.18) 0%, rgba(99,102,241,.08) 35%, transparent 75%)",
        filter: "blur(50px)",
      }}
    />
  );
}