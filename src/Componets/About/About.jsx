import { useEffect, useState } from "react"

import "./Style/About.css"
import image1 from "./Images/1.png"
import image2 from "./Images/2.png"
let data = [{
    img: image1,
    text: "Modern and enthusiastic - that's how those who know me describe me. I'm a 17-year-old web developer from Ukraine who has a great passion for programming and can't imagine his life without it. I am a fast learner and enjoy finding innovative solutions to complex challenges. I have excellent communication skills and work collaboratively with colleagues and clients to ensure projects are delivered to their satisfaction."
}, {
    img: image2,
    text: "Embarking on my programming journey, I was fortunate to receive top-notch training at the GoITeens Academy. Here, I had the opportunity to explore and experiment with a variety of programming languages, ultimately discovering my true passion for JavaScript. With my newfound zeal for coding, I enrolled in the highly regarded Creator IT Academy, where I honed my skills in HTML, CSS, and JavaScript, learning the ins and outs of creating stunning websites. Creator was instrumental in equipping me with the technical and soft skills that have led to my success in the field thus far. Now, I am constantly seeking to enhance my knowledge and capabilities, always pushing myself to learn more and stay ahead of the curve."
}]

function About() {
    let [sliderIndex, setSliderIndex] = useState(0)
    useEffect(()=>{
        let root = document.querySelector("html");
        let firstPage = document.querySelector(".Home");
        let thisPage = document.querySelector(".About");
        let placeHolder = document.querySelector(".AboutPlaceHolder")

        let screenHeight = root.clientHeight;
        let disableScrollCoordinate = Math.floor(thisPage.offsetTop + parseFloat(getComputedStyle(thisPage).height.slice(0, getComputedStyle(firstPage).height.indexOf("px"))) + screenHeight * (data.length - 1));
        let scrollHandler = (e)=>{
            let firstPageHeight = Math.floor(parseFloat(getComputedStyle(firstPage).height.slice(0, getComputedStyle(firstPage).height.indexOf("px"))))
            let scrollTop = Math.floor(root.scrollTop);

            console.log(`scroll top is: ${scrollTop}\ndisableScrollCordinate is: ${disableScrollCoordinate}\nindex is: ${sliderIndex}`)

            if (scrollTop >= firstPageHeight && scrollTop <= disableScrollCoordinate) {
                thisPage.setAttribute("style", "position: fixed; top:0; left: 0; transition: 0.3s;");
                placeHolder.style.display = "block"
                if (scrollTop > firstPageHeight + 150 && sliderIndex === 0) {
                    setSliderIndex(1)
                } else if(scrollTop < firstPageHeight + 150 && sliderIndex === 1){
                    setSliderIndex(0)
                }
            } else if (scrollTop > disableScrollCoordinate || scrollTop <= firstPageHeight) {
                thisPage.setAttribute("style", "position: relative; top:0; left: 0; transition: 0.3s;")
                placeHolder.style.display = "none"
            }
        }
        window.addEventListener("scroll", scrollHandler)
        return ()=>{
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [sliderIndex])
    return (
        <>
            <section className="About">
                <div className="About__content">
                    <div className="About__content-wrap">
                        <h2 className="About__headline">My story</h2>
                        <div className="About__content-inner">
                            <img src={data[sliderIndex].img} alt="me" className="About__image" />
                            <p className="About__text">
                                {data[sliderIndex].text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="AboutPlaceHolder" style={{ display:"none", "height": data.length * 100 + "vh", "width": 100 + "%" }}></div>
            <div className="Testbo" style={{ "height": 150 + "vh", "width": 100 + "%" }}>Aliqua voluptate commodo sunt ex aute culpa minim. Qui do dolor tempor eiusmod aliqua elit adipisicing ut magna aliquip sit incididunt dolor. Enim ipsum esse laborum laboris elit culpa dolor voluptate elit ea sunt. Amet id duis quis id velit exercitation. Esse enim sunt proident qui excepteur.</div>
        </>
    )
}

export default About