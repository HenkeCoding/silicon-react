import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({ item }) => {
    return (
        <div className="testimonial">
            
            <div className="quote-icon">
                <i className="bi bi-quote"></i>
            </div>

            <StarRating stars={item.starRating} />

            <div className="testimonial-text">
                <p>
                    {item.comment}
                </p>
            </div>

            <div className="client-info">
                <img className="client-image" src={item.avatarUrl} />
                <div className="client-name">{item.author}</div>
                <div className="client-role">{item.jobRole}</div>
            </div>

        </div>
    )
}

export default Testimonial