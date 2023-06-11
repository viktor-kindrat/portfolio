import "./Styles/ProjectFilter.css"
import filterIcon from "./Images/filterIcon.svg"

import { useState, useCallback, useEffect, useRef } from "react"
import { gsap } from "gsap"

function ProjectFilter ({data, setData}) {
    let [filtersVisibility, setFiltersVisibility] = useState(false);
    let [res, setRes] = useState([...data]);
    const dataCopy = useRef([...data])

    let togglerOfFilter = useCallback((e)=> {
        console.log(!filtersVisibility)
        setFiltersVisibility(!filtersVisibility)
    }, [filtersVisibility]);

    let filterCore = useRef({
        name: "",
        tech: "",
        type: "all"
    })

    let filter = ()=>{
        let nameFilter = [...dataCopy.current].filter(item=>item._doc.name.toLowerCase().includes(filterCore.current.name.toLowerCase()))
        let nameAndTechFilter = nameFilter.filter(item=>{
            return item._doc.features.map(item1=>item1.toLowerCase()).filter(item2=>item2.includes(filterCore.current.tech.toLowerCase())).length > 0 || item._doc.name.toLowerCase().includes(filterCore.current.tech) || item._doc.description.toLowerCase().includes(filterCore.current.tech)
        })
        console.log("Name and thech filtered arr: ",nameAndTechFilter)
        let filtered;
        (filterCore.current.type !== "all") ? filtered = nameAndTechFilter.filter(item=>item._doc.type === filterCore.current.type) : filtered = nameAndTechFilter;
        console.log(filtered)
        return filtered
    }
    let changeHandler = useCallback((e)=>{
        let target = e.target;
        let role = target.dataset.role;
        filterCore.current[role] = target.value;
        setRes(filter())
    }, [filterCore])

    useEffect(()=>{
        let tl = gsap.timeline();
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

    useEffect(()=>{
        setData(res)
    }, [res, setData])
    return (
        <div className="ProjectFilter">
            <button onClick={togglerOfFilter} type="button" className="ProjectFilter__thumbler"><img height={15} src={filterIcon} alt="filter" />Filter</button>
            <select onChange={changeHandler} name="projectType" data-role="type" id="typeFilter" className="ProjectFilter__animate ProjectFilter__select" defaultValue="all">
                <option value="all" className="ProjectFilter__option">All types</option>
                <option value="pet" className="ProjectFilter__option">Pet project</option>
                <option value="commercial" className="ProjectFilter__option">Commercial</option>
                <option value="team" className="ProjectFilter__option">Team project</option>
            </select>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByTechnology" className="ProjectFilter__input-placeholder">Search technology</label>
                <input onInput={changeHandler} type="text" id="filterByTechnology" data-role="tech" className="ProjectFilter__input" />
            </div>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByName" className="ProjectFilter__input-placeholder">Search by name</label>
                <input onInput={changeHandler} type="text" id="filterByName" data-role="name" className="ProjectFilter__input" />
            </div>
        </div>
    )
}

export default ProjectFilter