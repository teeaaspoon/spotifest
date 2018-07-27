import React, { Component } from "react";
import { Router } from "@reach/router";
import LoginButton from './components/Auth'
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import Admin from "./components/admin/Admin";
import "./App.css";

let Home = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
);

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
