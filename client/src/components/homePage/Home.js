import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfFestivals from "./ListOfFestivals"
import YearSelect from "./YearSelect"
import NavBar from "./NavBar"


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
                <NavBar />
                {/*<h1>Hey {this.props.userId}</h1>
                <SpotifyLoginButton />*/}
                <div className="search row">
                    <SearchBar />
                    <YearSelect />
                </div>
                <div className="mapAndFestivalList row">
                    <Map />
                    <ListOfFestivals />
                </div>
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
