import React, { Component } from "react";
import { connect } from "react-redux";
import { selectArtist, deselectArtist } from "../../../actions/genreActions";

class Artist extends Component {


  handleClick = (ev) => {
    if(ev.target.className === "artist selected") {
      this.props.deselectArtist(this.props.artist)
    } else {
      this.props.selectArtist(this.props.artist)
    }
  };


  render() {
    let selectedOrNot = "selected"
    if (!this.props.artistsSelected) {
      selectedOrNot = "notSelected"
    } else if (!this.props.artistsSelected.includes(this.props.artist)) {
      selectedOrNot = "notSelected"
    }
    let isloaded = false
    if (this.props.artist) {
      if (this.props.artist.spotify_artist_info) {
        if (this.props.artist.spotify_artist_info.images[0]) {
          if (this.props.artist.spotify_artist_info.images[0].url) {
            isloaded = true
          }
        }
      }
    }
    return (
      <div>
      {isloaded &&
      <div className="artistDiv">
        <p className={`artistName ${selectedOrNot}`}>{this.props.artist.artist_name}</p>
        <img className={`artist ${selectedOrNot}`} onClick={this.handleClick} src={this.props.artist.spotify_artist_info.images[0].url} alt={"artist photo"}/>
      </div>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    artistsSelected: state.genre.artistsSelected

});

export default connect(
    mapStateToProps,
    { selectArtist, deselectArtist }
)(Artist);
