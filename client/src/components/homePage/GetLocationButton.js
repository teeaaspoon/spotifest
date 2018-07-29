
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveFestivalList } from "../../actions/mapActions.js";


class GetLocationButton extends Component {
  componentDiDMount() {
    let locationMessage = ""
    function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          locationMessage = "Geolocation is not supported by this browser.";
          console.log(locationMessage)
      }
    }
    function showPosition(position) {
        locationMessage = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
        console.log(locationMessage)
    }

    getLocation()

  }
  render() {
    return (
      <button>Festivals Near You!</button>
    )
  }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { saveFestivalList}
)(GetLocationButton);
