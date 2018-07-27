import React, { Component } from "react";
import { Router } from "@reach/router";
import LoginButton from "./components/Auth";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import "./App.css";

import { connect } from "react-redux";
import { fetchArtists, fetchFestivals } from "./actions/fetchActions";

let Login = () => <LoginButton />;

let User = () => <h1>User</h1>;

class App extends Component {
    componentWillMount() {
        this.props.fetchArtists();
        this.props.fetchFestivals();
    }
    render() {
        return (
            <Router>
                <Home path="/" />
                <Admin path="/admin" />
                <User path="/user" />
                <Login path="/login" />
            </Router>
        );
    }
}

export default connect(
    null,
    { fetchArtists, fetchFestivals }
)(App);
