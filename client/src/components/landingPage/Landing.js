import React, { Component } from "react";
import { connect } from "react-redux";
import image from "./festival-pic.jpg";
import logoWhite from "./spotify-logo-white.png";
import logoGreen from "./spotify-logo-green.png";



class Landing extends Component {

  handleClick = (e) => {
      window.location.assign("http://localhost:3001/auth/spotify/");

  }

  render() {
    return (
      <div className="landing">
        <div className="festivalPic">
          <img src={image}/>
        </div>
        <div className="pageContent ">
          <div className="titleAndLogin">
            <div className="title">
              <h3 className="animated fadeIn delay-2">SPOTI</h3>
              <h4 className="animated fadeIn delay-6">FEST</h4>
            </div>
            <div className="loginButton animated fadeIn delay-10">
              <p onClick={this.handleClick}><img className="whiteLogo" src={logoWhite}/><img className="greenLogo" src={logoGreen}/>LOGIN TO SPOTIFY</p>
            </div>
            <div className="aboutSpotifest animated fadeIn delay-15">
              <p>dynamically create spotify playlists for upcoming and past festivals</p>
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