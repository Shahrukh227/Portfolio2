import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import "./App.css"
import Experience from './Components/Experience'
import Skillset from './Components/Skillset'
import Education from './Components/Education'
import Contact from "./Components/Contact"
import Footer from './Components/Footer'

function App() {
  return (
    <main>
      <section className='container'>
      <Navbar/>
      <Intro/>
      </section>
   <Skills/>
   <Experience/>
   <Skillset/>
   <Education/>
   <Contact/>
   <Footer/>
    </main>
  )
}

export default App
