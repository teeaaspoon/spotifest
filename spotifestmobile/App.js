import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";

import store from "./App/store.js";
import Main from "./App/Components/Main";
import Login from "./App/Components/Login";
import FestivalList from "./App/Components/FestivalList";
import Lineup from "./App/Components/Lineup";

class App extends Component {
    render() {
        const MainNavigator = createStackNavigator({
            Home: {
                screen: Main,
                navigationOptions: ({ navigation }) => ({
                  headerTransparent: true,
                }),
            },
            FestivalList: {
                screen: FestivalList,
                navigationOptions: ({ navigation }) => ({
                  headerTransparent: true,
                  headerTintColor: "#FF005A"
                }),
            },
            Lineup: {
                screen: Lineup,
                navigationOptions: ({ navigation }) => ({
                  headerTransparent: true,
                  headerTintColor: "#FF005A"
                }),
            }
        });
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        color: "red"
    }
});

export default App;
