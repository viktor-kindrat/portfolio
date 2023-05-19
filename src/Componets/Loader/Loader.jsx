import "./Styles/Loader.css"

function Loader() {
    return (
        <div className="container">
            <div className="line"></div>
            <div className="loader">
                <div className="one-loader first">
                    <div className="v-line first-line"></div>
                    <div className="circle first-circle"></div>
                </div>
                <div className="one-loader">
                    <div className="v-line middle-line"></div>
                    <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader">
                    <div className="v-line middle-line"></div>
                    <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader">
                    <div className="v-line middle-line"></div>
                    <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader last">
                    <div className="v-line last-line"></div>
                    <div className="circle last-circle"></div>
                </div>
            </div>
            <h1>Loading</h1>
        </div>
    )
}

export default Loader