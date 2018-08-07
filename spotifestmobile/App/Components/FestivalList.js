import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ImageBackground, ActionSheetIOS} from "react-native";
import { connect } from "react-redux";

import Festival from "./Festival";

class FestivalList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: [],
      yearOptions: []
    }
  }
  componentDidMount () {
    const years = this.props.filteredFestivals.map(festival => festival.title.slice(-4))
                    .filter((elem, pos, arr) => {
                      return arr.indexOf(elem) === pos;
                    });
    const yearOptions = years.concat("Cancel")

  }
  showYearOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: this.state.yearOptions,
      cancelButtonIndex: this.state.yearOptions.length - 1,
    },
    (buttonIndex) => {
      console.log("clicked: ", buttonIndex)
    })
  }
  render() {
    return (
      <ImageBackground style={styles.background} source={require("./festival-pic.jpg")}>
        <View style={styles.listContainer}>
          <View style={styles.filtersContainer}>
            <Text onPress={this.showYearOptions} style={styles.filter}>YEAR</Text>
          </View>
          <FlatList
              data={this.props.filteredFestivals}
              renderItem={({ item }) => (
                  <Festival
                      festival={item}
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
    height: "100%",
  },
  listContainer: {
    padding: 10,
  },
  filtersContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,

  },
  filter: {
    color: "white",
    fontSize: 20,
  }
}

const mapStateToProps = state => ({
    filteredFestivals: state.filterFestival.filteredFestivals
});

export default connect(
    mapStateToProps,
    null
)(FestivalList);
