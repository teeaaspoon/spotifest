import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import YearFilter from "./YearFilter.js"
import { saveFestivalList } from '../../actions/mapActions.js'

class ListOfFestivals extends Component {
  filterByYear = (year, festivals) => {
    if (year !== "") {
      let festivalsInYear = festivals.filter(festival => festival.title.slice(-4) === year)
      return festivalsInYear
    } else {
      return festivals
    }
  }

  render() {
    // if (this.props.continent !== "") {
    //   festivalList = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    // }
    let festivals = this.props.festivals
    festivals = this.filterByYear(this.props.year, festivals)

    let filteredFestivals = festivals.map(festival => <Festival festival={festival} key={festival.id}/>)

    // if (!this.props.year) {
    //   filteredFestivals = null
    // }

    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        {this.props.year !== "" && <YearFilter/>}
        {filteredFestivals}
      </div>
    )

  }


}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    continent: state.map.continent,
    year: state.map.year,
    searchInput: state.map.searchInput,
    festivalList: state.map.festivalList
});

export default connect(
    mapStateToProps,
    { saveFestivalList }
)(ListOfFestivals);