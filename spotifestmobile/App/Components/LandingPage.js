import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { connect } from "react-redux";
import {
    saveSearchInput,
    selectAllFestivals,
    saveYear
} from "../actions/filterFestivalActions.js";

import Login from "./Login";

class LandingPage extends Component {
    componentDidMount() {
        this.props.selectAllFestivals();
    }
    onSearch = text => {
        this.props.saveSearchInput(text);
    };
    goToFestivalList = () => {
        this.props.saveYear("")
        this.props.navigate();
    };

    render() {
        // console.log(this.props.filteredFestivals)
        return (
            <ImageBackground
                style={styles.background}
                source={require("./festival-pic.jpg")}
            >
                <View style={styles.container}>
                    <StatusBar
                        barStyle= "light-content"
                    />
                    <Image style={styles.logo} source={require("./Logo.png")} />
                    {!this.props.userId ? (
                        <View>
                            <View style={styles.searchBarWrapper}>
                                <TextInput
                                    style={styles.searchBar}
                                    value={
                                        this.props.filters.filter(
                                            f => f.type === "search"
                                        )[0]
                                            ? this.props.filters.filter(
                                                  f => f.type === "search"
                                              )[0].args
                                            : ""
                                    }
                                    onChangeText={this.onSearch}
                                    placeholder="TYPE FESTIVAL..."
                                    placeholderTextColor="white"
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.goToFestivalList}
                            >
                                <Text style={styles.buttonText}>SEARCH</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Login />
                    )}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        alignItems: "center"
    },
    searchBarWrapper: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: 150
    },
    searchBar: {
        marginTop: 50,
        color: "white",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 15
    },
    button: {
        alignItems: "center",
        marginTop: 40,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 20,
        borderColor: "#01E365",
        borderWidth: 2
    },
    buttonText: {
        color: "#01E365",
        fontSize: 15
    }
});

const mapStateToProps = state => ({
    filters: state.filterFestival.filters,
    filteredFestivals: state.filterFestival.filteredFestivals,
    userId: state.user.userId
});

export default connect(
    mapStateToProps,
    { saveSearchInput, selectAllFestivals, saveYear }
)(LandingPage);
