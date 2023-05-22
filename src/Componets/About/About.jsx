import { useEffect, useState } from "react"
import { gsap } from "gsap"

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

function About() {
    let [sliderIndex, setSliderIndex] = useState(0)
    useEffect(() => {
        let root = document.querySelector("html");
        let firstPage = document.querySelector(".Home");
        let thisPage = document.querySelector(".About");
        let placeHolder = document.querySelector(".AboutPlaceHolder")
        let placeHolderPre = document.querySelector(".AboutPlaceHolder_pre")

        let screenHeight = root.clientHeight;
        let disableScrollCoordinate = Math.floor(thisPage.offsetTop + parseFloat(getComputedStyle(thisPage).height.slice(0, getComputedStyle(firstPage).height.indexOf("px"))) + screenHeight * (data.length - 1));
        let scrollHandler = (e) => {
            let firstPageHeight = Math.floor(parseFloat(getComputedStyle(firstPage).height.slice(0, getComputedStyle(firstPage).height.indexOf("px"))))
            let scrollTop = Math.floor(root.scrollTop);

            // console.log(`scroll top is: ${scrollTop}\ndisableScrollCordinate is: ${disableScrollCoordinate - screenHeight - 50}\nindex is: ${sliderIndex}`)

            if (scrollTop >= firstPageHeight && scrollTop <= disableScrollCoordinate) {
                thisPage.setAttribute("style", "position: fixed; top:0; left: 0; transition: 0.3s;");
                placeHolder.style.display = "block"
                placeHolderPre.style.display = "none"
                if (scrollTop > firstPageHeight + 150 && sliderIndex === 0) {
                    let tl = gsap.timeline();
                    tl.to(".About__image", { opacity: 0, xPercent: -200, duration: 0.3, ease: "circ.inOut" })
                    tl.to(".About__text", { opacity: 0, xPercent: 200, duration: 0.3, ease: "circ.inOut" })
                    setSliderIndex(1)
                } else if (scrollTop < firstPageHeight + 150 && sliderIndex === 1) {
                    let tl = gsap.timeline();
                    tl.to(".About__image", { opacity: 0, xPercent: -200, duration: 0.3, ease: "circ.inOut" })
                    tl.to(".About__text", { opacity: 0, xPercent: 200, duration: 0.3, ease: "circ.inOut" })
                    setSliderIndex(0)
                }
            } else if (scrollTop > disableScrollCoordinate || scrollTop <= firstPageHeight) {
                thisPage.setAttribute("style", "position: relative; top:0; left: 0; transition: 0.3s;")
                placeHolder.style.display = "none"
                if (scrollTop <= firstPageHeight) {
                    placeHolderPre.style.display = "none"
                } else {
                    placeHolderPre.style.display = "block"
                }
            }
        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [sliderIndex])
    useEffect(() => {
        let tl = gsap.timeline();
        // tl.set(".About__content-inner", { opacity: 0, y: 25 })
        // tl.to(".About__content-inner", { opacity: 1, y: 0, duration: 0.5, ease: "power2.in" })

        tl.set(".About__image", { opacity: 0, xPercent: -200 })
        tl.set(".About__text", { opacity: 0, xPercent: 200 })
        tl.then(() => {
            gsap.to(".About__image", { opacity: 1, xPercent: 0, duration: 0.6, ease: "circ.inOut" })
            gsap.to(".About__text", { opacity: 1, xPercent: 0, duration: 0.6, ease: "circ.inOut" })
        })
    }, [sliderIndex])
    return (
        <>
            <div className="AboutPlaceHolder_pre" style={{ display: "none", "height": ((data.length - 1) * 100) + "vh", "width": 100 + "%" }}></div>
            <section className="About" id="about">
                <div className="About__content">
                    <div className="About__content-wrap">
                        <h2 className="About__headline">My story</h2>
                        <div className="About__content-inner">
                            <img src={data[sliderIndex].img} alt="me" className="About__image" />
                            <p className="About__text">
                                {data[sliderIndex].text}
                            </p>
                        </div>
                        <div className="About__progress-bar-container">
                            {/* this is {((sliderIndex + 1) / data.length ) * 100}% here */}
                            <div className="About__progress-bar">
                                <div className="About__progress-bar-value-text">{((sliderIndex + 1) / data.length) * 100}%</div>
                                <div className="About__progress-bar-value">
                                    <div style={{ width: `${((sliderIndex + 1) / data.length) * 100}%` }} className="About__progress-bar-value-block"></div>
                                </div>
                            </div>
                            <div className="About__progress-hint">
                                scroll down
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="AboutPlaceHolder" style={{ display: "none", "height": data.length * 100 + "vh", "width": 100 + "%" }}></div>
        </>
    )
}

export default About