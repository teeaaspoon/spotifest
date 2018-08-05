import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { WebBrowser, AuthSession } from "expo";
import axios from "axios";
import { encode as btoa } from "base-64";

export default class Login extends Component {
    handlePress = () => {
        let my_client_id = "61949ea347f344009e8b87b0e5606c8c";
        let scopes =
            "user-read-email playlist-modify-public user-library-read user-library-modify user-top-read";
        let redirectUrl = AuthSession.getRedirectUrl();

        let result = AuthSession.startAsync({
            authUrl:
                "https://accounts.spotify.com/authorize" +
                "?response_type=code" +
                "&client_id=" +
                my_client_id +
                (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
                "&redirect_uri=" +
                encodeURIComponent(redirectUrl)
        }).then(response => {
            let code = response.code;
            let encodedClientId = btoa(my_client_id);
            let encodedClientSecret = btoa("1158d8503dae4dcb86cacf4bf62904aa");
            // let params = {
            //     grant_type: "authorization_code",
            //     code: code,
            //     redirect_uri: redirectUrl
            // };
            axios({
                method: "post",
                url: "https://accounts.spotify.com/api/token",
                params: {
                    client_id: my_client_id,
                    client_secret: "1158d8503dae4dcb86cacf4bf62904aa",
                    code,
                    grant_type: "authorization_code",
                    redirect_uri: redirectUrl
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
                .then(token => {
                    console.log(token);
                    return token;
                })
                .catch(e => {
                    console.log(e);
                    return e.response.data;
                });
        });
    };
    render() {
        return (
            <View>
                <Button title="Login to Spotify" onPress={this.handlePress} />
            </View>
        );
    }
}
