import React, { Component } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import Landing from "./components/landingPage/Landing";
import User from "./components/user/User";
import LoggedIn from "./components/homePage/LoggedIn";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { fetchArtists, fetchFestivals } from "./actions/fetchActions";
import { saveCurrentCoords, selectAllFestivals } from "./actions/mapActions";
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
        this.props.selectAllFestivals()
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Landing path="/" />
                    <Home path="/:userId" />
                    <Admin path="/admin" />
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
    { fetchArtists, fetchFestivals, saveCurrentCoords, selectAllFestivals }
)(App);
