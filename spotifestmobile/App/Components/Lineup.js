import React, { Component } from "react";
import {
    Text,
    View,
    ImageBackground,
    FlatList,
    StyleSheet
} from "react-native";

import { connect } from "react-redux";
import { fetchFestivalArtists } from "../actions/fetchActions";

import Artist from "./Artist.js";

class Lineup extends Component {
    componentWillMount() {
        this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    }

    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./festival-pic.jpg")}
            >
                <Text style={styles.text}> LINEUP </Text>
                <FlatList
                    data={this.props.festivalArtists}
                    renderItem={({ item }) => <Artist artist={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    text: {
        color: "white"
    }
});

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists }
)(Lineup);
