import React, { Component } from "react";
import { connect } from "react-redux";
import Festival from "./Festival.js"

import GetLocationButton from "./GetLocationButton"

import AllFilters from "./filterOptions/AllFilters.js"


class ListOfFestivals extends Component {

  render() {
    const filteredFestivals = this.props.filteredFestivals.map(festival => <Festival festival={festival} key={festival.id}/>)
    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        <GetLocationButton />
        <div className="filter-options">
          <AllFilters />
        </div>
        {filteredFestivals}
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