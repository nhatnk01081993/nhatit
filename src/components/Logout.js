import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
class Logout extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        return (
            <IconButton onClick={this.handleLogout} fullWidth={true}>
                <ExitToAppIcon color="primary" /> <Typography variant="body2" gutterBottom>Log Out</Typography>
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