import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { createPlaylist } from "../actions/userActions";

class CreatePlaylist extends Component {
    handlePress = () => {
        this.props.createPlaylist({
            playlistTitle: "This is from my phone",
            festival: this.props.festivalSelected,
            artistsSelected: this.props.artistsSelected,
            numberOfSongs: 5,
            spotifyUser: "22m5mfhnq3qde4wp5ulpdjkny"
        });
    };
    render() {
        return (
            <View>
                <Button title="Create Playlist" onPress={this.handlePress} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    artistsSelected: state.user.artistsSelected
});

export default connect(
    mapStateToProps,
    { createPlaylist }
)(CreatePlaylist);
