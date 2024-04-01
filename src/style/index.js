export const buyNow = {
    // backgroundColor: '#3253c2',
    // marginRight: '360px',
    fontFamily: 'Montserrat, sans-serif',
    padding: '7px 20px',
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
        '0%': { backgroundColor: '#3253c2' }, // Исходный цвет фона
        '50%': { backgroundColor: '#486ddc' }, // Цвет фона для мерцания
        '100%': { backgroundColor: '#3253c2' }, // Возврат к исходному цвету фона
    },
};

export const socSeti = {
    alignItems: 'center',
    width: '30px',
    height: '30px',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.2)'
    }
};


