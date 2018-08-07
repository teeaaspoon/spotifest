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
                <TouchableOpacity onPress={this.handlePress}>
                    <Text style={styles.text}>{this.props.festival.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});

export default connect(
    null,
    { selectFestival }
)(Festival);
