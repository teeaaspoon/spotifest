import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { fetchArtists, fetchFestivals } from "../actions/fetchActions";
import { connect } from "react-redux";

class Main extends Component {
    componentDidMount() {
        this.props.fetchFestivals();
    }
    handleClick = () => {
        console.log("hihihii");
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Festivals</Text>
                <FlatList
                    data={this.props.festivals}
                    renderItem={({ item }) => (
                        <Text onPress={this.handleClick}>{item.title}</Text>
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
        justifyContent: "center",
        marginTop: 100
    }
});

export default connect(
    mapStateToProps,
    { fetchFestivals }
)(Main);
