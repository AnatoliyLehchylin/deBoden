export const Wrap = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1080px',
    width: '90%',
    margin: '50px auto',
    padding: '90px 20px 10px 20px',
    backgroundColor: '#000000',
    borderRadius: '10px'
};

export const WrapImg = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto 20px auto',
    // marginBottom: '20px',
    width: '150px',
    height: '150px',
    '@media (max-width: 440px)': {
        width: '100px',
        height: '100px',
    },
};

export const Img = {
    width: '100%'
};

export const WrapElemDark = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '500',
    width: '33%',
    backgroundColor: '#403f44',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    marginRight: '20px',
    padding: '0 10px',
    '@media (max-width: 710px)': {
        fontSize: '16px',
    },
    '@media (max-width: 590px)': {
        // fontSize: '14px',
        width: '50%',
        marginRight: '10px'
    },
    '@media (max-width: 440px)': {
        fontSize: '12px',
    },
};

export const WrapElemLight = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '500',
    width: '33%',
    backgroundColor: '#63626b',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    marginRight: '20px',
    padding: '0 10px',
    '@media (max-width: 710px)': {
        fontSize: '16px',
    },
    '@media (max-width: 590px)': {
        // fontSize: '14px',
        width: '50%',
        marginLeft: '10px',
        marginRight: '0'
    },
    '@media (max-width: 440px)': {
        fontSize: '12px',
    },
};

export const Title = {
    color: '#32E7FF',
    fontSize: '18px',
    fontWeight: '500',
    margin: '18px 0',
    '@media (max-width: 710px)': {
        fontSize: '14px',
    },
    '@media (max-width: 440px)': {
        fontSize: '10px',
    },
}