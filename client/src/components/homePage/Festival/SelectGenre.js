import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { saveGenre } from '../../../actions/genreActions.js'



class SelectGenre extends Component {
  handleGenreChange = (selectedOption) => {
    this.props.saveGenre(selectedOption.value)
  }

  render() {
    const allGenres = this.props.festivalGenresSum.map(genre => ({value: genre[0], label: genre[0]}))
    return (
      <Select
        className="select-genre"
        onChange={this.handleGenreChange}
        options={allGenres}
        onSelectResetsInput = { true }
        onBlurResetsInput = { true }
        value=""
        placeholder="select genres"
      />
    )
  }
}

const mapStateToProps = state => ({
    festivalGenresSum: state.genre.festivalGenresSum
});

export default connect(
    mapStateToProps,
    { saveGenre }
)(SelectGenre);