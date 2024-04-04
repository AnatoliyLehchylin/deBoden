import React from 'react';
import {
    Wrapper,
    WrapSection,
    RoadmapStyle,
    Img,
    Year24,
    Year25,
    LeftTask,
    RightTask,
    LeftQ,
    RightQ,
    Lefttext,
    Righttext,
    Arrow
} from "./style/index.js";
import {Q224, Q324, Q424, Q125, Q225, Q325, Q425} from "../../Data/index.js";
import graf from "../../../public/graf.jpg";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Box, Typography} from "@mui/material";


function Roadmap() {

    return (
        <Box sx={Wrapper}>
            <p style={RoadmapStyle}>ROADMAP</p>

            <Box sx={{
                display: 'flex', '@media (max-width: 440px)': {
                    flexDirection: 'column',
                    alignItems: 'center'
                },
            }}>

                <Box sx={WrapSection}>

                    <Box sx={Img}>
                        <img src={graf} style={{width: '100%'}}/>
                    </Box>

                    <p style={Year24}>2024</p>

                    <Box sx={LeftTask}>
                        <p style={LeftQ}>Q2:</p>
                        <Typography sx={Lefttext}>{Q224}</Typography>
                    </Box>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <Box sx={LeftTask}>
                        <p style={LeftQ}>Q3:</p>
                        <Typography sx={Lefttext}>{Q324}</Typography>
                    </Box>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <Box sx={LeftTask}>
                        <p style={LeftQ}>Q4:</p>
                        <Typography sx={Lefttext}>{Q424}</Typography>
                    </Box>

                </Box>

                <Box sx={{
                    ...WrapSection, paddingRight: '0', alignItems: 'flex-end',
                    '@media (max-width: 590px)': {
                        alignItems: 'flex-start'
                    }, '@media (max-width: 440px)': {
                        width: '100%',
                        alignItems: 'center !important'
                    },
                }}>
                    <p style={Year25}>2025</p>

                    <Box sx={RightTask}>
                        <Typography sx={RightQ}>Q1:</Typography>
                        <Typography sx={Righttext}>{Q125}</Typography>
                    </Box>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <Box sx={RightTask}>
                        <Typography sx={RightQ}>Q2:</Typography>
                        <Typography sx={Righttext}>{Q225}</Typography>
                    </Box>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <Box sx={RightTask}>
                        <Typography sx={RightQ}>Q3:</Typography>
                        <Typography sx={Righttext}>{Q325}</Typography>
                    </Box>

                    <KeyboardDoubleArrowDownIcon sx={Arrow}/>

                    <Box sx={RightTask}>
                        <Typography sx={RightQ}>Q4:</Typography>
                        <Typography sx={Righttext}>{Q425}</Typography>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default Roadmap;