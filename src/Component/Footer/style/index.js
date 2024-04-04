export const socSeti = {
    alignItems: 'center',
    width: '30px',
    height: '30px',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.2)'
    },
    '@media (max-width: 440px)': {
        width: '20px',
        height: '20px',
    },
};

export const FooterWrap = {
    display: 'flex',
    width: '100%',
    padding: '25px 0 25px 0',
    margin: '30px 0 0 0',
    backgroundColor: '#000000'
};

export const ContentWrap = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1080px',
    margin: '0 auto',
    color: '#FFFFFF',
    textAlign: 'center'
};

export const avatar = {
    width: '150px', height: '150px',
    '@media (max-width: 1100px)': {
        width: '125px',
        height: '125px',
    },
    '@media (max-width: 710px)': {
        width: '100px',
        height: '100px',
    },
    '@media (max-width: 590px)': {
        width: '80px',
        height: '80px',
    },
};

export const NameWrap = {
    fontSize: '25px', color: '#63626b', fontWeight: '500', margin: '30px 0 0 0',
    '@media (max-width: 1100px)': {
        fontSize: '22px',
        fontWeight: '500',
        margin: '20px 0 0 0',
    },
    '@media (max-width: 590px)': {
        fontSize: '20px',
        fontWeight: '500',
        margin: '20px 0 0 0',
    },
};

export const FooterText = {
    margin: '20px 0 30px 0', fontSize: '20px', color: '#E1E1E1',
    '@media (max-width: 1100px)': {
        margin: '20px 20px 20px 20px',
        fontSize: '18px',
    },
    '@media (max-width: 710px)': {
        margin: '20px 20px 20px 20px',
        fontSize: '16px',
    },
    '@media (max-width: 590px)': {
        margin: '20px 20px 20px 20px',
        fontSize: '14px',
    },
    '@media (max-width: 440px)': {
        margin: '20px 20px 20px 20px',
        fontSize: '12px',
    },
};

export const Follow = {
    fontSize: '16px', color: '#BABABA',
    '@media (max-width: 1100px)': {
        fontSize: '14px',
    },
    '@media (max-width: 710px)': {
        margin: '0 20px 0 20px',
        fontSize: '12px',
    },
    '@media (max-width: 440px)': {
        margin: '0 20px 0 20px',
        fontSize: '10px',
    },
};

export const SocSetiWrap = {
    display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '10px'
};

export const Email = {
    fontSize: '16px', color: '#BABABA',
    '@media (max-width: 1100px)': {
        fontSize: '14px',
    },
    '@media (max-width: 710px)': {
        fontSize: '12px',
    },
    '@media (max-width: 440px)': {
        margin: '0 20px 0 20px',
        fontSize: '10px',
    },
}