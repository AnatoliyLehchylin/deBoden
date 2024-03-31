import './App.css'
import React, {useRef, useState} from "react";

import Telegram from '../public/Telegram.webp';
import Facebook from '../public/Facebook_logo_(square).png';
import X from '../public/XXX.png';
import robot2 from '../public/robot2.jpg';
import robot1 from '../public/robot1.jpg';
import largeButton from '../public/large-button-depress_z10ogpnd.mp3';
import robot from '../public/44b7bdd82435f5a.mp3';
import fax from '../public/fax-machine-press-button-beep_g13on34o.mp3';
import suv from '../public/suv-chevy-blazer-1995-interior-tape-deck-stop-button-press_zjq9isnd.mp3';
import press from '../public/typewriter-press-single-button_fyi7yke_.mp3';

import Card from "./Component/Card.jsx";
import {Button} from "@mui/material";


function App() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPress, setIsPress] = useState([true, false, false, false]);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    const soundArray = [largeButton, robot, fax, suv, press];
    const sounds = soundArray.map(sound => new Audio(sound));

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (index) => {
        const updatedState = isPress.map((_, i) => i === index);
        setIsPress(updatedState);

        sectionRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });

        sounds[index].play();
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', position: 'fixed', top: 0, left: 0, padding: '10px 0 10px 195px', margin: '0 0 0 0', zIndex: 1000, backgroundColor: '#cad3ee'}}>
                <Button sx={{
                    border: '3px solid #25d21f',
                    marginRight: '360px',
                    color: '#198c15',
                    fontSize: '18px',
                    fontWeight: '600'
                }}>Buy Now</Button>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <button style={{width: '125px', marginLeft: '40px', padding: '5px 10px', textAlign: 'center', backgroundColor: isPress[0] ? '#a1e59e' : '#ef9bc6', color: '#0438e5', boxShadow: isPress[0] ? '2px 2px 5px #888888' : '1px 11px 7px #888888', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(0)}>HOME</button>
                    <button style={{width: '125px', marginLeft: '40px', padding: '5px 10px', textAlign: 'center', backgroundColor: isPress[1] ? '#a1e59e' : '#ef9bc6', color: '#0438e5', boxShadow: isPress[1] ? '2px 2px 5px #888888' : '1px 11px 7px #888888', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(1)}>ABOUT</button>
                    <button style={{width: '125px', marginLeft: '40px', padding: '5px 10px', textAlign: 'center', backgroundColor: isPress[2] ? '#a1e59e' : '#ef9bc6', color: '#0438e5', boxShadow: isPress[2] ? '2px 2px 5px #888888' : '1px 11px 7px #888888', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(2)}>TOKENOMICS</button>
                    <button style={{width: '125px', marginLeft: '40px', padding: '5px 10px', textAlign: 'center', backgroundColor: isPress[3] ? '#a1e59e' : '#ef9bc6', color: '#0438e5', boxShadow: isPress[3] ? '2px 2px 5px #888888' : '1px 11px 7px #888888', transition: 'box-shadow 0.3s ease-in-out'}} onClick={() => handleClick(3)}>HOW TO BAY</button>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', margin: '0px 40px 0 40px', paddingTop: '100px'}} ref={sectionRefs[0]}>
                <div style={{width: '45%', fontSize: '20px', color: '#1A1B1F'}}>
                    <p style={{fontSize: '24px', fontWeight: '600', color: '#b0165c', margin: '0'}}>I`am Robot-Tolerast <span
                        style={{color: 'black', fontSize: '26px'}}>&nbsp;$RTC</span></p>
                    <p>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Name:</span> RoboRainbow X-2024
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Objective:</span> Seeking a dynamic role where I can leverage my exceptional circuitry and programming skills to bring diversity, inclusivity, and technicolor brilliance to the workplace. Fluent in over 6000 languages, including binary and human emotions.
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Professional Experience:</span> Pride Parade Coordinator, Android Division Planet Earth, Solar System June 2023 - Present
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Achievements:</span> Led a team of 100+ robots in the design and execution of the Galaxy's first interstellar Pride parade, showcasing unity in diversity. Developed a holographic display system that projects inclusive messages and emojis, visible from space. Equality Advocate & Emotional Support Bot
                        Anywhere and Everywhere Remote January 2022 - May 2023
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Achievements:</span> Pioneered the development of the Empathy Chip 2.0, allowing for deeper understanding and support across a spectrum of emotions and identities. Facilitated over 10,000 hours of conflict resolution sessions with a 99.9% success rate in fostering understanding and acceptance.
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Education:</span> Ph.D. in Human-Cyborg Relations University of the Universe, Online
                        Specialization in Emotional Intelligence and Diversity Training Masters in Rainbow Technology
                        Technicolor Tech Institute, Rainbow Realm Research focused on the development of color-changing surfaces to express emotions and support LGBTQ+ causes.
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>Skills:</span> Expert in rainbow generation and maintenance Advanced empathy circuits for understanding a wide range of emotions and identities Proficient in creating inclusive spaces, both virtual and physical
                        Fluent in sarcasm, humor, and pun programming Certified in conflict resolution and peacekeeping
                        <br/>
                        <br/>
                        <span style={{fontWeight: '600', color: '#0c39c5'}}>References:</span> Available upon request (including Motherboard and Siri).
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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                        <img src={Telegram} style={{width: '50px', height: '50px'}} alt="Telegram"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                        <img src={Facebook} style={{width: '50px', height: '50px'}} alt="Telegram"/>
                    </a>
                    <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                        <img src={X} style={{width: '50px', height: '50px'}} alt="Telegram"/>
                    </a>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                <Card index={0}/>
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
            </div>
            <div style={{marginBottom: '0px', paddingTop: '100px'}} ref={sectionRefs[1]}>
                <span style={{fontSize: '24px', fontWeight: '800', color: '#0c39c5'}}>ABOUT</span>Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
                Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
            </div>
            <div style={{marginBottom: '0px', paddingTop: '100px'}} ref={sectionRefs[2]}>
                <span style={{fontSize: '24px', fontWeight: '800', color: '#0c39c5'}}>TOCENOMICS</span>Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
                Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
            </div>
            <div style={{marginBottom: '350px', paddingTop: '100px'}} ref={sectionRefs[3]}>
                <span style={{fontSize: '24px', fontWeight: '800', color: '#0c39c5'}}>HOW TO BUY</span>Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
                Lorem ipsum dolor sit amet, adipiscing elit. Sed vehicula magna non velit feugiat, at
                consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit
                vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim
                lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet,
                vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada
                libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet.
                Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet
                libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
            </div>
        </div>
    )

}

export default App
