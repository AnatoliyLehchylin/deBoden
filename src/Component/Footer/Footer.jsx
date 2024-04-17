import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import bodenTremp from "../../../public/boden-tremp4.png";
import Telegram from "../../../public/Telegram.webp";
import { SocSetiWrap, socSeti, FooterWrap, ContentWrap, avatar, NameWrap, FooterText, Follow, Email } from "./style/index.js";
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
                <img src={bodenTremp} style={avatar}/>
                <Box sx={NameWrap}><span
                    style={{color: 'blue'}}>de</span><span style={{color: 'red'}}>Boden</span><span
                    style={{color: 'yellowgreen'}}> -- </span><span style={{color: 'blue'}}>Tremp</span><span style={{color: 'red'}}>bate</span>
                </Box>
                <Box sx={FooterText}>Legendary battle of the titans!</Box>
                <Box sx={Follow}>
                    Follow us on 𝕏, Telegram & TikTok to stay informed of our last updates.
                </Box>
                <div style={SocSetiWrap}>
                    <a href="https://t.me/Pride_Bot_X" target="_blank" style={{display: 'flex'}}>
                        <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                    </a>
                    <a href="https://twitter.com/PrideBotX" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={X} sx={{...socSeti, filter: 'invert(100%)'}} alt="X"/>
                    </a>
                    <a href="https://www.tiktok.com/@pridebotx" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                        <Avatar src={tictok} sx={{...socSeti, filter: 'invert(100%)'}} alt="Tic-Tok"/>
                    </a>
                    <a href="https://birdeye.so/token/HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y?chain=solana&utm_source=rugcheck" target="_blank" style={MarginSocSeti}>
                        <Avatar src={birdeyeOld} sx={socSeti} alt="birdeye"/>
                    </a>
                    <a href="https://dexscreener.com/solana/gtth1xxakps3gmvzg134js4rhyv1goqhxqkfu1ceodtt" target="_blank" style={MarginSocSeti}>
                        <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                    </a>
                </div>
                <Box sx={Email}>Contact us: <span style={{color: '#000000'}}>pridebotx@gmail.com</span></Box>
            </div>
        </div>

    );
}

export default FooterComponent;