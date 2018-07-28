import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFestival } from "../../actions/selectFestivalActions";

class Festival extends Component {
    handleClick = () => {
        this.props.selectFestival(this.props.festival);
    };
    render() {
        return <p onClick={this.handleClick}>{this.props.festival.title}</p>;
    }
}

export default connect(
    null,
    { selectFestival }
)(Festival);
