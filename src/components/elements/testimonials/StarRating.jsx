import React from 'react'

const StarRating = ({stars}) => {
    return (
        <div className="star-rating">

            {/* 
                Här använde jag copilot för att fixa funktionen.
                Funktionen skapar en array med 5 element och mappar igenom den.
            */}
            
            {
                [...Array(5)].map((_, i) => (
                    <i key={i} className={i < stars ? 'bi bi-star-fill' : 'bi bi-star'}></i>
                ))
            }

        </div>
    )
}

export default StarRating