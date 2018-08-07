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
                <TouchableHighlight style={styles.loginButton} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.loginText}>LOGIN TO SPOTIFY</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginText: {
        color: "#01E365",
        fontSize: 15
    },
    loginButton: {
        alignItems: "center",
        marginTop: 40,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 20,
        borderColor: "#01E365",
        borderWidth: 2
    },
});

export default connect(
    null,
    { iosLogin }
)(Login);
