import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Artist extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>{this.props.artist.artist_name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});
