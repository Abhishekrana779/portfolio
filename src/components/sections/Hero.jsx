import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../../assets/images/profile.jpeg";

const roles = [
  "Full Stack Developer.",
  "MERN Stack Developer.",
  "React Developer.",
  "Creative Developer.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#08051c] text-white"
    >

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[120px] sm:h-[450px] sm:w-[450px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px] sm:h-[450px] sm:w-[450px]"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-pink-600/10 blur-[110px]"
      />


      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top gradient line */}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
      />


      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[390px] sm:w-[390px] lg:order-2 lg:h-[500px] lg:w-[500px]"
          >
            {/* Main glow */}

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute h-[210px] w-[210px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-30 blur-3xl sm:h-[300px] sm:w-[300px] lg:h-[370px] lg:w-[370px]"
            />

            {/* Outer ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[245px] w-[245px] rounded-full border border-purple-500/40 sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px]"
            />

            {/* Dashed ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[265px] w-[265px] rounded-full border border-dashed border-cyan-400/30 sm:h-[375px] sm:w-[375px] lg:h-[445px] lg:w-[445px]"
            />

            {/* Profile */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[185px] w-[185px] overflow-hidden rounded-full border-[3px] border-purple-500/50 bg-slate-900 shadow-2xl shadow-purple-900/50 sm:h-[270px] sm:w-[270px] sm:border-4 lg:h-[340px] lg:w-[340px]"
            >
              <img
                src={profile}
                alt="Abhishek"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-cyan-500/10" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 left-0 rounded-xl border border-purple-400/20 bg-slate-950/90 px-3 py-2 shadow-xl shadow-purple-500/10 backdrop-blur-xl sm:bottom-8 sm:left-2 sm:rounded-2xl sm:px-5 sm:py-4"
            >
              <p className="text-[9px] text-slate-500 sm:text-xs">
                Specialization
              </p>

              <p className="mt-1 text-xs font-semibold text-purple-400 sm:text-sm">
                MERN Stack
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-4 rounded-xl border border-cyan-400/20 bg-slate-950/90 px-3 py-2 backdrop-blur-xl sm:right-2 sm:top-10 sm:rounded-2xl sm:px-5 sm:py-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/50 sm:h-2 sm:w-2" />

                <p className="text-[9px] text-slate-300 sm:text-xs">
                  Available for work
                </p>
              </div>
            </motion.div>

            {/* Code badge */}

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 right-0 hidden rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 backdrop-blur-md sm:block sm:bottom-20 sm:right-3"
            >
              <span className="text-xs text-pink-300 sm:text-sm">
                {"</>"} Code
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-2 relative z-20 text-center lg:order-1 lg:text-left"
          >
            {/* Available */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/50" />

              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                Available for work
              </p>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hey{" "}
              <motion.span
                animate={{
                  rotate: [0, 15, -10, 15, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                }}
                className="inline-block"
              >
                👋
              </motion.span>
              , I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-serif italic text-transparent">
                Abhishek
              </span>
            </motion.h1>

            {/* Typing role */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mt-4 min-h-[45px]"
            >
              <h2 className="text-xl font-medium text-slate-200 sm:text-2xl md:text-3xl lg:text-4xl">
                I'm a <span className="font-serif text-purple-400">{text}</span>
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-purple-400 sm:h-7" />
              </h2>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg"
            >
              I build modern, responsive web applications with clean code,
              scalable architecture and thoughtful user experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.7,
              }}
              className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href="#projects"
                className="group rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3.5 text-sm font-medium shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30"
              >
                Explore My Work
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:text-purple-400"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Social links */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.7,
              }}
              className="mt-7 flex items-center justify-center gap-4 lg:justify-start lg:gap-5"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 transition hover:text-purple-400 sm:text-sm"
              >
                GitHub
              </a>

              <span className="h-1 w-1 rounded-full bg-slate-700" />

              <a
                href="#"
                className="text-xs text-slate-500 transition hover:text-purple-400 sm:text-sm"
              >
                LinkedIn
              </a>

              <span className="h-1 w-1 rounded-full bg-slate-700" />

              <a
                href="#"
                className="text-xs text-slate-500 transition hover:text-purple-400 sm:text-sm"
              >
                Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

          <div className="h-9 w-5 rounded-full border border-slate-600 p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mx-auto h-1.5 w-1.5 rounded-full bg-purple-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
