// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useState} from "react";

import Telegram from '../public/Telegram.webp';
import Facebook from '../public/Facebook_logo_(square).png';
import X from '../public/XXX.png';
import robot2 from '../public/robot2.jpg';
import robot1 from '../public/robot1.jpg';

import Card from "./Component/Card.jsx";
import {Button} from "@mui/material";


function App() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
      <div>
          <div>
              <Button sx={{border: '3px solid #25d21f', margin: '20px 0 0 60px', color: '#198c15', fontSize: '18px', fontWeight: '600'}}>Buy Now</Button>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 40px 0 40px'}}>
              <div style={{width: '45%', fontSize: '20px', color: '#1A1B1F'}}>
                  <p style={{fontSize: '24px', fontWeight: '600', color: '#b0165c'}}>I`am Robot-Tolerast <span style={{color: 'black', fontSize: '26px'}}>&nbsp;$RTC</span></p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula magna non velit feugiat, at consectetur felis facilisis. Nullam condimentum eleifend mauris, vel placerat ligula suscipit vel. Integer ultricies sapien at arcu malesuada, sed ultrices lorem gravida. Nullam dignissim lacus eget justo fermentum, ut consequat tortor volutpat. Duis volutpat ipsum nec nisl aliquet, vel hendrerit velit ultrices. Maecenas hendrerit urna quis lorem ultricies, vitae malesuada libero maximus. Nulla facilisi. Mauris interdum tincidunt mi, et vehicula odio aliquam sit amet. Phasellus auctor nunc eget magna ultricies, id bibendum justo fermentum. Sed ac justo sit amet libero auctor sollicitudin. Maecenas ac velit vitae mi interdum rhoncus.
                  </p>
              </div>
              {/*<div style={{marginTop: '50px'}}>*/}
              {/*    <img src='../public/robot1.jpg' width='400px' height='400px' style={{borderRadius: '10px'}}/>*/}
              {/*</div>*/}
              <div style={{ marginTop: '50px', cursor: 'pointer' }}>
                  {isHovered ? (
                      <img
                          src={robot2}
                          width='400px'
                          height='400px'
                          style={{ borderRadius: '10px' }}
                          onMouseLeave={handleMouseLeave}
                          alt='robot'
                      />
                  ) : (
                      <img
                          src={robot1}
                          width='400px'
                          height='400px'
                          style={{ borderRadius: '10px' }}
                          onMouseEnter={handleMouseEnter}
                          alt='robot'
                      />
                  )}
              </div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                  <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                      <img src={Telegram} style={{width: '50px', height: '50px'}} alt="Telegram" />
                  </a>
                  <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                      <img src={Facebook} style={{width: '50px', height: '50px'}} alt="Telegram" />
                  </a>
                  <a href="https://ukr.net" target="_blank" style={{marginBottom: '20px'}}>
                      <img src={X} style={{width: '50px', height: '50px'}} alt="Telegram" />
                  </a>
              </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Card index={0} />
              <Card index={1} />
              <Card index={2} />
              <Card index={3} />
              <Card index={4} />
          </div>
      </div>
  )

}

export default App
