import React from 'react'
import ContactTile from './ContactTile'

const Contact = () => {
  return (
    <div className='contact-me'>
      <div className='contact-title'>
        Contact Me
      </div>
      <div className='contact-grid'>
        <ContactTile 
        img="phone-call.png" 
        text1="+1 (778) - 513 - 9193"
        text2="+91 99096 49152"
        link1=""
        link2=""
        />
        <ContactTile 
        img="email.png" 
        text1="pks37@sfu.ca"
        text2="puja.shah321@gmail.com"
        link1=""
        link2=""
        
        />
        <ContactTile 
        img="instagram.png" 
        text1="puja.shah321"
        text2=""
        link1="https://www.instagram.com/puja.shah321/"
        link2=""
        />
        <ContactTile 
        img="linkedin.png" 
        text1="linkedin.puja.shah"
        text2=""
        link1="https://linkedin.com/in/puja-shah-711a79177"
        link2=""
        />
        <ContactTile 
        img="github.png" 
        text1="github.puja304"
        text2=""
        link1="https://github.com/Puja304"
        link2=""
        />
        <ContactTile 
        img="discord.png" 
        text1="@hopefuldisaster23"
        text2=""
        link1="https://discordapp.com/users/@hopefuldisaster23"
        link2=""
        />
      </div>
    </div>
  )
}

export default Contact