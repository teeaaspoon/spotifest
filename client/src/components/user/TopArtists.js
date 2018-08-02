import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserTopArtists } from "../../actions/fetchActions";

class TopArtists extends Component {
    componentDidMount() {
        // fetch top spotify artists for user.
        this.props.fetchUserTopArtists(this.props.userId);
    }
    mapTopArtistsToList = listOfArtists => {
        const artists = listOfArtists.map((artist, index) => {
            return <li key={index}>{artist}</li>;
        });
        return artists;
    };
    render() {
        return (
            <div>
                <p>These are your top artists</p>
                <ul>{this.mapTopArtistsToList(this.props.topArtists)}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topArtists: state.fetch.userTopArtists
});

export default connect(
    mapStateToProps,
    { fetchUserTopArtists}
)(TopArtists);