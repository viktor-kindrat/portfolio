import "./Styles/Main.css"
import Home from "../Home/Home"
import About from "../About/About"
import Certifications from "../Certifications/Certifications"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import GetInTouch from "../GetInTouch/GetInTouch"

function Main () {
    return (
        <main className="Main">
            <Home/>
            <About/>
            <Certifications/>
            <Skills/>
            <Projects/>
            <GetInTouch/>
        </main>
    )
}

export default Main