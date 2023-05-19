import { useEffect } from "react"
import { gsap } from "gsap"

import "./Styles/Skill-card.css"

function SkillsCard (props){
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let tl = gsap.timeline();
                if (entry.isIntersecting) {
                    tl.fromTo(".Skills-card", {
                        opacity: 0, y: 50,
                    }, {
                        opacity: 1, y: 0, duration: 0.6, stagger: 0.2, delay: 0.3
                    });
                } else {
                    tl.fromTo(".Skills-card", {
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
        <div className="Skills-card">
            <img className="Skills-card__image" height={100} width={100} src={`data:${props.data.image.contentType};base64,${props.data.image.data}`} alt={`${props.data.name} skill`}  />
            <p className="Skill-card__caption">{props.data.name}</p>
        </div>
    )
}

export default SkillsCard