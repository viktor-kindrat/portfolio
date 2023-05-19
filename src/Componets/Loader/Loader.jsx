import "./Styles/Loader.css"

function Loader() {
    return (
        <div class="container">
            <div class="line"></div>
            <div class="loader">
                <div class="one-loader first">
                    <div class="v-line first-line"></div>
                    <div class="circle first-circle"></div>
                </div>
                <div class="one-loader">
                    <div class="v-line middle-line"></div>
                    <div class="circle middle-circle"></div>
                </div>
                <div class="one-loader">
                    <div class="v-line middle-line"></div>
                    <div class="circle middle-circle"></div>
                </div>
                <div class="one-loader">
                    <div class="v-line middle-line"></div>
                    <div class="circle middle-circle"></div>
                </div>
                <div class="one-loader last">
                    <div class="v-line last-line"></div>
                    <div class="circle last-circle"></div>
                </div>
            </div>
            <h1>Loading</h1>
        </div>
    )
}

export default Loader