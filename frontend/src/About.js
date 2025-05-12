import React from 'react';
import myPic from './assets/images/myPic.jpg';
import Computer from './assets/images/computer.png';
import Sakura from './assets/images/sakura.png';
import Hand from './assets/images/hand.png';


const About = () => {
  return (
    <div className='about-me'>
        <div className='about-window'>
            <div className='title-bar'>
                <span className='about-title'>About Me</span>
                <div className="buttons">
                    <button class="btn">–</button>
                    <button class="btn">☐</button>
                    <button class="btn">✕</button>
                </div>
            </div>
            <div className='window-body'>
                <div className='picture-side'>
                    <div className='my-pic'>
                        <img src={myPic} alt="author's pic"/>
                    </div>
                    <div className='emojis'>
                        <img src={Computer} alt='computer'/>
                        <img src={Sakura} alt='sakura'/>
                        <img src={Hand} alt='heart hands'/>
                    </div>
                </div>
                <div className='text'>
                    <p>I’m Puja Shah, a programmer who finds creativity in logic and beauty in well-structured code. With a joint background in computing science and linguistics, I’m drawn to patterns, systems, and the quiet elegance of a problem solved right. I enjoy working across the stack, but I'm especially passionate about algorithm design, systems programming, and machine learning.</p>
                    <p>Whether I’m building predictive models, writing efficient low-level code in C++, or exploring natural language processing, I bring a mix of analytical thinking and creative problem-solving to every project.</p>
                    <p>Curious by nature, precise by habit, and driven by the kind of work that challenges both head and heart. I build with intention — grounded in technology, inspired by nature, and always connected to people.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About