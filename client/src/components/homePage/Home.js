import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfFestivals from "./ListOfFestivals"
import NavBar from "./NavBar"
import GenreChart from "./GenreChart";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import LogOutButton from "../auth/LogOutButton"

import FestivalSelected from "./Festival/FestivalSelected.js";
import { connect } from "react-redux";
import Map from "./Map";


class Home extends Component {
  componentDidMount() {
    window.thingFunction = () => {
        console.log('pop up worked')
    }
  }

  render() {
    return (
      <div className="Home">
        <NavBar />

        <Element name="mapAndSearchPage" className="element">
          <div className="mapAndSearch">
              <SearchBar />
              <Map />
          </div>
        </Element>

        <Element name="festivalsPage" className="element" >
          <div className="festivalsPage">
              <div className="row">
                  <ListOfFestivals />
                  <GenreChart />
              </div>
            </div>
        </Element>

        <Element name="artistsPage" className="element">
          <div className="artistsPage">
              {this.props.festivalSelected && <FestivalSelected />}
          </div>
        </Element>
      </div>

    );
  }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected
});

export default connect(
    mapStateToProps,
    null
)(Home);
