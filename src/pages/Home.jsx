import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Education from "../components/sections/education";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/techstack";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/experience";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
