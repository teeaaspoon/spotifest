
import React, { Component } from "react";
import { connect } from "react-redux";
import image from "./festival-pic.jpg"


class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="festivalPic">
          <img src={image}/>
        </div>
        <div className="title">
          <h3>SPOTI</h3>
          <h4>FEST</h4>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//     searchInput: state.map.searchInput,
//     festivals: state.fetch.festivals
// });

export default connect(
    null,
    null
)(Landing);