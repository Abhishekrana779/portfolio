import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 max-w-3xl ${alignment}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-slate-400">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
