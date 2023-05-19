import { useEffect, useRef, useState } from "react"
import { register } from 'swiper/element/bundle';

import "./Styles/Skills.css"
import SkillsCard from "../Skills-card/Skills-card"

register()
function Skills (){
    let [pending, setPanding] = useState(true)
    let skillsData = useRef(null);
    let skillsSwiper = useRef(null);
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
            <div ref={skillsSwiper} className="Skills__swiper-container">
                <swiper-container  style={{overflow: "visible"}} slides-per-view="auto" space-between="25">
                    {
                        (skillsData.current && !pending) ? skillsData.current.map((item)=>
                            <swiper-slide style={{width: "min-content", display: "flex", justifyContent: "center"}}>
                                <SkillsCard swiperRef={skillsSwiper.current} data={item._doc}/>
                            </swiper-slide>
                        ) : ""
                    }
                </swiper-container>
            </div>
        </section>
    )
}

export default Skills