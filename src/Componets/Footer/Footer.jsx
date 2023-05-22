import { useCallback, useEffect } from "react"
import { gsap } from "gsap"

import "./Styles/Footer.css"

import logo from "./Images/logo.svg"

import image from "./Images/image.webp"

import mailIcon from "./Images/mail.svg"
import githubIcon from "./Images/github.svg"
import instagramIcon from "./Images/instagram.svg"
import linkedinIcon from "./Images/linkedin.svg"

function Footer() {
    useEffect(() => {
        let linksEl = document.querySelector(".Footer__links");
        let observer = new IntersectionObserver(entries => {
            let tl = gsap.timeline();
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("observing inspects");
                    tl.fromTo(".Footer__headline", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 })
                    tl.fromTo(".Footer__links-list-item", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 })
                } else {
                    console.log("observing not inspects");
                    tl.fromTo(".Footer__links-list-item", { opacity: 1, x: 0, }, { opacity: 0, x: 50, duration: 0.1, stagger: 0.05 })
                    tl.fromTo(".Footer__headline", { opacity: 1, x: 0 }, { opacity: 0, x: -50, duration: 0.1, stagger: 0.1 })
                }
            });
        });
        observer.observe(linksEl);
        return () => {
            observer.unobserve(linksEl);
        }
    }, [])
    let menuClickHandler = useCallback(function (e) {
        e.preventDefault()
        let id = `#${e.target.innerText.split(" ")[0].toLowerCase()}`;
        let navElement = document.querySelector(id);
        if (navElement) navElement.scrollIntoView({ behavior: "smooth", block: "start" })
        return false
    }, [])
    return (
        <footer className="Footer">
            <div className="Footer__content">
                <img className="Footer__logo" src={logo} alt="Viktor's logo" />
                <div className="Footer__links">
                    <div className="Footer__links-group">
                        <h4 className="Footer__headline">Go to:</h4>
                        <nav className="Footer__nav">
                            <ul className="Footer__links-list">
                                <li onClick={menuClickHandler} className="Footer__links-list-item"><a href="/" className="Footer__links-list-item-link">Main page</a></li>
                                <li onClick={menuClickHandler} className="Footer__links-list-item"><a href="/" className="Footer__links-list-item-link">About me</a></li>
                                <li onClick={menuClickHandler} className="Footer__links-list-item"><a href="/" className="Footer__links-list-item-link">Skills and certifications</a></li>
                                <li onClick={menuClickHandler} className="Footer__links-list-item"><a href="/" className="Footer__links-list-item-link">Projects</a></li>
                                <li onClick={menuClickHandler} className="Footer__links-list-item"><a href="/" className="Footer__links-list-item-link">Get in touch</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="Footer__links-group">
                        <h4 className="Footer__headline">In social</h4>
                        <ul className="Footer__links-list">
                            <li className="Footer__links-list-item"><a rel="noreferrer" target="_blank" href="mailTo:kindratvictor@gmail.com" className="Footer__links-list-item-link"><img src={mailIcon} alt="linkedIn icon" className="Footer__links-list-item-img" /> kindratvictor@gmail.com</a></li>
                            <li className="Footer__links-list-item"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/victor_kindrat/" className="Footer__links-list-item-link"><img src={instagramIcon} alt="linkedIn icon" className="Footer__links-list-item-img" /> @victor-kindrat</a></li>
                            <li className="Footer__links-list-item"><a rel="noreferrer" target="_blank" href="https://github.com/viktor-kindrat" className="Footer__links-list-item-link"><img src={githubIcon} alt="linkedIn icon" className="Footer__links-list-item-img" /> @viktor-kindrat</a></li>
                            <li className="Footer__links-list-item"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/viktor-kindrat/" className="Footer__links-list-item-link"><img src={linkedinIcon} alt="linkedIn icon" className="Footer__links-list-item-img" /> viktor-kindrat</a></li>
                        </ul>
                    </div>
                </div>
                <span className="Footer__copy">&copy; Copyright {new Date().getFullYear()}</span>
            </div>
            <img className="Footer__img" src={image} alt="Viktor with a cat on the head" />
        </footer>
    )
}

export default Footer