import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const education = [
  {
    year: "2022 - Present",
    degree: "Bachelor of Information Management",
    college: "SudurPaschimanchal Campus",
    location: "Nepal",
    description:
      "Studying information management with a focus on IT based subject along with management too",
    status: "Currently Studying",
  },
  {
    year: "2020 - 2022",
    degree: "+2 Management",
    School: "Higher Secondary Education",
    location: "Nepal",
    description:
      "Completed higher secondary education with a focus on management, computer fundamentals, and business-related subjects.",
    status: "Completed",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#08051c] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px] sm:h-[450px] sm:w-[450px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px] sm:h-[450px] sm:w-[450px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          {/* Label */}

          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">
              <FiBookOpen size={17} />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
              Education
            </span>
          </div>

          {/* Heading */}

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            My learning{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>

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
              delay: 0.3,
              duration: 0.7,
            }}
            className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
          />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            My academic background has helped me build a strong foundation in
            technology while continuously developing my practical skills through
            projects and hands-on learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative"
        >
          {/* Timeline line */}

          <div className="absolute bottom-5 left-[19px] top-5 hidden w-px bg-gradient-to-b from-purple-500/60 via-pink-500/30 to-cyan-400/10 sm:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                variants={itemVariants}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.2 + 0.2,
                    duration: 0.4,
                  }}
                  className="absolute left-[12px] top-8 hidden h-4 w-4 rounded-full border-2 border-purple-400 bg-[#08051c] shadow-lg shadow-purple-500/40 sm:block"
                />

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.05] sm:p-8"
                >
                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Top */}

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      {/* Year */}

                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
                        <FiCalendar size={13} />
                        {item.year}
                      </div>

                      {/* Degree */}

                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {item.degree}
                      </h3>

                      {/* Institution */}

                      <p className="mt-2 font-medium text-cyan-400">
                        {item.institution}
                      </p>
                    </div>

                    {/* Status */}

                    <span
                      className={`w-fit rounded-full border px-3 py-1.5 text-xs font-medium ${
                        item.status === "Currently Studying"
                          ? "border-green-400/20 bg-green-400/10 text-green-400"
                          : "border-slate-700 bg-slate-800/50 text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Description */}

                  <p className="relative mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* Location */}

                  <div className="relative mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <FiMapPin size={14} className="text-purple-400" />

                    {item.location}
                  </div>

                  {/* Bottom line */}

                  <div className="relative mt-6 h-px w-full overflow-hidden bg-white/5">
                    <motion.div
                      initial={{
                        x: "-100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                      }}
                      className="h-full w-1/3 bg-gradient-to-r from-purple-500 to-cyan-400"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
