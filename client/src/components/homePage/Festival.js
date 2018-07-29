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

const mapStateToProps = state => ({
    festivalSelected: state.festivalSelected.festivalSelected
});

export default connect(
    mapStateToProps,
    { selectFestival }
)(Festival);
