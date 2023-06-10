import "./Styles/Projects.css"
import Loader from "../Loader/Loader"
import { useEffect, useRef, useState, useCallback } from "react"

function Projects (){
    let [pending, setPanding] = useState(true);
    let [popupVisibility, setPopupVisibility] = useState(false);
    let [popupData, setPopupData] = useState({})
    let projects = useRef(null);
    useEffect(()=>{
        fetch("https://portfolio-api-5x6x.onrender.com/db/getProjects")
            .then(res => res.json())
            .then(data => {
                projects.current = data;
                setPanding(false)
                console.log(data)
            })
    }, [])

    let itemButtonHandler = useCallback((item)=>{
        setPopupVisibility(true)
        setPopupData(item)
    }, [])
    return (
        <section className="Projects" id="projects">
            <h2 className="Projects__headline">Projects</h2>
            <div className="Projects__filters">
                FILTERS WILL BE HERE
            </div>
            <div className="Projects__container">
                {
                    (!pending && projects.current !== null) ? projects.current.map((item)=>
                        <div key={item._doc._id} className="Projects__item">
                            <img className="Projects__item-image" height={300} src={`data:${item._doc.image.contentType};base64,${item._doc.image.data}`} alt={`${item._doc.name} skill`}  />
                            <div className="Projects__item-content">
                                <button onClick={()=>itemButtonHandler(item._doc)} className="Projects__item-button">View details</button>
                            </div>
                        </div>
                    ) : <Loader/>
                }
            </div>
        </section>
    )
}

export default Projects