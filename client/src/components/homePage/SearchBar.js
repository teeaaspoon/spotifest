
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalList, saveSearchInput } from "../../actions/mapActions.js";


class SearchBar extends Component {
  // searchFestivals = (searchInput) => {
  //   const list = [];
  //   const searchInputArray = searchInput.split(" ").map(word => (`(?=.*${word})`))
  //   let searchStr = searchInputArray.reduce((acc, cur) => acc.concat(cur))
  //   searchStr = `^${searchStr}.+`

  //   const searchRegEx = new RegExp(searchStr, 'i')
  //   this.props.festivals.forEach(festival => {
  //     if (searchRegEx.test(festival.title)) {
  //       list.push(festival)
  //     }
  //   })
  //   return list

  // }

  onSearch = (event) => {
    this.props.saveSearchInput(event.target.value)
    // this.props.saveFestivalList(this.searchFestivals(event.target.value))
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
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveSearchInput}
)(SearchBar);
