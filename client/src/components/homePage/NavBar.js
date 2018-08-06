import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Link } from "@reach/router";
import LogOutButton from "../auth/LogOutButton.js"


class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <div className="row">
          <Link to="/"><p className="navBarHome"> HOME </p></Link>
          <Link to={`/user/${this.props.userId}`}><p className="navBarUser"> PROFILE </p></Link>
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