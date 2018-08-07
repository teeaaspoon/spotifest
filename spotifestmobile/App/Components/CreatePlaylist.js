import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { createPlaylist } from "../actions/userActions";

class CreatePlaylist extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    makePlaylist = () => {
        this.props.createPlaylist({
            playlistTitle: "This is from ios",
            festival: this.props.festivalSelected,
            artistsSelected: this.props.festivalArtists,
            numberOfSongs: 1,
            userId: this.props.userId
        });
    };
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.makePlaylist}>
                    <Text style={styles.text}> CREATE PLAYLIST </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists,
    userId: state.user.userId
});

export default connect(
    mapStateToProps,
    { createPlaylist }
)(CreatePlaylist);
