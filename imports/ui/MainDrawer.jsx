import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Redirect } from 'react-router-dom';
import { history } from '../routes/history';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from 'material-ui/styles';
import { classes } from './styles';

class MainDrawer extends React.Component {
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
            <List>
                {['Test1', 'Test2', 'Test3', 'Test4'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Test5', 'Test6', 'Test7'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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

export default withStyles(classes)(<MainDrawer classes={classes} />);
