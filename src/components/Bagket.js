import React, { Component } from "react";
import { connect } from "react-redux";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
class Bagket extends Component {
    render() {
        const { isAuthenticated } = this.props;
        return (
            isAuthenticated ?
                <IconButton aria- label="show 17 new notifications" color="inherit" >
                    <Badge badgeContent={17} color="secondary">
                        <LocalGroceryStoreIcon />
                    </Badge>
                </IconButton >
                : null
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
    };
}
export default connect(mapStateToProps)(Bagket);