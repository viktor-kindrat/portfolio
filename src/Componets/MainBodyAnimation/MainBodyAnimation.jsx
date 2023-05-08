import "./Styles/MainBodyAnimation.css"

import hand from "./Images/hand.png"
import body from "./Images/man.png"

function MainBodyAnimation(){
    return (
        <div className="MainBodyAnimation">
            <img className="MainBodyAnimation__image MainBodyAnimation__image-body" src={body} alt="body" />
            <img className="MainBodyAnimation__image MainBodyAnimation__image-hand" src={hand} alt="hand waveing" />
        </div>
    )
}

export default MainBodyAnimation