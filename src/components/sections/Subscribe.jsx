import React from 'react'
import SubscribeForm from '../forms/SubscribeForm'

const Subscribe = () => {
    return (
        <section id="subscribe-bar">
            <div className="container">
                <div className="content-container">

                    <img src="images\subscribe/SubscribeBell.svg" alt="SubscribeBell" />
                    <h4>
                        Subscribe to our newsletter
                        <span> to stay informed about latest updates</span>
                    </h4>

                </div>
                <div className="form-container">

                    <SubscribeForm />

                </div>
            </div>
        </section>
    )
}

export default Subscribe
