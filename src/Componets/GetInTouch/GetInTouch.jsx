import "./Styles/GetInTouch.css"
import image from "./images/img.webp"
import sendIcon from "./images/send.svg"

function GetInTouch(){
    return (
        <section className="GetInTouch" id="get">
            <div className="GetInTouch__headline-wrapper">
                <h2 className="GetInTouch__headline">Get in touch</h2>
                <p className="GetInTouch__caption">If you have any questions write me in the form below</p>
            </div>
            <div className="GetInTouch__row">
                <form id="GetInTouchForm" className="GetInTouch__form">
                    <input autoComplete="name" name="name" type="text" placeholder="Your name" className="GetInTouch__input" />
                    <textarea autoComplete="off" name="message" placeholder="Message"></textarea>
                </form>
                <div className="GetInTouch__image-wrapper">
                    <img className="GetInTouch__image" height={467} src={image} alt="me drawing something" />
                </div>
            </div>
            <button form="GetInTouchForm" className="GetInTouch__button" type="submit">
                <img src={sendIcon} alt="send icon" className="GetInTouch__button-icon" />
                <span className="GetInTouch__button-text">Send</span>
            </button>
        </section>
    )
}

export default GetInTouch