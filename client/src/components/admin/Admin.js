import React, { Component } from "react";
import FestivalForm from "./FestivalForm";
import ArtistForm from "./ArtistForm";
import Request from "./Request";
import ArtistsToFestivalForm from "./ArtistsToFestivalForm";
import { connect } from "react-redux";
import {
    fetchArtists,
    fetchFestivals,
    fetchRequests
} from "../../actions/fetchActions";
import { setNav } from "../../actions/adminNavActions";
import jwtDecode from "jwt-decode";
import { Router, Link } from "@reach/router";

class Admin extends Component {
    componentDidMount() {
        this.props.fetchRequests();
        this.props.fetchArtists();
        this.props.fetchFestivals();
    }
    handleNav = e => {
        this.props.setNav(e.target.id.slice(0, -3));
    };
    render() {
        let jwt = (jwt = window.localStorage.getItem("jwt"));
        jwt = jwtDecode(jwt);
        const allRequests = this.props.requests.map(request => (
            <Request
                key={request.id}
                id={request.id}
                festival={request.festival_name}
            />
        ));
        return (
            <div>
                {jwt && jwt.admin ? (
                    <div className="Admin">
                        <p className="spotifestLogo">
                            SPOTI<span>FEST</span>
                        </p>
                        <div className="adminNav">
                            <div className="nav">
                                <Link to="/">
                                    <p className="hvr-underline-from-left navBarHome">
                                        {" "}
                                        HOME{" "}
                                    </p>
                                </Link>
                                <p
                                    onClick={this.handleNav}
                                    id="festivalFormNav"
                                    className={`${
                                        this.props.selectedForm ===
                                        "festivalForm"
                                            ? "selectedNav"
                                            : "notSelected"
                                    } festivalFormNav hvr-underline-from-left`}
                                >
                                    FESTIVAL FORM
                                </p>
                                <p
                                    onClick={this.handleNav}
                                    id="artistFormNav"
                                    className={`${
                                        this.props.selectedForm === "artistForm"
                                            ? "selectedNav"
                                            : "notSelected"
                                    } artistFormNav hvr-underline-from-left`}
                                >
                                    ARTIST FORM
                                </p>
                                <p
                                    onClick={this.handleNav}
                                    id="artistToFestivalFormNav"
                                    className={`${
                                        this.props.selectedForm ===
                                        "artistToFestivalForm"
                                            ? "selectedNav"
                                            : "notSelected"
                                    } artistToFestivalFormNav hvr-underline-from-left`}
                                >
                                    ARTIST TO FESTIVAL FORM
                                </p>
                            </div>
                        </div>
                        <div className="requests">
                            {this.props.requests.length > 0 && (
                                <p className="requestHeader">
                                    Pending Requests
                                </p>
                            )}
                            <div className="allRequests">{allRequests}</div>
                        </div>
                        <FestivalForm />
                        <ArtistForm />
                        <ArtistsToFestivalForm />
                    </div>
                ) : (
                    <div>
                        <h1>403 Forbidden</h1>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    requests: state.fetch.requests,
    selectedForm: state.adminNav.selectedForm
});

export default connect(
    mapStateToProps,
    { fetchArtists, fetchFestivals, fetchRequests, setNav }
)(Admin);
