import { useRef, useEffect } from "react"
import Typed from 'typed.js';
import { gsap } from "gsap";

import "./Styles/Home.css"
import dldSvg from "./Images/dldBtn.svg"
import CV from "./Documents/CV.pdf"
import MainBodyAnimation from "../MainBodyAnimation/MainBodyAnimation"

function Home() {
    const typedEl = useRef(null);
    useEffect(() => {
        const setTl = ()=>{
            let tl = gsap.timeline()
            tl.set(".Home__move-content", {
                x: -100,
                opacity: 0,
            })
            setTimeout(() => {
                tl.to(".Home__move-content", {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.3,
                    delay: 0.3
                })
            }, 3000);
        }
        const typed = new Typed(typedEl.current, {
            strings: ['Viktor Kindtat', 'Web developer', 'Web designer', 'Coding fan'],
            typeSpeed: 50,
            backDelay: 5000,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
        });
        window.addEventListener("load", setTl())
        return () => {
            typed.destroy();
            window.removeEventListener("load", setTl())
        };
    }, []);
    return (
        <section className="Home">
            <div className="Home__content">
                <h1 className="Home__headline">
                    <span className="Home__headline_small Home__move-content">Welcome to the page of</span>
                    <span className="Home__typed-container Home__move-content">
                        <span ref={typedEl} className="Home__headline_big">Viktor Kindtat</span>
                    </span>
                </h1>
                <a className="Home__btn Home__move-content" href={CV} download="CV"> <img height="24" width="24" src={dldSvg} alt="download" className="Home__btn-icon" /> download cv</a>
            </div>
            <MainBodyAnimation />
        </section>
    )
}

export default Home