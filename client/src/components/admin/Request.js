import React, { Component } from "react";
import { clearRequest } from "../../actions/fetchActions";
import { connect } from "react-redux";



class Request extends Component {
  clearRequest = () => {
    this.props.clearRequest(this.props.id)

  }
  render() {
    return (
      <div className="request">
        {this.props.festival}
        <span>
          <button onClick={this.clearRequest}><i className="fa fa-remove"></i></button>
        </span>
      </div>
    )
  }
}

export default connect(
    null,
    { clearRequest }
)(Request);