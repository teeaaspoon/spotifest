import React, { Component } from "react";
import { connect } from "react-redux";
import Festival from "./Festival.js"
import YearSelect from "./YearSelect"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import GetLocationButton from "./GetLocationButton"

import AllFilters from "./filterOptions/AllFilters.js"


class ListOfFestivals extends Component {
  scrollToMapAndSearchPage = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('mapAndSearchPage', options)
  }

  compareName = (a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  }

  render() {
    console.log(this.props.filteredFestivals)
    const sortedFestivals = this.props.filteredFestivals.sort(this.compareName)
    const filteredFestivals = sortedFestivals.map(festival => <Festival festival={festival} key={festival.id}/>)
    return (
      <div className="list-of-festivals col-md-6">
        <h3 className="festivalHeader">FESTIVALS</h3>
        <GetLocationButton />
        <div className="yearAndGoBack">
        <YearSelect />
        <button onClick={this.scrollToMapAndSearchPage}>GO BACK TO MAP/SEARCH</button>
        </div>

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