import React from 'react';
import {HowToBuyFirst, HowToBuyFour, HowToBuySecond, HowToBuyThird, HowToBuyTitle} from "../../Data/index.js";
import ContentCopyIcon from "@mui/icons-material/ContentCopy.js";
import robot3 from "../../../public/robot3.png";

import { Wrapper, WrapLeft, How, ContractAddress, WrapRight, Img } from "./style/index.js";
import {Box} from "@mui/material";

function HowToBuy() {

    const copyToClipboard = () => {
        const textToCopy = 'here will be the address';

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

    };

    return (
        <Box sx={Wrapper}>
            <Box sx={WrapLeft}>
                <p style={How}>HOW TO BUY</p>
                <p>{HowToBuyTitle}</p>
                <p>Contract Address:</p>
                <div style={ContractAddress}>
                    <a href="https://snowtrace.io/address/0x13E793E76C38A6362f3F712c4AE365a9174f9b56"
                       target="_blank"
                       style={{marginRight: '5px', color: '#112f93'}}>here will be the address</a>
                    <ContentCopyIcon sx={{cursor: 'pointer', color: '#000000'}} onClick={copyToClipboard}/>
                </div>
                <ol style={{paddingLeft: '14px'}}>
                    <li style={{marginBottom: '15px'}}>{HowToBuyFirst}</li>
                    <li style={{marginBottom: '15px'}}>{HowToBuySecond}</li>
                    <li style={{marginBottom: '15px'}}>{HowToBuyThird}</li>
                    <li>{HowToBuyFour}</li>
                </ol>
            </Box>

            <Box sx={WrapRight}>
                <img
                    src={robot3}
                    style={Img}
                    alt='robot'
                />
            </Box>
        </Box>
    );
}

export default HowToBuy;