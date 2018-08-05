import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlaylist } from "../../../actions/userActions";
import Select from 'react-select';


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
      numberOfSongs: this.state.numberOfSongs,
      spotifyUser: this.props.jwt.userId
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleNumberChange = (selectedOption) => {
    this.setState({
      playlistTitle: this.state.playlistTitle,
      numberOfSongs: selectedOption.value
    })

  }
  render() {
    return (
      <div className="createPlaylist">
        <div className="row">
          <div className="col-md-6">
            <p className="titleLabel">Playlist Title</p>
            <input
              className="titleInput"
              name="playlistTitle"
              onChange={this.handleChange}
              value={this.state.playlistTitle}
              required
            />
          </div>
          <div className="col-md-6">
            <p className="numberOfSongsLabel">Number Of Songs / Artist</p>
            <Select
              className="select-number-container"
              classNamePrefix="select-number"
              onChange={this.handleNumberChange}
              options={[{value: "1", label: "1"}, {value: "2", label: "2"}, {value: "3", label: "3"}, {value: "4", label: "4"}, {value: "5", label: "5"}, {value: "6", label: "6"}, {value: "7", label: "7"}, {value: "8", label: "8"}, {value: "9", label: "9"}, {value: "10", label: "10"}]}
            />
          </div>
        </div>
        <button className="createPlaylistButton" onClick={this.handleClick}>CREATE PLAYLIST</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    festivalSelected: state.user.festivalSelected,
    festivalArtists: state.fetch.festivalArtists,
    artistsSelected: state.genre.artistsSelected,
    jwt: state.user.jwt
});

export default connect(
    mapStateToProps,
    { createPlaylist }
)(CreatePlaylist);
