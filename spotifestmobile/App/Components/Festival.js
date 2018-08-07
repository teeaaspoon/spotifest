import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Festival extends Component {
    handlePress = () => {
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text style={styles.text}>{this.props.festival.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    },
});