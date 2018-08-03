import React, { Component } from "react";
import axios from "axios";
import { fetchFestivals } from "../../actions/fetchActions";
import { connect } from "react-redux";

class FestivalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            start_date: "",
            end_date: "",
            city: "",
            country: "",
            continent: "",
            longitude: "",
            latitude: "",
            submitStatus: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const {
            title,
            start_date,
            end_date,
            city,
            country,
            continent,
            longitude,
            latitude
        } = this.state;
        axios
            .post("/api/v1/festivals", {
                festival: {
                    title,
                    start_date,
                    end_date,
                    city,
                    country,
                    continent,
                    longitude,
                    latitude
                }
            })
            .then(response => {
                console.log(response);
                this.setState({
                    title: "",
                    start_date: "",
                    end_date: "",
                    city: "",
                    country: "",
                    continent: "",
                    longitude: "",
                    latitude: "",
                    submitStatus: "Festival Successfully added!"
                });
                this.props.fetchFestivals();
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    submitStatus:
                        "Couldnt Not Submit, Festival already exists or empty fields in form"
                });
            });
    };

    render() {
        return (
            <div className="festivalForm">
                {this.props.selectedForm === "festivalForm" &&
                <div>
                <h1>Festival</h1>
                <p>{this.state.submitStatus}</p>
                    <form onSubmit={this.onSubmit}>
                        <p>Title</p>
                        <input name="title" onChange={this.handleChange} value={this.state.title}/>
                        <p>Start Date</p>
                        <input type="date" name="start_date"onChange={this.handleChange}/>
                        <p>End Date</p>
                        <input type="date" name="end_date" onChange={this.handleChange} />
                        <p>City</p>
                        <input name="city" onChange={this.handleChange} value={this.state.city}/>
                        <p>Country</p>
                        <input name="country" onChange={this.handleChange} value={this.state.country}/>
                        <p>Continent</p>
                        <input name="continent" onChange={this.handleChange} value={this.state.continent}/>
                        <p>Longitude</p>
                        <input name="longitude" onChange={this.handleChange} value={this.state.longitude}/>
                        <p>Latitude</p>
                        <input name="latitude" onChange={this.handleChange} value={this.state.latitude} />
                        <br />
                        <button> Submit </button>
                    </form>
                </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    selectedForm: state.adminNav.selectedForm
});

export default connect(
    mapStateToProps,
    { fetchFestivals }
)(FestivalForm);
