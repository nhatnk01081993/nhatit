import React, { Component } from 'react';
import { connect } from "react-redux";
import MenuAppBar from "./MenuAppBar";
import MenuInfo from "./MenuInfo";

class MenuApp extends Component {
    render() {
        const { isAuthenticated } = this.props;
        return (
            <div>
                <MenuInfo />
                <MenuAppBar auth={isAuthenticated} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
    };
}
export default connect(mapStateToProps)(MenuApp);