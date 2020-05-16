import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles({
//     flashyButton: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         width: '70%',
//     },
//     centered: {
//         textAlign: 'center',
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//     },
//     title: {
//         textShadow: '2px 2px 5px black',
//     },
//     cardElement: {
//         marginTop: '20px',
//     },
//     textField: {
//         backgroundColor: 'rgb(255, 255, 255,0.)',
//     },
//     card: {
//         padding: '25px',
//         borderRadius: '10px',
//         backgroundColor: 'rgba(255, 255, 255, 0.04) ',
//     },
// });

export const classes = {
    flashyButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        width: '60%',
    },
    centered: {
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    title: {
        textShadow: '2px 2px 5px black',
    },
    cardElement: {
        marginTop: '20px',
    },
    textField: {
        width: '100%',
    },
    card: {
        display: 'block',
        padding: '25px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.04) ',
        width: '20%',
    },
    error: {
        color: 'red',
    },
    profileDiv: {
        margin: '100px',
        // background: 'linear-gradient(0deg, #1c1c1c, #2b2b2b)',
        backgroundColor: 'rgba(255, 255, 255, 0.02) ',
        borderRadius: '10px',
        padding: '60px',
        position: 'relative',
        display: 'flex',
    },
    profileCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.04) ',
        borderRadius: '10px',
        display: 'block',
        width: '30%',
        minWidth: '150px',
    },
    profileCardActionArea: {
        padding: '10px',
    },
    upperProfileCard: {
        position: 'relative',
    },
    profileCardControls: {
        width: '100%',
        paddingTop: '2%',
        paddingBottom: '2%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        bottom: '0',
        position: 'absolute',
    },
    profileCardContent: {
        padding: '20px',
    },
    profileContentCard: {
        marginTop: '420px',
        marginLeft: '-107px',
        width: '67%',
        padding: '25px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.04) ',
    },
    profileButton: {
        marginLeft: '5px',
        marginRight: '5px',
    },
    coverPhoto: {
        margin: '-60px',
        position: 'absolute',
    },
    coverPhotoStyle: {
        margin: '-60px',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '450px',
    },
    artistName: {
        zIndex: '1',
        marginTop: '305px',
        marginLeft: '30px',
    },
    list: {
        width: '500px',
    },
    drawer: {
        backgroundColor: 'rgba(255, 255, 255, 0.04) ',
    },
    mainDrawerMenuButton: {
        position: 'fixed',
        height: '48px',
        width: '48px',
        left: '5px',
        top: '5px',
    },
};
