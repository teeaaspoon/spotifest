import React, { Component } from "react";
import { connect } from "react-redux";
import { clearJwt } from "../../actions/userActions";
import { Link } from "@reach/router";

class LogOutButton extends Component {
    handleClick = e => {
        try {
            window.localStorage.clear(); //eslint-disable-line
            this.props.clearJwt(this.props.jwt);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Link to="/">
                <p
                    className="hvr-underline-from-left"
                    onClick={this.handleClick}
                >
                    LOGOUT
                </p>
            </Link>
        );
    }
}

const mapStateToProps = state => ({
    jwt: state.user.jwt
});

export default connect(
    mapStateToProps,
    { clearJwt }
)(LogOutButton);
