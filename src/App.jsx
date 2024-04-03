import './App.css'
import React, {useRef, useState} from "react";

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
import {buyNow, socSeti, HeaderWrap, ButtonWrap, ButtonWrapNav, ButtonNav, MarginSocSeti, CardWrap } from "./style/index.js";

import {Avatar, Button} from "@mui/material";


function App() {

    const [isPress, setIsPress] = useState([true, false, false, false, false]);
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

    const handleClick = (index) => {
        sound.play();

        const updatedState = isPress.map((_, i) => i === index);
        setIsPress(updatedState);

        sectionRefs[index].current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <div>
            <div id='header' style={HeaderWrap}>
                <div style={ButtonWrap}>
                    <a href="https://birdeye.so/token/F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726?chain=solana"
                       target="_blank">
                        <Button sx={buyNow}>BUY NOW</Button>
                    </a>

                    <div style={ButtonWrapNav}>
                        <button style={{
                            ...ButtonNav,
                            backgroundColor: isPress[0] ? '#0e8308' : '#c40668',
                            boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(0)}>HOME
                        </button>
                        <button style={{
                            ...ButtonNav,
                            backgroundColor: isPress[1] ? '#0e8308' : '#c40668',
                            boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(1)}>ABOUT
                        </button>
                        <button style={{
                            ...ButtonNav,
                            backgroundColor: isPress[2] ? '#0e8308' : '#c40668',
                            boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(2)}>TOKENOMICS
                        </button>
                        <button style={{
                            ...ButtonNav,
                            backgroundColor: isPress[3] ? '#0e8308' : '#c40668',
                            boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(3)}>HOW TO BUY
                        </button>
                        <button style={{
                            ...ButtonNav,
                            backgroundColor: isPress[4] ? '#0e8308' : '#c40668',
                            boxShadow: isPress[4] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'
                        }} onClick={() => handleClick(4)}>ROADMAP
                        </button>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
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
                    </div>
                </div>
            </div>

            <div ref={sectionRefs[0]}>
                <Home/>
            </div>

            <div ref={sectionRefs[1]}>
                <About/>
            </div>

            <div style={CardWrap}>
                <Card index={0}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
            </div>

            <div ref={sectionRefs[2]}>
                <Tocenomics/>
            </div>

            <div ref={sectionRefs[3]}>
                <HowToBuy />
            </div>

            <div ref={sectionRefs[4]}>
                <Roadmap />
            </div>

            <FooterComponent/>

        </div>
    )

}

export default App
