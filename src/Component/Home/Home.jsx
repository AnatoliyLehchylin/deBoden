import React, {useState} from 'react';

import { HIAM,
    MainImg,
    MainImgMargin,
    MainName,
    MainSectionWrap,
    MainTextStyle,
    MainTextWrap, RRX } from "./style/index.js";

import {MainText} from "../../Data/index.js";
import robot2 from "../../../public/robot2.png";
import robot1 from "../../../public/robot1.png";

function Home() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={MainSectionWrap}>
            <div style={MainTextWrap}>
                <div style={HIAM}>HI, I`M</div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={MainName}><span
                        style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span
                        style={{color: 'yellow'}}>B</span><span style={{color: 'blue'}}>O</span><span style={{color: 'indigo'}}>-</span><span
                        style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span
                        style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span
                        style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span
                        style={{color: '#c72b96'}}>W</span>&nbsp;<span
                        style={{color: 'red'}}>X</span>
                    </div>
                </div>

                <p style={MainTextStyle}>{MainText}</p>
            </div>

            <div style={MainImgMargin}>
                {isHovered ? (
                    <img
                        src={robot2}
                        style={MainImg}
                        onMouseLeave={handleMouseLeave}
                        alt='robot'
                    />
                ) : (
                    <div style={{position: 'relative'}}>
                        <img
                            src={robot1}
                            style={MainImg}
                            onMouseEnter={handleMouseEnter}
                            alt='robot'
                        />
                        <div style={RRX}>$RRX
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Home;