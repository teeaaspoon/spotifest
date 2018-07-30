
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalCoords, saveCurrentCoords } from "../../actions/mapActions.js";

class GetLocationButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ""
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
      this.setState({errorMessage: "sorry! geolocation is not available"})
    }

  }
  handleClick = () => {
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

  render() {

    return (
      <div className="get-location-button">
        <button onClick={this.handleClick}>Festivals Near You!</button>
        {this.state.errorMessage !== "" && <p>{this.state.errorMessage}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveFestivalCoords, saveCurrentCoords }
)(GetLocationButton);
