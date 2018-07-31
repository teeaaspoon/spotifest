import React, { Component } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import LoggedIn from "./components/homePage/LoggedIn";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { fetchArtists, fetchFestivals } from "./actions/fetchActions";
import "./App.css";

const User = props => <h2>{props.userId}</h2>;

class App extends Component {
    componentWillMount() {
        this.props.fetchFestivals();
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
    { fetchArtists, fetchFestivals }
)(App);
