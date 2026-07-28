import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaCode,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Abhishekrana779",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/yourusername",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Services",
    "Certificates",
    "Contact",
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Responsive Web Design",
    "REST API Development",
    "Website Maintenance",
  ];

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-black text-gray-300">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* About */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-2xl shadow-lg shadow-cyan-500/30">
                <FaCode />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-cyan-400">Abhi</span>
                  <span className="text-white">Dev</span>
                </h2>

                <p className="text-sm text-gray-400">MERN Stack Developer</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              I build modern, fast, and responsive web applications using React,
              Node.js, Express, MongoDB, Tailwind CSS, and Django.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-6">
              Feel free to connect with me through social media or collaborate
              on exciting projects.
            </p>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 bg-slate-800 hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <p className="text-center md:text-left text-gray-400">
            © {year}{" "}
            <span className="font-semibold text-cyan-400">AbhiDev</span>. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
