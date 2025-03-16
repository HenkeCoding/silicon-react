import React from 'react'

const PhoneSlider = () => {
  return (
    <section id="how-does-it-work-section">
      <div className="container">

        <h2>How does it work?</h2>


        <div className="image-slider">
          <div id="image-slide1" data-aos="flip-left">
            <img src="images\how-does-it-work/SliderPhone1.png" alt="Image 1" />
          </div>
          <div id="image-slide2" data-aos="flip-left">
            <img src="images\how-does-it-work/SliderPhone2.png" alt="Image 2" />
          </div>
          <div id="image-slide3" data-aos="flip-left">
            <img src="images\how-does-it-work/SliderPhone3.png" alt="Image 3" />
          </div>
        </div>


        <div className="desktop-text">
          <h4>Latest transaction history</h4>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique</p>
          <p> quisque hac in consectetur condimentum.</p>
        </div>


        <div className="mobile-text">
          <h4>Transfers to people from your contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula
            est. Mattis fermentum, at nec lacus.</p>
        </div>

      </div>
    </section>
  )
}

export default PhoneSlider