import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../../actions/fetchActions";
import { selectAllArtists } from "../../../actions/userActions";
import { saveFestivalGenres, saveFestivalGenresSum } from "../../../actions/genreActions";

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

        let festivalGenres = this.getAllFestivalGenres(this.props.festivalArtists)
        this.props.saveFestivalGenres(festivalGenres)
        this.props.saveFestivalGenresSum(this.sortGenreSum(this.props.festivalArtists))
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

    getAllFestivalGenres = (listOfArtists) => {
        let festivalGenres = {}
        listOfArtists.forEach(artist => {
            artist.spotify_artist_info.genres.forEach(genre => {
                if (festivalGenres[genre]) {
                    festivalGenres[genre].push(artist.artist_name)
                } else {
                    festivalGenres[genre] = [artist.artist_name]
                }
            })
        })
        return festivalGenres
    }
    getFestivalGenresSum = (festivalGenres) => {
        let festivalGenresSum = {}
        for (let genre in festivalGenres) {
            festivalGenresSum[genre] = festivalGenres[genre].length
        }
        return festivalGenresSum
    }
    sortGenreSum = (listOfArtists) => {
        let festivalGenres = this.getAllFestivalGenres(listOfArtists)
        let genreSumObj = this.getFestivalGenresSum(festivalGenres)
        let genreSums = []
        for (let genre in genreSumObj) {
            genreSums.push([genre, genreSumObj[genre]]);
        }
        genreSums.sort((a, b) => b[1] - a[1] );
        return genreSums
    }


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
    { fetchFestivalArtists, selectAllArtists, saveFestivalGenres, saveFestivalGenresSum }
)(FestivalSelected);
