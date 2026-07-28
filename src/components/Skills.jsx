import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
];

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#2b1506] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-wider uppercase">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            I specialize in building modern full-stack web applications using
            the MERN stack. From creating responsive React interfaces to
            developing secure backend APIs with Node.js and Express, I focus on
            writing clean, maintainable code and delivering fast, scalable
            digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Glow */}
              <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Floating Icon */}
                <motion.div
                  className="text-6xl mb-5"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-lg font-semibold">{skill.name}</h3>

                <span className="mt-3 text-sm text-gray-400">
                  Experienced
                </span>

                {/* Progress Bar */}
                <div className="mt-5 w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                    }}
                    className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;