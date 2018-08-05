import React, { Component } from "react";
import { connect } from "react-redux";
import FestivalLineup from "./FestivalLineup";
import CreatePlaylist from "./CreatePlaylist";
import SelectGenre from "./SelectGenre";
import SelectAllButton from "./SelectAllButton.js"
import SelectedGenre from "./SelectedGenre.js"




class FestivalSelected extends Component {
    render() {
        const allSelectedGenres = this.props.selectedGenres.map(genreStr =>
            (<SelectedGenre key={genreStr} genre={genreStr}/>)
        )
        return (
            <div className="festivalSelected">
                <h3 className="selectedFestivalTitle">{this.props.festivalSelected.title}</h3>
                <div className="selectArtistOptions">
                    <SelectGenre />
                    <SelectAllButton />
                </div>
                <FestivalLineup />
                <CreatePlaylist />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    selectedGenres: state.genre.selectedGenres,
});

export default connect(
    mapStateToProps,
    null
)(FestivalSelected);
