import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp, FiMail, FiCode } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#08051c] px-5 pb-6 pt-16 text-white sm:px-8 sm:pt-20 lg:px-16">
      {/* Background glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]"
      />

      {/* Gradient top border */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* Logo */}

            <Link
              to="home"
              smooth={true}
              duration={600}
              className="group inline-flex cursor-pointer items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-slate-950 transition duration-300 group-hover:scale-105">
                <FiCode size={18} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Abhishek
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  .
                </span>
              </span>
            </Link>

            {/* Description */}

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              MERN Stack Developer focused on building clean, responsive and
              user-friendly web applications with modern technologies.
            </p>

            {/* Availability */}

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/5 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs text-slate-400">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* GitHub */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-500 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <FaGithub
                size={17}
                className="transition duration-300 group-hover:scale-110"
              />
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-500 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <FaLinkedinIn
                size={17}
                className="transition duration-300 group-hover:scale-110"
              />
            </a>

            {/* Email */}

            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-500 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-400"
            >
              <FiMail
                size={17}
                className="transition duration-300 group-hover:scale-110"
              />
            </a>

            {/* Back to top */}

            <Link
              to="home"
              smooth={true}
              duration={700}
              aria-label="Back to top"
              className="group ml-1 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 shadow-lg shadow-purple-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/30"
            >
              <FiArrowUp
                size={18}
                className="transition duration-300 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
    flex
    flex-col
    items-center
    justify-center
    gap-3
    border-white/5
    pt-6
    text-center
    text-xs
    text-slate-500
  "
        >
          <p>© {year} Abhishek. All rights reserved.</p>

          <p>
            Designed & developed with{" "}
            <span className="font-medium text-purple-400">React</span> and{" "}
            <span className="font-medium text-cyan-400">MERN</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
