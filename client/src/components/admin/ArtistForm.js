import React, { Component } from "react";
import axios from "axios";

import GetSongsButton from "./GetSongsButton";

class ArtistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist_name: "",
            artists: []
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { artist_name } = this.state;
        axios
            .post("/api/v1/artists", { artist: { artist_name } })
            .then(response => {
                console.log(response);
                const newArtist = {
                    artist_name: response.data.artist_name,
                    artist_spotify_id: response.data.spotify_artist_info.id,
                    artist_id: response.data.id
                };
                const artists = [...this.state.artists, newArtist];

                this.setState({
                    artist_name: "",
                    artists
                });
                this.props.getAllArtists();
            })
            .catch(error => {
                console.log(error);
            });
    };

    mapArtistsToDiv = artists => {
        const listOfArtists = artists.map(artist => {
            return (
                <li key={artist.artist_spotify_id}>
                    {artist.artist_name}{" "}
                    <GetSongsButton
                        artist_id={artist.artist_id}
                        spotify_artist_id={artist.artist_spotify_id}
                    />
                </li>
            );
        });
        return <ul>{listOfArtists}</ul>;
    };

    render() {
        return (
            <div>
                <h1>Artist</h1>
                <form onSubmit={this.onSubmit}>
                    <p>name</p>
                    <input
                        name="artist_name"
                        onChange={this.handleChange}
                        value={this.state.artist_name}
                    />
                    <br />
                    <button> Submit </button>
                </form>
                {this.state.artists
                    ? this.mapArtistsToDiv(this.state.artists)
                    : null}
            </div>
        );
    }
}

export default ArtistForm;
