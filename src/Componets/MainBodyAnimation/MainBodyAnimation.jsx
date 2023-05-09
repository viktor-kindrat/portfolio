import "./Styles/MainBodyAnimation.css"

import hand from "./Images/hand.png"
import body from "./Images/man.png"

function MainBodyAnimation(){
    return (
        <div className="MainBodyAnimation">
            <img height="500" className="MainBodyAnimation__image MainBodyAnimation__image-body" src={body} alt="body" />
            <img height="210" className="MainBodyAnimation__image MainBodyAnimation__image-hand" src={hand} alt="hand waveing" />
        </div>
    )
}

export default MainBodyAnimation