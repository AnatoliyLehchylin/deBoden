import './App.css'
import React, {useEffect, useRef, useState} from "react";

import Telegram from '../public/Telegram.webp';
import birdeye from '../public/Birdeye.jpg';
import dexscreener from '../public/Dexscreener.png';
import tictok from '../public/tik-tok.png';
import X from '../public/XXX.png';
import fax from '../public/fax-machine-press-button-beep_g13on34o.mp3';

import Card from "./Component/Card/Card.jsx";
import FooterComponent from "./Component/Footer/Footer.jsx";
import HowToBuy from "./Component/HowToBuy/HowToBuy.jsx";
import About from "./Component/About/About.jsx";
import Tocenomics from "./Component/Tocenomics/Tocenomics.jsx";
import Home from "./Component/Home/Home.jsx";
import Roadmap from "./Component/Roadmap/Roadmap.jsx";
import {
    buyNow,
    socSeti,
    HeaderWrap,
    ButtonWrap,
    ButtonWrapNav,
    ButtonNav,
    MarginSocSeti,
    CardWrap,
    WrapMiddle
} from "./style/index.js";

import {Avatar, Box, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function App() {

    const [isPress, setIsPress] = useState([true, false, false, false, false]);
    const [isPressBurger, setIsPressBurger] = useState(false);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

    const sound = new Audio(fax);

    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');

        if (window.scrollY > 0) {
            header.style.backgroundColor = '#2DD7F0';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    const handleClick = async (index) => {
        await sound.play();
        setIsPressBurger(false);
        const updatedState = isPress.map((_, i) => i === index);
        setIsPress(updatedState);

        sectionRefs[index].current.scrollIntoView({behavior: 'smooth', block: 'start'});

    }

    const burgerMenu = () => {
        setIsPressBurger(true);
    }


    document.addEventListener('click', e => {
        if (e.target.parentElement.id !== 'burger') {
            setIsPressBurger(false);
        }
    });


    return (
        <div>
            <Box id='header' sx={HeaderWrap}>
                <Box sx={ButtonWrap}>

                    <Box sx={WrapMiddle}>
                        <a href="https://birdeye.so/token/F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726?chain=solana"
                           target="_blank">
                            <Button sx={{
                                ...buyNow, '@media (max-width: 1100px)': {
                                    display: 'flex'
                                }
                            }}>BUY NOW</Button>
                        </a>

                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                                <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                            </a>
                            <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                                <Avatar src={X} sx={socSeti} alt="X"/>
                            </a>
                            <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                                <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>
                            </a>
                            <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                                <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>
                            </a>
                            <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                                <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                            </a>
                        </Box>

                        {isPressBurger ?
                            <Box id='burger' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'absolute',
                                top: '40px',
                                right: '45px',
                                '@media (min-width: 440px)': {
                                    display: 'none'
                                }
                            }}>
                                <Button sx={{
                                    ...ButtonNav, marginLeft: '0',
                                    backgroundColor: isPress[0] ? '#0e8308 !important' : '#c40668',
                                    boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                                }} onClick={() => handleClick(0)}>HOME
                                </Button>
                                <Button sx={{
                                    ...ButtonNav,
                                    backgroundColor: isPress[1] ? '#0e8308 !important' : '#c40668',
                                    boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                                }} onClick={() => handleClick(1)}>ABOUT
                                </Button>
                                <Button sx={{
                                    ...ButtonNav,
                                    backgroundColor: isPress[2] ? '#0e8308 !important' : '#c40668',
                                    boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                                }} onClick={() => handleClick(2)}>TOKENOMICS
                                </Button>
                                <Button sx={{
                                    ...ButtonNav,
                                    backgroundColor: isPress[3] ? '#0e8308 !important' : '#c40668',
                                    boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                                }} onClick={() => handleClick(3)}>HOW TO BUY
                                </Button>
                                <Button sx={{
                                    ...ButtonNav,
                                    backgroundColor: isPress[4] ? '#0e8308 !important' : '#c40668',
                                    boxShadow: isPress[4] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                                }} onClick={() => handleClick(4)}>ROADMAP
                                </Button>
                            </Box> :
                            <Box sx={{boxSizing: 'border-box', padding: '10px'}} onClick={burgerMenu}>
                                <MenuIcon fontSize='large' color='primary'
                                          sx={{'@media (min-width: 441px)': {display: 'none'}}}/>
                            </Box>

                        }

                    </Box>


                    <a href="https://birdeye.so/token/F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726?chain=solana"
                       target="_blank">
                        <Button sx={buyNow}>BUY NOW</Button>
                    </a>

                    <Box sx={ButtonWrapNav}>
                        <Button sx={{
                            ...ButtonNav, marginLeft: '0',
                            backgroundColor: isPress[0] ? '#0e8308 !important' : '#c40668',
                            boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',
                            '@media (max-width: 710px)': {
                                width: '100px',
                                fontSize: '12px',
                                marginLeft: '0px',
                                padding: '3px 3px',
                            },
                            '@media (max-width: 590px)': {
                                width: '77px',
                                fontSize: '10px',
                                marginLeft: '0px',
                                padding: '3px 2px',
                            }
                        }} onClick={() => handleClick(0)}>HOME
                        </Button>
                        <Button sx={{
                            ...ButtonNav,
                            backgroundColor: isPress[1] ? '#0e8308 !important' : '#c40668',
                            boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(1)}>ABOUT
                        </Button>
                        <Button sx={{
                            ...ButtonNav,
                            backgroundColor: isPress[2] ? '#0e8308 !important' : '#c40668',
                            boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(2)}>TOKENOMICS
                        </Button>
                        <Button sx={{
                            ...ButtonNav,
                            backgroundColor: isPress[3] ? '#0e8308 !important' : '#c40668',
                            boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(3)}>HOW TO BUY
                        </Button>
                        <Button sx={{
                            ...ButtonNav,
                            backgroundColor: isPress[4] ? '#0e8308 !important' : '#c40668',
                            boxShadow: isPress[4] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(4)}>ROADMAP
                        </Button>
                    </Box>

                    <Box sx={{
                        display: 'flex', alignItems: 'center', '@media (max-width: 1100px)': {
                            display: 'none'
                        }
                    }}>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                            <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                            <Avatar src={X} sx={socSeti} alt="X"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                            <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                            <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={MarginSocSeti}>
                            <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                        </a>
                    </Box>
                </Box>
            </Box>

            <div ref={sectionRefs[0]}>
                <Home/>
            </div>

            <div ref={sectionRefs[1]}>
                <About/>
            </div>

            <Box sx={CardWrap}>
                <Card index={0}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
            </Box>

            <div ref={sectionRefs[2]}>
                <Tocenomics/>
            </div>

            <div ref={sectionRefs[3]}>
                <HowToBuy/>
            </div>

            <div ref={sectionRefs[4]}>
                <Roadmap/>
            </div>

            <FooterComponent/>

        </div>
    )

}

export default App
