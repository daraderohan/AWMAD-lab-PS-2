import React from 'react';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';

const Images = () => {
    return (
        <>
            images
            <div style={{ margin:10 }}>
                <img src={image1} alt="Image1" />
            </div>
            <img src={ image2} alt="Image1" />
        </>
    )
}

export default Images;