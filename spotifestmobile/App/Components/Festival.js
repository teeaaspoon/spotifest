import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { selectFestival } from "../actions/userActions";

import { connect } from "react-redux";

class Festival extends Component {
    handlePress = () => {
        // renders the lineup page
        this.props.selectFestival(this.props.festival);
        this.props.navigation.navigate("Lineup");
    };


    render() {
        return (
            <View>
                <TouchableOpacity style={styles.festivalContainer} onPress={this.handlePress}>
                    <Text style={styles.text}>{this.props.festival.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    festivalContainer: {
        padding: 5,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    text: {
        color: "white",
        fontSize: 15,
    }
});

export default connect(
    null,
    { selectFestival }
)(Festival);
