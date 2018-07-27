import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>Admin</h1>
                <FestivalForm />
                <ArtistForm getAllArtists={this.getAllArtists} />
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

export default Admin;
