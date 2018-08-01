import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../actions/fetchActions";
import { selectAllArtists } from "../../actions/userActions";
import Artist from "./Artist.js";
import axios from "axios";

class FestivalSelected extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         genresToArtists = {}
    //     }
    // }
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
        this.getArtistGenres(this.props.festivalArtists)
    }

    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <Artist key={artist.id} artist={artist} selected={true} />;
        });
        return mappedArtists;
    };
    //FIGURE THIS OUT TOMORROW!!!!!
    //do i need genreToArtist object in the state???
    //todo: get object where keys are genre id and value is number of artists (or array of artists) =>use front end data
        //make graph of festival genres with this data
    //make dropdown using the object keys (genre_id) => genre title
        //filter artists using genre_id and calling @artist.genre.includes...
    // getArtistGenres = listOfArtists => {
    //     const artistID = listOfArtists[1].id
    //     axios.get(`/api/v1/artists/${artistID}/genres`).then(response => {
    //         response.data.forEach(genre => {
    //             genresToArtists[genre.id] = []
    //         })
    //     })

    // }

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
