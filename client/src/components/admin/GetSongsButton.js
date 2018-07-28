import React, { Component } from "react";
import axios from "axios";

class GetSongsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedSongs: false
        };
    }

    handleClick = event => {
        event.preventDefault();
        axios
            .post(`/api/v1/artists/${this.props.artist_id}/songs`)
            .then(response => {
                console.log(response);
                this.setState({ fetchedSongs: true });
            })
            .catch(error => {
                console.log(error, "not all tracks were added");
            });
    };

    render() {
        return this.state.fetchedSongs ? null : (
            <button onClick={this.handleClick}> Get Songs </button>
        );
    }
}

export default GetSongsButton;
