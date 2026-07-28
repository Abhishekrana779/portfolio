import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import profile from "../assets/images/profile.jpeg";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[url('/bg-nav.jpg')] bg-cover bg-center bg-no-repeat shadow-lg">
      {/* Overlay */}
      <div className="bg-slate-950/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-lg opacity-0 group-hover:opacity-60 transition duration-300"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-black">
                <span className="text-white">Abhi</span>
              </h1>

              <p className="text-xs text-gray-300">Full Stack Developer</p>
            </div>
          </ScrollLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    spy={true}
                    duration={600}
                    offset={-80}
                    activeClass="text-cyan-400"
                    className="relative cursor-pointer text-gray-300 font-medium hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute top-24 right-6 w-64 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col p-3">
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  spy={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  activeClass="bg-cyan-500 text-white"
                  className="cursor-pointer rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-cyan-400"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
