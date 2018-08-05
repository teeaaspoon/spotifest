import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { selectAllArtists } from '../../../actions/userActions.js'
import { resetGenre } from "../../../actions/genreActions";


class SelectAllButton extends Component {
  handleClick = () => {
    this.props.selectAllArtists(this.props.festivalArtists)
    this.props.resetGenre()
  }

  render() {
    return (
      <button className="selectAllButton" onClick={this.handleClick} >SELECT ALL ARTISTS</button>
    )
  }
}

const mapStateToProps = state => ({
    festivalArtists: state.fetch.festivalArtists,
});

export default connect(
    mapStateToProps,
    { selectAllArtists, resetGenre }
)(SelectAllButton);