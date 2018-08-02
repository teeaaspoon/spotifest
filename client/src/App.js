import React, { Component } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import User from "./components/user/User";
import LoggedIn from "./components/homePage/LoggedIn";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { fetchArtists, fetchFestivals } from "./actions/fetchActions";
import { saveCurrentCoords } from "./actions/mapActions";
import "./App.css";

class App extends Component {
    componentWillMount() {
        this.props.fetchFestivals();

        if ("geolocation" in navigator) {
            console.log("geolocation is available");
        } else {
            let newState = this.state;
            newState.errorMessages.noGeolocation =
                "sorry! geolocation is not available";
            this.setState(newState);
        }
        navigator.geolocation.getCurrentPosition(position => {
            this.props.saveCurrentCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }
    componentDidMount() {
        try {
            let jwt = window.localStorage.getItem("jwt");
            jwtDecode(jwt);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Home path="/" />
                    <Admin path="/admin" />
                    <LoggedIn path="/:userId" />
                    <User path="/user/:userId" />
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

export default connect(
    mapStateToProps,
    { fetchArtists, fetchFestivals, saveCurrentCoords }
)(App);
