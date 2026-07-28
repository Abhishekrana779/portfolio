import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import cert2 from "../assets/images/cert2.jpeg";
import frontend from "../assets/images/frontend.png";
import python from "../assets/images/python.png";

const certificates = [
  {
    id: 1,
    title: "Frontend React",
    issuer: "Coursera",
    date: "2025",
    image: frontend,
    link: "#",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    image: cert2,
    link: "#",
  },
  {
    id: 3,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2024",
    image: python,
    link: "#",
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
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-linear-to-bl from-orange-400 via-slate-600 to-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 uppercase tracking-wider text-sm">
            Achievements
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            My
            <span className="text-cyan-400"> Certificates</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            Professional certifications that demonstrate my continuous learning
            and commitment to modern web development.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={item}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>

                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative p-7">
                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -top-8 right-6 w-16 h-16 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg"
                >
                  <FaAward />
                </motion.div>

                <p className="text-cyan-400 font-semibold">
                  {certificate.issuer}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {certificate.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt />
                  <span>{certificate.date}</span>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}