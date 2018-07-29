import React, { Component } from "react";
import { connect } from "react-redux";
import FestivalLineup from "./FestivalLineup";
import CreatePlaylist from "./CreatePlaylist";

class FestivalSelected extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.festivalSelected.title}</h1>
                <h2>Line up</h2>
                <FestivalLineup />
                <CreatePlaylist />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected
});

export default connect(
    mapStateToProps,
    null
)(FestivalSelected);
