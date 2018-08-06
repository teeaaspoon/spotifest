import React, { Component } from "react";
import { connect } from "react-redux";
import { saveHoverGenre } from "../../actions/profileActions";


class TopGenre extends Component {
  handleMouseEnter = (e) => {
    this.props.saveHoverGenre(e.target.innerHTML)

  }
  handleMouseLeave = (e) => {
    this.props.saveHoverGenre("")
  }

  render() {
    return (
      <button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >{this.props.genre}</button>
    );
  }
}

export default connect(
    null,
    {saveHoverGenre}
)(TopGenre);