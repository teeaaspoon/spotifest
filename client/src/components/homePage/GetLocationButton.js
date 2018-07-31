import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCurrentCoords, saveRadius, saveContinent } from "../../actions/mapActions.js";
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

  handleClick = () => {
    if (this.state.radius) {
      this.props.saveContinent("")
      this.props.saveRadius(this.state.radius)

      let newState = this.state
      newState.errorMessages.radiusNotNumber = ""
      newState.radius = ""
      this.setState(newState)
    }
  }

  setRadius = (selectedOption) => {
    let newState = this.state
    newState.radius = selectedOption.value
    this.setState(newState)
  }
  render() {
    return (
      <div className="get-location-button">
        {this.props.currentCoords.latitude ? (
          <div>
            <button onClick={this.handleClick}>Festivals Near You!</button>
            <Select
              className="select-radius"
              onChange={this.setRadius}
              options={this.radiusOptions}
            />
          </div>
          ) : (
          <p>Getting current location...</p>
          )
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
    currentCoords: state.map.currentCoords
});


export default connect(
    mapStateToProps,
    { saveCurrentCoords, saveRadius, saveContinent}
)(GetLocationButton);
