
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveContinent } from "../../../actions/mapActions.js";


class ContinentFilter extends Component {
  deleteContinentFilter = () => {
    this.props.saveContinent("")
  }
  render() {
    return (
      <div>
        {this.props.continent}
        <span>
          <button onClick={this.deleteContinentFilter}>delete</button>
        </span>
      </div>
    )
  }
}

export default connect(
    null,
    { saveContinent }
)(ContinentFilter);