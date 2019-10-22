import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});


class Register extends Component {
    state = { email: "", password: "", confirmPassword: "" };

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
    };

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
    };
    handleConfirmPassword = ({ target }) => {
        this.setState({ confirmPassword: target.value });
    };
    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;
        // this.setState({
        //     isLogging: true
        // });
        dispatch(registerUser(email, password));
    };

    render() {
        const { classes, registerError, isAuthenticated, isRegister } = this.props;

        const {
            email,
            password,
            confirmPassword
        } = this.state;

        const isInvalid =
            email === '' ||
            password === '' ||
            password !== confirmPassword;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={this.handleEmailChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={this.handlePasswordChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="confirmPassword"
                            label="ConfirmPassword"
                            type="password"
                            id="password"
                            onChange={this.handleConfirmPassword}
                        />
                        {registerError && (
                            <Typography component="p" className={classes.errorText}>
                                Incorrect email or password.
                             </Typography>
                        )}
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                            disabled={isInvalid}
                        >
                            Sign Up
                        </Button>
                        <div style={{ marginTop: 10 }}>
                            {
                                isRegister ?
                                    <CircularProgress color="secondary" />
                                    : null
                            }
                        </div>

                    </Paper>
                </Container>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isRegister: state.auth.isRegister,
        registerError: state.auth.registerError,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Register));