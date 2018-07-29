import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../actions/fetchActions";

class FestivalSelected extends Component {
    componentWillMount() {
        this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    }

    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <li key={artist.id}>{artist.artist_name}</li>;
        });
        return mappedArtists;
    };

    render() {
        return (
            <div>
                <h1>{this.props.festivalSelected.title}</h1>
                <h2>Line up</h2>
                <ul>
                    {this.mapFestivalArtistsIntoList(
                        this.props.festivalArtists
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.festivalSelected.festivalSelected,
    festivalArtists: state.fetch.festivalArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists }
)(FestivalSelected);
