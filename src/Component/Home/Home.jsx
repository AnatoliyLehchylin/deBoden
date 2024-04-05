import React, {useState} from 'react';

import {
    HIAM,
    MainImg,
    MainImgMargin,
    MainName,
    MainSectionWrap,
    MainTextStyle,
    MainTextWrap, RRX
} from "./style/index.js";

import {MainText} from "../../Data/index.js";
import robot2 from "../../../public/robot2.png";
import robot1 from "../../../public/robot1.png";
import {Avatar, Box, Typography} from "@mui/material";

function Home() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box sx={MainSectionWrap}>
            <Box sx={MainTextWrap}>
                <Box sx={HIAM}>HI, I`M</Box>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={MainName}><span
                        style={{color: 'red'}}>P</span><span style={{color: 'darkorange'}}>R</span><span
                        style={{color: 'blue'}}>I</span><span style={{color: 'red'}}>D</span><span
                        style={{color: 'indigo'}}>E</span><span
                        style={{color: 'red'}}>B</span><span style={{color: 'darkorange'}}>O</span><span
                        style={{color: 'blue'}}>T</span><span style={{color: 'green'}}>-</span><span
                        style={{color: 'indigo'}}>X</span>
                        {/*<span style={{color: 'indigo'}}>O</span><span*/}
                        {/*style={{color: '#c72b96'}}>W</span>&nbsp;<span*/}
                        {/*style={{color: 'red'}}>X</span>*/}
                    </Box>
                </div>

                <Typography sx={MainTextStyle}>{MainText}</Typography>
            </Box>

            <Box sx={MainImgMargin}>
                {isHovered ? (
                    <Avatar
                        src={robot2}
                        sx={MainImg}
                        onMouseLeave={handleMouseLeave}
                        alt='robot'
                    />
                ) : (
                    <div style={{position: 'relative'}}>
                        <Avatar
                            src={robot1}
                            sx={MainImg}
                            onMouseEnter={handleMouseEnter}
                            alt='robot'
                        />
                        <Box sx={RRX}>$PBX
                        </Box>
                    </div>
                )}
            </Box>

        </Box>
    );
}

export default Home;