import { gsap } from "gsap";
import { useEffect } from "react";
import "./Styles/MainBodyAnimation.css"

import hand from "./Images/hand.png"
import body from "./Images/man.png"

function MainBodyAnimation(){
    useEffect(()=>{
        let setTl = () => {
            setTimeout(() => {
                let tl = gsap.timeline();
                tl.fromTo(".MainBodyAnimation", {
                    right: "-100%"
                }, {
                    right: "-5px",
                    duration: 0.6
                })
            }, 2800);
        }
        window.addEventListener("load", setTl());
        return (
            window.removeEventListener("load", setTl())
        )
    }, [])
    return (
        <div className="MainBodyAnimation">
            <img height="500" className="MainBodyAnimation__image MainBodyAnimation__image-body" src={body} alt="body" />
            <img height="210" className="MainBodyAnimation__image MainBodyAnimation__image-hand" src={hand} alt="hand waveing" />
        </div>
    )
}

export default MainBodyAnimation