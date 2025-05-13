import React from 'react'
import { IoPerson } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";

const ProjectModal = (props) => {
    console.log(props.img)
  return (
    <div className='modal'>
        <div className='project-window'>

            <div className='project-title-bar'>
                <a href={props.git} target="_blank" rel="noopener noreferrer">
                    <span className="project-name">{props.name}</span>
                </a>
                    <div className="status">
                        <span
                            className={`dot ${props.status == "Completed" ? "green" : "red"}`}
                        ></span>
                        {props.status}
                    </div>
                    <div className='date'>
                        {props.date}
                    </div>
                    <div className="modal-buttons">
                        <button class="modal-btn" onClick={props.onClose}>–</button>
                        <button class="modal-btn">☐</button>
                        <button class="modal-btn" onClick={props.onClose}>✕</button>
                    </div>
            </div>


            <div className='project-win-body'>
                <div className='github-note'>
                    click ↑ name to go to github!
                </div>
                <div className='description'>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                </div>

                <div className='middle-bar'>
                    <div className='learnt'>
                        <b>Learnt: </b> {props.learnt}
                    </div>
                    <div className='mode'>
                        <b>Mode: </b>{props.mode.charAt(0).toUpperCase() + props.mode.slice(1)} &nbsp;
                        {props.mode == "solo" ? <IoPerson/> : <RiTeamFill />}
                        
                    </div>
                    <div className='difficulty'>
                        <b>Difficulty: </b>
                        <span style={{color:"#A3C48B"}}>★</span>
                        <span style={{color: props.difficulty >=2 ? "#A3C48B" : "grey"}}>★</span>
                        <span style={{color: props.difficulty >=3 ? "#A3C48B" : "grey"}}>★</span>
                    </div>
                </div>

                <div className='last-half'>
                    <div className='project-img'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} alt={`${props.name} image`}/>
                    </div>
                    <div className='vertical-checks'></div>
                    <div className='lang-fram'>
                        <div className='language'>
                            <p><b>Languages</b><br/>{props.languages.join(", ")}</p>
                        </div>
                        <div className='frameworks'>
                            <p><b>Frameworks</b><br/>{props.frameworks.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ProjectModal