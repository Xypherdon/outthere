import React from 'react';
import { TextField, Card, Button, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { history } from '../routes/history';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: '',
            password: '',
        };
    }

    loginClicked = () => {
        this.setState({ attempted: true });
        const usernameOrEmail = this.state.usernameOrEmail;
        const password = this.state.password;
        Meteor.loginWithPassword(usernameOrEmail, password, (error, result) => {
            if (error) {
                this.setState({ loginSuccesful: false });
            } else {
                this.setState({ loginSuccesful: true });
            }
        });
    };

    conditionalLogin = () => {
        if (this.state.loginSuccesful === false) {
            return (
                <Typography
                    style={{
                        ...this.props.classes.error,
                        ...this.props.classes.cardElement,
                    }}
                    variant="body2"
                >
                    Username or password do not match
                </Typography>
            );
        }
    };

    loginRender = () => {
        if (this.state.loginSuccesful !== true) {
            return (
                <React.Fragment>
                    <Card
                        elevation={10}
                        style={{
                            ...this.props.classes.centered,
                            ...this.props.classes.card,
                        }}
                    >
                        <TextField
                            style={this.props.classes.textField}
                            type="text"
                            id="emailTextField"
                            variant="outlined"
                            label="E-mail Address / Username"
                            onChange={(e) => {
                                this.setState({
                                    usernameOrEmail: e.target.value,
                                });
                            }}
                        />

                        <TextField
                            style={{
                                ...this.props.classes.cardElement,
                                ...this.props.classes.textField,
                            }}
                            type="password"
                            id="passwordTextField"
                            variant="outlined"
                            label="Password"
                            onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }}
                        />
                        {this.conditionalLogin()}
                        <Button
                            type="submit"
                            onClick={this.loginClicked.bind(this)}
                            style={{
                                ...this.props.classes.cardElement,
                                ...this.props.classes.flashyButton,
                            }}
                        >
                            Login
                        </Button>
                        <br />
                        <Button href="/register" style={{ fontSize: '12px' }}>
                            Don't have an account?
                        </Button>
                    </Card>
                </React.Fragment>
            );
        } else {
            history.push('/login');
            return <Redirect to={`/profile/${Meteor.userId()}`} />;
        }
    };

    render() {
        return this.loginRender();
    }
}
