import React, { Component } from "react";
import { Text, View, NativeModules, TouchableHighlight } from "react-native";

const SpotifyModule = NativeModules.SpotifyModule;

export default class Login extends Component {
    componentDidMount() {
        console.log(SpotifyModule);
    }

    onButtonPress() {
        SpotifyModule.authenticate(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text>Spotify Auth</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
