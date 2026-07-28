import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    description:
      "Building fast, responsive, and modern websites using React, Tailwind CSS, and JavaScript.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "Developing secure and scalable backend applications with Django, REST APIs, and databases.",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    icon: <FaMobileAlt />,
    description:
      "Creating websites that look great and perform smoothly on desktops, tablets, and mobile devices.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description:
      "Designing clean, modern, and user-friendly interfaces that enhance the user experience.",
  },
  {
    id: 5,
    title: "Website Maintenance",
    icon: <FaTools />,
    description:
      "Providing ongoing updates, bug fixes, performance improvements, and website optimization.",
  },
  {
    id: 6,
    title: "Custom Web Solutions",
    icon: <FaCode />,
    description:
      "Developing custom web applications tailored to your business requirements and goals.",
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
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
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
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 uppercase tracking-wider text-sm">
            My Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            What I
            <span className="text-cyan-400"> Offer</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            I help businesses and individuals create modern, responsive,
            scalable, and high-performance web applications with clean code
            and exceptional user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Glow */}
              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Background Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="w-20 h-20 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl text-white shadow-lg"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-8">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 8 }}
                  className="mt-8 flex items-center gap-2 font-semibold text-cyan-400"
                >
                  Learn More
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}