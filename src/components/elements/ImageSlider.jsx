import React from 'react'
import ImageSliderItem from './ImageSliderItem'
 

const ImageSlider = ({id, images}) => {
    return (
        <section id={id}>
                <div className="imageslider">

                    {
                        images.map(image => (
                            <ImageSliderItem image={image} key={image.id} />
                        ))
                    }

                </div>
        </section>
    )
}

export default ImageSlider