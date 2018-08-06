import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { selectAllArtists } from '../../../actions/genreActions.js'
import { resetGenre } from "../../../actions/genreActions";


class SelectAllButton extends Component {
  handleClick = () => {
    this.props.selectAllArtists()
    this.props.resetGenre()
  }

  render() {
    return (
      <button className="selectAllButton" onClick={this.handleClick} >SELECT ALL ARTISTS</button>
    )
  }
}


export default connect(
    null,
    { selectAllArtists, resetGenre }
)(SelectAllButton);