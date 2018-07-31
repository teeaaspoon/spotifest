import React, { Component } from "react";
import LogOutButton from "../auth/LogOutButton";
import SearchBar from "./SearchBar";
import ListOfFestivals from "./ListOfFestivals"
import GetLocationButton from "./GetLocationButton"
import YearSelect from "./YearSelect"
import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"


import FestivalSelected from "./FestivalSelected";
import { connect } from "react-redux";
import SpotifyLoginButton from "../auth/SpotifyLoginButton";
import Map from "./Map";


class Home extends Component {
    componentDidUpdate() {
        // autoscrolls to bottom every update
        this.bottomOfList.scrollIntoView({ behaviour: "smooth" });
    }

    render() {
        return (
            <div className="Home">
{/*                <SpotifyLoginButton />
                <LoginForm />
                <LogOutButton />
                <SignUpForm />*/}
                <div className="search">
                    <SearchBar />
                    <YearSelect />
                </div>
                <div className="mapAndFestivalList">
                    <Map />
                    <ListOfFestivals />
                    <GetLocationButton />
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
