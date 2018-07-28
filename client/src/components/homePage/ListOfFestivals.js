import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import Select from 'react-select';
import { saveYear, saveFestivalList } from '../../actions/mapActions.js'



class ListOfFestivals extends Component {

  handleYearChange = (selectedOption) => {
    this.props.saveYear(selectedOption.value)
  }


  render() {
    let festivalList = this.props.festivalList
    if (this.props.continent !== "") {
      festivalList = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    }
    const years = festivalList.map(festival => festival.title.slice(-4))
                              .filter((elem, pos, arr) => {
                                return arr.indexOf(elem) === pos;
                              });
    let festivalsInYear = festivalList.filter(festival => festival.title.slice(-4) === this.props.year)
    if (this.props.year === "") {
      festivalsInYear = festivalList
    }
    const filteredFestivalsByYear = festivalsInYear.map(festival => <Festival festival={festival} key={festival.id}/>)
    console.log(this.props.year)
    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        <Select
          value={this.props.year}
          onChange={this.handleYearChange}
          options={years.map(year => ({value: year, label: year}))}
        />
        {filteredFestivalsByYear}
      </div>
    )

  }


}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    continent: state.map.continent,
    year: state.map.year,
    festivalList: state.map.festivalList
});

export default connect(
    mapStateToProps,
    { saveYear, saveFestivalList }
)(ListOfFestivals);