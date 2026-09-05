import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCode,
  FiDatabase,
  FiServer,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function About() {
  const technologies = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08051c] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Background glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="text-sm font-medium tracking-[0.3em] text-purple-400">
              ABOUT ME
            </span>

            <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-transparent" />

            <span className="text-xs text-slate-600">01</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building modern{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-serif italic text-transparent">
                full-stack applications.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500 lg:justify-self-end">
              I build responsive web applications from frontend interfaces to
              backend APIs using the MERN stack.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =================================================
              LEFT MAIN CARD
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10"
          >
            {/* Decorative number */}

            <span className="pointer-events-none absolute -right-5 -top-12 select-none text-[180px] font-bold leading-none text-white/[0.02]">
              01
            </span>

            {/* Icon */}

            <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/10 text-purple-400">
              <FiCode size={25} />
            </div>

            {/* Content */}

            <div className="relative">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                MERN Stack Developer
              </p>

              <h3 className="max-w-2xl text-2xl font-semibold leading-relaxed sm:text-3xl">
                I turn ideas into{" "}
                <span className="text-purple-400">
                  functional web applications.
                </span>
              </h3>

              <div className="mt-7 space-y-5">
                <p className="leading-8 text-slate-400">
                  I'm a MERN Stack Developer passionate about creating modern,
                  responsive and user-friendly web applications. I enjoy working
                  across both frontend and backend development.
                </p>

                <p className="leading-8 text-slate-400">
                  I use <span className="text-white">React</span> to build
                  interactive interfaces and{" "}
                  <span className="text-white">
                    Node.js, Express.js and MongoDB
                  </span>{" "}
                  to develop reliable backend systems and APIs.
                </p>

                <p className="leading-8 text-slate-400">
                  My goal is to write clean, maintainable code while
                  continuously improving my problem-solving skills and learning
                  new technologies.
                </p>
              </div>
            </div>

            {/* Technologies */}

            <div className="relative mt-9 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                Technologies I use
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-400 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}

            <a
              href="#projects"
              className="group relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition hover:text-cyan-400"
            >
              View my projects
              <FiArrowUpRight
                size={17}
                className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Frontend */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:border-purple-500/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition group-hover:scale-110">
                  <FiCode size={22} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  Frontend Development
                </h3>

                <p className="text-sm leading-7 text-slate-500">
                  Creating responsive and interactive interfaces with React,
                  JavaScript and Tailwind CSS.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-purple-400">
                  <FiCheckCircle />
                  <span>React + Tailwind CSS</span>
                </div>
              </div>
            </motion.div>

            {/* Backend */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:border-cyan-500/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                  <FiServer size={22} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  Backend Development
                </h3>

                <p className="text-sm leading-7 text-slate-500">
                  Developing REST APIs, server-side logic and database-driven
                  applications.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-cyan-400">
                  <FiCheckCircle />
                  <span>Node.js + Express.js</span>
                </div>
              </div>
            </motion.div>

            {/* Database */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:border-green-500/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/10 blur-3xl group-hover:bg-green-500/20" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 transition group-hover:scale-110">
                  <FiDatabase size={22} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">Database & APIs</h3>

                <p className="text-sm leading-7 text-slate-500">
                  Working with MongoDB and APIs to manage and deliver
                  application data efficiently.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-green-400">
                  <FiCheckCircle />
                  <span>MongoDB + REST APIs</span>
                </div>
              </div>
            </motion.div>

            {/* Location */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              whileHover={{
                y: -6,
              }}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:border-pink-500/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 transition group-hover:scale-110">
                <FiMapPin size={22} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                  Based in
                </p>

                <p className="mt-1 text-lg font-medium text-white">Nepal 🇳🇵</p>
              </div>

              <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/40" />
            </motion.div>
          </div>
        </div>

        {/* Bottom divider */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-purple-500/40 via-white/10 to-transparent"
        />
      </div>
    </section>
  );
}
