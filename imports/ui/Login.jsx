import React from 'react';
import { TextField, Card, Button } from '@material-ui/core';

export class Login extends React.Component {
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
                    <TextField
                        style={this.props.classes.textField}
                        type="text"
                        id="emailTextField"
                        variant="outlined"
                        label="E-mail Address / Username"
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
                    />

                    <Button
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
    }
}
