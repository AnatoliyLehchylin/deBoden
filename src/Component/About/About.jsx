import React from 'react';
import {AboutText, AboutTitle} from "../../Data/index.js";
import ForwardIcon from "@mui/icons-material/Forward.js";

import robotTea from "../../../public/robottea.jpg";
import robotTea1 from "../../../public/robottea1.jpg";
import robotShlyapa from "../../../public/shlyapa.jpg";
import robotKepka from "../../../public/kepka.jpg";

import {Wrapp, WrapContent, Name, WrappTitle, Title, Text, FindOut} from "./style/index.js";
import {Box, Typography} from "@mui/material";


function About() {

    return (
        <Box sx={Wrapp}>
            <div style={WrapContent}>
                <p style={Name}>ABOUT</p>
                <Box sx={WrappTitle}>
                    <Box sx={{width: '18%', '@media (max-width: 440px)': {
                            width: '50%'
                        },}}>
                        <img
                            src={robotShlyapa}
                            style={{width: '100%', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px'}}
                            alt='robot'
                        />
                    </Box>
                    <Typography sx={Title}>{AboutTitle}</Typography>
                    <Box sx={{width: '18%', '@media (max-width: 440px)': {
                            width: '50%',
                            marginTop: '5px'
                        },}}>
                        <img
                            src={robotTea}
                            style={{width: '100%', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px'}}
                            alt='robot'
                        />
                    </Box>
                </Box>
                <Typography sx={Text}>{AboutText}</Typography>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                    <Typography sx={FindOut}>Find out more about robotic
                        love!</Typography>
                    <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                </div>
            </div>
        </Box>
    );
}

export default About;