import React from 'react'   

const ImageSliderItem = ({image}) => {
    return (
        <div className="imageslider-item" id={image.itemid}>
            <img src={image.url} alt={image.alt} />
        </div>
    )
}

export default ImageSliderItem