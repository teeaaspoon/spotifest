import React, { Component } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import LogOutButton from "../auth/LogOutButton";

import FestivalSelected from "./FestivalSelected";
import { connect } from "react-redux";
import SpotifyLoginButton from "../auth/SpotifyLoginButton";
import SearchBar from "./SearchBar.js";
import Map from "./Map.js";
import ListOfFestivals from "./ListOfFestivals.js";

class Home extends Component {
    componentDidUpdate() {
        // autoscrolls to bottom every update
        this.bottomOfList.scrollIntoView({ behaviour: "smooth" });
    }

    render() {
        return (
            <div className="Home">
                <SpotifyLoginButton />
                <LoginForm />
                <LogOutButton />
                <SignUpForm />
                <SearchBar />
                <ListOfFestivals />
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
