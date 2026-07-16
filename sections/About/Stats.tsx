"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

import useCounter from "../../hooks/useCounter";
import { staggerContainer } from "../../utils/animation";

const stats = [
  {
    title: "Years Experience",
    value: 6,
    suffix: "+",
    icon: FaBriefcase,
  },
  {
    title: "Projects Completed",
    value: 30,
    suffix: "+",
    icon: FaLaptopCode,
  },
  {
    title: "Technologies",
    value: 15,
    suffix: "+",
    icon: FaCode,
  },
  {
    title: "Happy Clients",
    value: 20,
    suffix: "+",
    icon: FaAward,
  },
];

function StatCard({
  title,
  value,
  suffix,
  Icon,
}: {
  title: string;
  value: number;
  suffix: string;
  Icon: React.ElementType;
}) {
  const count = useCounter({
    end: value,
  });

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass glow-card rounded-3xl border border-white/10 p-8 text-center transition-all duration-300"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20">
        <Icon
          className="text-indigo-400"
          size={30}
        />
      </div>

      <h3 className="gradient-text text-5xl font-black">
        {count}
        {suffix}
      </h3>

      <p className="mt-3 text-gray-400">
        {title}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="mt-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          suffix={item.suffix}
          Icon={item.icon}
        />
      ))}
    </motion.div>
  );
}