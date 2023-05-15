import "./Styles/Main.css"
import Home from "../Home/Home"
import About from "../About/About"
import Certifications from "../Certifications/Certifications"

function Main () {
    return (
        <main className="Main">
            <Home/>
            <About/>
            <Certifications/>
        </main>
    )
}

export default Main