import './App.css'
import React, {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';

import Telegram from '../public/Telegram.webp';
import birdeye from '../public/Birdeye.jpg';
import dexscreener from '../public/Dexscreener.png';
import tictok from '../public/tik-tok.png';
import X from '../public/XXX.png';

import bodenMech from '../public/boden-mech.png';
import trempMech from '../public/tremp-mech.png';
import star from '../public/star1.png';
import blood from '../public/blood.png';
import soundMech from '../public/sound.mp3';
import de from '../public/de.png';
import bate from '../public/bate.png';
import vs from '../public/vs.png';
import bodenTremp from '../public/Gallery1-Ring.png';
import bodenTremp1 from '../public/Gallery2.png';
import bodenTremp2 from '../public/Gallery3.png';
import bodenTremp3 from '../public/Gallery4.png';
import gerb from '../public/gerb.png';
import bodenAside from '../public/boden-aside.png';
import trempAside from '../public/tremp-aside.png';
import piramide from '../public/piramide-opac.png';
import fire from '../public/fire.png';

import FooterComponent from "./Component/Footer/Footer.jsx";


import {
    socSeti,
    MarginSocSeti,
    BodenStyle,
    TrempStyle,
    ContractAddress
} from "./style/index.js";

import {Avatar, Box, Button, Typography, Rating} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyIcon from "@mui/icons-material/ContentCopy.js";


function App() {

    const [touch, setTouch] = useState(null);
    const [redBlood, setRedBlood] = useState(null);
    const [valueBoden, setValueBoden] = useState(5);
    const [valueTremp, setValueTremp] = useState(5);
    const [champion, setChampion] = useState("");
    const [copyAdress, setCopyAdress] = useState(false);

    const sound = new Audio(soundMech);

    useEffect(() => {
        if (valueBoden === 0) {

            setTimeout(() => {
                setChampion("Trempbate");
            }, 800);

            setTimeout(() => {
                setChampion('');
                setValueBoden(5);
                setValueTremp(5);
            }, 5000);
        }

        if (valueTremp === 0) {

            setTimeout(() => {
                setChampion("deBoden");
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
        const textToCopy = 'The contract address will be here';

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


    return (
        <div>

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
                            <a href="#"
                               target="_blank"
                               style={{marginRight: '5px', color: '#000000', fontSize: '18px', wordBreak: 'break-all'}}>
                                The contract address will be here</a>
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
                            <a href="#" target="_blank" style={{display: 'flex'}}>
                                <Avatar src={Telegram} sx={socSeti} alt="Telegram"/>
                            </a>
                            <a href="#" target="_blank" style={MarginSocSeti}>
                                <Avatar src={X} sx={socSeti} alt="X"/>
                            </a>
                            {/*<a href="https://www.tiktok.com/@pridebotx" target="_blank" style={MarginSocSeti}>*/}
                            {/*    <Avatar src={tictok} sx={socSeti} alt="Tic-Tok"/>*/}
                            {/*</a>*/}
                            <a href="#"
                               target="_blank" style={MarginSocSeti}>
                                <Avatar src={birdeye} sx={socSeti} alt="birdeye"/>
                            </a>
                            <a href="#"
                               target="_blank" style={{display: 'flex', marginLeft: '15px'}}>
                                <Avatar src={dexscreener} sx={socSeti} alt="dexscreener"/>
                            </a>
                            <Box sx={{width: '70px', height: '70px', marginLeft: '30px', color: 'orange', backgroundColor: '#000000', borderRadius: '50%', textAlign: 'center', lineHeight: '70px'}}>$BTD</Box>
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
                    <Box>(attack deBoden or Trempbate)</Box>
                </Box> : null}

            {champion !== "" ?
                <Box sx={{
                    color: 'orange',
                    width: '1000px',
                    margin: '0 auto',
                    borderRadius: '20px',
                    textAlign: 'center',
                    fontSize: '80px',
                    fontWeight: '800',
                    animation: 'shakeAnimation 0.5s infinite alternate ease-in-out, colorBlink 0.5s infinite linear',
                    '@keyframes colorBlink': {
                        '0%': {backgroundColor: '#3253c2'}, // Исходный цвет фона
                        '50%': {backgroundColor: '#486ddc'}, // Цвет фона для мерцания
                        '100%': {backgroundColor: '#3253c2'}, // Возврат к исходному цвету фона
                    },
                }}>
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
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        margin: '0px auto ',
                        padding: '50px 0',
                        fontSize: '45px',
                        fontWeight: '600',
                        color: '#17256e',
                        backgroundImage: `url(${fire})`,
                        backgroundSize: 'cover'
                    }}>
                        <Box sx={{textAlign: 'center', fontSize: '50px', width: '80%'}}>ABOUT</Box>
                        <Box sx={{textAlign: 'center', marginBottom: '20px', width: '80%'}}>Who will win the debate? Magnificent deBoden or stunning
                            Trempbate? You can decide it yourself right here and now! And you can do this three hundred
                            trillion million billion times :)</Box>
                        <Box sx={{textAlign: 'center', width: '80%'}}>Our meme coin was released in support of this great event.<br/> Buy <span style={{color: 'darkorange'}}>$deBoden-VS-Trempbate</span> and earn a billion trillion from the duel of the titans!</Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '50px 0', backgroundColor: '#d3e2f6'}}>
                        <Box sx={{marginLeft: '100px'}}>
                            <img src={bodenAside} style={{width: '350px', height: '470px'}}/>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '45px',
                            fontWeight: '600',
                            color: '#17256e',
                            padding: '55px 20px 0 20px',
                            backgroundImage: `url(${piramide})`,
                            backgroundSize: '480px 480px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>
                            <Box sx={{textAlign: 'start'}}>* 100% Of Liquidity Burned</Box>
                            <Box sx={{textAlign: 'start', marginBottom: '20px'}}>* TAX SELL: 0%</Box>
                            <Box sx={{textAlign: 'end'}}>* TAX BUY: 0%</Box>
                            <Box sx={{textAlign: 'end'}}>* OWNER: Revoked <br/> ( Mint+Freeze )</Box>
                        </Box>
                        <Box sx={{marginRight: '100px'}}>
                            <img src={trempAside} style={{width: '350px', height: '470px'}}/>
                        </Box>
                    </Box>
                </Box>
            }


            {champion === '' &&
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    padding: '50px 0',
                    backgroundImage: `url(${gerb})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp1}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp2}/>
                    <img style={{width: '500px', margin: '20px 10px', borderRadius: '10px'}} src={bodenTremp3}/>
                </Box>
            }

            {champion === '' &&
                <FooterComponent/>
            }

        </div>
    )

}

export default App
