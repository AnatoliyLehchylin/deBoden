import React, { useState } from 'react';

import image1 from '../../public/image1.jpg';
import image2 from '../../public/image2.jpg';
import image3 from '../../public/image3.jpg';
import image4 from '../../public/image4.jpg';
import image5 from '../../public/image5.jpg';
import imagedef from '../../public/imagedef.jpg';

function Card({ index }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const images = [image1, image2, image3, image4, image5];

    const toggleImage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card" onClick={toggleImage}>
            <img src={isFlipped ? images[index] : imagedef} style={{
                width: isFlipped ? '150px' : '100px',
                marginRight: '10px',
                cursor: 'pointer',
                border: '1px solid #f6cab6',
                borderRadius: '8px',
                // opacity: isFlipped ? 1 : 0.8,
                transition: 'opacity 1s ease, width 1s ease'
            }} alt="card" />
        </div>
    );
}

export default Card;