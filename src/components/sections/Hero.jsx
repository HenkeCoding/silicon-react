import React from 'react'

const Hero = () => {
    return (
        <section id="hero-section">
                <div className="container">

                    <h1>Manage All Your Money in One App</h1>

                    <div className="manage-content">
                        <div className="manage-text">
                            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your
                                pocket.</p>
                        </div>

                        <div className="store-buttons">
                            <button className="store-button btn" id="app-store">
                                <img id="app-store-image" src="images/hero/appstore-light.svg" />
                            </button>

                            <button className="store-button btn" id="google-play">
                                <img id="google-play-image" src="images/hero/googleplay-light.svg" />
                            </button>
                        </div>

                        <div className="discover-more-button">
                            <img src="images\hero/next-btn.svg" alt="next"/>
                            <p>Discover More</p>
                        </div>
                    </div>

                    <div className="phones">
                        <img src="images\hero/hero-image.svg" alt="Phones1"/>
                    </div>

                </div>
            </section>
    )
}

export default Hero