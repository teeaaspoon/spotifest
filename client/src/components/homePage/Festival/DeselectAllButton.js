import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { deselectAllArtists } from '../../../actions/userActions.js'
import { resetGenre } from "../../../actions/genreActions";


class DeselectAllButton extends Component {
  handleClick = () => {
    this.props.deselectAllArtists()
    // this.props.resetGenre()
  }

  render() {
    return (
      <button className="deselectAllButton" onClick={this.handleClick} >DESELECT ALL ARTISTS</button>
    )
  }
}


export default connect(
    null,
    { deselectAllArtists, resetGenre }
)(DeselectAllButton);