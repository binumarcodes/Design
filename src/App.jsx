import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Experience from './pages/experience/Experience'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import CustomCursor from './components/CustomCursor/CustomCursor'
import About from './pages/about/About'
import WebProjects from './pages/web/WebProjects'


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Experience /> */}
      <Skills />
      {/* <Projects /> */}
      <WebProjects />
      <Contact />
      {/* <CustomCursor /> */}
    </>
  )
}

export default App
