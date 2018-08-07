import React, { Component } from "react";
import {
    Text,
    View,
    NativeModules,
    TouchableHighlight,
    StyleSheet
} from "react-native";

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
                    <Text style={styles.login}>Spotify Auth</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        color: "white"
    }
});

export default connect(
    null,
    { iosLogin }
)(Login);
