import "./Styles/ProjectFilter.css"
import downArrow from "./Images/arrowdown.svg"
import filterIcon from "./Images/filterIcon.svg"

import { useState, useCallback, useEffect, useRef } from "react"
import { gsap } from "gsap"

function ProjectFilter({ data, setData }) {
    let [filtersVisibility, setFiltersVisibility] = useState(false);
    let [res, setRes] = useState([...data]);
    const dataCopy = useRef([...data])

    let togglerOfFilter = useCallback((e) => {
        console.log(!filtersVisibility)
        setFiltersVisibility(!filtersVisibility)
    }, [filtersVisibility]);

    let filterCore = useRef({
        name: "",
        tech: "",
        type: "all"
    })

    let filter = () => {
        let nameFilter = [...dataCopy.current].filter(item => item._doc.name.toLowerCase().includes(filterCore.current.name.toLowerCase()))
        let nameAndTechFilter = nameFilter.filter(item => {
            return item._doc.features.filter(item2 => item2.toLowerCase().includes(filterCore.current.tech.toLowerCase())).length > 0 || item._doc.name.toLowerCase().includes(filterCore.current.tech) || item._doc.description.toLowerCase().includes(filterCore.current.tech)
        })
        console.log("Name and thech filtered arr: ", nameAndTechFilter)
        let filtered;
        (filterCore.current.type !== "all") ? filtered = nameAndTechFilter.filter(item => item._doc.type === filterCore.current.type) : filtered = nameAndTechFilter;
        console.log(filtered)
        return filtered
    }
    let changeHandler = useCallback((e) => {
        let target = e.target;
        let role = target.dataset.role;
        filterCore.current[role] = target.value;
        setRes(filter())
    }, [filterCore]);

    let resetHandler = useCallback(e=>{
        filterCore.current = {
            name: "",
            tech: "",
            type: "all"
        };
        document.querySelectorAll(".ProjectFilter__input").forEach(el=>el.value = "");
        document.querySelector(".ProjectFilter__select").value = "all"
        setRes(filter())
    }, [])

    const formInputFocus = useCallback((e) => {
        const label = e.target.parentElement.children[0];
        label.style.top = "-5px";
        label.style.left = "10px";
        label.style.fontSize = "11px";
        label.style.fontWeight = "700";
    }, [])

    const formInputBlur = useCallback((e) => {
        const label = e.target.parentElement.children[0];
        if (e.target.value.length < 1) {
            label.removeAttribute("style")
        }
    }, [])

    useEffect(() => {
        let tl = gsap.timeline();
        if (filtersVisibility) {
            tl.set(".ProjectFilter__animate", {
                display: "flex"
            })
            .to(".ProjectFilter__animate", {
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
            .set(".ProjectFilter__animate", {
                display: "none"
            })
        }
    }, [filtersVisibility])

    useEffect(() => {
        setData(res)
    }, [res, setData])
    return (
        <div className="ProjectFilter">
            <button onClick={togglerOfFilter} type="button" className="ProjectFilter__thumbler"><img width={15} height={15} src={filterIcon} alt="filter" />Filter</button>
            <select onChange={changeHandler} style={{ backgroundImage: `url("${downArrow}")` }} name="projectType" data-role="type" id="typeFilter" className="ProjectFilter__animate ProjectFilter__select" defaultValue="all">
                <option value="all" className="ProjectFilter__option">All types</option>
                <option value="pet" className="ProjectFilter__option">Pet project</option>
                <option value="commercial" className="ProjectFilter__option">Commercial</option>
                <option value="team" className="ProjectFilter__option">Team project</option>
            </select>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByTechnology" className="ProjectFilter__input-placeholder">Search technology</label>
                <input onFocus={formInputFocus} onBlur={formInputBlur} onInput={changeHandler} type="text" id="filterByTechnology" data-role="tech" className="ProjectFilter__input" />
            </div>
            <div className="ProjectFilter__animate ProjectFilter__input-group">
                <label htmlFor="filterByName" className="ProjectFilter__input-placeholder">Search by name</label>
                <input onFocus={formInputFocus} onBlur={formInputBlur} onInput={changeHandler} type="text" id="filterByName" data-role="name" className="ProjectFilter__input" />
            </div>
            {filterCore.current.name === "" && filterCore.current.type === "all" && filterCore.current.tech === "" ? "" : <button onClick={resetHandler} className="ProjectsFilter__clear-btn">Reset</button>}
        </div>
    )
}

export default ProjectFilter