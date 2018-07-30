import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../actions/fetchActions";
import { selectAllArtists } from "../../actions/userActions";
import Artist from "./Artist.js";

class FestivalSelected extends Component {
    componentWillMount() {
        this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.props.fetchFestivalArtists(nextProps.festivalSelected.id);
        }
    }
    componentDidUpdate() {
        this.props.selectAllArtists(this.props.festivalArtists);
    }

    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <Artist key={artist.id} artist={artist} selected={true} />;
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
    festivalArtists: state.fetch.festivalArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists, selectAllArtists }
)(FestivalSelected);
