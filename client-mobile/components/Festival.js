import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { selectFestival } from "../actions/userActions";

class Festival extends Component {
    handlePress = () => {
        this.props.selectFestival(this.props.festival);
        this.props.navigate();
    };

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text>{this.props.festival.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default connect(
    null,
    { selectFestival }
)(Festival);
