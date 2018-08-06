import React, { Component } from "react";
import { Text, View } from "react-native";
import Spotify from "rn-spotify-sdk";

export default class Login extends Component {
    componentDidMount() {
        console.log(Spotify);
    }
    render() {
        return (
            <View>
                <Text> Hello </Text>
            </View>
        );
    }
}
