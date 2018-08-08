import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGenre } from "../../../actions/genreActions.js";


class SelectedGenre extends Component {
  deleteGenre = (ev) => {
    console.log("deleted: ", ev.target)
    this.props.removeGenre(ev.target.id)
  }

  render() {
    return (
      <div className="selectedGenre">
        {this.props.genre}
        <span>
          <button onClick={this.deleteGenre}><i id={this.props.genre} className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}


export default connect(
    null,
    { removeGenre }
)(SelectedGenre);