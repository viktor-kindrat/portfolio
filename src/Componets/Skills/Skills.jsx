import { useEffect, useRef, useState } from "react"
import { register } from 'swiper/element/bundle';

import "./Styles/Skills.css"
import SkillsCard from "../Skills-card/Skills-card"
import Loader from "../Loader/Loader";

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
        <section id="skills" className="Skills">
            <h2 className="Skills__headline">Skills</h2>
            <div ref={skillsSwiper} className="Skills__swiper-container">
                <swiper-container style={{ overflow: "visible", display: "flex", justifyContent: "center", padding: "0 25px" }} slides-per-view="auto" space-between="25">
                    {
                        (skillsData.current && !pending) ? skillsData.current.map((item)=>
                            <swiper-slide style={{width: "min-content", display: "flex", justifyContent: "center"}}>
                                <SkillsCard swiperRef={skillsSwiper.current} data={item._doc}/>
                            </swiper-slide>
                        ) : <Loader/>
                    }
                </swiper-container>
            </div>
        </section>
    )
}

export default Skills