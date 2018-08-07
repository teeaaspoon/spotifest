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
import { initializeSelectedArtists } from "../actions/artistActions";

import Artist from "./Artist.js";

class Lineup extends Component {
    // componentWillMount() {
    //     this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    // }

    componentWillMount() {
        this.props.initializeSelectedArtists(this.props.festivalSelected.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.props.initializeSelectedArtists(nextProps.festivalSelected.id)
        }
    }

    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./festival-pic.jpg")}
            >
                <Text style={styles.text}>{this.props.festivalSelected.title}</Text>
                <FlatList
                    style={styles.flatlist}
                    data={this.props.allArtists}
                    renderItem={({ item }) => <Artist artist={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    text: {
        margin: 10,
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",

    },

});

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists,
    allArtists: state.artist.allArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists, initializeSelectedArtists }
)(Lineup);
