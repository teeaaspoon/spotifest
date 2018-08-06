import React, { Component } from "react";
import { connect } from "react-redux";



class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <div className="row">
          <p className="navBarHome"> HOME </p>
          <p className="navBarUser"> MY PLAYLISTS </p>
        </div>
      </div>
    )
  }
}

export default connect(
    null,
    null
)(NavBar);