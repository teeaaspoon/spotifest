
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveContinent } from "../../../actions/mapActions.js";


class ContinentFilter extends Component {
  deleteContinentFilter = () => {
    const emptyContinent = {
      properties: {
        continent: ""
      }
    }
    this.props.saveContinent(emptyContinent)
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

const mapStateToProps = state => ({
    continent: state.map.continent
});

export default connect(
    mapStateToProps,
    { saveContinent }
)(ContinentFilter);