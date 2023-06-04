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
                skillsData.current = data;
                setPanding(false)
            })
    }, [])
    return (
        <section  className="Skills">
            <h2 className="Skills__headline">Skills</h2>
            <div style={{height: (skillsData.current && !pending) ? "auto" : "180px",}} ref={skillsSwiper} className="Skills__swiper-container">
                <swiper-container style={{ width: "100%", overflow: "visible", display: "flex", justifyContent: "center", padding: "0 25px" }} direction="horizontal" navigation="false" slides-per-view="auto" center-insufficient-slides="true" space-between="25">
                    {
                        (skillsData.current && !pending) ? skillsData.current.map((item)=>
                            <swiper-slide key={item._doc._id} style={{width: "min-content", display: "flex", justifyContent: "center"}}>
                                <SkillsCard swiperRef={skillsSwiper.current} data={item._doc}/>
                            </swiper-slide>
                        ) : ""
                    }
                </swiper-container>
                {
                    (skillsData.current && !pending) ? "" : <Loader/>
                }
            </div>
        </section>
    )
}

export default Skills