import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Artist extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.artist.artist_name}</Text>
            </View>
        );
    }
}
