import { useEffect, useState, useRef } from "react"
import { register } from 'swiper/element/bundle';
import { gsap } from "gsap";

import "./Style/Certifications.css"
import dldSvg from "./Images/dld.svg"

register();
function Certifications() {
    let [pending, setPending] = useState(true);
    let certificates = useRef(null);
    let swiper = useRef(null)
    useEffect(() => {
        fetch("https://portfolio-api-5x6x.onrender.com/db/getCertificates")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                certificates.current = data;
                setPending(false)
            })
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let tl = gsap.timeline();
                if (entry.isIntersecting) {
                    tl.fromTo(".Certifications__slider__slide", {
                        opacity: 0,
                        y: 50,
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.2,
                        delay: 0.3
                    });
                    console.log('Swiper is visible');
                } else {
                    tl.fromTo(".Certifications__slider__slide", {
                        opacity: 1,
                        y: 0,
                    }, {
                        opacity: 0,
                        y: 50,
                        duration: 0.2,
                    });
                    console.log('Swiper is not visible');
                }
            });
        });

        if (swiper.current) {
            console.log("observing");
            observer.observe(swiper.current);
        }

        return () => {
            // eslint-disable-next-line
            observer.unobserve(swiper.current);
        };
    }, []);

    return (
        <section id="skills" className="Certifications">
            <h2 className="Certifications__headline">Certifications</h2>
            <div className="Certifications__slider-container" id="Certifications-swiper-parent" ref={swiper}>
                <swiper-container
                    style={{ overflow: "visible" }}
                    direction="horizontal"
                    navigation="false"
                    slides-per-view="auto"
                    center-insufficient-slides="true"
                    space-between="35"
                >
                    {
                        (certificates.current && !pending) ? certificates.current.map(el => {
                            console.log(el._doc)
                            return (
                                <swiper-slide key={el._doc._id} style={{ width: (window.innerWidth > 650) ? "350px" : "100%", display:"flex", justifyContent: "center" }}>
                                    <div className="Certifications__slider__slide">
                                        <img className="Certifications__slider-image" height={150} src={`data:${el["_doc"].image.contentType};base64,${el["_doc"].image.data}`} alt="certificate-thumbnail" />
                                        <div className="Certifications__slider-content-textgroup">
                                            <h6 className="Certifications__slider-content-headline">{el["_doc"].name}</h6>
                                            <p className="Certifications__slider-content-info">{el._doc.academy}</p>
                                            <p className="Certifications__slider-content-info">{el._doc.dated}</p>
                                            <a href={`data:${el["_doc"].image.contentType};base64,${el["_doc"].image.data}`} className="Certifications__slider-content-btn" download={"Certificate " + el._doc.name}><img className="Certifications__slider-content-img" height={15} src={dldSvg} alt="download" /> Download</a>
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