import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Company Name",
    location: "Kathmandu, Nepal",
    period: "2025 - Present",
    description:
      "Working on modern web applications using React, Node.js, Express and MongoDB. Developing responsive interfaces, building REST APIs and working with database-driven applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Company Name",
    location: "Remote",
    period: "2024 - 2025",
    description:
      "Built responsive and interactive user interfaces with React and Tailwind CSS. Focused on reusable components, clean layouts and improving the overall user experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Experience
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My journey through{" "}
            <span className="text-slate-400">development.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A timeline of my professional experience, projects and continuous
            growth as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-400 md:flex">
                  <FiBriefcase size={17} />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/70 sm:p-8">

                  {/* Top */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-cyan-400">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {experience.location}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-xs text-slate-400">
                      <FiCalendar size={14} />
                      {experience.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
