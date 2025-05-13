import {React, useState, useEffect} from 'react'
import Tile from './Tile';
import ProjectModal from './ProjectModal'



const Projects = () => {

    //keeps treack of original sort order of projects
    const [originalProjects, setOriginalProjects] = useState([]);
    //currently sorted projects
    const [allProjects, setAllProjects] = useState([]);
    //a slice of the currently sorted projects that is displayed
    const [currentProjects, setCurrentProjects] = useState([]);
    //offset in all projects
    const [projectNum, setProjectNum] = useState(0);
    //project selected for modal display
    const [selectedProject, setSelectedProject] = useState(null);

    //bools to tell weather or not a sort has been applied
    let isDateSorted, isLangSorted, isFrameSorted, isDiffSorted = false;

    const [activeSort, setActiveSort] = useState(""); // currently sorting on


    useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/documents/projects.json`)
        .then(res => res.json())
        .then(data => {
        setAllProjects(data);
        setOriginalProjects(data);
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

    // reset everuthing to default
    const resetSort = () => {
        setActiveSort("");
        isDateSorted = false;
        isLangSorted = false;
        isFrameSorted = false;
        isDiffSorted = false;
        setAllProjects(originalProjects);
        setCurrentProjects(originalProjects.slice(0, 6));
        setProjectNum(0);
    };
    
    const sortByDifficulty = () => {
         setActiveSort("diff");
        isDateSorted = false;
        isLangSorted = false;
        isFrameSorted = false;

        // if clicking for an odd number of time, sort in ascending
        if (!isDiffSorted)
        {
            isDiffSorted = true;
            const sorted = [...allProjects].sort((a, b) => a.difficulty - b.difficulty);
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        }
        // even click means descending
        else{
            isDiffSorted = false;
            const sorted = [...allProjects].sort((a, b) => b.difficulty - a.difficulty);
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        }
        
    }

    const sortByLanguage = () => {
         setActiveSort("lang");
        isDateSorted = false;
        isDiffSorted = false;
        isFrameSorted = false;
        if (!isLangSorted) {
            isLangSorted = true;
            const sorted = [...allProjects].sort((a, b) => {
            const langA = a.languages[0]?.toLowerCase() || "";
            const langB = b.languages[0]?.toLowerCase() || "";
            return langA.localeCompare(langB);
            });
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        } else {
            isLangSorted = false;
            const sorted = [...allProjects].sort((a, b) => {
            const langA = a.languages[0]?.toLowerCase() || "";
            const langB = b.languages[0]?.toLowerCase() || "";
            return langB.localeCompare(langA);
            });
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        }
    };

    const sortByFramework = () => {
         setActiveSort("frame");
        isDateSorted = false;
        isLangSorted = false;
        isDiffSorted = false;
        if (!isFrameSorted) {
            isFrameSorted = true;
            const sorted = [...allProjects].sort((a, b) => {
            const fwA = a.frameworks[0]?.toLowerCase() || "";
            const fwB = b.frameworks[0]?.toLowerCase() || "";
            return fwA.localeCompare(fwB);
            });
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        } else {
            isFrameSorted = false;
            const sorted = [...allProjects].sort((a, b) => {
            const fwA = a.frameworks[0]?.toLowerCase() || "";
            const fwB = b.frameworks[0]?.toLowerCase() || "";
            return fwB.localeCompare(fwA);
            });
            setAllProjects(sorted);
            setCurrentProjects(sorted.slice(0, 6));
            setProjectNum(0);
        }
    };

    const sortByDate = () => {
         setActiveSort("date");
        isLangSorted = false;
        isFrameSorted = false;
        isDiffSorted = false;

    // helper: convert "Jan 2025" → Date object
        const parseDate = (str) => new Date(str + " 01"); // "Jan 2025 01"

            if (!isDateSorted) {
                isDateSorted = true;
                const sorted = [...allProjects].sort((a, b) => parseDate(b.date) - parseDate(a.date)); // most recent first
                setAllProjects(sorted);
                setCurrentProjects(sorted.slice(0, 6));
                setProjectNum(0);
            } else {
                isDateSorted = false;
                const sorted = [...allProjects].sort((a, b) => parseDate(a.date) - parseDate(b.date)); // oldest first
                setAllProjects(sorted);
                setCurrentProjects(sorted.slice(0, 6));
                setProjectNum(0);
            }
    };



  return (
    <div className='projects'>
        <div className='projects-title'>
            <h3>Projects</h3>
        </div>
        <div className='grid-section'>
            <div className='sorting'>
                <span><b>Sort by: </b></span>
                <button onClick={sortByDate} style={{ fontWeight: activeSort === "date" ? "bold" : "normal" }}>Date</button>
                <button onClick={sortByLanguage} style={{ fontWeight: activeSort === "lang" ? "bold" : "normal" }}>Language</button>
                <button onClick={sortByFramework} style={{ fontWeight: activeSort === "frame" ? "bold" : "normal" }}>Technologies</button>
                <button onClick={sortByDifficulty} style={{ fontWeight: activeSort === "diff" ? "bold" : "normal" }}>Difficulty</button>
                <button onClick={resetSort}> Clear</button>
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