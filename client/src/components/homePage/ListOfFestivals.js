import React, { Component } from "react";
import { connect } from "react-redux";
import countryToContinent from "./mapData/countryToContinent.json"
import Festival from "./Festival.js"


class ListOfFestivals extends Component {
  render() {
    const festivalList = this.props.festivals.filter(festival => countryToContinent[festival.country] === this.props.continent)
    const festivals = festivalList.map(festival => <Festival festival={festival} key={festival.id}/>)
    const years = festivalList.map(festival => festival.title.slice(-4))

    return (
      <div className="list-of-festivals">
        <h3>Festivals</h3>
        {festivals}
      </div>
    )

  }


}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    continent: state.continent.continent
});

export default connect(
    mapStateToProps,
    null
)(ListOfFestivals);