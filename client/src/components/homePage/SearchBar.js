
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSearchInput } from "../../actions/mapActions.js";
import axios from "axios";


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestMessage: null,
    }
  }

  onSearch = (event) => {
    this.props.saveSearchInput(event.target.value)
    this.setState({requestMessage: null})
  }
  sendRequest = (event) => {
    if (event.keyCode === 13 && this.props.filteredFestivals.length === 0) {
      axios.post("/api/v1/requests", { request: { festival_name: event.target.value } })
      .then(response => {
        if (response.data.created_at) {
          this.setState({requestMessage: "request was sent!"})
        } else {
          this.setState({requestMessage: "this festival has already been requested!"})
        }
        this.props.saveSearchInput("")
      })
      .catch(error => {
        this.props.saveSearchInput("")
      });
    }
  }

  render() {
    return (
      <div className="searchInput col-md-8">
        <input
          className="searchFestival"
          onChange={this.onSearch}
          onKeyDown={this.sendRequest}
          placeholder="search a festival name, city, or country..."
          value={this.props.filters.filter(f => f.type === "search")[0] ? (this.props.filters.filter(f => f.type === "search")[0].args):("")}
        />
        {this.state.requestMessage && <p>{this.state.requestMessage}</p>}
        {this.props.filteredFestivals.length === 0 && <p>This festival does not exist! Press enter to send a request!</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    filters: state.map.filters,
    filteredFestivals: state.map.filteredFestivals
});

export default connect(
    mapStateToProps,
    { saveSearchInput}
)(SearchBar);
