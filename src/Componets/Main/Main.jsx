import "./Styles/Main.css"
import Home from "../Home/Home"
import About from "../About/About"
import Certifications from "../Certifications/Certifications"
import Skills from "../Skills/Skills"

function Main () {
    return (
        <main className="Main">
            <Home/>
            <About/>
            <Certifications/>
            <Skills/>
        </main>
    )
}

export default Main