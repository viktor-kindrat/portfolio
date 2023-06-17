import "./Styles/Projects.css"
import Loader from "../Loader/Loader"
import ProjectFilter from "../ProjectFilter/ProjectFilter";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import { useEffect, useRef, useState, useCallback } from "react"

function Projects() {
    let [pending, setPanding] = useState(true);
    let [popupVisibility, setPopupVisibility] = useState(false);
    let [popupData, setPopupData] = useState({});
    let projects = useRef(null);
    let [finalData, setFinalData] = useState([])
    useEffect(() => {
        fetch("https://portfolio-api-5x6x.onrender.com/db/getProjects")
            .then(res => res.json())
            .then(data => {
                projects.current = data;
                setPanding(false)
                setFinalData(data)
            })
    }, [])

    let itemButtonHandler = useCallback((item) => {
        setPopupVisibility(true)
        setPopupData(item)
    }, [])
    return (
        <section className="Projects" id="projects">
            <h2 className="Projects__headline">Projects</h2>
            <div className="Projects__filters">
                {(!pending && projects.current !== null) ? <ProjectFilter data={finalData} setData={(arr)=>setFinalData(arr)} /> : ""}
            </div>
            <div className="Projects__container">
                {
                    (!pending && projects.current !== null) ? (finalData.length > 0) ? finalData.map((item) =>
                        <div key={item._doc._id} className="Projects__item">
                            <img className="Projects__item-image" height={300} src={`data:${item._doc.image.contentType};base64,${item._doc.image.data}`} alt={`${item._doc.name} project`} />
                            <div className="Projects__item-content">
                                <button onClick={() => itemButtonHandler(item._doc)} className="Projects__item-button">View details</button>
                            </div>
                        </div>
                    ) : "I haven't done anything by this filter yet. Try another request" : <Loader />
                }
            </div>
            <ProjectPopup data={popupData} visibility={popupVisibility} handleClose={() => setPopupVisibility(false)} />
        </section>
    )
}

export default Projects