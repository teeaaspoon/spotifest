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
            <div className="adminForm artistToFestivalForm">
            {this.props.selectedForm === "artistToFestivalForm" &&
            <div className="formContents">
                <div className="formTitleAndStatus">
                    <h1 className="formTitle">Artists To Festival Form</h1>
                    <p>{this.state.status}</p>
                </div>
                <div className="formInputs">
                <div  onKeyDown={this.handleFestivalEnter}>
                    <AutoComplete
                        inputProps={{className:"festivalAuto", placeholder: "festival"}}
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
                        renderItem={(item, highlighted) => (<div key={item.id}> {item.label}</div>)}
                        value={this.state.festival}
                        onChange={e => this.setState({ festival: e.target.value })}
                        onSelect={value => this.setState({ festival: value })}
                        menuStyle={{
                          borderRadius: '3px',
                          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                          background: "white",
                          color: "black",
                          padding: "1rem",
                          width: "8rem",
                          fontSize: '100%',
                          position: 'fixed',
                          overflow: 'auto',
                          maxHeight: '50%',
                        }}
                    />
                </div>
                <div onKeyDown={this.handleArtistEnter}>
                    <AutoComplete
                        inputProps={{className:"artistAuto", placeholder: "artist"}}
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
                        renderItem={(item, highlighted) => (<div key={item.id}> {item.label} </div>)}
                        value={this.state.artist}
                        onChange={e => this.setState({ artist: e.target.value })}
                        onSelect={value => this.setState({ artist: value })}
                        menuStyle={{
                          borderRadius: '3px',
                          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                          background: "white",
                          color: "black",
                          padding: "1rem",
                          width: "8rem",
                          fontSize: '100%',
                          position: 'fixed',
                          overflow: 'auto',
                          maxHeight: '50%',
                        }}
                    />
                </div>

                <p>{this.state.festivalSelected}</p>
                {artistsSelected}
                <button onClick={this.handleClick}>Submit</button>
                </div>
            </div>
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.fetch.artists,
    festivals: state.fetch.festivals,
    selectedForm: state.adminNav.selectedForm
});

export default connect(
    mapStateToProps,
    null
)(ArtistsToFestivalForm);
