import React from 'react'

const MenuPhone = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <div className='header-phone'>
        <div className='menu-phone'>
            <button onClick={scrollToAbout}>About</button>
            <button onClick={scrollToProjects}>Projects</button>
            <button onClick={scrollToContact}>Contact</button>
        </div>
    </div>
  )
}

export default MenuPhone