
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveYear } from "../../../actions/mapActions.js";


class YearFilter extends Component {
  deleteYearFilter = () => {
    this.props.saveYear("")
  }
  render() {
    return (
      <div>
        {this.props.year}
        <span>
          <button onClick={this.deleteYearFilter}>delete</button>
        </span>
      </div>
    )
  }
}

export default connect(
    null,
    { saveYear }
)(YearFilter);