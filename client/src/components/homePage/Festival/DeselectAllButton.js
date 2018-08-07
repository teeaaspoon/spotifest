import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { deselectAllArtists } from "../../../actions/genreActions.js";
import { resetGenre } from "../../../actions/genreActions";

class DeselectAllButton extends Component {
    handleClick = () => {
        this.props.resetGenre();
        this.props.deselectAllArtists();
    };

    render() {
        return (
            <button className="deselectAllButton" onClick={this.handleClick}>
                DESELECT ALL
            </button>
        );
    }
}

export default connect(
    null,
    { deselectAllArtists, resetGenre }
)(DeselectAllButton);
