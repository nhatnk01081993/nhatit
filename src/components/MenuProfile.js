import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

class ProfileUser extends Component {
    render() {
        const { user } = this.props;
        return (
            <Typography variant="body2" gutterBottom>
                {user.email}
            </Typography>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}
export default connect(mapStateToProps)(ProfileUser);