import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import Select from 'react-select';
import { saveFestivalList } from '../../actions/mapActions.js'

class ListOfFestivals extends Component {

  render() {
    // if (this.props.continent !== "") {
    //   festivalList = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    // }

    let filteredFestivals = this.props.festivalList.map(festival => <Festival festival={festival} key={festival.id}/>)

    if (!this.props.year) {
      filteredFestivals = null
    }
    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
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