import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";

import Festival from "./Festival";

class FestivalList extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.festivals}
                    renderItem={({ item }) => (
                        <Festival
                            festival={item}
                            navigate={this.props.navigate}
                        />
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

export default connect(
    mapStateToProps,
    null
)(FestivalList);
