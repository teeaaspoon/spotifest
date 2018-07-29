import React, { Component } from "react";
import { connect } from "react-redux";
import FestivalLineup from "./FestivalLineup";

class FestivalSelected extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.festivalSelected.title}</h1>
                <h2>Line up</h2>
                <FestivalLineup />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.user.festivalArtists
});

export default connect(
    mapStateToProps,
    null
)(FestivalSelected);
