import AutoComplete from "react-autocomplete";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class ArtistsToFestivalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistsSelected: [],
            artist: "",
            festival: "",
            festivalSelected: "",
            status: ""
        };
    }

    // check to make sure they aren't adding the same person twice
    handleArtistEnter = event => {
        if (event.keyCode === 13) {
            if (this.state.artistsSelected.includes(this.state.artist)) {
                this.setState({ status: "Artist was already selected" });
                return;
            }
            const artistsSelected = [
                ...this.state.artistsSelected,
                this.state.artist
            ];
            this.setState({ artistsSelected, artist: "" });
        }
    };

    handleFestivalEnter = event => {
        if (event.keyCode === 13) {
            this.setState({ festivalSelected: this.state.festival });
        }
    };

    handleClick = event => {
        axios
            .post("/api/v1/add_artists_to_festival", {
                festival: this.state.festivalSelected,
                artists: this.state.artistsSelected
            })
            .then(response => {
                console.log(response);
                this.setState({
                    artistsSelected: [],
                    festivalSelected: "",
                    status: "Successfully added artists to festival"
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const artistsSelected = this.state.artistsSelected.map(artist => {
            return <p key={artist}>{artist}</p>;
        });
        return (

            <div>
                <h1>Artists To Festival Form</h1>
                <p>{this.state.status}</p>
                <p>Festivals</p>
                <div onKeyDown={this.handleFestivalEnter}>
                    <AutoComplete
                        items={this.props.festivals.map(festival => {
                            return {
                                id: festival.id,
                                label: festival.title
                            };
                        })}
                        shouldItemRender={(item, value) =>
                            item.label
                                .toLowerCase()
                                .indexOf(value.toLowerCase()) > -1
                        }
                        getItemValue={item => `${item.label}, id:::${item.id}`}
                        renderItem={(item, highlighted) => (
                            <div
                                key={item.id}
                                style={{
                                    backgroundColor: highlighted
                                        ? "#eee"
                                        : "transparent"
                                }}
                            >
                                {item.label}
                            </div>
                        )}
                        value={this.state.festival}
                        onChange={e =>
                            this.setState({ festival: e.target.value })
                        }
                        onSelect={value => this.setState({ festival: value })}
                    />
                </div>

                <p>Artists</p>
                <div onKeyDown={this.handleArtistEnter}>
                    <AutoComplete
                        items={this.props.artists.map(artist => {
                            return {
                                id: artist.id,
                                label: artist.artist_name
                            };
                        })}
                        shouldItemRender={(item, value) =>
                            item.label
                                .toLowerCase()
                                .indexOf(value.toLowerCase()) > -1
                        }
                        getItemValue={item => `${item.label}, id:::${item.id}`}
                        renderItem={(item, highlighted) => (
                            <div
                                key={item.id}
                                style={{
                                    backgroundColor: highlighted
                                        ? "#eee"
                                        : "transparent"
                                }}
                            >
                                {item.label}
                            </div>
                        )}
                        value={this.state.artist}
                        onChange={e =>
                            this.setState({ artist: e.target.value })
                        }
                        onSelect={value => this.setState({ artist: value })}
                    />
                </div>
                <p>{this.state.festivalSelected}</p>
                {artistsSelected}
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.fetch.artists,
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    null
)(ArtistsToFestivalForm);
