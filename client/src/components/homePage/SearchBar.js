
import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSearchInput } from "../../actions/mapActions.js";
import axios from "axios";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestMessage: null,
    }
  }
  scrollToFestivalsPage = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('festivalsPage', options)
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
          this.setState({requestMessage: "your request was sent!"})
        } else {
          this.setState({requestMessage: "this festival has already been requested!"})
        }
        this.props.saveSearchInput("")
      })
      .catch(error => {
        this.props.saveSearchInput("")
      });
    } else if (event.keyCode === 13) {
      this.scrollToFestivalsPage()
    }
  }

  render() {
    return (
      <div className="searchInput animated fadeIn delay-4">
        {this.state.requestMessage && <p>{this.state.requestMessage}</p>}
        <input
          className="searchFestival "
          onChange={this.onSearch}
          onKeyDown={this.sendRequest}
          placeholder="search for festival..."
          value={t}
        />
        <p className={`${this.props.filteredFestivals.length === 0 && "showMessage"} requestMessage`}>This festival does not exist! Press enter to send a request!</p>
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
