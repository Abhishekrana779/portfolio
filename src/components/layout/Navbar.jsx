import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "techstack" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6 lg:px-8">
      <nav
        className="
          relative mx-auto max-w-7xl
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        {/* Gradient glass border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-400/10" />

        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={600}
            className="group flex cursor-pointer items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-gradient-to-br from-purple-500 to-cyan-400
                text-sm font-bold text-slate-950
                shadow-lg shadow-purple-500/20
              "
            >
              A
            </motion.div>

            <span className="text-lg font-bold text-white sm:text-xl">
              Abhi
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="!text-white"
                className="
                  group relative cursor-pointer
                  rounded-lg px-3 py-2
                  text-sm font-medium text-slate-400
                  transition-all duration-300
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {item.name}

                {/* Active / hover line */}
                <span
                  className="
                    absolute bottom-1 left-1/2
                    h-[2px] w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r from-slate-400 to-slate-950
                    transition-all duration-300
                    group-hover:w-5
                  "
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="
                group hidden sm:flex
                items-center gap-2
                rounded-full
                border border-white/10
                bg-white/[0.04]
                px-5 py-2
                text-sm font-medium text-slate-300
                backdrop-blur-md
                transition-all duration-300
                hover:border-purple-400/40
                hover:bg-purple-500/10
                hover:text-purple-300
              "
            >
              Resume
              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* Mobile button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                text-xl text-slate-300
                backdrop-blur-md
                transition-all duration-300
                hover:border-purple-400/30
                hover:bg-purple-500/10
                hover:text-white
                md:hidden
              "
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <FiX />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <FiMenu />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden md:hidden"
            >
              <div className="border-t border-white/10 px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        to={item.to}
                        smooth
                        duration={600}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className="
                          block cursor-pointer
                          rounded-xl px-4 py-3
                          text-sm font-medium text-slate-400
                          transition-all duration-300
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Resume */}
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-3 flex items-center justify-center gap-2
                    rounded-xl
                    border border-purple-400/20
                    bg-purple-500/10
                    px-4 py-3
                    text-sm font-medium text-purple-300
                    backdrop-blur-md
                    transition hover:bg-purple-500/20
                  "
                >
                  Download Resume
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
