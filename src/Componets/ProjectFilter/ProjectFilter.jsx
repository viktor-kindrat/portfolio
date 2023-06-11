import "./Styles/ProjectFilter.css"
import filterIcon from "./Images/filterIcon.svg"

import { useState, useCallback, useEffect } from "react"
import { gsap } from "gsap"

function ProjectFilter (props) {
    let [filtersVisibility, setFiltersVisibility] = useState(false)
    let togglerOfFilter = useCallback((e)=> {
        console.log(!filtersVisibility)
        setFiltersVisibility(!filtersVisibility)
    }, [filtersVisibility])
    useEffect(()=>{
        let tl = gsap.timeline();
        console.log(filtersVisibility)
        if(filtersVisibility) {
            tl.to(".ProjectFilter__animate", {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.inOut",
                stagger: 0.1
            })
        } else {
            tl.to(".ProjectFilter__animate", {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power3.inOut",
                stagger: -0.1
            })
        }
    }, [filtersVisibility])
    return (
        <div className="ProjectFilter">
            <button onClick={togglerOfFilter} type="button" className="ProjectFilter__thumbler"><img height={15} src={filterIcon} alt="filter" />Filter</button>
            <select name="projectType" id="typeFilter" className="ProjectFilter__animate ProjectFilter__select" value="all">
                <option value="all" className="ProjectFilter__option" selected>Type</option>
                <option value="pet" className="ProjectFilter__option">Pet project</option>
                <option value="commercial" className="ProjectFilter__option">Commercial</option>
                <option value="team" className="ProjectFilter__option">Team project</option>
            </select>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByTechnology" className="ProjectFilter__input-placeholder">Search technology</label>
                <input type="text" id="filterByTechnology" className="ProjectFilter__input" />
            </div>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByName" className="ProjectFilter__input-placeholder">Search by name</label>
                <input type="text" id="filterByName" className="ProjectFilter__input" />
            </div>
        </div>
    )
}

export default ProjectFilter