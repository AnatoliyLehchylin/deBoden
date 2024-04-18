import React from 'react';
import {Avatar, Box} from "@mui/material";
import bodenTremp from "../../../public/boden-tremp4.png";
import Telegram from "../../../public/Telegram.webp";
import flag from "../../../public/flag-opac.png";
import { SocSetiWrap, socSeti, FooterWrap, ContentWrap, avatar, NameWrap, FooterText, Follow, Email } from "./style/index.js";
import X from "../../../public/XXX.png";
import birdeyeOld from "../../../public/BirdeyeOld.jpg";
import dexscreener from "../../../public/Dexscreener.png";


function FooterComponent() {

    return (
        <div style={{...FooterWrap, backgroundImage: `url(${flag})`, backgroundSize: 'cover'}}>
            <div style={ContentWrap}>
                <img src={bodenTremp} style={avatar}/>
                <Box sx={NameWrap}><span
                    style={{color: 'blue'}}>de</span><span style={{color: 'red'}}>Boden</span><span
                    style={{color: '#000000'}}>-VS-</span><span style={{color: 'blue'}}>Tremp</span><span style={{color: 'red'}}>bate</span>
                </Box>
                <Box sx={FooterText}>Legendary battle of the titans!</Box>
                <Box sx={Follow}>
                    Follow us on 𝕏 & Telegram to stay informed of our last updates.
                </Box>
                <div style={SocSetiWrap}>
                    <a href="#" target="_blank" style={{display: 'flex'}}>
                        <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                    </a>
                    <a href="#" target="_blank" style={{display: 'flex', marginLeft: '10px'}}>
                        <Avatar src={X} sx={{...socSeti}} alt="X"/>
                    </a>
                    {/*<a href="https://www.tiktok.com/@pridebotx" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>*/}
                    {/*    <Avatar src={tictok} sx={{...socSeti, filter: 'invert(100%)'}} alt="Tic-Tok"/>*/}
                    {/*</a>*/}
                    <a href="#" target="_blank" style={{display: 'flex', marginLeft: '10px'}}>
                        <Avatar src={birdeyeOld} sx={socSeti} alt="birdeye"/>
                    </a>
                    <a href="#" target="_blank" style={{display: 'flex', marginLeft: '15px'}}>
                        <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                    </a>
                </div>
                <Box sx={Email}>Contact us: <span style={{color: '#000000'}}>email@gmail.com</span></Box>
            </div>
        </div>

    );
}

export default FooterComponent;