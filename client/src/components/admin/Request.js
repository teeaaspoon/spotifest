import React, { Component } from "react";
import { clearRequest } from "../../actions/fetchActions";
import { connect } from "react-redux";



class Request extends Component {
  clearRequest = () => {
    this.props.clearRequest(this.props.id)

  }
  render() {
    return (
      <li>{this.props.festival}<button onClick={this.clearRequest}>clear</button></li>
    )
  }
}

export default connect(
    null,
    { clearRequest }
)(Request);