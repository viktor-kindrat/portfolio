import "./Styles/Footer.css"

import logo from "./Images/logo.svg"

import image from "./Images/image.webp"

// import mailIcon from "./Images/mail.svg"
// import githubIcon from "./Images/github.svg"
// import instagramIcon from "./Images/instagram.svg"
// import linkedinIcon from "./Images/linkedin.svg"

function Footer () {
    return (
        <footer className="Footer">
            <div className="Footer__content">
                <img src={logo} alt="Viktor's logo" />
                <div className="Footer__links">

                </div>
                <span className="Footer__copy">&copy; Copyright {new Date().getFullYear()}</span>
            </div>
            <img className="Footer__img" src={image} alt="Viktor with a cat on the head" />
        </footer>
    )
}

export default Footer