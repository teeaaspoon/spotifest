import React, { Component } from "react";
import { connect } from "react-redux";
import { selectArtist, deselectArtist } from "../../../actions/userActions";

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
    if (!this.props.artistsSelected.includes(this.props.artist)) {
      selectedOrNot = "notSelected"
    }
    return (
      <li className={`artist ${selectedOrNot}`} onClick={this.handleClick}>{this.props.artist.artist_name}</li>
    );
  }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    artistsSelected: state.user.artistsSelected

});

export default connect(
    mapStateToProps,
    { selectArtist, deselectArtist }
)(Artist);
