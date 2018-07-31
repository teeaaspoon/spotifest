import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";
import { connect } from "react-redux";
import { fetchArtists } from "../../actions/fetchActions";

class Admin extends Component {
    componentDidMount() {
        this.props.fetchArtists();
    }
    render() {
        return (
            <div>
                <h1>Admin</h1>
                <FestivalForm />
                <ArtistForm />
                <ArtistsToFestivalForm />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default connect(
    null,
    { fetchArtists }
)(Admin);
