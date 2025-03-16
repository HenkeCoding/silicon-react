import React, { useContext} from 'react'
import Testimonial from '../elements/testimonials/Testimonial'
import { TestimonialsContext } from '../../contexts/TestimonialsContext'


const Testimonials = () => {
    const {testimonials} = useContext(TestimonialsContext)

    return (
        <section id="testimonials-section">
            <div className="container">
                <div className='headline'>
                    <h2>Clients are loving our app</h2>
                </div>

                <div className="testimonials">
                    {
                        testimonials.map(testimonial => (<Testimonial key={testimonial.id} item={testimonial} />))
                    }

                </div>

                    
            </div>
        </section>
    )
}

export default Testimonials