
import React, { Component } from "react";
import { connect } from "react-redux";
import image from "./festival-pic.jpg"
import logo from "./spotify-logo-white.png"


class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="festivalPic">
          <img src={image}/>
        </div>
        <div className="pageContent animated fadeIn animation-delay-200">
          <div className="titleAndLogin">
            <div className="title">
              <h3>SPOTI</h3>
              <h4>FEST</h4>
            </div>
            <div className="loginButton">
              <p><img src={logo}/> LOGIN TO SPOTIFY</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(
    null,
    null
)(Landing);