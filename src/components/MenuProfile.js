import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class ProfileUser extends Component {
    render() {
        const { user } = this.props;
        return (
            <IconButton>
                {user.email}
            </IconButton>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}
export default connect(mapStateToProps)(ProfileUser);