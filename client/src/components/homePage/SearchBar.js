
import React, { Component } from "react";
import { connect } from "react-redux";
import { searchFestival } from "../../actions/mapActions.js";


class SearchBar extends Component {
  onSearch = (event) => {
    this.props.searchFestival(event.target.value)
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
    searchInput: state.map.searchInput
});

export default connect(
    mapStateToProps,
    { searchFestival }
)(SearchBar);
