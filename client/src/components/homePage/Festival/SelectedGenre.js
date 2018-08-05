import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGenre } from "../../../actions/genreActions.js";


class SelectedGenre extends Component {
  deleteGenre = (ev) => {
    this.props.removeGenre(ev.target.id)
  }

  render() {
    return (
      <div className="selectedGenre">
        {this.props.genre}
        <span>
          <button id={this.props.genre} onClick={this.deleteGenre}><i className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}


export default connect(
    null,
    { removeGenre }
)(SelectedGenre);