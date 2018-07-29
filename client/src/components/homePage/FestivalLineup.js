import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../actions/userActions";

class FestivalSelected extends Component {
    componentWillMount() {
        this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.props.fetchFestivalArtists(nextProps.festivalSelected.id);
        }
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
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.user.festivalArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists }
)(FestivalSelected);
