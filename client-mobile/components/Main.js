import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchArtists, fetchFestivals } from "../actions/fetchActions";
import { connect } from "react-redux";

class Main extends Component {
    componentDidMount() {
        this.props.fetchFestivals();
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Festivals</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    festivals: state.fetch.festivals
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default connect(
    mapStateToProps,
    { fetchFestivals }
)(Main);
