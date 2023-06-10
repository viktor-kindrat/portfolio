import "./Styles/ProjectPopup.css"

import closeIcon from "./Images/close.svg"
import githubIcon from "./Images/githubIcon.svg"
import linkIcon from "./Images/linkIcon.svg"

import petIcon from "./Images/petIcon.svg"
import commercialIcon from "./Images/commercialIcon.svg"
import teamIcon from "./Images/teamIcon.svg"

import { gsap } from "gsap"
import { useEffect } from "react"

let badgesConfig = { "pet": { icon: petIcon, color: "#6CC04A", text: "Pet project" }, "commercial": { icon: commercialIcon, color: "#FF7F0E", text: "Commercial" }, "team": { icon: teamIcon, color: "#2C7FB8", text: "Team project" } }

function ProjectPopup({ visibility, handleClose, data }) {
    useEffect(() => {
        let tl = gsap.timeline()
        if (visibility) {
            tl.to(".ProjectPopup", {
                yPercent: 0, duration: 0.3, ease: "power3.inOut"
            })
            document.querySelector("html").style.overflow = "hidden"
        } else {
            tl.to(".ProjectPopup", {
                yPercent: -100, duration: 0.3, ease: "power3.inOut"
            })
            document.querySelector("html").style.overflow = "auto"
        }
    }, [visibility])
    return (
        (data.name) ? <div className="ProjectPopup">
            <div className="ProjectPopup__content">
                <button className="ProjectPopup__close-btn" onClick={handleClose}><img height={25} src={closeIcon} alt="close buttons" /></button>
                <div className="ProjectPopup__content-container">
                    <div className="ProjectPopup__image-container">
                        <img className="ProjetPopup__image" height={400} src={`data:${data.image.contentType};base64,${data.image.data}`} alt={data.name + " project preview"} />
                        <div className="ProjectPopup__links-container">
                            <a href={data.webLink} target="_blank" media="project link" rel="noreferrer" className="ProjectPopup__link"><img height={50} width={50} src={linkIcon} alt="project link" className="ProjectPopup__link-icon" /></a>
                            <a href={data.githubLink} target="_blank" media="github link" rel="noreferrer" className="ProjectPopup__link"><img height={50} width={50} src={githubIcon} alt="github link" className="ProjectPopup__link-icon" /></a>
                        </div>
                    </div>
                    <div className="ProjectPopup__text-container">
                        <h2 className="ProjectPopup__headline">{data.name}</h2>
                        <div className="ProjectPopup__type-badge" style={{ backgroundColor: badgesConfig[data.type].color }}>
                            <img src={badgesConfig[data.type].icon} alt={`${data.type} project`} className="ProjectPopup__type-icon" />
                            <p className="ProjectPopup__type-text">{badgesConfig[data.type].text}</p>
                        </div>
                        <p className="ProjectPopup__description">{data.description}</p>
                        <div className="ProjectPopup__features">
                            <h3 className="ProjectPopup__headline ProjectPopup__headline_features">Features:</h3>
                            <ul className="ProjectPopup__features-container">
                                {
                                    data.features.map(item =>
                                        <li className="ProjectPopup__feature">{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div> : ""
    )
}

export default ProjectPopup