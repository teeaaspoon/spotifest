
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
        {this.props.searchInput}
        <span>
          <button onClick={this.deleteSearchFilter}>delete</button>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    searchInput: state.map.searchInput
});

export default connect(
    mapStateToProps,
    { saveSearchInput }
)(SearchFilter);