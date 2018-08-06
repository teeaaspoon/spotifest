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
            <div className="adminForm festivalForm">
                {this.props.selectedForm === "festivalForm" &&
                <div className="formContents">
                    <div className="formTitleAndStatus">
                        <h1 className="formTitle">Festival</h1>
                        <p>{this.state.submitStatus}</p>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="title" name="title" onChange={this.handleChange} autocomplete="off" value={this.state.title}/>
                        <input
                            onFocus={(e) => e.currentTarget.type = "date"}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            placeholder="start date"
                            type="text"
                            name="start_date"
                            onChange={this.handleChange}/>
                        <input
                            onFocus={(e) => e.currentTarget.type = "date"}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            placeholder="end date"
                            type="text"
                            name="end_date"
                            onChange={this.handleChange} />
                        <input placeholder="city" name="city" onChange={this.handleChange} autocomplete="off" value={this.state.city}/>
                        <input placeholder="country" name="country" onChange={this.handleChange} autocomplete="off" value={this.state.country}/>
                        <input placeholder="continent" name="continent" onChange={this.handleChange} autocomplete="off" value={this.state.continent}/>
                        <input placeholder="longitude" name="longitude" onChange={this.handleChange} autocomplete="off" value={this.state.longitude}/>
                        <input placeholder="latitude" name="latitude" onChange={this.handleChange} autocomplete="off" value={this.state.latitude} />
                        <br />
                        <button> submit </button>
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
