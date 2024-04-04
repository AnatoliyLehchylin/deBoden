import React from 'react';
import robot4 from "../../../public/robot4.png";

import { Wrap, WrapImg, Img, WrapElemDark, WrapElemLight, Title } from "./style/index.js";
import {Box, Typography} from "@mui/material";

function Tocenomics() {

    return (
        <div style={Wrap}>
            <Box sx={WrapImg}>
                <img src={robot4} style={Img}/>
            </Box>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={WrapElemDark}>
                    <Typography sx={Title}>SUPPLY:</Typography>
                    <p style={{margin: '0'}}>1 Billion</p>
                </Box>
                <Box sx={WrapElemLight}>
                    <Typography sx={Title}>LIQUIDITY POOL:</Typography>
                    <p style={{margin: '0', textAlign: 'center'}}>90% Of Tokens</p>
                    <p style={{margin: '0 0 9px 0', textAlign: 'center'}}>100% Of Liquidity Burned</p>
                </Box>
                <Box sx={{...WrapElemDark, marginRight: '0', '@media (max-width: 590px)': {
                        display: 'none',
                    }}}>
                    <Typography sx={Title}>10% TOKENS:</Typography>
                    <p style={{textAlign: 'center', margin: '0'}}>Airdrop, Marketing, CEX listing</p>
                </Box>
            </div>

            <Box sx={{display: 'none', justifyContent: 'space-between', marginTop: '20px', '@media (max-width: 590px)': {
                    display: 'flex',
                },}}>
                <Box sx={{...WrapElemDark, marginRight: '0'}}>
                    <Typography sx={Title}>10% TOKENS:</Typography>
                    <p style={{textAlign: 'center', margin: '0'}}>Airdrop, Marketing, CEX listing</p>
                </Box>
                <Box sx={WrapElemLight}>
                    <Typography sx={Title}>TAX SELL:</Typography>
                    <p style={{margin: '0'}}>0%</p>
                </Box>
            </Box>


            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <Box sx={{...WrapElemLight, '@media (max-width: 590px)': {
                    display: 'none',
                }}}>
                    <Typography sx={Title}>TAX SELL:</Typography>
                    <p style={{margin: '0'}}>0%</p>
                </Box>
                <Box sx={WrapElemDark}>
                    <Typography sx={Title}>TAX BUY:</Typography>
                    <p style={{margin: '0'}}>0%</p>
                </Box>
                <Box sx={{...WrapElemLight, marginRight: '0'}}>
                    <Typography sx={Title}>OWNER:</Typography>
                    <p style={{margin: '0'}}>Revoked</p>
                    <p style={{margin: '0 0 9px 0'}}>( Mint+Freeze )</p>
                </Box>
            </div>
        </div>
    );
}

export default Tocenomics;