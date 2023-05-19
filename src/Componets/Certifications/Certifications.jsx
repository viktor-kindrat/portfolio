import { useEffect, useState, useRef } from "react"
import { register } from 'swiper/element/bundle';

import "./Style/Certifications.css"
import CertificationsCard from "../Certifications-card/Certifications-card"

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
    }, [])
    return (
        <section className="Certifications">
            <h2 className="Certifications__headline">Certifications</h2>
            <div className="Certifications__slider-container" id="Certifications-swiper-parent" ref={swiper}>
                <swiper-container style={{ overflow: "visible", display: "flex", justifyContent: "center", padding: "0 25px" }} direction="horizontal" navigation="false" slides-per-view="auto" center-insufficient-slides="true" space-between="35">
                    {
                        (certificates.current && !pending) ? certificates.current.map(el =>
                            <swiper-slide key={el._doc._id} style={{ width: "min-content", display: "flex", justifyContent: "center" }}>
                                <CertificationsCard swiperRef={swiper.current} data={el._doc} />
                            </swiper-slide>
                        ) : ""
                    }
                </swiper-container>
            </div>
        </section>
    )
}

export default Certifications