import React, { Component } from "react";
import Map from "./Map.js"
import ListOfFestivals from "./ListOfFestivals.js"


class Home extends Component {
    render() {
        return (
          <div className="Home">
            <Map/>
            <ListOfFestivals/>
          </div>
        );
    }
}

export default Home;