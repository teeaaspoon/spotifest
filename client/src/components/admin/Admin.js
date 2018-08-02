import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import Request from "./Request";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";
import { connect } from "react-redux";
import { fetchArtists, fetchRequests } from "../../actions/fetchActions";


class Admin extends Component {

    componentDidMount() {
        this.props.fetchRequests()
    }

    render() {
        const allRequests = this.props.requests.map(request => <Request key={request.id} id={request.id} festival={request.festival_name} />)
        return (
            <div>
                <h1>Admin</h1>
                <div className="requests">
                    {this.props.requests.length > 0 && <p>Requests</p>}
                    <ul>
                        {allRequests}
                    </ul>
                </div>
                <FestivalForm />
                <ArtistForm />
                <ArtistsToFestivalForm />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    requests: state.fetch.requests
});

export default connect(
    mapStateToProps,
    { fetchArtists, fetchRequests }
)(Admin);
