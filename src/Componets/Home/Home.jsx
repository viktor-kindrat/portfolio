import { useRef, useEffect } from "react"
import Typed from 'typed.js';

import "./Styles/Home.css"
import dldSvg from "./Images/dldBtn.svg"
import CV from "./Documents/CV.pdf"
import MainBodyAnimation from "../MainBodyAnimation/MainBodyAnimation"

function Home() {
    const typedEl = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Viktor Kindtat', 'Web developer', 'Web designer', 'Coding fan'],
            typeSpeed: 50,
            backDelay: 5000,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section className="Home">
            <div className="Home__content">
                <h1 className="Home__headline">
                    <span className="Home__headline_small">Welcome to the page of</span>
                    <span className="Home__typed-container">
                        <span ref={typedEl} className="Home__headline_big">Web developer</span>
                    </span>
                </h1>
                <a className="Home__btn" href={CV} download="CV"> <img height="24" width="24" src={dldSvg} alt="download" className="Home__btn-icon" /> download cv</a>
            </div>
            <MainBodyAnimation />
        </section>
    )
}

export default Home