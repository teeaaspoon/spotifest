import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserTopArtists } from "../../actions/fetchActions";

class User extends Component {
    componentDidMount() {
        // fetch top spotify artists for user.
        this.props.fetchUserTopArtists(this.props.userId);
    }
    mapFestivalArtistsIntoList = listOfArtists => {
        const mappedArtists = listOfArtists.map(artist => {
            return <li key={artist.id}>{artist.name}</li>;
        });
        return mappedArtists;
    };
    render() {
        return (
            <div>
                <h2>Hello {this.props.userId}</h2>
                <p>These are your top 5 Artists</p>
                <ul>
                    {this.mapFestivalArtistsIntoList(this.props.topArtists)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topArtists: state.fetch.userTopArtists
});

export default connect(
    mapStateToProps,
    { fetchUserTopArtists }
)(User);
