
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
        value={this.props.filters.filter(f => f.type === "search")[0] ? (this.props.filters.filter(f => f.type === "search")[0].args):("")}
      />
    )
  }
}

const mapStateToProps = state => ({
    filters: state.map.filters,
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveSearchInput}
)(SearchBar);
