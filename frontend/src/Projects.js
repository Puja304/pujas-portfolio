import {React, useState, useEffect} from 'react'
import Tile from './Tile';
import ProjectModal from './ProjectModal'



const Projects = () => {

    const [allProjects, setAllProjects] = useState([]);
    const [currentProjects, setCurrentProjects] = useState([]);
    const [projectNum, setProjectNum] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/documents/projects.json`)
        .then(res => res.json())
        .then(data => {
        setAllProjects(data);
        setCurrentProjects(data.slice(0, 6));
        setProjectNum(0);
        });
    }, []); 

    
    const handleNextPage = () => {
        if ((projectNum + 6) < allProjects.length){
            setCurrentProjects(allProjects.slice(projectNum+6, projectNum+12));
            setProjectNum(projectNum + 6);
        }
    }

    const handlePrevPage = () => {
        if (projectNum >= 6)
        {
            setCurrentProjects(allProjects.slice(projectNum-6, projectNum));
            setProjectNum(projectNum - 6);
        }
    }

    
    console.log("Current Projects : ")
    console.log(currentProjects)

  return (
    <div className='projects'>
        <div className='projects-title'>
            <h3>Projects</h3>
        </div>
        <div className='grid-section'>
            <div className='sorting'>
                <span><b>Sort by: </b></span>
                <span>Date</span>
                <span>Language</span>
                <span>Framework</span>
            </div>
            <div className='projects-grid'>
                {currentProjects.map((project, index) => (
                    <Tile info={project} key={index} onClick={() => setSelectedProject(project)}/>
                 ))}
            </div>
            <div className='prev-next'>
                 <button className='prev' style={{visibility : projectNum >= 6 ? "visible" : "hidden"}} onClick={handlePrevPage}><p>&lt;</p></button>    {/* <  previous*/ }
                 <button className='next' style={{visibility :  (projectNum+6)< allProjects.length ? "visible" : "hidden"}} onClick={handleNextPage}><p>&gt;</p></button>    {/* >  next*/ }
            </div>
        </div>
        {selectedProject && (
         <ProjectModal
            {...selectedProject}
             onClose={() => setSelectedProject(null)}
        />
)}
    </div>
  )
}

export default Projects