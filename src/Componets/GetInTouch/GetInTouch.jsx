import { useCallback, useState } from "react"

import "./Styles/GetInTouch.css"
import image from "./images/img.webp"
import sendIcon from "./images/send.svg"
import Alert from "../Alert/Alert"

function GetInTouch() {
    let [alertData, setAlertData] = useState(false)
    const formSubmitHandler = useCallback((e) => {
        e.preventDefault();
        let labels = document.querySelectorAll(".GetInTouch__form-placeholder");
        fetch("https://portfolio-api-5x6x.onrender.com/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                message: e.target.message.value
            })})
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.msg === "success") {
                    setAlertData({message: "Thank you for your message! \u{1F60D}", liveTime: 4000, type: "sended"})
                    setTimeout(() => {
                        setAlertData(false)
                    }, 4000);
                }
                e.target.reset();
                labels.forEach(label=>label.removeAttribute("style"))
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        return false
    }, [])
    const formInputFocus = useCallback((e)=>{
        const label = e.target.parentElement.children[0];
        label.style.top = "-5px";
        label.style.left = "10px";
        label.style.fontSize = "11px";
        label.style.fontWeight = "700";
    }, [])
    const formInputBlur = useCallback((e)=>{
        const label = e.target.parentElement.children[0];
        if (e.target.value.length < 1) {
            label.removeAttribute("style")
        }
    }, [])
    return (
        <section className="GetInTouch" id="get">
            {
                (alertData) ? <Alert message={alertData.message} liveTime={alertData.liveTime} type={alertData.type}/> : ""
            }
            <div className="GetInTouch__headline-wrapper">
                <h2 className="GetInTouch__headline">Get in touch</h2>
                <p className="GetInTouch__caption">If you have any questions write me in the form below</p>
            </div>
            <div className="GetInTouch__row">
                <form onSubmit={formSubmitHandler} method="POST" action="https://portfolio-api-5x6x.onrender.com/sendMessage" id="GetInTouchForm" className="GetInTouch__form">
                    <div className="GetInTouch__form-input-group">
                        <label className="GetInTouch__form-placeholder" htmlFor="formInputName">Your name</label>
                        <input onBlur={formInputBlur} onFocus={formInputFocus} id="formInputName" autoComplete="name" name="name" type="text" className="GetInTouch__input" />
                    </div>
                    <div className="GetInTouch__form-input-group">
                        <label className="GetInTouch__form-placeholder" htmlFor="formInputMessage">Message</label>
                        <textarea onBlur={formInputBlur} onFocus={formInputFocus} id="formInputMessage" autoComplete="off" name="message" className="GetInTouch__input GetInTouch__input_area"></textarea>
                    </div>
                </form>
                <div className="GetInTouch__image-wrapper">
                    <img className="GetInTouch__image" height={400} src={image} alt="Viktor drawing something" />
                </div>
            </div>
            <button form="GetInTouchForm" className="GetInTouch__button" type="submit">
                <img height={24} src={sendIcon} alt="send icon" className="GetInTouch__button-icon" />
                <span className="GetInTouch__button-text">Send</span>
            </button>
        </section>
    )
}

export default GetInTouch