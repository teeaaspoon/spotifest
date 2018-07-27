import React, { Component } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Admin from "./components/admin/Admin";
import Home from "./components/homePage/Home";
import jwtDecode from 'jwt-decode';
import "./App.css";

let User = () => <h1>User</h1>;

class App extends Component {
    componentDidMount() {
         try {
            let jwt = window.localStorage.getItem('jwt');
            let result = jwtDecode(jwt);
        } catch(error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Home path="/" />
                    <Admin path="/admin" />
                    <User path="/user" />
                </Router>
            </Provider>
        );
    }
}

export default App;
