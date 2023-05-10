import "./Style/About.css"

function About () {
    return (
        <>
        <section className="About">
            <div className="About__content">
                <h2 className="About__headline">My story</h2>
                <div className="About__content-wrap">
                    content1
                </div>
            </div>
            <div className="About__content">
                <h2 className="About__headline">My story</h2>
                <div className="About__content-wrap">
                    content2
                </div>
            </div>
        </section>
        <div className="Testbo" style={{"height": 100+"vh", "width": 100+"%"}}>Bla bla bla content</div>
        </>
    )
}

export default About