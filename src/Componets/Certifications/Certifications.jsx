import { useEffect, useState, useRef } from "react"
import { register } from 'swiper/element/bundle';

import "./Style/Certifications.css"
import dldSvg from "./Images/dld.svg"

register();
function Certifications() {
    let [pending, setPending] = useState(true);
    let certificates = useRef(null)
    useEffect(() => {
        fetch("https://portfolio-api-5x6x.onrender.com/db/getCertificates")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                certificates.current = data;
                setPending(false)
            })
    }, [])
    return (
        <section className="Certifications">
            <h2 className="Certifications__headline">Certifications</h2>
            <div className="Certifications__slider-container">
                <swiper-container
                    direction="horizontal"
                    navigation="true"
                    loop="true"
                >
                    {
                        (certificates.current && !pending) ? certificates.current.map(el => {
                            console.log(el._doc)
                            return (
                                <swiper-slide>
                                    <div className="Certifications__slider__slide">
                                        <img height={150} src={`data:${el["_doc"].image.contentType};base64,${el["_doc"].image.data}`} alt="certificate-thumbnail" />
                                        <div className="Certifications__slider-content-textgroup">
                                            <h6 className="Certifications__slider-content-headline">{el["_doc"].name}</h6>
                                            <p className="Certifications__slider-content-info">{el._doc.academy}</p>
                                            <p className="Certifications__slider-content-info">{el._doc.dated}</p> 
                                                {/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                                                    ░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░
                                                    ░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░
                                                    ░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░
                                                    ░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░
                                                    ░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░
                                                    ░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░
                                                    ░░░█░░█▄▄░░░█░░░▀▄░░░░░▐░█░░░
                                                    ░░▐▌░░█▀▀░░▄▀░░░░░▀▄▄▄▄▀░░█░░
                                                    ░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░
                                                    ░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░
                                                    ░░▐▌░░░░░░░░░░░░░░░▄░░░░░░▐▌░
                                                    ░░▐▌░░░░░░░░░▄░░░░░█░░░░░░▐▌░
                                                    ░░░█░░░░░░░░░▀█▄░░▄█░░░░░░▐▌░
                                                    ░░░▐▌░░░░░░░░░░▀▀▀▀░░░░░░░▐▌░
                                                    ░░░░█░░░░░░░░░░░░░░░░░░░░░█░░
                                                    ░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░
                                                    ░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░
                                                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */}
                                            <a href={`data:${el["_doc"].image.contentType};base64,${el["_doc"].image.data}`} className="Certifications__slider-content-btn" download={"Certificate " + el._doc.name}><img height={25} src={dldSvg} alt="download" /> Download</a>
                                        </div>
                                    </div>
                                </swiper-slide>
                            )
                        }) : ""
                    }
                </swiper-container>
            </div>
        </section>
    )
}

export default Certifications