import React from 'react';
import {AboutText, AboutTitle} from "../../Data/index.js";
import ForwardIcon from "@mui/icons-material/Forward.js";

import { Wrapp, WrapContent, Name, Title, Text, FindOut } from "./style/index.js";


function About() {

    return (
        <div style={Wrapp}>
            <div style={WrapContent}>
                <p style={Name}>ABOUT</p>
                <p style={Title}>{AboutTitle}</p>
                <p style={Text}>{AboutText}</p>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                    <p style={FindOut}>Find out more about robotic
                        love!</p>
                    <ForwardIcon fontSize='large' sx={{rotate: '90deg'}}/>
                </div>
            </div>
        </div>
    );
}

export default About;