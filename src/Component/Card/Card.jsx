import React, { useState } from 'react';

import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import image4 from '../../../public/image4.jpg';
import image5 from '../../../public/image5.jpg';
import imagedef from '../../../public/imagedef.jpg';

import { CardStyle } from './style/index.js';

function Card({ index }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const images = [image1, image2, image3, image4, image5];

    const toggleImage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card" onClick={toggleImage}>
            <img src={isFlipped ? images[index] : imagedef} style={{
                ...CardStyle,
                width: isFlipped ? '150px' : '100px'
            }} alt="card" />
        </div>
    );
}

export default Card;