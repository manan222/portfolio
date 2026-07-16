"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
    variant === "primary"
      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
      : "border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white",
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
}