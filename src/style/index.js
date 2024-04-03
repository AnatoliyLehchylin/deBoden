export const buyNow = {
    fontFamily: 'Montserrat, sans-serif',
    padding: '5px 10px',
    color: '#FFFFFF',
    boxShadow: '2px 5px 5px #413b3b',
    fontSize: '16px',
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
};

export const socSeti = {
    alignItems: 'center',
    width: '25px',
    height: '25px',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.2)'
    }
};

export const HeaderWrap = {
    display: 'flex',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '17px 0 17px 0',
    margin: '0 0',
    zIndex: 1000
};

export const ButtonWrap = {
    maxWidth: '1080px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const ButtonWrapNav = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
};

export const ButtonNav = {
    width: '115px',
    fontSize: '14px',
    marginLeft: '30px',
    padding: '5px 5px',
    textAlign: 'center',
    color: '#FFFFFF',
    transition: 'box-shadow 0.3s ease-in-out'
};

export const MarginSocSeti = {
    display: 'flex', marginLeft: '10px'
};

export const CardWrap = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    backgroundColor: '#000000'
}
