import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Link } from "@reach/router";
import LogOutButton from "../auth/LogOutButton.js"
import jwtDecode from "jwt-decode";


class NavBar extends Component {

  render() {
    let jwt = (jwt = window.localStorage.getItem("jwt"));
    jwt = jwtDecode(jwt);
    return (
      <div className="navBar animated fadeIn delay-2">
        <div className="row">
          {jwt && jwt.admin && (<Link to="/admin"><p className="hvr-underline-from-left navBarAdmin"> ADMIN </p></Link>)}
          <Link to="/"><p className="hvr-underline-from-left navBarHome"> HOME </p></Link>
          <Link to={`/user/${this.props.userId}`}><p className="navBarUser hvr-underline-from-left"> PROFILE </p></Link>
          <LogOutButton/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    userId: state.user.jwt.userId
});

export default connect(
    mapStateToProps,
    null
)(NavBar);