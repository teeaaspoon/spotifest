import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { saveGenre } from '../../../actions/genreActions.js'



class SelectGenre extends Component {
  handleGenreChange = (selectedOption) => {
    if (!this.props.selectedGenres.includes(selectedOption.value)){
      this.props.saveGenre(selectedOption.value)
    }
  }

  render() {
    const allGenres = this.props.festivalGenresSum.map(genre => ({value: genre[0], label: genre[0]}))
    return (
      <Select
        className="select-genre-container"
        classNamePrefix="select-genre"
        onChange={this.handleGenreChange}
        options={allGenres}
        onSelectResetsInput = { true }
        onBlurResetsInput = { true }
        value=""
        placeholder="Select genre..."
      />
    )
  }
}

const mapStateToProps = state => ({
    selectedGenres: state.genre.selectedGenres,
    festivalGenresSum: state.genre.festivalGenresSum
});

export default connect(
    mapStateToProps,
    { saveGenre }
)(SelectGenre);