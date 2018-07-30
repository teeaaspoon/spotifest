import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCurrentCoords, saveRadius, deleteFestivalCoords } from "../../../actions/mapActions.js";


class NearMeFilter extends Component {
  deleteNearMeFilter = () => {
    let emptyCoords = {}
    this.props.saveCurrentCoords(emptyCoords)
    this.props.saveRadius(null)
    this.props.deleteFestivalCoords()
  }
  render() {
    return (
      <div>
        within {this.props.radius / 1000} km
        <span>
          <button onClick={this.deleteNearMeFilter}>delete</button>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    radius: state.map.radius
});

export default connect(
    mapStateToProps,
    { saveCurrentCoords, saveRadius, deleteFestivalCoords }
)(NearMeFilter);