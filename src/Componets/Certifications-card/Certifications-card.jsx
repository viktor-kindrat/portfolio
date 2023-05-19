import { useEffect } from "react"
import { gsap } from "gsap"


import "./Styles/Certifications-card.css"
import dldSvg from "./Images/dld.svg"

function CertificationsCard(props) {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let tl = gsap.timeline();
                if (entry.isIntersecting) {
                    tl.fromTo(".Certifications-card", {
                        opacity: 0, y: 50,
                    }, {
                        opacity: 1, y: 0, duration: 0.6, stagger: 0.2, delay: 0.3
                    });
                } else {
                    tl.fromTo(".Certifications-card", {
                        opacity: 1, y: 0,
                    }, {
                        opacity: 0, y: 50, duration: 0.2,
                    });
                }
            });
        });

        if (props.swiperRef) {
            observer.observe(props.swiperRef);
        }

        return () => {
            observer.unobserve(props.swiperRef);
        };
    }, [props.swiperRef]);
    return (
        <div className="Certifications-card">
            <img className="Certifications-card-image" height={150} src={`data:${props.data.image.contentType};base64,${props.data.image.data}`} alt="certificate-thumbnail" />
            <div className="Certifications-card-content-textgroup">
                <h6 className="Certifications-card-content-headline">{props.data.name}</h6>
                <p className="Certifications-card-content-info">{props.data.academy}</p>
                <p className="Certifications-card-content-info">{props.data.dated}</p>
                <a href={`data:${props.data.image.contentType};base64,${props.data.image.data}`} className="Certifications-card-content-btn" download={"Certificate " + props.data.name}><img className="Certifications-card-content-img" height={15} src={dldSvg} alt="download" /> Download</a>
            </div>
        </div>
    )
}

export default CertificationsCard