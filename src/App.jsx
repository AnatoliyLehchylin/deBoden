import './App.css'
import React, {useEffect, useRef, useState} from "react";
import {styled} from '@mui/material/styles';

import Telegram from '../public/Telegram.webp';
import birdeye from '../public/Birdeye.jpg';
import dexscreener from '../public/Dexscreener.png';
import tictok from '../public/tik-tok.png';
import X from '../public/XXX.png';
import fax from '../public/fax-machine-press-button-beep_g13on34o.mp3';

import bodenMech from '../public/boden-mech.png';
import trempMech from '../public/tremp-mech.png';
import star from '../public/star1.png';
import blood from '../public/blood.png';
import soundMech from '../public/sound.mp3';
import de from '../public/de.png';
import bate from '../public/bate.png';
import vs from '../public/vs.png';
import bodenTremp from '../public/boden-tremp.jpg';
import bodenTremp1 from '../public/boden-tremp1.jpg';
import bodenTremp2 from '../public/boden-tremp2.jpg';
import bodenTremp3 from '../public/boden-tremp3.jpg';
import gerb from '../public/gerb.png';

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
    WrapMiddle,
    BodenStyle,
    TrempStyle,
    ContractAddress
} from "./style/index.js";

import {Avatar, Box, Button, Typography, Rating} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import ContentCopyIcon from "@mui/icons-material/ContentCopy.js";


function App() {

    const [touch, setTouch] = useState(null);
    const [redBlood, setRedBlood] = useState(null);
    const [valueBoden, setValueBoden] = useState(2);
    const [valueTremp, setValueTremp] = useState(2);
    const [champion, setChampion] = useState("");
    const [copyAdress, setCopyAdress] = useState(false);

    const [isPress, setIsPress] = useState([true, false, false, false, false]);
    const [isPressBurger, setIsPressBurger] = useState(false);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

    const sound = new Audio(soundMech);

    useEffect(() => {
        if (valueBoden === 0) {

            setTimeout(() => {
                setChampion("Tremp");
            }, 800);

            setTimeout(() => {
                setChampion('');
                setValueBoden(5);
                setValueTremp(5);
            }, 5000);
        }

        if (valueTremp === 0) {

            setTimeout(() => {
                setChampion("Boden");
            }, 800);

            setTimeout(() => {
                setChampion('');
                setValueBoden(5);
                setValueTremp(5);
            }, 5000);
        }

    }, [valueBoden, valueTremp])


    const handleTouch = async (index) => {
        await sound.play();
        setTouch(index);
        setRedBlood(index);

        setTimeout(() => {
            setTouch(null);
        }, 800);

        setTimeout(() => {
            setRedBlood(null);
        }, 1600);

        if (index === 1) {
            setValueBoden(prevState => prevState - 1)
        } else {
            setValueTremp(prevState => prevState - 1)
        }

    };

    const StyledRatingBoden = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#be131d',
            fontSize: '30px'
        },
    });

    const StyledRatingTremp = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#0c2b8d',
            fontSize: '30px'
        },
    });

    const copyToClipboard = () => {
        const textToCopy = 'HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y';

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

        setCopyAdress(true);

        setTimeout(() => {
           setCopyAdress(false)
        }, 1000);

    };

    // window.addEventListener('scroll', function () {
    //     const header = document.getElementById('header');
    //
    //     if (window.scrollY > 0) {
    //         header.style.backgroundColor = '#2DD7F0';
    //     } else {
    //         header.style.backgroundColor = 'transparent';
    //     }
    // });

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
            {/*<Box id='header' sx={HeaderWrap}>*/}
            {/*    <Box sx={ButtonWrap}>*/}

            {/*        <Box sx={WrapMiddle}>*/}
            {/*            <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y&outputSymbol=PBX&fixed=in"*/}
            {/*               target="_blank">*/}
            {/*                <Button sx={{*/}
            {/*                    ...buyNow, '@media (max-width: 1100px)': {*/}
            {/*                        display: 'flex'*/}
            {/*                    }*/}
            {/*                }}>BUY NOW</Button>*/}
            {/*            </a>*/}

            {/*            <Box sx={{display: 'flex', alignItems: 'center'}}>*/}
            {/*                <a href="https://t.me/Pride_Bot_X" target="_blank" style={{display: 'flex'}}>*/}
            {/*                    <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>*/}
            {/*                </a>*/}
            {/*                <a href="https://twitter.com/PrideBotX" target="_blank" style={MarginSocSeti}>*/}
            {/*                    <Avatar src={X} sx={socSeti} alt="X"/>*/}
            {/*                </a>*/}
            {/*                <a href="https://www.tiktok.com/@pridebotx" target="_blank" style={MarginSocSeti}>*/}
            {/*                    <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>*/}
            {/*                </a>*/}
            {/*                <a href="https://birdeye.so/token/HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y?chain=solana&utm_source=rugcheck"*/}
            {/*                   target="_blank" style={MarginSocSeti}>*/}
            {/*                    <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>*/}
            {/*                </a>*/}
            {/*                <a href="https://dexscreener.com/solana/gtth1xxakps3gmvzg134js4rhyv1goqhxqkfu1ceodtt"*/}
            {/*                   target="_blank" style={MarginSocSeti}>*/}
            {/*                    <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>*/}
            {/*                </a>*/}
            {/*            </Box>*/}

            {/*            {isPressBurger ?*/}
            {/*                <Box id='burger' sx={{*/}
            {/*                    display: 'flex',*/}
            {/*                    flexDirection: 'column',*/}
            {/*                    padding: '10px',*/}
            {/*                    borderRadius: '8px',*/}
            {/*                    position: 'absolute',*/}
            {/*                    top: '40px',*/}
            {/*                    right: '24px',*/}
            {/*                    backgroundColor: 'rgba(45, 215, 240, 0.7)',*/}
            {/*                    '@media (min-width: 440px)': {*/}
            {/*                        display: 'none'*/}
            {/*                    }*/}
            {/*                }}>*/}
            {/*                    <Button sx={{*/}
            {/*                        ...ButtonNav, marginLeft: '0',*/}
            {/*                        backgroundColor: isPress[0] ? '#0e8308 !important' : '#c40668',*/}
            {/*                        boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*                    }} onClick={() => handleClick(0)}>HOME*/}
            {/*                    </Button>*/}
            {/*                    <Button sx={{*/}
            {/*                        ...ButtonNav,*/}
            {/*                        backgroundColor: isPress[1] ? '#0e8308 !important' : '#c40668',*/}
            {/*                        boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*                    }} onClick={() => handleClick(1)}>ABOUT*/}
            {/*                    </Button>*/}
            {/*                    <Button sx={{*/}
            {/*                        ...ButtonNav,*/}
            {/*                        backgroundColor: isPress[2] ? '#0e8308 !important' : '#c40668',*/}
            {/*                        boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*                    }} onClick={() => handleClick(2)}>TOKENOMICS*/}
            {/*                    </Button>*/}
            {/*                    <Button sx={{*/}
            {/*                        ...ButtonNav,*/}
            {/*                        backgroundColor: isPress[3] ? '#0e8308 !important' : '#c40668',*/}
            {/*                        boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*                    }} onClick={() => handleClick(3)}>HOW TO BUY*/}
            {/*                    </Button>*/}
            {/*                    <Button sx={{*/}
            {/*                        ...ButtonNav,*/}
            {/*                        backgroundColor: isPress[4] ? '#0e8308 !important' : '#c40668',*/}
            {/*                        boxShadow: isPress[4] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*                    }} onClick={() => handleClick(4)}>ROADMAP*/}
            {/*                    </Button>*/}
            {/*                </Box> :*/}
            {/*                <Box sx={{padding: '15px 15px 0 15px', margin: '0'}} onClick={burgerMenu}>*/}
            {/*                    <MenuIcon fontSize='large' color='primary'*/}
            {/*                              sx={{'@media (min-width: 441px)': {display: 'none'}}}/>*/}
            {/*                </Box>*/}

            {/*            }*/}

            {/*        </Box>*/}


            {/*        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y&outputSymbol=PBX&fixed=in"*/}
            {/*           target="_blank">*/}
            {/*            <Button sx={buyNow}>BUY NOW</Button>*/}
            {/*        </a>*/}

            {/*        <Box sx={ButtonWrapNav}>*/}
            {/*            <Button sx={{*/}
            {/*                ...ButtonNav, marginLeft: '0',*/}
            {/*                backgroundColor: isPress[0] ? '#0e8308 !important' : '#c40668',*/}
            {/*                boxShadow: isPress[0] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b',*/}
            {/*                '@media (max-width: 710px)': {*/}
            {/*                    width: '100px',*/}
            {/*                    fontSize: '12px',*/}
            {/*                    marginLeft: '0px',*/}
            {/*                    padding: '3px 3px',*/}
            {/*                },*/}
            {/*                '@media (max-width: 590px)': {*/}
            {/*                    width: '77px',*/}
            {/*                    fontSize: '10px',*/}
            {/*                    marginLeft: '0px',*/}
            {/*                    padding: '3px 2px',*/}
            {/*                }*/}
            {/*            }} onClick={() => handleClick(0)}>HOME*/}
            {/*            </Button>*/}
            {/*            <Button sx={{*/}
            {/*                ...ButtonNav,*/}
            {/*                backgroundColor: isPress[1] ? '#0e8308 !important' : '#c40668',*/}
            {/*                boxShadow: isPress[1] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*            }} onClick={() => handleClick(1)}>ABOUT*/}
            {/*            </Button>*/}
            {/*            <Button sx={{*/}
            {/*                ...ButtonNav,*/}
            {/*                backgroundColor: isPress[2] ? '#0e8308 !important' : '#c40668',*/}
            {/*                boxShadow: isPress[2] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*            }} onClick={() => handleClick(2)}>TOKENOMICS*/}
            {/*            </Button>*/}
            {/*            <Button sx={{*/}
            {/*                ...ButtonNav,*/}
            {/*                backgroundColor: isPress[3] ? '#0e8308 !important' : '#c40668',*/}
            {/*                boxShadow: isPress[3] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*            }} onClick={() => handleClick(3)}>HOW TO BUY*/}
            {/*            </Button>*/}
            {/*            <Button sx={{*/}
            {/*                ...ButtonNav,*/}
            {/*                backgroundColor: isPress[4] ? '#0e8308 !important' : '#c40668',*/}
            {/*                boxShadow: isPress[4] ? '2px 5px 5px #413b3b' : '1px 11px 7px #413b3b'*/}
            {/*            }} onClick={() => handleClick(4)}>ROADMAP*/}
            {/*            </Button>*/}
            {/*        </Box>*/}

            {/*        <Box sx={{*/}
            {/*            display: 'flex', alignItems: 'center', '@media (max-width: 1100px)': {*/}
            {/*                display: 'none'*/}
            {/*            }*/}
            {/*        }}>*/}
            {/*            <a href="https://t.me/Pride_Bot_X" target="_blank" style={{display: 'flex'}}>*/}
            {/*                <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>*/}
            {/*            </a>*/}
            {/*            <a href="https://twitter.com/PrideBotX" target="_blank" style={MarginSocSeti}>*/}
            {/*                <Avatar src={X} sx={socSeti} alt="X"/>*/}
            {/*            </a>*/}
            {/*            <a href="https://www.tiktok.com/@pridebotx" target="_blank" style={MarginSocSeti}>*/}
            {/*                <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>*/}
            {/*            </a>*/}
            {/*            <a href="https://birdeye.so/token/HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y?chain=solana&utm_source=rugcheck"*/}
            {/*               target="_blank" style={MarginSocSeti}>*/}
            {/*                <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>*/}
            {/*            </a>*/}
            {/*            <a href="https://dexscreener.com/solana/gtth1xxakps3gmvzg134js4rhyv1goqhxqkfu1ceodtt"*/}
            {/*               target="_blank" style={MarginSocSeti}>*/}
            {/*                <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>*/}
            {/*            </a>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Box>*/}

            {/*<div ref={sectionRefs[0]}>*/}
            {/*    <Home/>*/}
            {/*</div>*/}

            {champion === '' ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: '800',
                    margin: '0px auto 20px auto'
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>

                        <Box sx={ContractAddress}>
                            <a href="https://solscan.io/account/DgdadMRR3JpyyoRhHqwfMdhJVBC1cQiYsH16vxEkCzHb"
                               target="_blank"
                               style={{marginRight: '5px', color: '#000000', fontSize: '18px', wordBreak: 'break-all'}}>
                                HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y</a>
                            <ContentCopyIcon sx={{cursor: 'pointer', color: '#000000'}} onClick={copyToClipboard}/>
                            {copyAdress &&
                                <Typography sx={{
                                    position: 'absolute',
                                    top: '50px',
                                    left: '100px',
                                    color: 'red',
                                    fontWeight: '800',
                                    fontSize: '24px'
                                }}>
                                    Contract Address Copied!
                                </Typography>
                            }

                        </Box>

                        <Box sx={{fontSize: '60px', marginTop: '-10px'}}><span style={{color: '#be131d'}}>de</span><span
                            style={{color: '#0c2b8d'}}>bate!</span><span style={{color: '#be131d'}}>!</span></Box>

                        <Box sx={{display: 'flex', alignItems: 'center', marginLeft: '100px'}}>
                            <a href="https://t.me/Pride_Bot_X" target="_blank" style={{display: 'flex'}}>
                                <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                            </a>
                            <a href="https://twitter.com/PrideBotX" target="_blank" style={MarginSocSeti}>
                                <Avatar src={X} sx={socSeti} alt="X"/>
                            </a>
                            <a href="https://www.tiktok.com/@pridebotx" target="_blank" style={MarginSocSeti}>
                                <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>
                            </a>
                            <a href="https://birdeye.so/token/HWnMxUdafSiWegB73GD87w8RrQ7NCmuWKZ3pcRBVHM3y?chain=solana&utm_source=rugcheck"
                               target="_blank" style={MarginSocSeti}>
                                <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>
                            </a>
                            <a href="https://dexscreener.com/solana/gtth1xxakps3gmvzg134js4rhyv1goqhxqkfu1ceodtt"
                               target="_blank" style={MarginSocSeti}>
                                <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                            </a>
                        </Box>

                    </Box>

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box>
                            <img src={de} style={{width: '300px'}}/>
                        </Box>
                        <Box>
                            <img src={vs} style={{width: '180px'}}/>
                        </Box>
                        <Box>
                            <img src={bate} style={{width: '300px', scale: '1.2'}}/>
                        </Box>
                    </Box>
                    <Box>(attack Boden or Tremp)</Box>
                </Box> : null}

            {champion !== "" ?
                <Box sx={{color: 'orange', width: '1000px', margin: '0 auto', borderRadius: '20px', textAlign: 'center', fontSize: '80px', fontWeight: '800', animation: 'shakeAnimation 0.5s infinite alternate ease-in-out, colorBlink 0.5s infinite linear',
                    '@keyframes colorBlink': {
                        '0%': {backgroundColor: '#3253c2'}, // Исходный цвет фона
                        '50%': {backgroundColor: '#486ddc'}, // Цвет фона для мерцания
                        '100%': {backgroundColor: '#3253c2'}, // Возврат к исходному цвету фона
                    },}}>
                    {champion} Win!
                </Box> :
                <Box
                    sx={{
                        display: 'flex',
                        margin: '0 auto',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box
                            sx={{
                                '& > legend': {mt: 5},
                                fontSize: '30px'
                            }}
                        >
                            {/*<Rating name="read-only" value={value} readOnly />*/}
                            <StyledRatingBoden
                                name="customized-color"
                                value={valueBoden}
                                readOnly
                                icon={<FavoriteIcon fontSize="inherit"/>}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                            />
                        </Box>

                        <Box sx={{
                            ...BodenStyle,
                            marginRight: touch === 2 ? '-230px' : '0px',
                            zIndex: touch === 2 ? '1' : '0'
                        }} onClick={() => handleTouch(1)}>

                            <img src={bodenMech} style={{width: '400px', height: '400px', paddingBottom: '10px'}}/>
                            <img src={blood} style={{
                                display: redBlood === 1 ? 'flex' : 'none',
                                position: 'absolute',
                                top: '125px',
                                right: '260px',
                                width: '10px'
                            }}/>
                            <img src={star}
                                 style={{display: touch === 2 ? 'flex' : 'none', width: '70px', height: '70px'}}/>

                        </Box>
                    </Box>


                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Box
                            sx={{
                                '& > legend': {mt: 5},
                            }}
                        >
                            {/*<Rating name="read-only" value={value} readOnly />*/}
                            <StyledRatingTremp
                                name="customized-color"
                                value={valueTremp}
                                readOnly
                                icon={<FavoriteIcon fontSize="inherit"/>}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                            />
                        </Box>

                        <Box sx={{
                            ...TrempStyle,
                            marginLeft: touch === 1 ? '-370px' : '0',
                            zIndex: touch === 1 ? '1' : '0'
                        }} onClick={() => handleTouch(2)}>
                            <img src={star}
                                 style={{display: touch === 1 ? 'flex' : 'none', width: '70px', height: '70px'}}/>
                            <img src={blood} style={{
                                display: redBlood === 2 ? 'flex' : 'none',
                                position: 'absolute',
                                top: '125px',
                                right: '140px',
                                width: '10px'
                            }}/>
                            <img src={trempMech} style={{width: '400px', height: '400px', paddingBottom: '50px'}}/>
                        </Box>
                    </Box>


                </Box>
            }

            {champion === '' &&
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundImage: `url(${gerb})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp1}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp2}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp3}/>
                </Box>
            }


            {/*<div ref={sectionRefs[1]}>*/}
            {/*    <About/>*/}
            {/*</div>*/}

            {/*<Box sx={CardWrap}>*/}
            {/*    <Card index={0}/>*/}
            {/*    <Card index={1}/>*/}
            {/*    <Card index={2}/>*/}
            {/*    <Card index={3}/>*/}
            {/*    <Card index={4}/>*/}
            {/*</Box>*/}

            {/*<div ref={sectionRefs[2]}>*/}
            {/*    <Tocenomics/>*/}
            {/*</div>*/}

            {/*<div ref={sectionRefs[3]}>*/}
            {/*    <HowToBuy/>*/}
            {/*</div>*/}

            {/*<div ref={sectionRefs[4]}>*/}
            {/*    <Roadmap/>*/}
            {/*</div>*/}

            {champion === '' &&
                <FooterComponent/>
            }


        </div>
    )

}

export default App
