import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";
import axios from "axios";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistsForAutoComplete: [],
            festivalsForAutoComplete: []
        };
    }

    getAllArtists = () => {
        axios.get("/api/v1/artists").then(response => {
            const artists = response.data.map(artist => {
                return { id: artist.id, label: artist.artist_name };
            });
            this.setState({ artistsForAutoComplete: artists });
        });
    };

    getAllFestivals = () => {
        axios.get("/api/v1/festivals").then(response => {
            const festivals = response.data.map(festival => {
                return { id: festival.id, label: festival.title };
            });
            this.setState({ festivalsForAutoComplete: festivals });
        });
    };

    componentWillMount() {
        this.getAllArtists();
        this.getAllFestivals();
    }

    render() {
        return (
            <div>
                <h1>Admin</h1>
                <FestivalForm />
                <ArtistForm getAllArtists={this.getAllArtists} />
                <ArtistsToFestivalForm
                    artistsForAutoComplete={this.state.artistsForAutoComplete}
                    festivalsForAutoComplete={
                        this.state.festivalsForAutoComplete
                    }
                />
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
