import './App.css'
import React, {useRef, useState} from "react";

import Telegram from '../public/Telegram.webp';
import Facebook from '../public/Facebook_logo_(square).png';
import X from '../public/XXX.png';
import robot2 from '../public/robot2.png';
import robot1 from '../public/robot1.png';
import robot3 from '../public/robot3.png';
import robotHead from '../public/robotHead.png';
import largeButton from '../public/large-button-depress_z10ogpnd.mp3';
import robot from '../public/44b7bdd82435f5a.mp3';
import fax from '../public/fax-machine-press-button-beep_g13on34o.mp3';
import suv from '../public/suv-chevy-blazer-1995-interior-tape-deck-stop-button-press_zjq9isnd.mp3';
import press from '../public/typewriter-press-single-button_fyi7yke_.mp3';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Card from "./Component/Card.jsx";
import {buyNow, socSeti} from "./style/index.js";
import {Avatar, Button} from "@mui/material";


function App() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPress, setIsPress] = useState([true, false, false, false]);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    // const soundArray = [largeButton, robot, fax, suv, press];
    // const sounds = soundArray.map(sound => new Audio(sound));
    const sound = new Audio(fax);

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');

        if (window.scrollY > 0) {
            header.style.backgroundColor = '#2DD7F0';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (index) => {
        sound.play();

        const updatedState = isPress.map((_, i) => i === index);
        setIsPress(updatedState);

        sectionRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const copyToClipboard = () => {
        const textToCopy = '0x13E793E76C38A6362f3F712c4AE365a9174f9b56';

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

    };

    return (
        <div >
            <div id='header' style={{display: 'flex', width: '100%', position: 'fixed', top: 0, left: 0, padding: '17px 0 17px 0', margin: '0 0', zIndex: 1000}}>
                <div style={{maxWidth: '1080px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                    <a href="https://birdeye.so/token/F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726?chain=solana" target="_blank">
                        <Button sx={buyNow}>BUY NOW</Button>
                    </a>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <button style={{ width: '135px', marginLeft: '40px', padding: '5px 5px', textAlign: 'center', backgroundColor: isPress[0] ? '#0e8308' : '#c40668', color: '#FFFFFF', boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(0)}>HOME</button>
                        <button style={{ width: '135px', marginLeft: '40px', padding: '5px 5px', textAlign: 'center', backgroundColor: isPress[1] ? '#0e8308' : '#c40668', color: '#FFFFFF', boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(1)}>ABOUT</button>
                        <button style={{width: '135px', marginLeft: '40px', padding: '5px 5px', textAlign: 'center', backgroundColor: isPress[2] ? '#0e8308' : '#c40668', color: '#FFFFFF', boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(2)}>TOKENOMICS</button>
                        <button style={{width: '135px', marginLeft: '40px', padding: '5px 5px', textAlign: 'center', backgroundColor: isPress[3] ? '#0e8308' : '#c40668', color: '#FFFFFF', boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(3)}>HOW TO BAY</button>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                            <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '20px'}}>
                            <Avatar src={X} sx={socSeti} alt="Telegram"/>
                        </a>
                    </div>
                </div>

            </div>

            <div style={{maxWidth: '1080px', display: 'flex', justifyContent: 'space-between', margin: '0 auto', paddingTop: '100px'}} ref={sectionRefs[0]}>
                <div style={{width: '55%', fontSize: '20px', color: '#1A1B1F'}}>
                    <div style={{fontSize: '18px', fontWeight: '400', color: '#000000', margin: '0'}}>HI, I`M</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: '45px', color: '#63626b', fontWeight: '600', margin: '0 30px 0 0'}}><span style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span style={{color: 'yellow'}}>B</span><span style={{color: 'green'}}>O</span><span style={{color: 'blue'}}>T</span><span style={{color: 'indigo'}}>-</span><span style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span style={{color: 'violet'}}>W</span></div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '85px', height: '85px', color: 'black', fontSize: '26px', fontWeight: '600', backgroundColor: '#f66623'}}>$RRW</div>
                    </div>

                    <p>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Objective:</span> Seeking a dynamic role where I can leverage my exceptional circuitry and programming skills to bring diversity, inclusivity, and technicolor brilliance to the workplace. Fluent in over 6000 languages, including binary and human emotions.
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Professional Experience:</span> Pride Parade Coordinator, Android Division Planet Earth, Solar System June 2023 - Present
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Achievements:</span> Led a team of 100+ robots in the design and execution of the Galaxy's first interstellar Pride parade, showcasing unity in diversity. Developed a holographic display system that projects inclusive messages and emojis, visible from space. Equality Advocate & Emotional Support Bot
                        Anywhere and Everywhere Remote January 2022 - May 2023
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<span style={{fontWeight: '600', color: '#0c39c5'}}>Achievements:</span> Pioneered the development of the Empathy Chip 2.0, allowing for deeper understanding and support across a spectrum of emotions and identities. Facilitated over 10,000 hours of conflict resolution sessions with a 99.9% success rate in fostering understanding and acceptance.*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<span style={{fontWeight: '600', color: '#0c39c5'}}>Education:</span> Ph.D. in Human-Cyborg Relations University of the Universe, Online*/}
                        {/*Specialization in Emotional Intelligence and Diversity Training Masters in Rainbow Technology*/}
                        {/*Technicolor Tech Institute, Rainbow Realm Research focused on the development of color-changing surfaces to express emotions and support LGBTQ+ causes.*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<span style={{fontWeight: '600', color: '#0c39c5'}}>Skills:</span> Expert in rainbow generation and maintenance Advanced empathy circuits for understanding a wide range of emotions and identities Proficient in creating inclusive spaces, both virtual and physical*/}
                        {/*Fluent in sarcasm, humor, and pun programming Certified in conflict resolution and peacekeeping*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<span style={{fontWeight: '600', color: '#0c39c5'}}>References:</span> Available upon request (including Motherboard and Siri).*/}
                    </p>
                </div>

                <div style={{marginTop: '50px', cursor: 'pointer'}}>
                    {isHovered ? (
                        <img
                            src={robot2}
                            width='400px'
                            height='400px'
                            style={{borderRadius: '10px'}}
                            onMouseLeave={handleMouseLeave}
                            alt='robot'
                        />
                    ) : (
                        <img
                            src={robot1}
                            width='400px'
                            height='400px'
                            style={{borderRadius: '10px'}}
                            onMouseEnter={handleMouseEnter}
                            alt='robot'
                        />
                    )}
                </div>

            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                <Card index={0}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
            </div>
            <div style={{ maxWidth: '1080px', margin: '0 auto', paddingTop: '100px'}} ref={sectionRefs[1]}>
                <span style={{fontSize: '24px', fontWeight: '800', color: '#0c39c5'}}>ABOUT</span>Ladies and gentlemen, extraterrestrials, and AI of all circuits, gather around for the grand introduction of a being like no other, hailing from the vibrant corners of the cosmos, please put your hands, tentacles, or sensory appendages together for the one, the only – Robo-Rainbow X!
                Robo-Rainbow X is not your average robot. Born from a glitter explosion in the tech-savvy Rainbow Realm, Robo-Rainbow was programmed with one purpose: to spread joy, inclusivity, and, of course, rainbows!
                Let's give a cosmic round of applause for Robo-Rainbow X, making the universe a brighter, more inclusive place for all life forms, one epic party at a time!
            </div>
            <div style={{ maxWidth: '1080px', margin: '0 auto', paddingTop: '100px'}} ref={sectionRefs[2]}>
                <span style={{fontSize: '24px', fontWeight: '800', color: '#0c39c5'}}>TOCENOMICS</span>SUPPLY: 10 M
                LP: 100.00% Of Liquidity Burned
                TAX SELL 0%
                TAX BUY 0%
                Owner: Revoked ( Mint+Freeze )
            </div>

            <div style={{ display: 'flex', maxWidth: '1080px', width: '100%', margin: '50px auto', padding: '60px 40px 10px 40px', backgroundColor: '#000000', borderRadius: '10px'}} ref={sectionRefs[3]}>
                <div style={{width: '60%', display: 'flex', flexDirection: 'column', color: '#BABABA', fontSize: '14px', paddingRight: '100px'}}>
                    <p style={{fontSize: '26px', fontWeight: '800', color: '#32E7FF'}}>HOW TO BUY</p>
                    <p>Our simple four-step guide helps make the buying process easier. Don’t allow a complex buying procedure to scare you away. Just click on the icons, and they’ll take you directly to the links.</p>
                    <p>Contract Address:</p>
                    <div style={{display: 'flex', backgroundColor: '#C3F9FD', padding: '10px', borderRadius: '3px', width: 'max-content', marginBottom: '10px'}}>
                        <a href="https://snowtrace.io/address/0x13E793E76C38A6362f3F712c4AE365a9174f9b56" target="_blank" style={{marginRight: '5px', color: '#112f93'}}>0x13E793E76C38A6362f3F712c4AE365a9174f9b56</a>
                        <ContentCopyIcon sx={{cursor: 'pointer', color: '#000000'}} onClick={copyToClipboard}/>
                    </div>
                    <ol>
                        <li style={{marginBottom: '15px'}}>Download phantom:
                            go to the app-store or chrome extensions and type in phantom wallet, download & follow the prompts.</li>
                        <li style={{marginBottom: '15px'}}>buy some Solana:
                            purchase Solana either on a centralized exchange or directly through your phantom wallet.</li>
                        <li style={{marginBottom: '15px'}}>Swap to RRX:
                            copy the contract address found on website and paste in Raydium exchange or your TG buy bot to swap your sol for RRX.</li>
                        <li>Import to wallet:
                            if tokens don’t automatically appear in your wallet simply copy the ca and import manually.</li>
                    </ol>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img
                        src={robot3}
                        width='400px'
                        height='400px'
                        style={{borderRadius: '10px'}}
                        alt='robot'
                    />
                </div>
            </div>

            <div style={{display: 'flex', width: '100%', padding: '25px 0 45px 0', margin: '30px 0 0 0', backgroundColor: '#000000'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1080px', margin: '0 auto', color: '#FFFFFF', textAlign: 'center'}}>
                    <Avatar src={robotHead} sx={{width: '150px', height: '150px'}}/>
                    <div style={{fontSize: '25px', color: '#63626b', fontWeight: '500', margin: '30px 0 0 0'}}><span style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>O</span><span style={{color: 'yellow'}}>B</span><span style={{color: 'green'}}>O</span><span style={{color: 'blue'}}>T</span><span style={{color: 'indigo'}}>-</span><span style={{color: 'red'}}>R</span><span style={{color: 'orange'}}>A</span><span style={{color: 'yellow'}}>I</span><span style={{color: 'green'}}>N</span><span style={{color: 'blue'}}>B</span><span style={{color: 'indigo'}}>O</span><span style={{color: 'violet'}}>W</span></div>
                    <div style={{margin: '20px 0 30px 0', fontSize: '20px'}}>
                        Join us on this exciting adventure as we journey through a world of robots, rainbows and equality. Your journey with Robot-Rainbow starts now, let's make it legendary!
                    </div>
                    <div style={{fontSize: '16px'}}>
                        Follow us on 𝕏 && Telegram to stay informed of our last updates.
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex'}}>
                            <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                        </a>
                        <a href="https://ukr.net" target="_blank" style={{display: 'flex', marginLeft: '40px'}}>
                            <Avatar src={X} sx={{...socSeti, filter: 'invert(100%)'}} alt="Telegram"/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default App
