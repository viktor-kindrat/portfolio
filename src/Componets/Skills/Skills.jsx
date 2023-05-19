import { useEffect, useRef, useState } from "react"
import { register } from 'swiper/element/bundle';

import "./Styles/Skills.css"

register()
function Skills (){
    let [pending, setPanding] = useState(true)
    let skillsData = useRef(null)
    useEffect(()=>{
        fetch("https://portfolio-api-5x6x.onrender.com/db/getSkills")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                skillsData.current = data;
                setPanding(false)
            })
    }, [])
    return (
        <section className="Skills">
            <h2 className="Skills__headline">Skills</h2>
            pending status is: {`${pending}`}
        </section>
    )
}

export default Skills