import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fetchFestivals } from "../actions/fetchActions";
import { connect } from "react-redux";
import FestivalList from "./FestivalList";
import LandingPage from "./LandingPage";


class Main extends Component {
    componentDidMount() {
        this.props.fetchFestivals();
    }
    navigateToFestivalList = () => {
        this.props.navigation.navigate("FestivalList");
    };
    render() {
        return (
            <View style={styles.container}>
                <LandingPage navigate={this.navigateToFestivalList}/>
               {/* <FestivalList navigate={this.navigate} />*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        backgroundColor: "black"
    },
});

export default connect(
    null,
    { fetchFestivals }
)(Main);
