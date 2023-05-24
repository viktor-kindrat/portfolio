import { gsap } from "gsap"
import { useEffect } from "react"

import "./Styles/Alert.css"
import warnSvg from "./Images/warn.svg"

function Alert ({message, liveTime}){
    useEffect(()=>{
        let tl = gsap.timeline();
        tl.to(".Alert", {
            opacity: 1,
            duration: 0.3
        })
        let x = setTimeout(() => {
            let tl1 = gsap.timeline();
            tl1.to(".Alert", {
                opacity: 0,
                duration: 0.3
            })
        }, liveTime);

        return ()=>{
            clearInterval(x)
        }
    }, [liveTime])

    return (
        <div className="Alert">
            <img height={25} className="Alert__image" src={warnSvg} alt="warning" />
            <p className="Alert__text">Alertation test message</p>
        </div>
    )
}

export default Alert