import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserTopArtists, fetchUserTopGenres } from "../../actions/fetchActions";
import TopArtist from "./TopArtist.js";
import TopGenre from "./TopGenre.js";


class TopArtists extends Component {
    componentDidMount() {
        // this.props.fetchUserTopArtists(this.props.userId);
        // this.props.fetchUserTopGenres(this.props.userId);
    }

    render() {
        let topGenres = [];
        if (this.props.festivalGenresSum[5]) {
            for (let i = 0; i < 5; i ++) {
                topGenres.push(this.props.festivalGenresSum[i][0])
            }
        }
        const allGenres = topGenres.map(genre => {
            return (<TopGenre key={genre} genre={genre}/>)
        })
        const topTen = this.props.allArtists.slice(0, 10)
        const topArtists = topTen.map(artist => <TopArtist key={artist.id} artist={artist}/>)

        // const topArtists = this.props.topArtists.map(artist => <TopArtist key={artist.id} artist={artist}/>)
        return (
            <div className="topArtists">
                <p className="topArtistsTitle">YOUR TOP ARTISTS AND GENRES</p>
                <div className="topGenreList">
                    {allGenres}
                </div>
                <div className="topArtistsList">
                    {topArtists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topArtists: state.fetch.userTopArtists,
    topGenres: state.fetch.userTopGenres,
    allArtists: state.genre.allArtists,
    festivalGenresSum: state.genre.festivalGenresSum
});

export default connect(
    mapStateToProps,
    { fetchUserTopArtists, fetchUserTopGenres}
)(TopArtists);