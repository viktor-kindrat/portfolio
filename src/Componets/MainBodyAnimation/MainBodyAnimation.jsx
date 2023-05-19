import { gsap } from "gsap";
import { useEffect } from "react";
import "./Styles/MainBodyAnimation.css"

import hand from "./Images/hand.webp"
import body from "./Images/man.webp"

function MainBodyAnimation(){
    useEffect(()=>{
        let setTl = () => {
            gsap.set(".MainBodyAnimation", {
                x: 1000,
                opacity: 0
            })
            setTimeout(() => {
                let tl = gsap.timeline();
                tl.fromTo(".MainBodyAnimation", {
                    x: 1000,
                    opacity: 0
                }, {
                    x: 5,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.9
                })
            }, 3000);
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