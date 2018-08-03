import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import Request from "./Request";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";
import { connect } from "react-redux";
import { fetchArtists, fetchRequests } from "../../actions/fetchActions";
import { setNav } from "../../actions/adminNavActions";



class Admin extends Component {

    componentDidMount() {
        this.props.fetchRequests()
    }
    handleNav = (e) => {
        this.props.setNav(e.target.className.slice(0, -3))

    }
    render() {
        const allRequests = this.props.requests.map(request => <Request key={request.id} id={request.id} festival={request.festival_name} />)
        return (
            <div className="Admin">
                {/*<h1>Admin</h1>*/}
                <div className="adminNav">
                    <div className="nav">
                    <p onClick={this.handleNav} className="festivalFormNav">FESTIVAL FORM</p>
                    <p onClick={this.handleNav} className="artistFormNav">ARTIST FORM</p>
                    <p onClick={this.handleNav} className="artistToFestivalFormNav">ARTIST TO FESTIVAL FORM</p>
                    </div>
                </div>
                <div className="requests">
                    {this.props.requests.length > 0 && <p className="requestHeader">Requests</p>}
                    <ul>
                        {allRequests}
                    </ul>
                </div>
                <FestivalForm />
                <ArtistForm />
                <ArtistsToFestivalForm />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    requests: state.fetch.requests
});

export default connect(
    mapStateToProps,
    { fetchArtists, fetchRequests, setNav }
)(Admin);
