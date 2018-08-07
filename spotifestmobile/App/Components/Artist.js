import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deselectArtist, selectArtist } from "../actions/artistActions";



class Artist extends Component {
    pressSelected= () => {
        this.props.deselectArtist(this.props.artist)
    }
    pressNotSelected= () => {
        this.props.selectArtist(this.props.artist)
    }

    render() {
        let selectedOrNot = "selected"
        if (!this.props.artistsSelected) {
          selectedOrNot = "notSelected"
        } else if (!this.props.artistsSelected.includes(this.props.artist)) {
          selectedOrNot = "notSelected"
        }
        return (
            <View styles={styles.container}>
                {selectedOrNot === "selected" ? (
                    <TouchableOpacity onPress={this.pressSelected} style={styles.artistContainer}>
                    <Text style={styles.selectedText}>{this.props.artist.artist_name}</Text>
                    <Image

                        source={{uri: this.props.artist.spotify_artist_info.images[0].url}}
                        style={styles.selectedArtistPhoto}
                    />
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity onPress={this.pressNotSelected} style={styles.artistContainer}>
                    <Text style={styles.notSelectedText}>{this.props.artist.artist_name}</Text>
                    <Image
                        source={{uri: this.props.artist.spotify_artist_info.images[0].url}}
                        style={styles.notSelectedArtistPhoto}
                    />
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    artistContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 25,
        marginRight: 25
    },
    selectedText: {
        color: "white",
        textTransform: "uppercase",
        fontSize: 10
    },
    selectedArtistPhoto: {
        marginTop: 5,
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        borderColor: "#01E365",
        borderWidth: 2,
    },
    notSelectedText: {
        color: "gray",
        textTransform: "uppercase",
        fontSize: 10
    },
    notSelectedArtistPhoto: {
        marginTop: 5,
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        borderColor: "gray",
        borderWidth: 2,
        opacity: 0.2

    }
});

const mapStateToProps = state => ({
    artistsSelected: state.artist.artistsSelected,
});

export default connect(
    mapStateToProps,
    { deselectArtist, selectArtist }
)(Artist);
