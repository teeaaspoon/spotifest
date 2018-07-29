import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { saveYear, saveFestivalList } from '../../actions/mapActions.js'



class YearSelect extends Component {
  filterByYear = (year) => {
    if (year !== "") {
      let festivalsInYear = this.props.festivalList.filter(festival => festival.title.slice(-4) === year)
      this.props.saveFestivalList(festivalsInYear)
    }
  }

  handleYearChange = (selectedOption) => {
    this.props.saveYear(selectedOption.value)
    this.filterByYear(selectedOption.value)
  }


  render() {
    const years = this.props.festivalList.map(festival => festival.title.slice(-4))
                              .filter((elem, pos, arr) => {
                                return arr.indexOf(elem) === pos;
                              });
    return (
        <Select
          className="select-year"
          value={this.props.year}
          onChange={this.handleYearChange}
          options={years.map(year => ({value: year, label: year}))}
        />
    )

  }


}

const mapStateToProps = state => ({
    year: state.map.year,
    festivalList: state.map.festivalList
});

export default connect(
    mapStateToProps,
    { saveYear, saveFestivalList }
)(YearSelect);