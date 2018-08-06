import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class Festival extends Component {
    handlePress = () => {
        this.props.navigate();
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text>{this.props.festival.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
