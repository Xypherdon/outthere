import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export let darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: {
            main: '#FF8E53',
            mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        background: {
            paper: 'rgba(255, 255, 255, 0.04) ',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});
darkTheme = responsiveFontSizes(darkTheme);
