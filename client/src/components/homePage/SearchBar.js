
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
        className="searchFestival"
        onChange={this.onSearch}
        placeholder="SEARCH A FESTIVAL NAME, CITY, OR COUNTRY"
        value={this.props.searchInput}
      />
    )
  }
}

const mapStateToProps = state => ({
    searchInput: state.map.searchInput,
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveSearchInput}
)(SearchBar);
