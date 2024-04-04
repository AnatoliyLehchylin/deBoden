export const Wrapper = {
    display: 'flex',
    flexDirection: "column",
    maxWidth: '1080px',
    width: '90%',
    margin: '50px auto',
    padding: '60px 70px 10px 70px',
    backgroundColor: '#000000',
    borderRadius: '10px',
    '@media (max-width: 890px)': {
        padding: '60px 40px 10px 40px',
    },
    '@media (max-width: 590px)': {
        padding: '60px 20px 10px 20px',
    },
    '@media (max-width: 440px)': {
        padding: '70px 20px 10px 20px',
    },
};

export const WrapSection = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: '#FFFFFF',
    fontSize: '14px',
    '@media (max-width: 440px)': {
        width: '100%',
        alignItems: 'center',
        marginBottom: '10px'
    },
};

export const RoadmapStyle = {
    fontSize: '26px', fontWeight: '800', color: '#32E7FF'
};

export const Img = {
    width: '240px', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', marginBottom: '10px',
    '@media (max-width: 890px)': {
        width: '220px'
    },
    '@media (max-width: 590px)': {
        width: '95%',

    },
};

export const Year24 = {
    fontSize: '26px', fontWeight: '600', margin: '0 0 5px 10px'
};

export const Year25 = {
    fontSize: '26px', fontWeight: '600', margin: '0 10px 5px 0'
};

export const LeftTask = {
    width: '90%', display: 'flex', flexDirection: 'column', backgroundColor: '#403F44', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '10px 10px 0 10px', color: '#FFFFFF',
    '@media (max-width: 890px)': {
        width: '95%'
    },
};

export const RightTask = {
    width: '90%', display: 'flex', flexDirection: 'column', backgroundColor: '#403F44', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', padding: '10px 10px 0 10px', color: '#FFFFFF',
    '@media (max-width: 890px)': {
        width: '95%'
    },
};

export const LeftQ = {
    margin: '0', color: '#32E7FF', fontSize: '20px'
};

export const RightQ = {
    margin: '0', color: '#32E7FF', fontSize: '20px', textAlign: 'right',
    '@media (max-width: 440px)': {
        textAlign: 'left',
    },
};

export const Lefttext = {
    fontSize: '16px',
    '@media (max-width: 590px)': {
        fontSize: '14px',
        margin: '16px 0'
    },
};

export const Righttext = {
    fontSize: '16px', textAlign: 'right',
    '@media (max-width: 590px)': {
        fontSize: '14px',
        margin: '16px 0'
    },
    '@media (max-width: 440px)': {
        textAlign: 'left'
    },
};

export const Arrow = {
    margin: '5px 40px'
};

