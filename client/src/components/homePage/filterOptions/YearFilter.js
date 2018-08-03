
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveYear } from "../../../actions/mapActions.js";


class YearFilter extends Component {
  deleteYearFilter = () => {
    this.props.saveYear("")
  }
  render() {
    return (
      <div className="yearFilter filter">
        {this.props.year}
        <span>
          <button onClick={this.deleteYearFilter}><i className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}

export default connect(
    null,
    { saveYear }
)(YearFilter);