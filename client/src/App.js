import React, { Component } from "react";
import { Router } from "@reach/router";
import LoginButton from './components/Auth'
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import "./App.css";

let Login = () => <LoginButton />

let User = () => <h1>User</h1>;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Home path="/" />
                    <Admin path="/admin" />
                    <User path="/user" />
                    <Login path="/login" />
                </Router>
            </Provider>
        );
    }
}

export default App;
