import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import skill1 from "../assets/images/skill1.png";
import skill2 from "../assets/images/skill2.png";
import skill3 from "../assets/images/skill3.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: skill1,
    description:
      "A modern personal portfolio built with React, Vite, and Tailwind CSS featuring dark mode and responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Abhishekrana779/My-portfolio",
    live: "https://abishekrana254.com.np/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    image: skill2,
    description:
      "A responsive e-commerce platform with shopping cart, authentication, and product management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Abhishekrana779/OURSHOP",
    live: "https://our-store123.netlify.app/",
  },
  {
    id: 3,
    title: "Weather App",
    image: skill3,
    description:
      "A weather app that provides real-time weather updates and forecasts for any city using a weather API.",
    tech: ["MERN", "mysql", "Bootstrap"],
    github: "https://github.com/Abhishekrana779/weatherapp",
    live: "https://weatherapp-qoxirf4n1-abisheks-projects-68801856.vercel.app/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-slate-500 via-slate-700 to-slate-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase tracking-wider text-sm">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Featured
            <span className="text-cyan-400"> Projects</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-white">
            A collection of projects showcasing my expertise in frontend,
            backend, and full-stack web development.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-contain transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-black mb-3">{project.title}</h3>

                <p className="text-gray-400 font-extralight leading-7">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 rounded-xl border border-cyan-500 text-cyan-400 py-3 hover:bg-cyan-500 hover:text-white transition"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-liear-to-r from-cyan-500 to-blue-600 py-3 hover:shadow-lg hover:shadow-cyan-500/40 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
