
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveContinent } from "../../../actions/mapActions.js";


class ContinentFilter extends Component {
  deleteContinentFilter = () => {
    this.props.saveContinent("")
  }
  render() {
    return (
      <div className="continentFilter filter">
        {this.props.continent}
        <span>
          <button onClick={this.deleteContinentFilter}><i className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}

export default connect(
    null,
    { saveContinent }
)(ContinentFilter);