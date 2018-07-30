import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlaylist } from "../../actions/userActions";

class CreatePlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistTitle: this.props.festivalSelected.title
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
            festival: this.props.festivalSelected
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
