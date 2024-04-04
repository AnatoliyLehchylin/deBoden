import React, { useState } from 'react';

import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import image4 from '../../../public/image4.jpg';
import image5 from '../../../public/image5.jpg';
import imagedef from '../../../public/imagedef.jpg';

import { CardStyle } from './style/index.js';
import {Box} from "@mui/material";

function Card({ index }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const images = [image1, image2, image3, image4, image5];

    const toggleImage = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <Box sx={{
            ...CardStyle,
            width: isFlipped ? '150px' : '100px'
        }} onClick={toggleImage}>
            <img src={isFlipped ? images[index] : imagedef} style={{width: '100%', borderRadius: '8px'}} alt="card" />
        </Box>
    );
}

export default Card;