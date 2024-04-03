import React from 'react';
import robot4 from "../../../public/robot4.png";

import { Wrap, WrapImg, Img, WrapElemDark, WrapElemLight, Title } from "./style/index.js";

function Tocenomics() {

    return (
        <div style={Wrap}>
            <div style={WrapImg}>
                <img src={robot4} style={Img}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={WrapElemDark}>
                    <p style={Title}>SUPPLY:</p>
                    <p>1 Billion</p>
                </div>
                <div style={WrapElemLight}>
                    <p style={Title}>LIQUIDITY POOL:</p>
                    <p style={{margin: '0'}}>90% Of Tokens</p>
                    <p style={{margin: '0 0 9px 0'}}>100% Of Liquidity Burned</p>
                </div>
                <div style={{...WrapElemDark, marginRight: '0'}}>
                    <p style={Title}>10% TOKENS:</p>
                    <p>Airdrop, Marketing, CEX listing</p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <div style={WrapElemLight}>
                    <p style={Title}>TAX SELL:</p>
                    <p>0%</p>
                </div>
                <div style={WrapElemDark}>
                    <p style={Title}>TAX BUY:</p>
                    <p>0%</p>
                </div>
                <div style={{...WrapElemLight, marginRight: '0'}}>
                    <p style={Title}>OWNER:</p>
                    <p>Revoked ( Mint+Freeze )</p>
                </div>
            </div>
        </div>
    );
}

export default Tocenomics;