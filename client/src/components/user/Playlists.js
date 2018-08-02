import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserPlaylists } from "../../actions/fetchActions";

class UserPlaylists extends Component {
    componentDidMount() {
        // fetch top spotify artists for user.
        this.props.fetchUserPlaylists(this.props.userId);
    }
    mapPlaylistsToList = playlists => {
        const myPlaylists = playlists.map((playlist, index) => {
            return <iframe title={playlist.name} src={`https://open.spotify.com/embed?uri=${playlist.spotify_playlist_info.uri}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>;
        });
        return myPlaylists;
    };
    render() {
        return (
            <div>
                <p>These are your playlists</p>
                {this.mapPlaylistsToList(this.props.userPlaylists)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userPlaylists: state.fetch.userPlaylists
});

export default connect(
    mapStateToProps,
    { fetchUserPlaylists}
)(UserPlaylists);