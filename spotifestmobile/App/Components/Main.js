import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fetchFestivals } from "../actions/fetchActions";
import { connect } from "react-redux";

import FestivalList from "./FestivalList";

class Main extends Component {
    componentDidMount() {
        this.props.fetchFestivals();
    }
    navigate = () => {
        this.props.navigation.navigate("Login");
    };
    render() {
        return (
            <View style={styles.container}>
                <FestivalList navigate={this.navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
});

export default connect(
    null,
    { fetchFestivals }
)(Main);
