import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "champabhi46@gmail.com",
    href: "mailto:champabhi46@gmail.com",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+977 9810776636",
    href: "tel:+9779810776636",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "bedkot municipality - 02, kanchanpur Nepal",
    href: "#",
    color: "from-pink-500 to-red-500",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/Abishekrana779",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <FaFacebook />,
    link: "http://facebook.com/profile.php?id=61579342765021",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-linear-to-tl from-blue-600 via-slate-800 to-slate-900 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 uppercase tracking-widest text-sm">
            Contact
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Let's
            <span className="text-cyan-400"> Work Together</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
            Have an exciting project or an opportunity? I'd love to hear from
            you. Feel free to reach out and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-7">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5"
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className={`w-16 h-16 rounded-2xl bg-linear-to-r ${item.color} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>

                  <div>
                    <p className="text-gray-400 text-sm">{item.title}</p>

                    <h4 className="text-lg font-semibold">{item.value}</h4>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <h4 className="text-xl font-bold text-cyan-400">
                Available for Freelance
              </h4>

              <p className="mt-3 text-gray-300 leading-7">
                I'm open to internships, freelance projects, part-time roles,
                and exciting project collaborations.
              </p>
            </div>

            {/* Social */}

            <div className="mt-25">
              <h4 className="text-xl font-semibold mb-5">Connect With Me</h4>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -8,
                      rotate: 8,
                      scale: 1.15,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-cyan-500 hover:border-cyan-500 transition"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>

            <form className="space-y-6">
              {/* Name */}

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              />

              {/* Email */}

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              />

              {/* Subject */}

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              />

              {/* Message */}

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
              />

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 35px rgba(34,211,238,.45)",
                }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white transition"
              >
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                Send Message
              </motion.button>
            </form>

            {/* Bottom Card */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 rounded-2xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-6"
            >
              <h4 className="text-xl font-semibold text-cyan-400">
                Why Work With Me?
              </h4>

              <p className="mt-3 leading-7 text-gray-300">
                I build modern, responsive, and high-performance web
                applications using React, Tailwind CSS, Django, and modern web
                technologies. My focus is writing clean code, delivering great
                user experiences, and ensuring projects are scalable and
                maintainable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
