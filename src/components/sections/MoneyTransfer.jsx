import React from 'react'
import Purplebutton from '../elements/PurpleButton'

const MoneyTransfer = () => {
    return (
        <section id="money-transfer-section">
            <div className="container">

                <div className="column" data-aos="fade-right">
                    <div className="content">

                        <div className="section-title">
                            <h5>Make your money transfer simple and clear</h5>
                        </div>
                        <div className="section-body">
                            <div className="checklist">
                                <p><i className="bi bi-check-circle"></i>Money</p>
                                <p><i className="bi bi-check-circle"></i>Transfer</p>
                                <p><i className="bi bi-check-circle"></i>Withdraw</p>
                            </div>


                            <div className="learn-more-button">
                                <Purplebutton url="features" text="Learn more" after="true" icon="bi bi-arrow-right" />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="column" data-aos="fade-left">
                    <div className="image-container">
                        <img src="images/money-transfer/MoneyTransferA1.png" alt="moneytransferA1" />
                        <img src="images/money-transfer/MoneyTransferA2.png" alt="moneytransferA2"
                            id="moneytransferA2" />
                    </div>
                </div>

                <div className="column" data-aos="fade-up">
                    <div className="image-container">
                        <img src="images\money-transfer/MoneyTransferB1.png" alt="moneytransferB1" />
                        <img src="images/money-transfer/MoneyTransferB2.png" alt="moneytransferB2"
                            id="moneytransferB2" />
                    </div>
                </div>

                <div className="column" data-aos="fade-up">
                    <h5>Receive payment from international bank details</h5>

                    <div className="features">

                        <div className="feature">
                            <img src="images/features/FeatureIcon1.svg" alt="Card" />
                            <div className="feature-text">
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <img src="images/features/WalletIcon.svg" alt="Wallet" />
                            <div className="feature-text">
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>

                    </div>

                    <div className="learn-more-button">
                        <Purplebutton url="features" text="Learn more" after="true" icon="bi bi-arrow-right" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default MoneyTransfer