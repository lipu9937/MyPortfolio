import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home />
        <About />
        {/* <Projects /> */}
        <Experience />
        <Contact />
        <Footer/>
      </div>
      <Toaster />
    </>
  )
}

export default App
