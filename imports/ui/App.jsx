import React from 'react';
import { useStyles } from './styles';
import { classes } from './styles';
import { darkTheme } from './themes';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
    Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Register } from './Register';
import { Login } from './Login';
import { MainDrawer } from './MainDrawer.jsx';
import Profile from './Profile';
import { history } from '../routes/history';

function ProfileChild(props) {
    let { userId } = useParams();
    return <Profile userId={userId} classes={props.classes} />;
}

const conditionalRender = () => {
    if (Meteor.user() === null) {
        return (
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
                <Button style={classes.flashyButton} href="/register">
                    Register
                </Button>
                <Button href="/login">Already have an account?</Button>
            </div>
        );
    } else {
        return <Redirect to={`/profile/${Meteor.userId()}`} />;
    }
};

export const App = () => {
    const materialClasses = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={classes.frontPageTitle}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </div>

            <MainDrawer classes={classes} materialClasses={materialClasses} />

            <Router history={history}>
                <Switch>
                    <Route path="/login">
                        <Login classes={classes} />
                    </Route>

                    <Route path="/register">
                        <Register classes={classes} />
                    </Route>

                    <Route
                        path="/profile/:userId"
                        children={<ProfileChild classes={classes} />}
                    />

                    <Route exact path="/">
                        {conditionalRender()}
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
