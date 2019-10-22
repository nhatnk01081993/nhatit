import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Logout extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        return (
            <IconButton onClick={this.handleLogout}>
                <ExitToAppIcon color="primary" />
            </IconButton>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
    };
}
export default connect(mapStateToProps)(Logout);