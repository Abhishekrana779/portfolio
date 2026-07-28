import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    id: 1,
    degree: "Bachelor of Information Management (BIM)",
    institution: "Sudurpaschimanchal Academy (SPA)",
    duration: "2022 - Present",
    description:
      "Studying IT & Management, Web Development, DBMS, Networking, and Data Structures while building real-world projects.",
  },
  {
    id: 2,
    degree: "+2 Computer Management",
    institution: "Little Buddha Academy",
    duration: "2020 - 2022",
    description:
      "Completed higher secondary education with a focus on Computer, Accountancy, Economics, and English.",
  },
  {
    id: 3,
    degree: "Secondary Education Examination (SEE)",
    institution: "Araniko English Boarding School",
    duration: "2005 - 2019",
    description:
      "Completed secondary education with a strong academic foundation and interest in technology.",
  },
];

const cardVariants = {
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

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 uppercase text-sm tracking-widest">
            Education
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            My Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            My educational background that helped build my technical,
            analytical, and problem-solving skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-linear-to-b from-cyan-400 to-blue-600 transform md:-translate-x-1/2"></div>

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute left-5 md:left-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 transform -translate-x-1/2 shadow-[0_0_20px_#22d3ee]"
              />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 w-full md:w-[45%] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">
                  <FaCalendarAlt />
                  {item.duration}
                </div>

                <p className="mt-6 text-gray-300 leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}