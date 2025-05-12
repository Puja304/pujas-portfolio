import React, { useRef } from 'react'
import './App.css'
import Header from './Header'
import Title from './Title'
import Checkboard from './Checkboard'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Animated from './Animated'

const MainPage = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='main-page'>
        <Header
          scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
          scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <Title/>
        <Checkboard/>
        <div ref={aboutRef}>
          <About/>
        </div>
        <Checkboard/>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <Checkboard/>
        <div ref={contactRef}>
          <Contact/>
        </div>
        <Animated/>
    </div>
  )
}

export default MainPage