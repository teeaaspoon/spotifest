import React, { Component } from "react";
import TopGenres from "./TopGenres";
import TopArtists from "./TopArtists";
import Playlists from "./Playlists";
import NavBar from "../homePage/NavBar.js"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class User extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Element name="topGenresAndArtistsPage" className="element">
          <div className="topGenresAndArtists">
            {/*<TopGenres userId={this.props.userId} />*/}
            <TopArtists userId={this.props.userId} />
          </div>
        </Element>
        {/*<Playlists userId={this.props.userId} />*/}
      </div>
    );
  }
}

