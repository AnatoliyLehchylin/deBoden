import React from 'react';
import { Wrapper, WrapSection, RoadmapStyle, Img, Year24, Year25, LeftTask, RightTask, LeftQ, RightQ, Lefttext, Righttext, Arrow } from "./style/index.js";
import { Q224, Q324, Q424, Q125, Q225, Q325, Q425 } from "../../Data/index.js";
import graf from "../../../public/graf.jpg";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


function Roadmap() {

    return (
        <div style={Wrapper}>
            <p style={RoadmapStyle}>ROADMAP</p>

            <div style={{display: 'flex'}}>

                <div style={WrapSection}>

                    <div>
                        <img src={graf} style={Img}/>
                    </div>

                    <p style={Year24}>2024</p>

                    <div style={LeftTask}>
                        <p style={LeftQ}>Q2:</p>
                        <p style={Lefttext}>{Q224}</p>
                    </div>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <div style={LeftTask}>
                        <p style={LeftQ}>Q3:</p>
                        <p style={Lefttext}>{Q324}</p>
                    </div>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <div style={LeftTask}>
                        <p style={LeftQ}>Q4:</p>
                        <p style={Lefttext}>{Q424}</p>
                    </div>

                </div>

                <div style={{...WrapSection, paddingRight: '0', alignItems: 'flex-end'}}>
                    <p style={Year25}>2025</p>

                    <div style={RightTask}>
                        <p style={RightQ}>Q1:</p>
                        <p style={Righttext}>{Q125}</p>
                    </div>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <div style={RightTask}>
                        <p style={RightQ}>Q2:</p>
                        <p style={Righttext}>{Q225}</p>
                    </div>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <div style={RightTask}>
                        <p style={RightQ}>Q3:</p>
                        <p style={Righttext}>{Q325}</p>
                    </div>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <div style={RightTask}>
                        <p style={RightQ}>Q4:</p>
                        <p style={Righttext}>{Q425}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Roadmap;