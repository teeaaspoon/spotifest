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
import Lineup from "./Lineup";
import Festival from "./Festival.js";

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
