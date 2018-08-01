import React, { Component } from "react";
import LogOutButton from "../auth/LogOutButton";
import SearchBar from "./SearchBar";
import ListOfFestivals from "./ListOfFestivals"
import GetLocationButton from "./GetLocationButton"
import YearSelect from "./YearSelect"
import { getSpotifyUser } from "../../actions/userActions";


import FestivalSelected from "./Festival/FestivalSelected";
import { connect } from "react-redux";
import Map from "./Map";


class LoggedIn extends Component {
    componentDidUpdate() {
        // autoscrolls to bottom every update
        this.bottomOfList.scrollIntoView({ behaviour: "smooth" });
    }

    componentWillMount() {
        this.props.getSpotifyUser(this.props.userId);
    }

    render() {
        return (
            <div className="Home">
                <h1>Hey {this.props.userId}</h1>
                <LogOutButton />
                <SearchBar />
                <YearSelect />
                <ListOfFestivals />
                <GetLocationButton />
                <Map />
                {this.props.festivalSelected && <FestivalSelected />}
                <div
                    ref={el => {
                        this.bottomOfList = el;
                    }}
                />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    spotifyUser: state.user.spotifyUser
});

export default connect(
    mapStateToProps,
    { getSpotifyUser }
)(LoggedIn);