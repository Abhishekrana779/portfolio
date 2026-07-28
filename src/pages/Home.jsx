import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Certificates from '../components/Certificates.jsx'
import Contact from '../components/Contact.jsx'
import Education from '../components/Education.jsx'
import Projects from '../components/Projects.jsx'
import Services from '../components/services.jsx'

import React from 'react'

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Services />
        <Certificates />
        <Contact />
    </div>
  )
}
