import React, { Component } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import Landing from "./components/landingPage/Landing";
import User from "./components/user/User";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { getJwt } from "./actions/userActions";
import { fetchArtists, fetchFestivals } from "./actions/fetchActions";
import { saveCurrentCoords, selectAllFestivals } from "./actions/mapActions";
import "./App.css";

class App extends Component {
    componentWillMount() {

        try {
            let jwt = this.getParameterByName("token", location.search); //eslint-disable-line
            if (jwt) {
                window.localStorage.setItem('jwt', jwt); //eslint-disable-line
                console.log(window.localStorage);
            } else {
                jwt = window.localStorage.getItem("jwt");
                console.log(jwt);
            }
            this.props.getJwt(jwtDecode(jwt));
        } catch (error) {
            console.log(error);
        }

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

    getParameterByName = (name, url) => {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
    componentDidMount() {
        this.props.selectAllFestivals();
    }
    render() {

        let jwt = jwt = window.localStorage.getItem("jwt");
        let home;
        if (jwt) {
            home = <Home path="/" />
        } else {
            home = <Landing path="/" />
        }

        return (
            <Provider store={store}>
                <Router>
                    {home}
                    <Admin path="/admin" />
                    <User path="/user/:userId" />
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals,
    jwt: state.user.jwt
});

export default connect(
    mapStateToProps,
    { fetchArtists, fetchFestivals, saveCurrentCoords, selectAllFestivals, getJwt }
)(App);
