import React from 'react';
import { useStyles } from './styles';
import { darkTheme } from './themes';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const App = () => {
    const classes = useStyles();
    const browserHistory = createBrowserHistory();
    return (
        <ThemeProvider theme={darkTheme}>
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/">
                        <div className={classes.frontPageTitle}>
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                            />

                            <Typography variant="h5" color="textPrimary">
                                Let's get you
                            </Typography>

                            <Typography
                                className={classes.title}
                                variant="h1"
                                component="h2"
                                color="primary"
                            >
                                OutThere
                            </Typography>
                            <Button className={classes.flashyButton}>
                                Register
                            </Button>
                            <Button>Already have an account?</Button>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
