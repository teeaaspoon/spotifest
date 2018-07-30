import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalCoords, saveCurrentCoords, saveRadius, saveContinent } from "../../actions/mapActions.js";
import Select from 'react-select';

class GetLocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: {
        noGeolocation: "",
      },
      radius: ""
    }
  }
  radiusOptions = [
    {value: 50000, label: "50 km"},
    {value: 100000, label: "100 km"},
    {value: 250000, label: "250 km"},
    {value: 500000, label: "500 km"},
    {value: 1000000, label: "1000 km"},
  ]

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
      let newState = this.state
      newState.errorMessages.noGeolocation = "sorry! geolocation is not available"
      this.setState(newState)
    }
  }
  handleClick = () => {
    let newState = this.state
    this.props.saveRadius(this.state.radius)
    newState.errorMessages.radiusNotNumber = ""
    newState.radius = ""
    this.setState(newState)
    this.props.saveContinent("")
    navigator.geolocation.getCurrentPosition(position => {
      this.props.saveCurrentCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
    this.props.festivals.forEach(festival => {
      this.getLonLat(festival)
    })

  }

  setRadius = (selectedOption) => {
    let newState = this.state
    newState.radius = selectedOption.value
    this.setState(newState)
  }
  render() {
    console.log(this.state)
    return (
      <div className="get-location-button">
        <button onClick={this.handleClick}>Festivals Near You!</button>
{/*        <input
          onChange={this.setRadius}
          placeholder="set a radius (km)"
          value={this.state.radius}
        />*/}
        <Select
          className="select-radius"
          onChange={this.setRadius}
          options={this.radiusOptions}
        />
        {this.state.errorMessages.noGeolocation && <p>{this.state.errorMessages.noGeolocation}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveFestivalCoords, saveCurrentCoords, saveRadius, saveContinent}
)(GetLocationButton);
