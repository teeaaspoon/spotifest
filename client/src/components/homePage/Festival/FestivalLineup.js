import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFestivalArtists } from "../../../actions/fetchActions";
import { selectAllArtists, deselectArtist } from "../../../actions/userActions";
import { saveFestivalGenres, saveFestivalGenresSum } from "../../../actions/genreActions";
import SelectedGenre from "./SelectedGenre.js"
import SelectAllButton from "./SelectAllButton.js"



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
        this.filterByGenre(this.props.selectedGenres, this.props.festivalArtists)
    }

    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <Artist key={artist.id} artist={artist} selected={true} />;
        });
        return mappedArtists;
    };
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

    filterByGenre = (selectedGenres, festivalArtists) => {
        if (selectedGenres.length > 0) {
            this.props.selectAllArtists(festivalArtists)
            let selectArtists = []
            selectedGenres.forEach(genre => {
                let genreArtists = festivalArtists.filter(artist => artist.spotify_artist_info.genres.includes(genre))
                selectArtists = [...selectArtists, ...genreArtists]
            })
            festivalArtists.forEach(artist => {
                if(!selectArtists.includes(artist)) {
                    this.props.deselectArtist(artist)
                }
            })
        }
    }

    render() {
        const allSelectedGenres = this.props.selectedGenres.map(genreStr =>
            (<SelectedGenre key={genreStr} genre={genreStr}/>)
        )
        return (
            <div className="lineup">
                <div className="selectedGenres">
                <SelectAllButton />
                {allSelectedGenres}
                </div>
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
    festivalArtists: state.fetch.festivalArtists,
    selectedGenres: state.genre.selectedGenres,
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists, selectAllArtists, saveFestivalGenres, saveFestivalGenresSum, deselectArtist }
)(FestivalSelected);
