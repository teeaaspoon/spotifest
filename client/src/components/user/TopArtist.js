import React, { Component } from "react";
import { connect } from "react-redux";

class Artist extends Component {
  render() {
    let isloaded = false
    if (this.props.artist) {
      if (this.props.artist.spotify_artist_info.images) {
        if (this.props.artist.spotify_artist_info.images[0]) {
          isloaded = true
        }
      }
    }
    // if (this.props.artist) {
    //   if (this.props.artist.images) {
    //     if (this.props.artist.images[0]) {
    //       isloaded = true
    //     }
    //   }
    // }
    let belongsToGenre = "doesNotBelong"
    if (isloaded && this.props.artist.spotify_artist_info.genres.includes(this.props.hoverGenre)) {
      belongsToGenre = "belongsToGenre"
    }
    return (
      <div>
      {isloaded &&
      <div className={`artistDiv ${belongsToGenre}`}>
        <p className={`artistName`}>{this.props.artist.artist_name}</p>
        <img className={`artist `} src={this.props.artist.spotify_artist_info.images[0].url} alt={"artist photo"}/>
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