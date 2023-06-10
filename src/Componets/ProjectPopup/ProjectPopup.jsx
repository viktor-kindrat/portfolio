import "./Styles/ProjectPopup.css"
import { gsap } from "gsap"
import { useEffect } from "react"

function ProjectPopup({visibility, handleClose, data}) {
    useEffect(()=>{
        let tl = gsap.timeline()
        if (visibility) {
            tl.to(".ProjectPopup", {
                yPercent: 0, duration: 0.3, ease: "power3.inOut"
            })
        } else {
            tl.to(".ProjectPopup", {
                yPercent: -100, duration: 0.3, ease: "power3.inOut"
            })
        }
    }, [visibility])
    return (
        <div className="ProjectPopup">
            <button onClick={handleClose}>Close</button>
            POPUP
        </div>
    )
}

export default ProjectPopup