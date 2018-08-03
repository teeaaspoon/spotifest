import ContinentFilter from "./ContinentFilter.js"
import SearchFilter from "./SearchFilter.js"
import NearMeFilter from "./NearMeFilter.js"
import YearFilter from "./YearFilter.js"
import React, { Component } from "react";
import { connect } from "react-redux";


class AllFilters extends Component {

  render() {
    const allFilters = this.props.filters.map(filter => {
      switch (filter.type) {
        case "year":
          return <YearFilter key={filter.args} year={filter.args}/>
        case "continent":
          return <ContinentFilter key={filter.args} continent={filter.args}/>
        case "search":
          return <SearchFilter key={filter.args} search={filter.args}/>
        case "radius":
          return <NearMeFilter key={filter.args.radius} radius={filter.args.radius}/>
        default:
          return null
      }
    })
    return (
      <div className="allFilters">
        {allFilters}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    filters: state.map.filters
});

export default connect(
    mapStateToProps,
    null
)(AllFilters);
