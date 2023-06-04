import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { Observer } from "gsap/Observer";

import "./Style/About.css"

import image1 from "./Images/1.webp"
import image2 from "./Images/2.webp"

let data = [{
    img: image1,
    text: "Modern and enthusiastic - that's how those who know me describe me. I'm a 17-year-old web developer from Ukraine who has a great passion for programming and can't imagine his life without it. I am a fast learner and enjoy finding innovative solutions to complex challenges. I have excellent communication skills and work collaboratively with colleagues and clients to ensure projects are delivered to their satisfaction."
}, {
    img: image2,
    text: "Embarking on my programming journey, I was fortunate to receive top-notch training at the GoITeens Academy. Here, I had the opportunity to explore and experiment with a variety of programming languages, ultimately discovering my true passion for JavaScript. With my newfound zeal for coding, I enrolled in the highly regarded Creator IT Academy, where I honed my skills in HTML, CSS, and JavaScript, learning the ins and outs of creating stunning websites. Creator was instrumental in equipping me with the technical and soft skills that have led to my success in the field thus far. Now, I am constantly seeking to enhance my knowledge and capabilities, always pushing myself to learn more and stay ahead of the curve."
}]

gsap.registerPlugin(Observer);
function About() {
    let element = useRef(null);
    let [sliderIndex, setSliderIndex] = useState(0)
    useEffect(() => {
        const previous = () => {
            if (sliderIndex > 0) {
                setSliderIndex(sliderIndex - 1);
                element.current.scrollIntoView({ behavior: "smooth" })
            } else {
                document.querySelector(".Home").scrollIntoView({ behavior: "smooth" })
            }
        }
        const next = () => {
            if (sliderIndex < data.length - 1) {
                setSliderIndex(sliderIndex + 1);
                element.current.scrollIntoView({ behavior: "smooth" })
            } else {
                document.querySelector(".Certifications").scrollIntoView({ behavior: "smooth" })
            }
        }

        let viewed = false;

        let scrollObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!viewed) {
                        element.current.scrollIntoView({ behavior: "smooth" })
                        viewed = true
                    }
                    Observer.create({
                        target: document.querySelector(".About"),
                        type: "wheel,touch,pointer",
                        onUp: () => previous(),
                        onDown: () => next(),
                        tolerance: 175,
                        dragMinimum: 175,
                        wheelSpeed: 0.5,
                        preventDefault: true,
                        capture: true,
                    });
                } else {
                    Observer.getAll(o => o.kill());
                    viewed = false
                }
            });
        });
        if (element.current) {
            scrollObserver.observe(element.current)
        }
        return () => {
            Observer.getAll(o => o.kill());
            // eslint-disable-next-line
            scrollObserver.unobserve(element.current)
        }
    }, [sliderIndex])
    useEffect(() => {
        let tl = gsap.timeline();
        tl.set(".About__image", { opacity: 0, xPercent: -200 })
        tl.set(".About__text", { opacity: 0, xPercent: 200 })
        tl.then(() => {
            gsap.to(".About__image", { opacity: 1, xPercent: 0, duration: 0.6, ease: "circ.inOut" })
            gsap.to(".About__text", { opacity: 1, xPercent: 0, duration: 0.6, ease: "circ.inOut" })
        })
    }, [sliderIndex])
    return (
        <section ref={element} className="About" id="about">
            <div className="About__content">
                <div className="About__content-wrap">
                    <h2 className="About__headline">My story</h2>
                    <div className="About__content-inner">
                        <img src={data[sliderIndex].img} alt="me" className="About__image" />
                        <p className="About__text">{data[sliderIndex].text}</p>
                    </div>
                    <div className="About__progress-bar-container">
                        <div className="About__progress-bar"><div className="About__progress-bar-value-text">{((sliderIndex + 1) / data.length) * 100}%</div><div className="About__progress-bar-value"><div style={{ width: `${((sliderIndex + 1) / data.length) * 100}%` }} className="About__progress-bar-value-block"></div></div></div>
                        <div className="About__progress-hint">scroll down</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About