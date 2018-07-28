import React, { Component } from "react";

class Festival extends Component {
  render() {
    return (
      <p>{this.props.festival.title}</p>
    )
  }
}

export default Festival