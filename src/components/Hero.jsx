import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import Resume from '../assets/resume.pdf'
import profile from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-2 lg:min-h-[calc(100vh-6rem)] lg:flex lg:items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* ================= Image Section ================= */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-50 blur-3xl"></div>

              {/* Image */}
              <div className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-2 shadow-2xl">
                <div className="rounded-full bg-slate-900 p-2">
                  <img
                    src={profile}
                    alt="Abhishek Rana"
                    className="h-60 w-60 rounded-full object-cover
                               sm:h-72 sm:w-72
                               lg:h-[430px] lg:w-[430px]"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute left-1/2 -bottom-8 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-center backdrop-blur-xl shadow-lg">
                <h4 className="font-semibold text-cyan-400">
                  MERN Stack Developer
                </h4>

                <p className="mt-2 text-sm text-gray-300">
                  React • Node.js • Express
                  <br />
                  MongoDB • Django
                </p>
              </div>
            </div>
          </div>

          {/* ================= Text Section ================= */}
          <div className="order-2 text-center lg:order-1 lg:mt-0 lg:text-left">
            <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Welcome to my portfolio
            </span>

            <h2 className="mt-6 text-xl text-gray-300 sm:text-2xl">
              Hello, I'm
            </h2>

            <h1 className="mt-3 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-medium">
              Abhishek
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Rana
              </span>
            </h1>

            <h3 className="mt-6 text-2xl font-semibold text-cyan-400">
              MERN Stack Developer
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              I build fast, responsive and user-friendly web applications
              using React, Node.js, Express, MongoDB, Tailwind CSS and Django.
              Passionate about creating modern digital experiences with clean,
              efficient code.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer rounded-full bg-cyan-500 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:bg-cyan-600 hover:scale-105"
              >
                View Projects
              </ScrollLink>

              <a
                href={Resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}