import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"
import Select from 'react-select';
import { saveYear } from '../../actions/mapActions.js'



class ListOfFestivals extends Component {

  handleYearChange = (selectedOption) => {
    this.props.saveYear(selectedOption.value)
  }

  render() {
    const festivalsInContinent = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    const years = festivalsInContinent.map(festival => festival.title.slice(-4))
                              .filter((elem, pos, arr) => {
                                return arr.indexOf(elem) === pos;
                              });
    let festivalsInYear = festivalsInContinent.filter(festival => festival.title.slice(-4) === this.props.year)
    if (this.props.year === "") {
      festivalsInYear = festivalsInContinent
    }
    const festivals = festivalsInYear.map(festival => <Festival festival={festival} key={festival.id}/>)
    console.log(this.props.year)
    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        <Select
          value={this.props.year}
          onChange={this.handleYearChange}
          options={years.map(year => ({value: year, label: year}))}
        />
        {festivals}
      </div>
    )

  }


}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    continent: state.map.continent,
    year: state.map.year
});

export default connect(
    mapStateToProps,
    { saveYear }
)(ListOfFestivals);