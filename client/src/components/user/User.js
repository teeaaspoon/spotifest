import React, { Component } from "react";
import TopArtists from "./TopArtists";
import Playlists from "./Playlists";
import NavBar from "../homePage/NavBar.js"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class User extends Component {
  scrollToTopArtists = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('topGenresAndArtistsPage', options)
  }
  componentDidMount () {
    this.scrollToTopArtists()
  }
  render() {
    return (
      <div className="animated fadeIn delay-4">
        <NavBar />
        <p className="spotifestLogo">SPOTI<span>FEST</span></p>
        <Element name="topGenresAndArtistsPage" className="element">
          <div className="topGenresAndArtists">
            <TopArtists userId={this.props.userId} />
          </div>
        </Element>
        <Element name="playlistList">
          <Playlists userId={this.props.userId} />
        </Element>
      </div>
    );
  }
}

