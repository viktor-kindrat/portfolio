import { useEffect, useState, useRef } from "react"
import "./Style/Certifications.css"


function Certifications (){
    let [pending, setPending] = useState(true);
    let certificates = useRef(null)
    useEffect(()=>{
        fetch("https://portfolio-api-5x6x.onrender.com/db/getCertificates")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            certificates.current = data;
            setPending(false)
        })
    }, [])
    return (
        <section className="Certifications">
            <h2 className="Certifications__headline">Certifications</h2>
            {
                (certificates.current && !pending) ? certificates.current.map(el =>
                    <div>{el["_doc"].name} <br /> <img height={300} src={`data:${el["_doc"].image.contentType};base64,${el["_doc"].image.data}`} alt="certificate" /></div>
                ) : ""
            }
        </section>
    )
}

export default Certifications