import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../../actions/fetchActions";
import { selectAllArtists, deselectArtist } from "../../../actions/genreActions";
import { saveFestivalGenresSum, initializeSelectedArtists } from "../../../actions/genreActions";
import SelectedGenre from "./SelectedGenre.js"
import Artist from "./Artist.js";

class FestivalLineup extends Component {
    componentWillMount() {
        this.props.initializeSelectedArtists(this.props.festivalSelected.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.props.initializeSelectedArtists(nextProps.festivalSelected.id)
        }
    }
    componentDidUpdate() {
        this.props.saveFestivalGenresSum(this.sortGenreSum(this.props.allArtists))
    }

    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <Artist key={artist.id} artist={artist} selected={true} />;
        });
        return mappedArtists;
    };
    // functions for finding top genres
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
        const allSelectedGenres = this.props.selectedGenres.map(genreStr =>
            (<SelectedGenre key={genreStr} genre={genreStr}/>)
        )
        return (
            <div>
                <div className="selectedGenres">
                {allSelectedGenres}
                </div>
                <div className="lineupWrapper">
                <div className="lineup">
                    {this.mapFestivalArtistsIntoList(
                        this.props.allArtists
                    )}
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists,
    selectedGenres: state.genre.selectedGenres,
    allArtists: state.genre.allArtists
});

export default connect(
    mapStateToProps,
    { initializeSelectedArtists, fetchFestivalArtists, selectAllArtists, saveFestivalGenresSum, deselectArtist }
)(FestivalLineup);
