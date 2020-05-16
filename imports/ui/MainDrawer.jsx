import React from 'react';
import { Drawer, Button, ListItemIcon, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Redirect } from 'react-router-dom';
import { history } from '../routes/history';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import HelpIcon from '@material-ui/icons/Help';

export class MainDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
        };
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        this.setState({ left: open });
    };

    list = () => (
        <div
            style={this.props.classes.list}
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
        >
            <Typography
                style={{ ...this.props.classes.title, marginLeft: '12px' }}
                variant="h2"
                color="primary"
            >
                OutThere
            </Typography>
            <List style={this.props.classes.topList}>
                <ListItem button key="home">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="profile">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="account">
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                </ListItem>

                <ListItem button key="privacy">
                    <ListItemIcon>
                        <LockIcon />
                    </ListItemIcon>
                    <ListItemText primary="Privacy" />
                </ListItem>
                <ListItem button key="about">
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
            <List style={this.props.classes.bottomList}>
                <ListItem button key="settings">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );

    render() {
        return (
            <div>
                <React.Fragment>
                    <Button
                        style={this.props.classes.mainDrawerMenuButton}
                        onClick={this.toggleDrawer(true).bind(this)}
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        classes={{ paper: this.props.materialClasses.drawer }}
                        open={this.state.left}
                        onClose={this.toggleDrawer(false).bind(this)}
                    >
                        {this.list()}
                    </Drawer>
                </React.Fragment>
            </div>
        );
    }
}
