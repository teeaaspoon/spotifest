import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePlaylist, fetchUserPlaylists } from "../../actions/userActions";

class UserPlaylists extends Component {
    componentDidMount() {
        this.props.fetchUserPlaylists(this.props.userId);
    }

    handleClick = playlistId => {
        this.props.deletePlaylist(playlistId);
    }
    mapPlaylistsToList = playlists => {
        const myPlaylists = playlists.map((playlist, index) => {
            return (
                <div className="playlistDiv" key={index}>
                    <iframe title={playlist.name} src={`https://open.spotify.com/embed?uri=${playlist.spotify_playlist_info.uri}`} width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    <button onClick={() => this.handleClick(playlist.id)}>DELETE</button>
                </div>
            )
        });
        return myPlaylists;
    };
    render() {
        return (
            <div className="playlistList">
                <p className="playlistListTitle">YOUR SPOTIFEST PLAYLISTS</p>
                <div className="playlistsContainer">
                    {this.mapPlaylistsToList(this.props.playlists)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    playlists: state.user.playlists
});

export default connect(
    mapStateToProps,
    { fetchUserPlaylists, deletePlaylist }
)(UserPlaylists);