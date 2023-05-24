import { gsap } from "gsap"
import { useEffect } from "react"

import "./Styles/Alert.css"
import warnSvg from "./Images/warn.svg"
import sendedSvg from "./Images/sended.svg"
let types = {
    warn: warnSvg,
    sended: sendedSvg
}

function Alert({ message, liveTime, type }) {
    useEffect(() => {
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
        }, liveTime - 300);

        return () => {
            clearInterval(x)
        }
    }, [liveTime])


    return (
        <div className="Alert">
            <img height={25} className="Alert__image" src={types[type]} alt="warning" />
            <p className="Alert__text">{message}</p>
        </div>
    )
}

export default Alert