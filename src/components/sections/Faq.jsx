import React from 'react'
import Accordion from '../elements/faq/Accordion'
import ContactOption from '../elements/faq/ContactOption'
import PurpleButton from '../elements/PurpleButton'


const Faq = () => {

    return (
        <section id="faq-section">
            <div className="container">

                <div className="faq-content">
                    <h5>Any questions?
                        Check out the FAQs</h5>
                    <p>Still have unanswered questions and need to get in touch?</p>
                </div>


                <div className="link-boxes">
                    <ContactOption icon="images/faq/faq-phone.svg" text="Still have questions?" uri="/contact" linkText="Contact us" color="purple" />
                    <ContactOption icon="images/faq/faq-speech-bubble.svg" text="Don't like phone calls?" uri="/contact" linkText="Contact us" color="green" />
                </div>


                <div className="accordion-area">
                    <Accordion />
                </div>


                <div className="contact-us-button">
                    <PurpleButton text="Contact us now" />
                </div>

            </div>
        </section>
    )
}

export default Faq