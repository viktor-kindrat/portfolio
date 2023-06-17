import { useEffect, useState, useRef } from "react"
import { register } from 'swiper/element/bundle';

import "./Style/Certifications.css"
import CertificationsCard from "../Certifications-card/Certifications-card"
import Loader from "../Loader/Loader"

register();
function Certifications() {
    let [pending, setPending] = useState(true);
    let certificates = useRef(null);
    let swiper = useRef(null)
    useEffect(() => {
        fetch("https://portfolio-api-5x6x.onrender.com/db/getCertificates")
            .then(res => res.json())
            .then(data => {
                certificates.current = data;
                setPending(false)
            })
            .catch(e=>console.log(e))
    }, [])
    return (
        <section id="skills" className="Certifications">
            <h2 className="Certifications__headline">Certifications</h2>
            <div style={{height: (certificates.current && !pending) ? "auto" : "180px",}} className="Certifications__slider-container" id="Certifications-swiper-parent" ref={swiper}>
                <swiper-container style={{ width: "100%", overflow: "visible", display: "flex", justifyContent: "center", padding: "0 25px" }} direction="horizontal" navigation="false" slides-per-view="auto" center-insufficient-slides="true" space-between="35">
                    {
                        (certificates.current && !pending) ? certificates.current.map(el =>
                            <swiper-slide key={el._doc._id} style={{ width: "min-content", display: "flex", justifyContent: "center" }}>
                                <CertificationsCard swiperRef={swiper.current} data={el._doc} />
                            </swiper-slide>
                        ) : ""
                    }
                </swiper-container>
                {
                    (certificates.current && !pending) ? "" : <Loader />
                }
            </div>
        </section>
    )
}

export default Certifications