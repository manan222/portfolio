import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mb-16 text-center"
    >
      <h2 className="gradient-text text-5xl font-black">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}