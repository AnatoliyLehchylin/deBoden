export const Wrapp = {
    display: 'flex',
    maxWidth: '1080px',
    width: '90%',
    margin: '50px auto 20px auto',
    padding: '60px 40px 0px 40px',
    backgroundColor: '#000000',
    borderRadius: '10px',
    '@media (max-width: 440px)': {
        padding: '70px 15px 0px 15px',
    },
};

export const WrapContent = {
    // width: '60%',
    display: 'flex',
    flexDirection: 'column',
    color: '#BABABA',
    fontSize: '14px'
};

export const Name = {
    fontSize: '26px', fontWeight: '800', color: '#32E7FF', marginBottom: '15px'
};

export const WrappTitle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 590px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
};

export const Title = {
    textAlign: 'center',
    width: '60%',
    fontSize: '18px',
    fontWeight: '600',
    color: '#E1E1E1',
    margin: '0 0 0 0',
    '@media (max-width: 1100px)': {
        fontSize: '16px',
        fontWeight: '600',
    },
    '@media (max-width: 710px)': {
        fontSize: '14px',
        fontWeight: '500',
    },
    '@media (max-width: 590px)': {
        width: '100%'
    },
    '@media (max-width: 440px)': {
        width: '100%',
        fontSize: '12px',
        fontWeight: '400',
    },
};

export const Text = {
    lineHeight: 1.5,
    color: '#FFFFFF',
    fontSize: '18px',
    textAlign: 'justify',
    marginBottom: '10px',
    marginTop: '0',
    '@media (max-width: 1100px)': {
        fontSize: '14px',
    },
    '@media (max-width: 710px)': {
        fontSize: '12px',
    },
    '@media (max-width: 440px)': {
        fontSize: '12px',
    },
};

export const FindOut = {
    fontSize: '20px', color: '#f6cab6', marginTop: '0',
    '@media (max-width: 590px)': {
        fontSize: '16px',
    },
    '@media (max-width: 440px)': {
        fontSize: '10px',
    },
}