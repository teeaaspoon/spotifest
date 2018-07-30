import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import YearFilter from "./filterOptions/YearFilter.js"
import ContinentFilter from "./filterOptions/ContinentFilter.js"
import SearchFilter from "./filterOptions/SearchFilter.js"
import Fuse from "fuse.js"

class ListOfFestivals extends Component {
  filterByYear = (year, festivals) => {
    if (year !== "") {
      let festivalsInYear = festivals.filter(festival => festival.title.slice(-4) === year)
      return festivalsInYear
    } else {
      return festivals
    }
  }
  filterByContinent = (continent, festivals) => {
    if (continent !== "") {
      let festivalsInContinent = festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
      return festivalsInContinent
    } else {
      return festivals
    }
  }

  filterBySearch = (searchInput, festivals) => {
    if (searchInput !== "") {
      const options = {
        shouldSort: true,
        threshold: 0.3,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "city","country"]
      };
      const fuse = new Fuse(festivals, options)
      return fuse.search(searchInput)
    } else {
      return festivals
    }
  }


  render() {
    let festivals = this.props.festivals
    festivals = this.filterByYear(this.props.year, festivals)
    festivals = this.filterByContinent(this.props.continent, festivals)
    festivals = this.filterBySearch(this.props.searchInput, festivals)


    let filteredFestivals = festivals.map(festival => <Festival festival={festival} key={festival.id}/>)

    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        <div className="filter-options">
          {this.props.year !== "" && <YearFilter/>}
          {this.props.continent !== "" && <ContinentFilter/>}
          {this.props.searchInput !== "" && <SearchFilter/>}
        </div>
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
    null
)(ListOfFestivals);