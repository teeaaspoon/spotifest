import React, { Component } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import LogOutButton from "../auth/LogOutButton";

import Map from "./Map.js";
import ListOfFestivals from "./ListOfFestivals.js";
import FestivalSelected from "./FestivalSelected";
import { connect } from "react-redux";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <LoginForm />
                <LogOutButton />
                <SignUpForm />
                <Map />
                <ListOfFestivals />
                {this.props.festivalSelected && <FestivalSelected />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.festivalSelected.festivalSelected
});

export default connect(
    mapStateToProps,
    null
)(Home);
