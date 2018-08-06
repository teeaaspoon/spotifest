import React, { Component } from "react";
import { connect } from "react-redux";
import FestivalLineup from "./FestivalLineup";
import CreatePlaylist from "./CreatePlaylist";
import SelectGenre from "./SelectGenre";
import SelectAllButton from "./SelectAllButton.js"
import DeselectAllButton from "./DeselectAllButton.js"
import SelectedGenre from "./SelectedGenre.js"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class FestivalSelected extends Component {
    scrollToFestivalsPage = () => {
        const options = {
        smooth: true,
        }
        scroller.scrollTo('festivalsPage', options)
    }
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
                    <DeselectAllButton />
                    <button onClick={this.scrollToFestivalsPage} className="backToFestivals">BACK TO FESTIVALS</button>
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
