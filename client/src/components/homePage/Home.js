import React, { Component } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import LogOutButton from "../auth/LogOutButton";
import SpotifyLoginButton from "../auth/SpotifyLoginButton"

import Map from "./Map.js"
import ListOfFestivals from "./ListOfFestivals.js"


class Home extends Component {
    render() {
        return (
          <div className="Home">
            <SpotifyLoginButton />
            <LoginForm />
            <LogOutButton />
            <SignUpForm />
            <Map/>
            <ListOfFestivals/>
          </div>
        );
    }
}

export default Home;