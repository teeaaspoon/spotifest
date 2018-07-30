
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalCoords, saveCurrentCoords, saveRadius } from "../../actions/mapActions.js";

class GetLocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessages: {
        noGeolocation: "",
        radiusNotNumber: ""
      },
      radius: ""
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
      let newState = this.state
      newState.errorMessages.noGeolocation = "sorry! geolocation is not available"
      this.setState(newState)
    }
  }
  handleClick = () => {
    if (!Number(this.state.radius)) {
      let newState = this.state
      newState.errorMessages.radiusNotNumber = "the radius must be a number!"
      this.setState(newState)
    } else {
      let newState = this.state
      this.props.saveRadius(Number(this.state.radius) * 1000)
      newState.errorMessages.radiusNotNumber = ""
      newState.radius = ""
      this.setState(newState)
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
  }

  setRadius = (e) => {
    let newState = this.state
    newState.radius = e.target.value
    this.setState(newState)

  }
  render() {
    return (
      <div className="get-location-button">
        <button onClick={this.handleClick}>Festivals Near You!</button>
        <input
          onChange={this.setRadius}
          placeholder="set a radius (km)"
          value={this.state.radius}
        />
        {this.state.errorMessages.noGeolocation && <p>{this.state.errorMessages.noGeolocation}</p>}
        {this.state.errorMessages.radiusNotNumber && <p>{this.state.errorMessages.radiusNotNumber}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveFestivalCoords, saveCurrentCoords, saveRadius }
)(GetLocationButton);
