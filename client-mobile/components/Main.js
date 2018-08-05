import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from "react-native";
import { fetchArtists, fetchFestivals } from "../actions/fetchActions";
import { connect } from "react-redux";
import Festival from "./Festival.js";

XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
    return global._fetch(uri, options, ...args).then(response => {
        console.log("Fetch", { request: { uri, options, ...args }, response });
        return response;
    });
};

class Main extends Component {
    static navigationOptions = () => ({
        title: "Spotifest",
        headerStyle: {
            height: 54,
            backgroundColor: "black"
        },
        headerTitleStyle: {
            color: "green"
        }
    });

    componentDidMount() {
        this.props.fetchFestivals();
    }

    navigate = () => {
        this.props.navigation.navigate("Lineup");
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Festivals</Text>
                <FlatList
                    data={this.props.festivals}
                    renderItem={({ item }) => (
                        <Festival festival={item} navigate={this.navigate} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
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
