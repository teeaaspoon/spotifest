
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSearchInput } from "../../actions/mapActions.js";


class SearchBar extends Component {

  onSearch = (event) => {
    this.props.saveSearchInput(event.target.value)
  }

  render() {
    return (
      <input
        onChange={this.onSearch}
        placeholder="Search a festival!"
        value={this.props.searchInput}
      />
    )
  }
}

const mapStateToProps = state => ({
    searchInput: state.map.searchInput,
    festivals: state.fetch.festivals,
    emptyList: state.map.emptyList
});

export default connect(
    mapStateToProps,
    { saveSearchInput}
)(SearchBar);
