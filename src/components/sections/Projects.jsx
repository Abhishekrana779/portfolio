import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Project from "../ui/project";

import Washing from "../../assets/images/skill1.png";
import quiz from "../../assets/images/skill2.png";
import weather from "../../assets/images/skill3.png";

const projects = [
  {
    number: "01",
    title: "Washing Machine Repair",
    description:
      "A responsive washing machine repair service website with service information, contact details, and a clean user-friendly interface.",
    image: Washing,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/",
    live: "#",
    featured: true,
  },

  {
    number: "02",
    title: "Quiz App",
    description:
      "An interactive quiz application where users can answer questions, track their scores, and enjoy a simple responsive interface.",
    image: quiz,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/",
    live: "#",
    featured: false,
  },

  {
    number: "03",
    title: "Weather App",
    description:
      "A responsive weather application that displays real-time weather information using an API with a clean and simple interface.",
    image: weather,
    technologies: ["React", "JavaScript", "Weather API"],
    github: "https://github.com/",
    live: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#08051c] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 top-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]"
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================================
            HEADING
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            {/* Label */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">
                <FiStar size={16} />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                My Projects
              </span>
            </motion.div>

            {/* Heading */}

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Things I've{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            {/* Animated line */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 100,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
            />
          </div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="max-w-md text-sm leading-7 text-slate-500 md:text-right"
          >
            A collection of projects where I turn ideas into responsive,
            interactive and useful digital experiences.
          </motion.p>
        </motion.div>

        {/* =========================================
            PROJECT GRID
        ========================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.number}
              variants={itemVariants}
              className="relative h-full"
            >
              {/* Featured Badge */}

              {project.featured && (
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-3
                    left-5
                    z-20
                    rounded-full
                    border
                    border-purple-400/30
                    bg-[#100b2b]/95
                    px-4
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-purple-300
                    shadow-lg
                    shadow-purple-900/30
                    backdrop-blur-xl
                  "
                >
                  Featured
                </motion.div>
              )}

              {/* Project Card */}

              <Project {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -5,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-3
              text-sm
              font-medium
              text-slate-400
              backdrop-blur-xl
              transition
              duration-300
              hover:border-purple-400/30
              hover:text-white
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-purple-500/10
                via-pink-500/10
                to-cyan-500/10
                transition-transform
                duration-500
                group-hover:translate-x-0
              "
            />

            <span className="relative">View more projects on GitHub</span>

            <FiArrowUpRight
              size={17}
              className="
                relative
                transition
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
