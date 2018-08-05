import React, { Component } from "react";
import { connect } from "react-redux";
import Festival from "./Festival.js"
import YearSelect from "./YearSelect"

import GetLocationButton from "./GetLocationButton"

import AllFilters from "./filterOptions/AllFilters.js"


class ListOfFestivals extends Component {

  render() {
    const filteredFestivals = this.props.filteredFestivals.map(festival => <Festival festival={festival} key={festival.id}/>)
    return (
      <div className="list-of-festivals col-md-6">
        <h3 className="festivalHeader">FESTIVALS</h3>
        <GetLocationButton />
        <YearSelect />
        <div className="filter-options">
          <AllFilters />
        </div>
        <div className="list">
        {filteredFestivals}
        </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
    filteredFestivals: state.map.filteredFestivals
});

export default connect(
    mapStateToProps,
    null
)(ListOfFestivals);