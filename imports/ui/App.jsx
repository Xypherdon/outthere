import React from 'react';
// import { useStyles } from './styles';
import { classes } from './styles';
import { darkTheme } from './themes';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Register } from './Register';
import { Login } from './Login';
import { browserHistory } from '../routes/history';

export const App = () => {
    // const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={classes.frontPageTitle}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </div>
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/login">
                        <Login classes={classes} />
                    </Route>
                    <Route path="/register">
                        <Register classes={classes} />
                    </Route>
                    <Route exact path="/">
                        <div style={classes.centered}>
                            <Typography variant="h5" color="textPrimary">
                                Let's get you
                            </Typography>

                            <Typography
                                style={classes.title}
                                variant="h1"
                                component="h2"
                                color="primary"
                            >
                                OutThere
                            </Typography>
                            <Button
                                style={classes.flashyButton}
                                href="/register"
                            >
                                Register
                            </Button>
                            <Button href="/login">
                                Already have an account?
                            </Button>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
