import { useCallback, useState, useRef } from "react";
import { gsap } from "gsap";

import "./Styles/Header.css"
import logo from "./Images/logo.svg"

function Header() {
    let [openMenu, setOpenMenu] = useState(false);
    let playing = useRef(false);
    let mobileMenuHandler = useCallback(() => {
        if (!playing.current) {
            playing.current = true
            let newState = !openMenu;
            setOpenMenu(newState);
            let headerElStyle = getComputedStyle(document.querySelector(".Header"));
            let tl = gsap.timeline();
            if (newState) {
                tl
                    .set(`.Header__nav-switcher`, { justifyContent: "center" })
                    .to(`.Header__nav-dot_2`, { duration: 0.2, opacity: 0 })
                    .to(`.Header__nav-dot_1`, { duration: 0.2, y: 3, rotate: "45deg" })
                    .to(`.Header__nav-dot_3`, { duration: 0.2, y: -3, rotate: "-45deg" })
                    .set(`.Header__nav`, { display: "flex" })
                    .set(".Header__nav-list", { width: "100%", height: "auto", flexDirection: "column", zIndex: "6000", background: "#ffffff", position: "fixed", yPercent: -100, x: 0, opacity: 0 })
                    .to(".Header__nav-list", { y: headerElStyle.height, yPercent: 0, opacity: 1, duration: 0.3 })
            } else {
                tl
                    .to(".Header__nav-list", { y: 0, yPercent: -100, opacity: 0, duration: 0.3 })
                    .set(`.Header__nav`, { display: "none" })
                    .set(".Header__nav-list", { width: "auto", height: "auto", flexDirection: "row", zIndex: "1", background: "transparent", position: "relative", yPercent: 0, x: 0, opacity: 0 })
                    .to(`.Header__nav-dot_3`, { duration: 0.2, y: 0, rotate: "0" })
                    .to(`.Header__nav-dot_1`, { duration: 0.2, y: 0, rotate: "0" })
                    .to(`.Header__nav-dot_2`, { duration: 0.2, opacity: 1 })
                    .set(`.Header__nav-switcher`, { justifyContent: "space-between" })
            }
            tl.then(()=>playing.current = false)
        }
    }, [openMenu])

    let menuMosueEnter = useCallback(function(e){
        let targets = document.querySelectorAll(`.${e.target.classList[0]}`);
        targets.forEach(tar=>tar.classList.add(`${e.target.classList[0]}_opacity-low`))
        e.target.classList.remove(`${e.target.classList[0]}_opacity-low`)
    }, [])

    let menuMouseLeave = useCallback(function(e){
        let targets = document.querySelectorAll(`.${e.target.classList[0]}`);
        targets.forEach(tar=>tar.classList.remove(`${e.target.classList[0]}_opacity-low`))
    }, [])
    return (
        <header className="Header">
            <img height="45" width="92" src={logo} alt="VK" className="Header__logo" />
            <nav className="Header__nav">
                <ul className="Header__nav-list">
                    <li onMouseEnter={menuMosueEnter} onMouseLeave={menuMouseLeave} className="Header__nav-item"><a href="/" className="Header__link">About me</a></li>
                    <li onMouseEnter={menuMosueEnter} onMouseLeave={menuMouseLeave} className="Header__nav-item"><a href="/" className="Header__link">SkilLs and certifications</a></li>
                    <li onMouseEnter={menuMosueEnter} onMouseLeave={menuMouseLeave} className="Header__nav-item"><a href="/" className="Header__link">Projects</a></li>
                    <li onMouseEnter={menuMosueEnter} onMouseLeave={menuMouseLeave} className="Header__nav-item"><a href="/" className="Header__link">Get in touch</a></li>
                </ul>
            </nav>
            <button onClick={mobileMenuHandler} type="button" className="Header__nav-switcher">
                <span className="Header__nav-dot Header__nav-dot_1"></span>
                <span className="Header__nav-dot Header__nav-dot_2"></span>
                <span className="Header__nav-dot Header__nav-dot_3"></span>
            </button>
        </header>
    )
}

export default Header