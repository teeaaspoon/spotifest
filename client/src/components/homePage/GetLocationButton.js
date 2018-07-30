
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalCoords } from "../../actions/mapActions.js";

class GetLocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gpsCoords: []
    }
  }

  getLonLat = (festival) => {
    let lonLat = {}
    const cityStr = festival.city.split(" ").join("%20")

    fetch(`https://api.teleport.org/api/cities/?search=${cityStr}`)
    .then(results => {return results.json()})
    .then(result => {
      fetch(result["_embedded"]["city:search-results"][0]["_links"]["city:item"]["href"])
      .then(results => {return results.json()})
      .then(result => {
        lonLat.festivalID = festival.id
        lonLat.latitude = result["location"]["latlon"]["latitude"]
        lonLat.longitude = result["location"]["latlon"]["longitude"]
        this.props.saveFestivalCoords(lonLat)
      })
    })
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("geolocation is available")
    } else {
      console.log("geolocation is NOT available")
    }

  }
  handleClick = () => {
    this.props.festivals.forEach(festival => {
      this.getLonLat(festival)
    })
  }

  render() {
    console.log(this.state)
    return (
      <button onClick={this.handleClick}>Festivals Near You!</button>
    )
  }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveFestivalCoords }
)(GetLocationButton);
