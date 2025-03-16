import React, { useState } from 'react'
import ImageSlider from '../elements/ImageSlider'

const Features = () => {
    const [brands, setbrands] = useState([
        { id: 1, url: '/images/features/logoipsum1.svg', itemid: 'brand1' },
        { id: 2, url: '/images/features/logoipsum2.svg', itemid: 'brand2' },
        { id: 3, url: '/images/features/logoipsum3.svg', itemid: 'brand3' },
        { id: 4, url: '/images/features/logoipsum4.svg', itemid: 'brand4' },
        { id: 5, url: '/images/features/logoipsum5.svg', itemid: 'brand5' },
        { id: 6, url: '/images/features/logoipsum6.svg', itemid: 'brand6' },
    ])

    return (
        <section id="features-section">
            <div className="container">
                <ImageSlider images={brands} />


                <div className="features-body">
                    <div className="features-phone" data-aos="fade-right">
                        <img src="images\features\FeaturesPhones.png" alt="phones2" height="684" width="348" />
                    </div>


                    <div className="features-info" data-aos="flip-right">
                        <div className="features-title">
                            <h2>App Features</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis
                                egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis
                                fermentum, at nec lacus.</p>
                        </div>


                        <div className="features-table">
                            <div className="feature">
                                <img src="images/features/FeatureIcon1.svg" />
                                <div className="feature-text">

                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>

                                </div>
                            </div>
                            <div className="feature">
                                <img src="images/features/featureicon2.svg" />
                                <div className="feature-text">

                                    <h3>Data Security</h3>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>

                                </div>
                            </div>
                            <div className="feature">
                                <img src="images/features/WalletIcon.svg" />
                                <div className="feature-text">

                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>

                                </div>
                            </div>
                            <div className="feature">
                                <img src="images/features/featureicon4.svg" />
                                <div className="feature-text">

                                    <h3>Support 24/7</h3>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>

                                </div>
                            </div>
                            <div className="feature">
                                <img src="images/features/featureicon5.svg" />
                                <div className="feature-text">

                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet
                                        eleifend.</p>

                                </div>
                            </div>
                            <div className="feature">
                                <img src="images/features/featureicon6.svg" />
                                <div className="feature-text">

                                    <h3>Top Standards</h3>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit
                                        facilisis dolor arcu.</p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
