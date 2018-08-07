import React, { Component } from "react";
import { Text, View, NativeModules, TouchableHighlight } from "react-native";

import { connect } from "react-redux";
import { iosLogin } from "../actions/userActions";

const SpotifyModule = NativeModules.SpotifyModule;

class Login extends Component {
    componentDidMount() {
        console.log(SpotifyModule);
    }

    onButtonPress() {
        SpotifyModule.authenticate(data => {
            this.props.iosLogin(data);
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

export default connect(
    null,
    { iosLogin }
)(Login);
