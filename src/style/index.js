export const buyNow = {
    fontFamily: 'Montserrat, sans-serif',
    padding: '5px 10px',
    color: '#FFFFFF',
    boxShadow: '2px 5px 5px #413b3b',
    fontSize: '18px',
    fontWeight: '600',
    animation: 'shakeAnimation 0.5s infinite alternate ease-in-out, colorBlink 0.5s infinite linear',
    '@keyframes shakeAnimation': {
        '0%, 100%': {
            transform: 'translate(0, 0)'
        },
        '25%': {
            transform: 'translate(-2px, -2px)'
        },
        '50%': {
            transform: 'translate(2px, 2px)'
        },
        '75%': {
            transform: 'translate(-1px, -1px)'
        },
    },
    '@keyframes colorBlink': {
        '0%': {backgroundColor: '#3253c2'}, // Исходный цвет фона
        '50%': {backgroundColor: '#486ddc'}, // Цвет фона для мерцания
        '100%': {backgroundColor: '#3253c2'}, // Возврат к исходному цвету фона
    },
    '@media (max-width: 1100px)': {
        display: 'none',
    },
    '@media (max-width: 710px)': {
        fontSize: '14px',
        fontWeight: '400',
        padding: '3px 5px',
    },
    '@media (max-width: 590px)': {
        fontSize: '12px',
        fontWeight: '400',
        padding: '3px 3px',
    },
    '@media (max-width: 440px)': {
        alignItems: 'center'
    },
};

export const socSeti = {
    alignItems: 'center',
    width: '25px',
    height: '25px',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.2)'
    },
    '@media (max-width: 710px)': {
        width: '20px',
        height: '20px',
    },
};

export const HeaderWrap = {
    display: 'flex',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '17px 0 17px 0',
    margin: '0 0',
    zIndex: 1000,
    '@media (max-width: 440px)': {
        padding: '17px 0 0 0',
    },
};

export const ButtonWrap = {
    maxWidth: '1080px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1100px)': {
        flexDirection: 'column',
        justifyContent: 'center'
    }
};

export const WrapMiddle = {
    display: 'none',
    '@media (max-width: 1100px)': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px'
    },
    '@media (max-width: 440px)': {
        position: 'relative',
        marginBottom: '0px',
        alignItems: 'center'
    },
};


export const ButtonWrapNav = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 440px)': {
        display: 'none'
    },
};

export const ButtonNav = {
    fontFamily: 'Montserrat, sans-serif',
    width: '115px',
    fontSize: '14px',
    marginLeft: '30px',
    padding: '5px 5px',
    textAlign: 'center',
    color: '#FFFFFF',
    transition: 'box-shadow 0.3s ease-in-out',
    '@media (max-width: 710px)': {
        width: '100px',
        fontSize: '12px',
        marginLeft: '20px',
        padding: '3px 3px',
    },
    '@media (max-width: 590px)': {
        width: '77px',
        fontSize: '10px',
        marginLeft: '10px',
        padding: '3px 2px',
    },
    '@media (max-width: 440px)': {
        width: '115px',
        fontSize: '14px',
        padding: '5px 5px',
        marginBottom: '10px',
        marginRight: '10px'
    },
    ':hover': {
        color: '#000000',
        backgroundColor: '#c40668'
    }
};

export const MarginSocSeti = {
    display: 'flex', marginLeft: '10px'
};

export const CardWrap = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    padding: '32px 10px',
    backgroundColor: '#000000',
    '@media (max-width: 710px)': {
        padding: '25px 10px',
    },
    '@media (max-width: 590px)': {
        padding: '15px 10px',
    },
    '@media (max-width: 440px)': {
        padding: '10px 10px',
    },
};

export const BodenStyle = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    width: '400px',
    height: '400px',
    marginTop: '50px',
    animation: 'bodenAnimation 1s infinite alternate ease-in-out',
    '@keyframes bodenAnimation': {
        '0%, 100%': {
            transform: 'translate(0, 0)'
        },
        '25%': {
            transform: 'translate(10px, -20px)'
        },
        '50%': {
            transform: 'translate(-20px, 10px)'
        },
        '75%': {
            transform: 'translate(20px, -10px)'
        },
    },
};

export const TrempStyle = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    width: '400px',
    height: '400px',
    marginTop: '50px',
    animation: 'trempAnimation 1s infinite alternate ease-in-out',
    '@keyframes trempAnimation': {
        '0%, 100%': {
            transform: 'translate(0, 0)'
        },
        '25%': {
            transform: 'translate(-10px, 20px)'
        },
        '50%': {
            transform: 'translate(20px, -10px)'
        },
        '75%': {
            transform: 'translate(-20px, 10px)'
        },
    },
}




