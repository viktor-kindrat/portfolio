import { useRef, useEffect } from "react"
import Typed from 'typed.js';
import "./Styles/Home.css"
import MainBodyAnimation from "../MainBodyAnimation/MainBodyAnimation"

function Home() {
    const typedEl = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Web developer', 'Viktor Kindtat', 'UI/UX designer', 'Coding fan', 'Creator IT Academy student'],
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
            </div>
            <MainBodyAnimation />
        </section>
    )
}

export default Home