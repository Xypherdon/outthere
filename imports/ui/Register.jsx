import React from 'react';
import ReactDOM from 'react-dom';
import {
    validateEmail,
    checkPasswords,
    checkUsername,
    createUser,
} from '../helpers/accounts';
import { TextField, Card, Button } from '@material-ui/core';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '-1',
            confirmPassword: '-1',
            emailCorrect: true,
            usernameCorrect: true,
            passwordsMatch: true,
        };
    }

    registerClicked = () => {
        this.setState({ emailCorrect: validateEmail(this.state.email) });

        checkUsername(this.state.username, (result) => {
            this.setState({ usernameCorrect: result });
        });

        this.setState({
            passwordsMatch: checkPasswords(
                this.state.password,
                this.state.confirmPassword
            ),
        });

        console.log(this.state);
        if (
            this.state.emailCorrect &&
            this.state.usernameCorrect &&
            this.state.passwordsMatch
        ) {
            createUser(
                this.state.email,
                this.state.username,
                this.state.password
            );
        }
    };

    conditionalEmailTextField() {
        if (this.state.emailCorrect) {
            return (
                <TextField
                    style={this.props.classes.textField}
                    type="email"
                    ref="emailTextField"
                    variant="outlined"
                    label="E-mail Address"
                    onChange={(event) => {
                        this.setState({ email: event.target.value });
                    }}
                />
            );
        } else {
            return (
                <TextField
                    error
                    helperText="Invalid Email Address"
                    style={this.props.classes.textField}
                    type="email"
                    ref="emailTextField"
                    variant="outlined"
                    label="E-mail Address"
                    onChange={(event) => {
                        this.setState({ email: event.target.value });
                    }}
                />
            );
        }
    }

    conditionalUsernameTextField() {
        if (this.state.usernameCorrect) {
            return (
                <TextField
                    style={{
                        ...this.props.classes.cardElement,
                        ...this.props.classes.textField,
                    }}
                    type="text"
                    ref="usernameTextField"
                    variant="outlined"
                    label="Username"
                    onChange={(event) => {
                        this.setState({ username: event.target.value });
                    }}
                />
            );
        } else {
            return (
                <TextField
                    error
                    helperText="Username unavailable"
                    style={{
                        ...this.props.classes.cardElement,
                        ...this.props.classes.textField,
                    }}
                    type="text"
                    ref="usernameTextField"
                    variant="outlined"
                    label="Username"
                    onChange={(event) => {
                        this.setState({ username: event.target.value });
                    }}
                />
            );
        }
    }

    conditionalPasswordsTextField() {
        if (this.state.passwordsMatch) {
            return (
                <React.Fragment>
                    <TextField
                        style={{
                            ...this.props.classes.cardElement,
                            ...this.props.classes.textField,
                        }}
                        type="password"
                        ref="passwordTextField"
                        variant="outlined"
                        label="Password"
                        onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }}
                    />

                    <TextField
                        style={{
                            ...this.props.classes.cardElement,
                            ...this.props.classes.textField,
                        }}
                        type="password"
                        ref="confirmTextField"
                        variant="outlined"
                        label="Confirm Password"
                        onChange={(event) => {
                            this.setState({
                                confirmPassword: event.target.value,
                            });
                        }}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <TextField
                        error
                        style={{
                            ...this.props.classes.cardElement,
                            ...this.props.classes.textField,
                        }}
                        type="password"
                        ref="passwordTextField"
                        variant="outlined"
                        label="Password"
                        onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }}
                    />

                    <TextField
                        error
                        helperText="Passwords do not match or are too short"
                        style={{
                            ...this.props.classes.cardElement,
                            ...this.props.classes.textField,
                        }}
                        type="password"
                        ref="confirmTextField"
                        variant="outlined"
                        label="Confirm Password"
                        onChange={(event) => {
                            this.setState({
                                confirmPassword: event.target.value,
                            });
                        }}
                    />
                </React.Fragment>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card
                    elevation={10}
                    style={{
                        ...this.props.classes.centered,
                        ...this.props.classes.card,
                    }}
                >
                    {this.conditionalEmailTextField()}
                    {this.conditionalUsernameTextField()}

                    {this.conditionalPasswordsTextField()}

                    <Button
                        onClick={this.registerClicked}
                        style={{
                            ...this.props.classes.cardElement,
                            ...this.props.classes.flashyButton,
                        }}
                    >
                        Register
                    </Button>
                    <br />
                    <Button href="/login" style={{ fontSize: '12px' }}>
                        Already have an account?
                    </Button>
                </Card>
            </React.Fragment>
        );
    }
}
