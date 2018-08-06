import React, { Component } from "react";
import { connect } from "react-redux";
import { saveHoverGenre } from "../../actions/profileActions";


class TopGenre extends Component {
  handleMouseEnter = (e) => {
    // console.log("ENTERED ", e.target.innerHTML)
    this.props.saveHoverGenre(e.target.innerHTML)

  }
  handleMouseLeave = (e) => {
    // console.log("LEFT ", e.target.innerHTML)
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