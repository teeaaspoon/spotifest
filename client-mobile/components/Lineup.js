import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { fetchFestivalArtists } from "../actions/fetchActions";
import { selectAllArtists } from "../actions/userActions";
import { connect } from "react-redux";

import Artist from "./Artist";
import CreatePlaylist from "./CreatePlaylist";

class Lineup extends React.Component {
    static navigationOptions = {
        title: "Lineup"
    };

    componentWillMount() {
        this.props.fetchFestivalArtists(this.props.festivalSelected.id);
    }

    componentDidUpdate() {
        this.props.selectAllArtists(this.props.festivalArtists);
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.festivalArtists}
                    renderItem={({ item }) => <Artist artist={item} />}
                    keyExtractor={item => item.id.toString()}
                />
                <CreatePlaylist />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists
});

export default connect(
    mapStateToProps,
    { fetchFestivalArtists, selectAllArtists }
)(Lineup);
