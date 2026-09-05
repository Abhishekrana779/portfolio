import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "Tools",
  },
];

const categories = ["Frontend", "Backend", "Database", "Tools"];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Tech Stack
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tools I use to{" "}
            <span className="text-slate-400">build things.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Technologies and tools I use to design, develop, test and deploy
            modern web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryItems = technologies.filter(
              (technology) => technology.category === category
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                }}
              >
                {/* Category Title */}
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
                    {category}
                  </h3>

                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {categoryItems.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <motion.div
                        key={technology.name}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/70"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xl text-slate-400 transition duration-300 group-hover:text-cyan-400">
                          <Icon />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-slate-200 transition group-hover:text-white">
                            {technology.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-600">
                            {technology.category}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">
                Always learning, always building.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Exploring new technologies and improving my development skills.
              </p>
            </div>

            <span className="text-2xl text-cyan-400">
              ✦
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
