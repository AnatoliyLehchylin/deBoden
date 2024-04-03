import React from 'react';
import {Avatar} from "@mui/material";
import robotHead from "../../../public/robotHead.png";
import Telegram from "../../../public/Telegram.webp";
import { SocSetiWrap, socSeti, FooterWrap, ContentWrap, avatar, NameWrap, FooterText, Follow } from "./style/index.js";
import X from "../../../public/XXX.png";
import tictok from "../../../public/tik-tok.png";
import {Footer} from "../../Data/index.js";
import {MarginSocSeti} from "../../style/index.js";
import birdeyeOld from "../../../public/BirdeyeOld.jpg";
import dexscreener from "../../../public/Dexscreener.png";


function FooterComponent() {

    return (
        <div style={FooterWrap}>
            <div style={ContentWrap}>
                <Avatar src={robotHead} sx={avatar}/>
                <div style={NameWrap}><span
                    style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span
                    style={{color: 'yellow'}}>B</span><span style={{color: 'blue'}}>O</span><span style={{color: 'indigo'}}>-</span><span
                    style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span
                    style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span
                    style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span
                    style={{color: '#c72b96'}}>W</span>&nbsp;<span
                    style={{color: 'red'}}>X</span></div>
                <div style={FooterText}>{Footer}</div>
                <div style={Follow}>
                    Follow us on 𝕏, Telegram, TikTok, Birdeye & DEX Screener to stay informed of our last updates.
                </div>
                <div style={SocSetiWrap}>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                        <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={X} sx={{...socSeti, filter: 'invert(100%)'}} alt="X"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={tictok} sx={{...socSeti, filter: 'invert(100%)'}} alt="Tic-Tok"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                        <Avatar src={birdeyeOld} sx={socSeti} alt="birdeye"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                        <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                    </a>
                </div>
                <p style={{color: '#BABABA'}}>Contact us: <span>there will be an email here</span></p>
            </div>
        </div>

    );
}

export default FooterComponent;