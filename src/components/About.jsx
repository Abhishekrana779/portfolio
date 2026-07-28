import React from "react";
import { FaCode, FaLaptopCode, FaGraduationCap, FaAward } from "react-icons/fa";

import about from "../assets/images/about.jpeg";
import bgImage from "../assets/images/bg-image.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

              {/* Image */}
              <div className="relative w-80 h-80 md:w-105 md:h-105 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 p-2">

                <div className="w-full h-full rounded-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-lg">

                  <img
                    src={about}
                    alt="Abhishek Rana"
                    className="w-full h-full object-cover rounded-full transition duration-700 group-hover:scale-110"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Right Content */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <span className="text-cyan-400 uppercase tracking-widest font-semibold">
              About Me
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              I'm Abhishek Rana
            </h2>

            <h3 className="text-2xl text-cyan-300 mt-2">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 mt-6 leading-8">
              I am a passionate Full Stack Developer with experience in
              creating responsive and modern web applications. I enjoy
              transforming ideas into interactive digital experiences using
              React, JavaScript, Tailwind CSS, Django, Node.js, and MySQL.
            </p>

            <p className="text-gray-400 mt-4 leading-8">
              I focus on writing clean, scalable, and maintainable code while
              continuously learning new technologies to improve my development
              skills.
            </p>

            {/* Info Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-cyan-500/20 transition">
                <FaCode className="text-cyan-400 text-3xl mb-3" />
                <h4 className="text-white font-bold">Web Development</h4>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-cyan-500/20 transition">
                <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />
                <h4 className="text-white font-bold">React & Django</h4>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-cyan-500/20 transition">
                <FaGraduationCap className="text-cyan-400 text-3xl mb-3" />
                <h4 className="text-white font-bold">Computer Commerce</h4>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-cyan-500/20 transition">
                <FaAward className="text-cyan-400 text-3xl mb-3" />
                <h4 className="text-white font-bold">Fast Learner</h4>
              </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10 text-center">

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">5+</h2>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
                <p className="text-gray-400">Years Learning</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">100%</h2>
                <p className="text-gray-400">Dedication</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}