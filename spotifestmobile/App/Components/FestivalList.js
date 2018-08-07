import React, { Component } from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    ImageBackground,
    ActionSheetIOS
} from "react-native";
import { connect } from "react-redux";
import { saveYear } from "../actions/filterFestivalActions.js";

import Festival from "./Festival";

class FestivalList extends Component {
    showYearOptions = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: this.props.yearOptions,
                cancelButtonIndex: this.props.yearOptions.length - 1
            },
            buttonIndex => {
                console.log("clicked: ", this.props.yearOptions[buttonIndex]);
                if (this.props.yearOptions[buttonIndex] !== "cancel") {
                    this.props.saveYear(this.props.yearOptions[buttonIndex]);
                }
            }
        );
    };
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./festival-pic.jpg")}
            >
                <View style={styles.listContainer}>
                    <View style={styles.filtersContainer}>
                        <Text
                            onPress={this.showYearOptions}
                            style={styles.filter}
                        >
                            SELECT YEAR
                        </Text>
                    </View>
                    <FlatList
                        data={this.props.filteredFestivals}
                        renderItem={({ item }) => (
                            <Festival
                                festival={item}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    background: {
        width: "100%",
        height: "100%"
    },
    listContainer: {
        padding: 10
    },
    filtersContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },
    filter: {
        color: "black",
        fontSize: 15,
        backgroundColor: "#01E365",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        overflow: "hidden"
    }
};

const mapStateToProps = state => ({
    filteredFestivals: state.filterFestival.filteredFestivals,
    yearOptions: state.filterFestival.yearOptions
});

export default connect(
    mapStateToProps,
    { saveYear }
)(FestivalList);
