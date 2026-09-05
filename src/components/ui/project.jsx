import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

export default function Project({
  title,
  description,
  image,
  technologies = [],
  github,
  live,
  featured = false,
  number = "01",
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition duration-300 hover:border-cyan-400/30 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden bg-slate-900 ${
          featured ? "aspect-[16/8]" : "aspect-video"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Project Number */}
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md">
          {number}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute right-5 top-5 rounded-full border border-cyan-400/20 bg-slate-950/70 px-4 py-2 text-xs font-medium text-cyan-400 backdrop-blur-md">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">

        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-600">
              Project
            </p>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h3>
          </div>

          <FiArrowUpRight
            size={23}
            className="shrink-0 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
          />
        </div>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-400 transition duration-300 group-hover:border-slate-700"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-7 flex flex-wrap items-center gap-5">

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              <FiGithub size={17} />
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              <FiExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
