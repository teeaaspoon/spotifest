import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlaylist } from "../../actions/userActions";

class CreatePlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistTitle: this.props.festivalSelected.title,
            playlistDescription: `The top tracks from ${
                this.props.festivalSelected.title
            } // ${this.props.festivalSelected.city}, ${
                this.props.festivalSelected.country
            }`
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.setState({
                playlistTitle: nextProps.festivalSelected.title,
                playlistDescription: `The top tracks from ${
                    nextProps.festivalSelected.title
                } // ${nextProps.festivalSelected.city}, ${
                    nextProps.festivalSelected.country
                }`
            });
        }
    }

    handleClick = () => {
        this.props.createPlaylist({
            playlistTitle: this.state.playlistTitle,
            playlistDescription: this.state.playlistDescription
        });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div>
                <p>Playlist Title</p>
                <input
                    name="playlistTitle"
                    onChange={this.handleChange}
                    value={this.state.playlistTitle}
                    required
                />
                <p>Playlist Description</p>
                <textarea
                    name="playlistDescription"
                    onChange={this.handleChange}
                    value={this.state.playlistDescription}
                    required
                />
                <button onClick={this.handleClick}>Create Playlist</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists
});

export default connect(
    mapStateToProps,
    { createPlaylist }
)(CreatePlaylist);
