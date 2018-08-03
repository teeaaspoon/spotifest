import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCurrentCoords, saveRadius } from "../../../actions/mapActions.js";


class NearMeFilter extends Component {
  deleteNearMeFilter = () => {
    this.props.saveRadius(null)
  }
  render() {
    return (
      <div className="radiusFilter filter">
        within {this.props.radius / 1000} km
        <span>
          <button onClick={this.deleteNearMeFilter}><i className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}


export default connect(
    null,
    { saveCurrentCoords, saveRadius }
)(NearMeFilter);