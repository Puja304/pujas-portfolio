import React from 'react'

const Header = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <div className='header'>
        <div className='my-intro'>
            <p>hi, i'm puja 🌻</p>
        </div>
        <div className='menu'>
            <button onClick={scrollToAbout}>About</button>
            <button onClick={scrollToProjects}>Projects</button>
            <button onClick={scrollToContact}>Contact</button>
        </div>
    </div>
  )
}

export default Header