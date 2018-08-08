import React, { Component } from "react";
import { connect } from "react-redux";
import noPic from "./userIcon.png"

class Artist extends Component {
  render() {
    // let imgURL = noPic
    // let isloaded = false
    // if (this.props.artist) {
    //   if (this.props.artist.spotify_artist_info.images) {
    //     if (this.props.artist.spotify_artist_info.images[0]) {
    //       isloaded = true
    //       imgURL = this.props.artist.spotify_artist_info.images[0].url
    //     }
    //   }
    // }
    let imgURL = noPic
    let isloaded = false
    if (this.props.artist) {
      if (this.props.artist.images) {
          isloaded = true
        if (this.props.artist.images[0]) {
          imgURL = this.props.artist.images[0].url
        }
      }
    }
    let belongsToGenre = "doesNotBelong"
    if (isloaded && this.props.artist.genres.includes(this.props.hoverGenre)) {
      belongsToGenre = "belongsToGenre"
    } else if (isloaded && this.props.hoverGenre === "") {
      belongsToGenre = "nothing"
    }

    // let belongsToGenre = "doesNotBelong"
    // if (isloaded && this.props.artist.spotify_artist_info.genres.includes(this.props.hoverGenre)) {
    //   belongsToGenre = "belongsToGenre"
    // } else if (isloaded && this.props.hoverGenre === "") {
    //   belongsToGenre = "nothing"
    // }
    return (
      <div>
      {isloaded &&
      <div className={`artistDiv ${belongsToGenre}`}>
        <p className={`artistName`}>{this.props.artist.name}</p>
        <img className={`artist `} src={imgURL} alt={"artist photo"}/>
      </div>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
    hoverGenre: state.profile.hoverGenre,
});

export default connect(
    mapStateToProps,
    null
)(Artist);