import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlaylist } from "../../actions/userActions";

class CreatePlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistTitle: this.props.festivalSelected.title,
            numberOfSongs: 10
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.festivalSelected !== this.props.festivalSelected) {
            this.setState({
                playlistTitle: nextProps.festivalSelected.title
            });
        }
    }

    handleClick = () => {
        this.props.createPlaylist({
            playlistTitle: this.state.playlistTitle,
            festival: this.props.festivalSelected,
            artistsSelected: this.props.artistsSelected,
            numberOfSongs: this.state.numberOfSongs
            spotifyUser: this.props.spotifyUser
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
                <br />
                <span>Number Of Songs per Artist</span>
                <select
                    value={this.state.numberOfSongs}
                    name="numberOfSongs"
                    onChange={this.handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <br />
                <button onClick={this.handleClick}>Create Playlist</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists,
    artistsSelected: state.user.artistsSelected,
    spotifyUser: state.user.spotifyUser
});

export default connect(
    mapStateToProps,
    { createPlaylist }
)(CreatePlaylist);
