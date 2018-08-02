
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSearchInput } from "../../../actions/mapActions.js";


class SearchFilter extends Component {
  deleteSearchFilter = () => {
    this.props.saveSearchInput("")
  }
  render() {
    return (
      <div>
        {this.props.search}
        <span>
          <button onClick={this.deleteSearchFilter}>delete</button>
        </span>
      </div>
    )
  }
}


export default connect(
    null,
    { saveSearchInput }
)(SearchFilter);