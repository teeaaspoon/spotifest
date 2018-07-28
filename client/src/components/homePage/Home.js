import React, { Component } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import LogOutButton from "../auth/LogOutButton";

import Map from "./Map.js";

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <LoginForm />
            <LogOutButton />
            <SignUpForm />
            <Map/>
          </div>
        );
    }
}

export default Home;