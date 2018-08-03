import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfFestivals from "./ListOfFestivals"
import GetLocationButton from "./GetLocationButton"
import YearSelect from "./YearSelect"


import FestivalSelected from "./Festival/FestivalSelected.js";
import { connect } from "react-redux";
import SpotifyLoginButton from "../auth/SpotifyLoginButton";
import Map from "./Map";


class Home extends Component {
    componentDidUpdate() {
        // autoscrolls to bottom every update
        this.bottomOfList.scrollIntoView({ behaviour: "smooth" });
    }

    componentDidMount() {
        window.thingFunction = () => {
            console.log('pop up worked')
        }
    }

    render() {
        return (
            <div className="Home">
                <SpotifyLoginButton />
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
    festivalSelected: state.user.festivalSelected
});

export default connect(
    mapStateToProps,
    null
)(Home);
